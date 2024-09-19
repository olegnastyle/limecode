          module.exports = ({ env }) => ({
            host: env('HOST', '0.0.0.0'),
            port: env.int('PORT', 1337),
            admin: {
              auth: {
                secret: env('ADMIN_JWT_SECRET', '55871e40655bf15c79194bd6d816a681'),
              },
            },
            // ...
            
            app: {
              keys: ['yourSecretKey1', 'yourSecretKey2'], // Add your own keys 
            },
          });
          