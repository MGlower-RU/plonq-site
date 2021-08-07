import './styles/App.scss';
import { BrowserRouter as Router } from 'react-router-dom';
import Nav from './components/Nav';
import PageSwitch from './components/PageSwitch';

export default function App() {
  return (
    <div className="page__wrapper">
      <Router>
        <Nav />
        <PageSwitch />
      </Router>
      {/* Footer */}
    </div>
  );
}