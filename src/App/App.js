import './App.css';
import Chatbox from '../Chatbox/Chatbox.js'
import Game from '../Game/Game.js'

function App() {
  return (
    <div className="App">
      <div className="left-nav">Nav Bar Goes Here</div>
      <div className='left-area'>Task Area Goes Here</div>
      <div className='middle-area'><Game /></div>
      <div className='right-area'><Chatbox /></div>
    </div>
  );
}

export default App;
