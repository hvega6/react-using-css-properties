import logo from './logo.svg';
import './App.css';
import card from './card.js';

const Logo = (props) => {
  const userPic = <img scr = {logo} alt = ""/>;
  return userPic;
}

function App() {
  return (
    <div>
      <h1>Hello World!</h1>
      <Logo />
      <card/>
    </div>
  );
}

export default App;
