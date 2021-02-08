module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  admin: {
    auth: {
      secret: env('ADMIN_JWT_SECRET', 'ed1ddbe52af7c7cd7c593e2fc8fb81fa'),
    },
  },
});
