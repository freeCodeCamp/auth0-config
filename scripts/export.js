import { dump } from 'auth0-deploy-cli';

dump({
  output_folder: `./tenants/${process.env.TENANT_ENVIRONMENT}`,
  format: 'yaml',
  env: true,
  config_file: `./config/default.json`
})
  .then(() => {
    console.log('Auth0 configuration export successful');
  })
  .catch((err) => {
    console.log('Error during Auth0 configuration export:', err);
  });
