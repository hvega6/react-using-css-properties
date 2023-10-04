import './App.css';
import Card from './card.js';
import ModeToggler from './ModeToggler';
import Input from './input';

function App() {
  return (
    <div>
      <ModeToggler/>
      <Card h2="First card" h3="First card"/>
      <Card h2="Second card" h3="Second card"/>
      <Card h2="Third card" h3="Third card"/>
      <Input/>
    </div>
  );
}

export default App;
