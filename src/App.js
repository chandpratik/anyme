import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Header } from './components';
import { Home, Info, Popular, Search } from './pages';
import { Provider } from 'react-redux';
import store from './redux/store';

function App() {
  return (
    <Provider store={store}>
      <Header />
      <Router>
        <Route exact path="/" component={Home} />
        <Route exact path="/popular/:type" component={Popular} />
        <Route exact path="/anime/:id/:title" component={Info} />
        <Route exact path="/search/:query" component={Search} />
      </Router>
    </Provider>
  );
}

export default App;
