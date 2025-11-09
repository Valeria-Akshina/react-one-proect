import { Header } from './component/Header/index.jsx';
import { Main } from './component/Main/index.jsx';
import { OurExperience } from './component/OurExperience/index.jsx'
import { Reviews } from './component/Reviews/index.jsx';
import { USERS } from './component/User/user.js';
import './fonts/index.jsx';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header/>
      <Main/>
      <OurExperience/>
      <Reviews users={USERS} />
    </div>
  );
}

export default App;
