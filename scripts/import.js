import { deploy } from 'auth0-deploy-cli';

deploy({
  input_file: `./tenants/${process.env.TENANT_ENVIRONMENT}/tenant.yaml`,
  env: true,
  config_file: `./config/default.json`
})
  .then(() => {
    console.log('Auth0 configuration import successful');
  })
  .catch((err) => {
    console.log('Error during Auth0 configuration import:', err);
  });
