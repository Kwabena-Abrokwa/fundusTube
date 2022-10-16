declare global {
  namespace NodeJS {
    interface ProcessEnv {
      DATABASE: string;
      NODE_ENV: 'development' | 'production';
      PORT?: string;
      PWD: string;
      production: false
    }
  }
}

export const DATABASE="mongodb+srv://kwabena_abrokwa:0542656207Frank$@cluster0.djysi.mongodb.net/fundus?retryWrites=true&w=majority"