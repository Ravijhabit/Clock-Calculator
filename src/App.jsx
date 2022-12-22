import react from 'react';

import Display from './Display/display';
import Footer from './Footer/footer';
import Header from './Header/header';
import UserInput from './UserInput/userInput';

function App() {
  return (
    <div className="App">
      <Header/>
      <Display/>
      <UserInput/>
      <Footer/>
    </div>
  )
}

export default App
