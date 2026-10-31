const configuredUrl = import.meta.env.PUBLIC_DEMO_URL?.trim();
if (configuredUrl && !/^https:\/\//.test(configuredUrl)) {
  throw new Error('PUBLIC_DEMO_URL must be an absolute HTTPS URL.');
}
export const demoUrl: string | undefined = configuredUrl || undefined;
export const description = 'Meet CLOSEFLOW AI: a prelaunch AI appointment-setting concept for US and UK online fitness coaches. Explore a simulated lead qualification workflow.';
