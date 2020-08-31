import envalid, { port, str } from 'envalid'
import path from 'path'

const env = envalid.cleanEnv(
  process.env,
  {
    // Common
    NODE_ENV: str({ choices: ['development', 'production'] }),
    // Express
    PORT: port({ default: 4000 }),
    // Database
    PG_HOST: str({ devDefault: 'localhost' }),
    PG_PORT: port({ devDefault: 5432 }),
    PG_DATABASE: str({ devDefault: 'postgres' }),
    PG_USER: str({ devDefault: 'postgres' }),
    PG_PASS: str({ devDefault: 'postgres' }),
    MIGRATIONS_DIRECTORY: str({
      default: path.join('dist', 'database', 'migrations'),
      devDefault: path.join('src', 'database', 'migrations'),
    }),
    SEEDS_DIRECTORY: str({
      default: path.join('dist', 'database', 'seeds'),
      devDefault: path.join('src', 'database', 'seeds'),
    }),
  },
  {
    strict: true,
  }
)

export default env
