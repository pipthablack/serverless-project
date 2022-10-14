// TODO: Once your application is deployed, copy an API id here so that the frontend could interact with it
const apiId = '4d1s33be71'
export const apiEndpoint = `https://${apiId}.execute-api.us-east-1.amazonaws.com/prod`

export const authConfig = {
  // TODO: Create an Auth0 application and copy values from it into this map. For example:
  // domain: 'dev-nd9990-p4.us.auth0.com',
  domain: 'dev-ic0lj94v.us.auth0.com',            // Auth0 domain
  clientId: '9PBSB48wElBLZwQQN2mRiJQlSJu83YWu',          // Auth0 client id
  callbackUrl: 'http://localhost:3000/callback'
}
