import UserProvider from './contexts/UserContext';
import Home from './pages/Home/Home';
import './styles/system.scss';

const App = () => {
  return (
    <div className="App">
      <UserProvider>
        <Home />
      </UserProvider>
    </div>
  );
}

export default App;
