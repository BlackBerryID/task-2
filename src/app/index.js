import './app.css';
import { Header } from '../components/header';
import { Main } from '../components/main';
import { Footer } from '../components/footer';

function App() {
  return (
    <div className='app'>
      <div className="app-container">
        <Header />
        <Main />
        <Footer />
      </div>
    </div>
  );
}

export default App;
