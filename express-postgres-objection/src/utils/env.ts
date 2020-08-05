import envalid, { port, str, bool } from 'envalid'

const env = envalid.cleanEnv(
  process.env,
  {
    // Common
    NODE_ENV: str({ choices: ['development', 'production'] }),
    // Express
    PORT: port({ default: 4000 }),
    // Database
    RUN_MIGRATIONS: bool({ default: true, devDefault: false }),
    PG_HOST: str({ devDefault: 'localhost' }),
    PG_PORT: port({ devDefault: 5432 }),
    PG_DATABASE: str({ devDefault: 'postgres' }),
    PG_USER: str({ devDefault: 'postgres' }),
    PG_PASS: str({ devDefault: 'postgres' }),
  },
  {
    strict: true,
  }
)

export default env
