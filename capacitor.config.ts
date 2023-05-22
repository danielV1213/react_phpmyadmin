import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.react.crud.app',
  appName: 'crud-react',
  webDir: 'build',
  server: {
    androidScheme: 'https'
  }
};

export default config;
