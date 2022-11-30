import { boot } from 'quasar/wrappers';
import { plugin as unleashPlugin } from '@unleash/proxy-client-vue';

const config = {
  url: 'https://unleash-proxy.nunogois.com/proxy',
  clientKey: 'ng-unleash-secret',
  refreshInterval: 2,
  appName: 'unleash-test',
  environment: 'dev',
};
// "async" is optional;
// more info on params: https://v2.quasar.dev/quasar-cli/boot-files
export default boot(async ({ app } /* { app, router, ... } */) => {
  // something to do
  console.log('boot');
  app.use(unleashPlugin, { config });
});
