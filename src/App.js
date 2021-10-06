import { BrowserRouter as Router, Route } from 'react-router-dom';
import GithubCorner from 'react-github-corner';
import { Header } from './components';
import { Home, Info, Popular, Search } from './pages';
import { Provider } from 'react-redux';
import store from './redux/store';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Header />
        <Route exact path="/" component={Home} />
        <Route exact path="/popular/:type" component={Popular} />
        <Route exact path="/anime/:id/:title" component={Info} />
        <Route exact path="/search/:query" component={Search} />
        <GithubCorner
          href={'https://github.com/chandpratik/anyme'}
          bannerColor="#151513"
          octoColor="#fff"
          size={100}
          direction="right"
        />
      </Router>
    </Provider>
  );
}

export default App;
