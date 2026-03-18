import { queryOptions } from "@tanstack/solid-query";
import { baseKey } from "./utils/keys";
import Ape from "../ape";

const queryKeys = {
  root: () => baseKey("serverConfiguration"),
};

//only refetch once on site load
const staleTime = Infinity;

// oxlint-disable-next-line typescript/explicit-function-return-type
export const getServerConfigurationQueryOptions = () =>
  queryOptions({
    queryKey: queryKeys.root(),
    queryFn: async () => {
      const MOCK = {
        maintenance: false,
        users: { signUp: true, discordIntegration: { enabled: false }, premium: { enabled: false }, profileDetailsEditing: { enabled: true }, maxFavorites: 100 },
        connections: { enabled: false },
        results: { savingEnabled: false, objectHashCheckEnabled: false, filterPresets: { enabled: true, maxPresetsPerUser: 10 }, maxPast: 100 },
        apeKeys: { endpointsEnabled: false, acceptKeys: false, maxKeysPerUser: 0 },
        rateLimiting: { badAuthentication: { enabled: false } },
        admin: { endpointsEnabled: false },
      };
      try {
        if (!(Ape as any)?.configuration?.get) {
          console.warn("Ape.configuration not available, using mock config");
          return MOCK;
        }
        const response = await (Ape as any).configuration.get();

        if (response.status !== 200) {
          throw new Error(
            `Could not fetch configuration: ${response.body.message}`,
          );
        }
        return response.body.data;
      } catch (e) {
        console.warn("Server config fetch failed, using mock:", e);
        return MOCK;
      }
    },
    staleTime,
    gcTime: Infinity,
  });
