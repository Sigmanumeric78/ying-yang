import { promiseWithResolvers } from "../utils/misc";
import { queryClient } from "../queries";
import { getServerConfigurationQueryOptions } from "../queries/server-configuration";

const MOCK_CONFIG = {
  maintenance: false,
  users: {
    signUp: true,
    discordIntegration: { enabled: false },
    premium: { enabled: false },
    profileDetailsEditing: { enabled: true },
    maxFavorites: 100,
  },
  connections: {
    enabled: false,
  },
  results: {
    savingEnabled: false,
    objectHashCheckEnabled: false,
    filterPresets: { enabled: true, maxPresetsPerUser: 10 },
    maxPast: 100,
  },
  apeKeys: { endpointsEnabled: false, acceptKeys: false, maxKeysPerUser: 0 },
  rateLimiting: { badAuthentication: { enabled: false } },
  admin: { endpointsEnabled: false },
};

const {
  promise: configurationPromise,
  resolve,
} = promiseWithResolvers<boolean>();

export { configurationPromise };

export function get(): any {
  const data = queryClient.getQueryData(
    getServerConfigurationQueryOptions().queryKey,
  );
  return data ?? MOCK_CONFIG;
}

export async function sync(): Promise<void> {
  try {
    await queryClient.fetchQuery(getServerConfigurationQueryOptions());
    resolve(true);
  } catch (e) {
    console.warn("Server configuration sync failed, resolving anyway:", e);
    resolve(true);
  }
}
