import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Header } from './components';
import { Home, Popular } from './pages';

function App() {
  return (
    <>
      <Header />
      <Router>
        <Route exact path="/" component={Home} />
        <Route exact path="/:title/:type" component={Popular} />
      </Router>
    </>
  );
}

export default App;
