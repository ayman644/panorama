import '../../App.css';
import {Navigation} from '../../components/Navigation'
import {SearchBar} from '../../components/SearchBar'
import { Header } from '../../components/Header';

function HomePage() {
  return (
    <div className="App">
      <Navigation />
      <Header />
      <SearchBar />
    </div>
  );
}

export default HomePage;
