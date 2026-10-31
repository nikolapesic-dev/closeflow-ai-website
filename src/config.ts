const configuredUrl = import.meta.env.PUBLIC_DEMO_URL?.trim();
if (configuredUrl) {
  const url = new URL(configuredUrl);
  if (url.protocol !== 'https:' || url.username || url.password) {
    throw new Error('PUBLIC_DEMO_URL must be an absolute HTTPS URL without credentials.');
  }
}
export const demoUrl: string | undefined = configuredUrl || undefined;
export const basePath = import.meta.env.BASE_URL.replace(/\/$/, '');
export const pageUrl = (path = '') => `${basePath}/${path}`;
export const description = 'Meet CLOSEFLOW AI: a prelaunch AI appointment-setting concept for US and UK online fitness coaches. Explore a simulated lead qualification workflow.';
