// import { deploy } from 'auth0-deploy-cli';

//if (process.env.TENANT_ENVIRONMENT === 'production') {
console.error(`

  ------------------------------------------------------------
  Error: Do not run this script. Use the API endpoint instead.
  ------------------------------------------------------------

`);
process.exit(1);
//}

// console.log(`

//   ---------------------------------------------------------------
//   Warning: This script will overwrite your tenant configuration.
//   ---------------------------------------------------------------

// `);

// deploy({
//   input_file: `./tenants/${process.env.TENANT_ENVIRONMENT}/tenant.yaml`,
//   env: true,
//   config_file: `./config/default.json`
// })
//   .then(() => {
//     console.log('Auth0 configuration import successful');
//   })
//   .catch((err) => {
//     console.log('Error during Auth0 configuration import:', err);
//   });
