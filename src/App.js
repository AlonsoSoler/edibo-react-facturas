import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Tabla from './components/Tabla'
import Detalle from './components/Detalle';


function App() {
    return (
      <div className="App">
      <Router>
        <Switch>
          <Route exact path="/facturas">
            <Tabla></Tabla>
          </Route>
          <Route exact path="/facturas/:id">
            <Detalle></Detalle>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}
export default App;