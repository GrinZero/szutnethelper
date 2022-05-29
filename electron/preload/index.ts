import { readFileSync } from 'fs';
import {
  exposeInMainWorld,
  browserWindowPreloadApis,
} from '@modern-js/runtime/electron-render';

import SztuStudent from '../service/sztustudent';

export const apis = {
  ...browserWindowPreloadApis,
  readFileSync: (path: string) => readFileSync(path),
  SztuStudent,
  ok: () => 'ok',
};

exposeInMainWorld(apis);
