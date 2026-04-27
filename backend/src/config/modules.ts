export interface ModuleConfig {
  name: string;
  enabled: boolean;
}

const enabledModulesEnv = process.env.ENABLED_MODULES || '';
const enabledModulesList = enabledModulesEnv.split(',').map(m => m.trim()).filter(m => m.length > 0);

export const modules: Record<string, ModuleConfig> = {
  auth: { name: 'auth', enabled: enabledModulesList.includes('auth') }
};

export function isModuleEnabled(moduleName: string): boolean {
  return modules[moduleName]?.enabled || false;
}
