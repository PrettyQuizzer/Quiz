
window.APP_CONFIG = {
  REDIRECT_URI: 'https://prettyquizzer.github.io/Quiz/',
  CLIENT_ID: '28kigssmjf2mdhjn6iavt1ua7e',
  AUTHORITY: 'https://cognito-idp.us-east-2.amazonaws.com/us-east-2_acveeSnQD',
  SCOPE: 'openid email profile',
  POST_LOGOUT_URI: "https://prettyquizzer.github.io/Quiz/",
  AWS_DOMAIN: 'https://us-east-2_acveeSnQD.auth.us-east-2.amazoncognito.com',
  REGION:        'us-east-2',                 // your AWS region
  USER_POOL_ID:  'us-east-2_acveeSnQD',       // your Cognito User Pool
  SIGN_UP_URI:   'https://us-east-2_acveeSnQD.auth.us-east-2.amazoncognito.com/signup'
                + '?response_type=code'
                + `&client_id=${encodeURIComponent('28kigssmjf2mdhjn6iavt1ua7e')}`
                + `&scope=${encodeURIComponent('openid email profile')}`
                + `&redirect_uri=${encodeURIComponent('https://prettyquizzer.github.io/Quiz/')}`
};
