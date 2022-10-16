declare global {
  namespace NodeJS {
    interface ProcessEnv {
      DATABASE: string | undefined;
      NODE_ENV: 'development' | 'production';
      PORT?: string;
      PWD: string;
      production: false
    }
  }
}