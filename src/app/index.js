import './app.css';
import { Header } from '../components/header';
import { Main } from '../components/main';
import { Footer } from '../components/footer';
import { Balls } from '../components/balls';

function App() {
  return (
    <div className='app'>
      <Header />
      <Main />
      <Footer />
      <Balls />
    </div>
  );
}

export default App;
