import 'tailwindcss/base.css';
import 'tailwindcss/components.css';
import 'tailwindcss/utilities.css';

import { Switch, Route } from '@modern-js/runtime/router';
import Main from '@/pages/Main/Main';

import './App.css';

const App = () => (
  <Switch>
    <Route exact={true} path="/">
      <Main />
    </Route>
    <Route path="*">
      <div>404</div>
    </Route>
  </Switch>
);

export default App;
