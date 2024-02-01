export const getEnvironmentVariable = (key: string) => {
  const envVar = process.env[key];

  if (!envVar) {
    throw new Error(`Couldn't find environment variable: ${key}`);
  }
  return envVar;
};
