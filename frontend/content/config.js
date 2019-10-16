if (!process.env.SANITY_ENDPOINT || !process.env.SANITY_TOKEN) {
  require('dotenv').config();
}

if (!process.env.SANITY_ENDPOINT || !process.env.SANITY_TOKEN) {
  throw new Error(`Can't find environment variables: 'SANITY_ENDPOINT' and 'SANITY_TOKEN'.
  Set them in .env file for local development or pass to env when running on CI.
  `);
}

const brandIDs = {
  amsterdamSummit: '8224681e-d99e-45f5-8dfe-14a916a952e9',
};

const credentials = {
  endpoint: process.env.SANITY_ENDPOINT,
  token: process.env.SANITY_TOKEN,
};

module.exports = {
  brandIDs,
  credentials,
  isDebug:  true,
};
