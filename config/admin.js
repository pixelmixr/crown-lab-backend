module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '006c198aba0ed560b94766e54a7273ff'),
  },
});
