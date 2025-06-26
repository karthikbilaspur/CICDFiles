import React from 'react';
import FacebookLogin from 'react-facebook-login';
import TwitterLogin from 'react-twitter-auth';

const SocialMedia = () => {
  const responseFacebook = (response) => {
    console.log(response);
  };

  const responseTwitter = (response) => {
    console.log(response);
  };

  return (
    <div>
      <FacebookLogin
        appId="YOUR_APP_ID"
        autoLoad={true}
        fields="name,email,picture"
        callback={responseFacebook}
      />
      <TwitterLogin
        loginUrl="YOUR_LOGIN_URL"
        onSuccess={responseTwitter}
        requestTokenUrl="YOUR_REQUEST_TOKEN_URL"
      />
    </div>
  );
};

export default SocialMedia;