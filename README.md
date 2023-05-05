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
  `pnpm dev:export` as needed for the corresponding tenant.
- Step 6: To import the configs into Auth0, run `pnpm prd:import` or
  `pnpm dev:import` as needed for the corresponding tenant.

For more details and documentation see:
<https://auth0.com/docs/deploy-monitor/deploy-cli-tool>

## Copyright & License

Copyright (c) 2023 freeCodeCamp.org - Released under the
[BSD 3 license](LICENSE.md).
