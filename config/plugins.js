module.exports = ({
  env
}) => ({
  email: {
    provider: 'sendgrid',
    providerOptions: {
      apiKey: env('SENDGRID_API_KEY'),
    },
    settings: {
      defaultFrom: 'tahir@tahirmahm123.me',
      defaultReplyTo: 'tahir@tahirmahm123.me',
    },
  },
});