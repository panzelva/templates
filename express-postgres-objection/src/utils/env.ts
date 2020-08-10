import envalid, { port, str, bool } from 'envalid'
import path from 'path'

const env = envalid.cleanEnv(
  process.env,
  {
    // Common
    NODE_ENV: str({ choices: ['development', 'production'] }),
    // Express
    PORT: port({ default: 4000 }),
    // Database
    MIGRATIONS_ENABLED: bool({ default: true, devDefault: false }),
    MIGRATIONS_DIRECTORY: str({
      default: 'migrations',
      devDefault: path.join('src', 'database', 'migrations'),
    }),
    SEEDS_ENABLED: bool({ default: false }),
    SEEDS_DIRECTORY: str({ default: 'seeds', devDefault: path.join('src', 'database', 'seeds') }),
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
