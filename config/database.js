module.exports = ({ env }) => ({
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'bookshelf',
      // settings: {
      //   client: 'sqlite',
      //   filename: env('DATABASE_FILENAME', '.tmp/data.db'),
      // },
      settings: {
        client: 'postgres',
        host: env('DATABASE_HOST', '127.0.0.1'),
        port: env.int('DATABASE_PORT', 5432),
        database: env('DATABASE_NAME', 'accelya-news-feed'),
        username: env('DATABASE_USERNAME', ''),
        password: env('DATABASE_PASSWORD', ''),
      },
      options: {
        ssl: false,
        //useNullAsDefault: true,
      },
    },
  },
});
