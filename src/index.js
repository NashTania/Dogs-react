import React  from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import App from './components/app.js';
import AllBreeds from './containers/all-breeds-container.js';
import Breeds from './containers/breeds-container.js';
import { Provider } from 'react-redux';
import { store } from './reducers/reducer.js';
import AllImgesBreed from './containers/all-img-container.js';

ReactDOM.render(
  <Provider store={store}>
    <App />
    <Router>
      <div>
        <Route exact path='/' component={AllBreeds} />
        <Route path='/all/:breed' component={AllBreeds} />
        <Route path='/all/:breed' component={AllImgesBreed} />
        <Route exact path='/list' component={Breeds} />
        <Route path='/list/:breed' component={AllImgesBreed} />
      </div>
    </Router>
  </Provider>,
  document.getElementById( 'root' )
);
