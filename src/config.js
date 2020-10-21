const dev = {
    apiGateway: {
      URL: "http://5304448e28fd.ngrok.io/api",
    }
};

const prod = {
    apiGateway: {
      URL: "http://5304448e28fd.ngrok.io/api",
    }
};

const config = process.env.REACT_APP_STAGE === 'production' ? prod : dev;

export default {
  MAX_ATTACHMENT_SIZE : 5000000,
  ...config
}
