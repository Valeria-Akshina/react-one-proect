import { Header } from './component/Header/index.jsx';
import { Main } from './component/Main/index.jsx';
import { OurExperience } from './component/OurExperience/index.jsx'
import './fonts/index.jsx';
import './App.css';
import { Reviews } from './component/Reviews/index.jsx';

function App() {
  return (
    <div className="App">
      <Header/>
      <Main/>
      <OurExperience/>
      <Reviews/>
    </div>
  );
}

export default App;
