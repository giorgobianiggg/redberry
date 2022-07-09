import logo from './logo.svg';
import './index.css';
import Brand from './components/RedberryChessBrand'
import LeftSide from './components/LeftSide';

function App() {
  return (
    <div className="App grid grid-cols-2">
      <LeftSide />
      <div></div>
    </div>
  );
}

export default App;
