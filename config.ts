import dotenv from 'dotenv'

const fileEnv = dotenv.config({ path: '.env.keys' }).parsed

if (!fileEnv) {
  throw new Error('Failed to load .env.keys file')
}

const envKeys: Record<string, string | undefined> = {}

for (const key of Object.keys(fileEnv)) {
  envKeys[key] = process.env[key]
}

export { envKeys }
