import logo from './logo.svg';
import './App.css';
import Card from './card.js';
import ModeToggler from './ModeToggler';

const Logo = (props) => {
  const userPic = <img scr = {logo} alt = ""/>;
  return userPic;
}

function App() {
  return (
    <div>
      <ModeToggler/>
      <Logo />
      <Card h2="First card" h3="First card"/>
      <Card h2="Second card" h3="Second card"/>
      <Card h2="Third card" h3="Third card"/>
    </div>
  );
}

export default App;
