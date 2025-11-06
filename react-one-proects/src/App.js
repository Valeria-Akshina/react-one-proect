import './App.css';
import { Header } from './component/Header/index.jsx';
import { Main } from './component/Main/index.jsx';
import { OurExperience } from './component/OurExperience/index.jsx'
<link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet"></link>

function App() {
  return (
    <div className="App">
      <Header/>
      <Main/>
      <OurExperience/>
    </div>
  );
}

export default App;
