import axios from 'axios';
import path from 'path';
import fs from 'fs/promises';
import { minify } from 'html-minifier-terser';

const auth0Domain = process.env.AUTH0_DOMAIN;
const clientId = process.env.AUTH0_CLIENT_ID;
const clientSecret = process.env.AUTH0_CLIENT_SECRET;

const minifyHTML = async (inputPath) => {
  const html = await fs.readFile(inputPath, 'utf-8');
  const minified = await minify(html, {
    collapseWhitespace: true,
    collapseBooleanAttributes: true,
    decodeEntities: true,
    minifyCSS: true,
    minifyJS: true,
    html5: true,
    processConditionalComments: true,
    processScripts: ['text/html'],
    removeAttributeQuotes: true,
    // removeComments: true,
    removeEmptyAttributes: true,
    removeOptionalTags: true,
    removeRedundantAttributes: true,
    removeStyleLinkTypeAttributes: true,
    removeTagWhitespace: true,
    sortAttributes: true,
    sortClassName: true,
    trimCustomFragments: true,
    useShortDoctype: true
  });
  return minified;
};

const getAccessToken = async () => {
  const options = {
    method: 'POST',
    url: `https://${auth0Domain}/oauth/token`,
    headers: { 'content-type': 'application/x-www-form-urlencoded' },
    data: new URLSearchParams({
      grant_type: 'client_credentials',
      client_id: clientId,
      client_secret: clientSecret,
      audience: `https://${auth0Domain}/api/v2/`
    })
  };

  return axios
    .request(options)
    .then(function (response) {
      return response.data.access_token;
    })
    .catch(function (error) {
      console.error(error);
    });
};

const applyTemplate = async (accessToken, htmlData) => {
  const options = {
    method: 'PUT',
    url: `https://${auth0Domain}/api/v2/branding/templates/universal-login`,
    headers: {
      'content-type': 'text/html',
      authorization: `Bearer ${accessToken}`
    },
    data: htmlData
  };

  return axios
    .request(options)
    .then(function (response) {
      return response;
    })
    .catch(function (error) {
      console.error(error);
    });
};

(async () => {
  const accessToken = await getAccessToken();
  const htmlData = await minifyHTML(
    path.resolve(
      `./scripts/templates/${process.env.TENANT_ENVIRONMENT}/universal_login.html`
    )
  );
  const result = await applyTemplate(accessToken, htmlData);
  if (result.status > 200 && result.status < 300) {
    console.log(`
    
      Auth0 template applied successfully
    
    `);
  }
  if (result.status > 400) {
    console.log('Error during Auth0 template application:', result.status);
    console.error(`

      ${result.statusText}

      ${result.data}

    `);
  }
})();
