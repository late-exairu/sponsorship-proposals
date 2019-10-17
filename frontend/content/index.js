const { GraphQLClient } = require('graphql-request');

const { credentials, brandIDs, isDebug } = require('./config');

const brandContent = require('./fetch-brand');
const infoContent = require('./fetch-info');
const featuresContent = require('./fetch-features');
const packagesContent = require('./fetch-packages');
const partnersContent = require('./fetch-partners');
const sponsorsContent = require('./fetch-sponsors');
const statsContent = require('./fetch-stats');
const talesContent = require('./fetch-tales');

const createClient = ({ endpoint, token }) => {
  return new GraphQLClient(endpoint, {
    headers: {
      authorization: `Bearer ${token}`,
    },
  });
};

const client = createClient(credentials);

const getContent = async() => {
  const brandName = process.env.BRAND_NAME;
  const brandId = brandIDs[brandName];

  const fetchAll = [
    brandContent,
    infoContent,
    featuresContent,
    packagesContent,
    partnersContent,
    sponsorsContent,
    statsContent,
    talesContent,
  ].map(async content => {
    try {
      return await content.fetchData(client, {
        brandId,
      });
    } catch (err) {
      console.error(err);
    }
  });

  const contentArray = await Promise.all(fetchAll);

  const contentArrayToResolve = contentArray.map(async obj => {
    const entries = Object.entries(obj);
    const toResolve = entries.map(async([key, val]) => [
      key,
      Array.isArray(val) ? await Promise.all(val) : await val,
    ]);
    const resolved = await Promise.all(toResolve);
    const ObjectFromEntries = resolved.reduce(
      (obj, [key, val]) => ({ ...obj, [key]: val }),
      {}
    );
    return ObjectFromEntries;
  });

  const contentArrayResolved = await Promise.all(contentArrayToResolve);

  const contentMap = contentArrayResolved.reduce(
    (content, piece) => ({ ...content, ...piece }),
    {}
  );

  if (isDebug) {
    console.log('\nContent\n', JSON.stringify(contentMap.packages, null, 2));
  }

  return contentMap;
};

const getContentCheck = () => {
  try {
    return getContent();
  } catch (err) {
    console.error(err);
  }
};

module.exports = {
  getContent: getContentCheck,
};
