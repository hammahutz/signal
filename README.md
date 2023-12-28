# Signal

## Build

1. Run `npm run init`
2. Add a .env file in *signal-api* with followed data.
   - NODE_ENV
      - development
      - production
    - PORT
       - Server port.
   - MONGO_URI
      - URI to mongodb server.
   - GEN_SALT
      - Salt for bcrypt password hashing.
   - JWT_SECRET
      - Secret JWT setting.
3. Run `npm run dev` to start the server and client.
