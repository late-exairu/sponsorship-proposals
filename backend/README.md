# GitNation generic sponsorship proposal (Backend Service)

Backend project provides:

- GraphQL API endpoint: https://ee2bu90g.api.sanity.io/v1/graphql/prod/default
- Sanity Studio application

## Scripts

`start` - to launch local Sanity Studio.

Open browser on http://localhost:3333/

>Warning! It will be connected to real backend database.

`deploy` - apply schema to GraphQL service

Open https://ee2bu90g.api.sanity.io/v1/graphql/prod/default for GraphQL Playground

`deploy:studio` - deploys Sanity Studio SPA

>Note: you need to be logged in to Sanity for deploying. use `sanity-login`

## Developing

see `schemas/schema.js` for entry point of schema
