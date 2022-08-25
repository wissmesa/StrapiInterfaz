module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: env('DATABASE_HOST', 'ec2-54-159-175-38.compute-1.amazonaws.com'),
      port: env.int('DATABASE_PORT', 5432),
      database: env('DATABASE_NAME', 'd92ojt60ikkhgq'),
      user: env('DATABASE_USERNAME', 'fkvozxvwnfzbad'),
      password: env('DATABASE_PASSWORD', 'adf0f31fd172d1890b23787cc464336b74d21abda8b94ef35db6cb6a1b81ca5e'),
      ssl: {
        rejectUnauthorized: env.bool('DATABASE_SSL_SELF', false), // For self-signed certificates
      }
      
    },
  },
});

