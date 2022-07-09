import logo from './logo.svg';
import './index.css';
import Brand from './components/RedberryChessBrand'
import LeftSide from './components/LeftSide';
import RightSide from './components/RightSide';

function App() {
  return (
    <div className="App grid grid-cols-2">
      <LeftSide />
      <RightSide />
    </div>
  );
}

export default App;
