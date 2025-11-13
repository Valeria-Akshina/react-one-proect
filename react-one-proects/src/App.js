import { Header } from './component/Header/index.jsx';
import { Main } from './component/Main/index.jsx';
import { OurExperience } from './component/OurExperience/index.jsx'
import { Reviews } from './component/Reviews/index.jsx';
import { USERS } from './component/User/user.js';
import './fonts/index.jsx';
import './App.css';
import { Steps } from './component/Steps/index.jsx';
import { Galery } from './component/Galery/index.jsx';
import { Form } from './component/Form/index.jsx';
import { Footer } from './component/Footer/index.jsx';

function App() {
  return (
    <div className="App">
      <Header/>
      <Main/>
      <OurExperience/>
      <Steps/>
      <Galery/>
      <Reviews users={USERS} />
      <Form/>
      <Footer/>
    </div>
  );
}

export default App;
