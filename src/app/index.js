import './app.css';
import { Header } from '../components/header';
import { Main } from '../components/main';

function App() {
  return (
    <div className='app'>
      <div className="app-container">
      <Header />
      <Main />
      </div>
    </div>
  );
}

export default App;
