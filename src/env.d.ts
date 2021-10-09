declare namespace NodeJS {
  export interface ProcessEnv {
    SESSION_SECRET: string;
    CORS_ORIGIN: string;
    REDIS_HOST: string;
    REDIS_PORT: string;
    REDIS_PASSWORD: string;
    DB_DIALECT: string;
    DB_PORT: string;
    DB_HOST: string;
    DB_USERNAME: string;
    DB_PASSWORD: string;
    DB_DATABASE: string;
  }
}
