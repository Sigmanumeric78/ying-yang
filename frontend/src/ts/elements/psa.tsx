import { PSA } from "@whitespaces/schemas/psas";
import { IdSchema } from "@whitespaces/schemas/util";
import { isSafeNumber } from "@whitespaces/util/numbers";
import { tryCatch } from "@whitespaces/util/trycatch";
import { format } from "date-fns/format";
import { z } from "zod";

import Ape from "../ape";
import * as AuthEvent from "../observables/auth-event";
import { addBanner } from "../stores/banners";
import { secondsToString } from "../utils/date-and-time";
import { LocalStorageWithSchema } from "../utils/local-storage-with-schema";
import { isDevEnvironment } from "../utils/misc";
import * as Alerts from "./alerts";

const confirmedPSAs = new LocalStorageWithSchema({
  key: "confirmedPSAs",
  schema: z.array(IdSchema),
  fallback: [],
});

function clearMemory(): void {
  confirmedPSAs.set([]);
}

function getMemory(): string[] {
  return confirmedPSAs.get();
}

function setMemory(id: string): void {
  const list = getMemory();
  list.push(id);
  confirmedPSAs.set(list);
}

async function getLatest(): Promise<PSA[] | null> {
  return null; // AGGRESSIVE OVERRIDE: Disable all PSA fetches
}

export async function show(): Promise<void> {
  const latest = await getLatest();
  if (latest === null) return;
  if (latest.length === 0) {
    clearMemory();
    return;
  }
  const localmemory = getMemory();
  latest.forEach((psa) => {
    if (isSafeNumber(psa.date)) {
      const dateObj = new Date(psa.date);
      const diff = psa.date - Date.now();
      const string = secondsToString(
        diff / 1000,
        false,
        false,
        "text",
        false,
        true,
      );
      psa.message = psa.message.replace("{dateDifference}", string);
      psa.message = psa.message.replace(
        "{dateNoTime}",
        format(dateObj, "dd MMM yyyy"),
      );
      psa.message = psa.message.replace(
        "{date}",
        format(dateObj, "dd MMM yyyy HH:mm"),
      );
    }

    Alerts.addPSA(psa.message, psa.level ?? -1);

    if (localmemory.includes(psa._id) && !(psa.sticky ?? false)) {
      return;
    }

    let level: "error" | "notice" | "success";
    if (psa.level === -1) {
      level = "error";
    } else if (psa.level === 1) {
      level = "success";
    } else {
      level = "notice";
    }

    addBanner({
      level,
      text: psa.message,
      icon: "fas fa-bullhorn",
      important: psa.sticky ?? false,
      onClose: () => {
        setMemory(psa._id);
      },
    });
  });
}

AuthEvent.subscribe((event) => {
  if (event.type === "authStateChanged") {
    void show();
  }
});
