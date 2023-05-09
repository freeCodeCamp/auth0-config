# Auth0 Configs

> Configs for our Auth0 Tenants

## Contributing

**Note:** We limit direct contributions (in the form of pull requests) to this
project due to limitations with our QA & deployment workflows.

We welcome you to work on any of our other available open-source projects
instead. You can find our contributing guidelines
[here](https://contribute.freecodecamp.org/).

If you found an issue or a bug on this repository, please connect with us in the
contributor's chat room first.

Happy Contributing!

### Setup

- Step 1: Clone the repository.
- Step 2: Run `pnpm install` to install the dependencies.
- Step 3: Ensure a dedicated M2M application is available on the tenant(s) with
  the required scopes.
- Step 4: Copy the [`.env.example`](./.env.example) and create the
  `.env.production.local` and `.env.development.local` environment config files
  as needed.
- Step 5: To export the current configs from Auth0, run `pnpm prd:export` or
  `pnpm dev:export` npm run-scripts as needed for the corresponding tenant.
- Step 6: Use [`Auth0 CLI`](https://auth0.github.io/auth0-cli) to develop the
  ULP screen and copy over your work to the `scripts/templates`. You can use
  this to apply the changes to a tenant in the next step.

- Step 7: To apply a branding template, use `pnpm dev:apply-template` or
  `pnpm prd:apply-template` npm run-scripts.

  ~~To import the configs into Auth0, run `pnpm prd:import` or `pnpm dev:import`
  as needed for the corresponding tenant.~~

  Do not use the import scripts.

  The
  [`Auth0 Deploy CLI`](https://auth0.com/docs/deploy-monitor/deploy-cli-tool)
  import can have destructive effects. Use the npm run-scripts instead as
  mentioned previously. They use the Auth0 Management API with the M2M
  application to manage the template.

For more details and documentation see:

- <https://auth0.com/docs/deploy-monitor/deploy-cli-tool>
- <https://auth0.github.io/auth0-cli/>

**Warning:**

You may see code duplication for example in `scripts/templates/*` and
`tenants/*`. This is intentional because we use the former as source of truth
while applying the changes via the Management API, and the later is an export of
the configuration from the tenants for version control.

## Copyright & License

Copyright (c) 2023 freeCodeCamp.org - Released under the
[BSD 3 license](LICENSE.md).
