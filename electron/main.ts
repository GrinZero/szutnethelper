import { join } from 'path';
import { app } from 'electron';
import Runtime, { winService } from '@modern-js/runtime/electron-main';

const PRELOAD_JS = join(
  __dirname,
  'preload',
  process.env.NODE_ENV === 'development' ? 'index.dev.js' : 'index.js',
);

const runtime = new Runtime({
  windowsConfig: [
    {
      name: 'main',
      options: {
        webPreferences: {
          preload: PRELOAD_JS,
          enableRemoteModule: true,
        },
      },
    },
  ],
  mainServices: {
    test: () => 'hello, modern js electron',
  },
});

app.whenReady().then(async () => {
  await runtime.init();

  winService.createWindow({
    name: 'main',
  });
});
