import { z } from 'zod';

const configSchema = z.object({
  port: z.number().default(3000),
  nodeEnv: z.enum(['development', 'production', 'test']).default('development'),
  databaseUrl: z.string().optional(),
  jwtSecret: z.string().min(32)
});

const getConfig = () => {
  const config = {
    port: parseInt(process.env.PORT || '3000', 10),
    nodeEnv: process.env.NODE_ENV as 'development' | 'production' | 'test',
    databaseUrl: process.env.DATABASE_URL,
    jwtSecret: process.env.JWT_SECRET || 'your-super-secret-jwt-key-change-in-production'
  };

  try {
    return configSchema.parse(config);
  } catch (error) {
    console.error('Invalid configuration:', error);
    process.exit(1);
  }
};

export const config = getConfig();