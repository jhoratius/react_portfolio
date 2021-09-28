import {BrowserRouter, Switch, Route} from 'react-router-dom';
import NotFound from './pages/NotFound';
import Body from './pages/body';
import Objectifs from './pages/objectifs';
import Experiences from './pages/experiences';
import Formations from './pages/formations';
import Competences from './pages/competences';
import './App.css';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Body} />
          <Route path="/objectifs" exact component={Objectifs} />
          <Route path="/experiences" exact component={Experiences} />
          <Route path="/formations" exact component={Formations}/>
          <Route path="/competences" exact component={Competences}/>
          <Route component={NotFound} />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;