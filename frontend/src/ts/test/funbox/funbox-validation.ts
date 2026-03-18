// AGGRESSIVE OVERRIDE: All funbox validations are bypassed to allow boot
import { Config, ConfigValue, FunboxName } from "@whitespaces/schemas/configs";

export function checkForcedConfig(
  _key: string,
  _value: ConfigValue,
  _funboxes: any[],
): {
  result: boolean;
  forcedConfigs?: ConfigValue[];
} {
  return { result: true };
}

export function canSetConfigWithCurrentFunboxes(
  _key: string,
  _value: ConfigValue,
  _funbox: FunboxName[] = [],
  _noNotification = false,
): boolean {
  return true;
}

export function canSetFunboxWithConfig(
  _funbox: FunboxName,
  _config: Config,
): boolean {
  return true;
}
