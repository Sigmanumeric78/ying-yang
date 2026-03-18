import * as Misc from "./utils/misc";
import * as MonkeyPower from "./elements/monkey-power";
import * as MerchBanner from "./elements/merch-banner";
import * as AccountButton from "./elements/account-button";
// @ts-ignore no types for this package
import Konami from "konami";
import * as ServerConfiguration from "./ape/server-configuration";
import { configLoadPromise } from "./config";
import { authPromise } from "./firebase";
import { animate } from "animejs";
import { onDOMReady, qs } from "./utils/dom";

onDOMReady(async () => {
  const app = document.querySelector("#app") as HTMLElement;
  try {
    await configLoadPromise;
    await authPromise;

    //this line goes back to pretty much the beginning of the project and im pretty sure its here
    //to make sure the initial theme application doesnt animate the background color
    qs("body")?.setStyle({
      transition: "background .25s, transform .05s",
    });
    MerchBanner.showIfNotClosedBefore();

    app?.classList.remove("hidden");
    animate(app, {
      opacity: [0, 1],
      duration: Misc.applyReducedMotion(250),
    });

    void ServerConfiguration.sync().then(() => {
      try {
        if (!ServerConfiguration.get()?.users?.signUp) {
          AccountButton.hide();
          qs(".register")?.hide();
          qs(".login")?.hide();
          qs(".disabledNotification")?.show();
        }
        if (!ServerConfiguration.get()?.connections?.enabled) {
          qs(".accountButtonAndMenu .goToFriends")?.hide();
        }
      } catch (e) {
        console.warn("ServerConfiguration post-sync UI update failed:", e);
      }
    }).catch((e: unknown) => {
      console.warn("ServerConfiguration sync promise rejected:", e);
    });

    MonkeyPower.init();

    // untyped, need to ignore
    // oxlint-disable-next-line no-unsafe-call
    new Konami("https://keymash.io/");

    if (Misc.isDevEnvironment()) {
      void navigator.serviceWorker
        .getRegistrations()
        .then(function (registrations) {
          for (const registration of registrations) {
            void registration.unregister();
          }
        });
    } else {
      if ("serviceWorker" in navigator) {
        window.addEventListener("load", () => {
          navigator.serviceWorker
            .register("/sw.js", { scope: "/" })
            .then((registration) => {
              console.log(
                "ServiceWorker registration successful with scope: ",
                registration.scope,
              );
            })
            .catch((error: unknown) => {
              console.error("ServiceWorker registration failed: ", error);
            });
        });
      }
    }
  } catch (e) {
    console.error("Boot sequence error:", e);
  } finally {
    // Always reveal #app even if boot had errors
    if (app?.classList.contains("hidden")) {
      app.classList.remove("hidden");
    }
  }
});
