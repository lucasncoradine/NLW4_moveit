import ChallengeProvider from './contexts/ChallangeContext';
import UserProvider from './contexts/UserContext';
import Home from './pages/Home/Home';
import './styles/system.scss';

const App = () => {
  return (
    <div className="App">
      <UserProvider>
        <ChallengeProvider>
          <Home />
        </ChallengeProvider>
      </UserProvider>
    </div>
  );
}

export default App;
