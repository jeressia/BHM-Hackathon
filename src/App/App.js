import './App.css';
import Chatbox from '../Chatbox/Chatbox.js'
import Navbar from '../Navbar/Navbar';
function App() {
  return (
    <div className="App">
      <div className="left-nav"><Navbar /></div>
      <div className='left-area'>Task Area Goes Here</div>
      <div className='middle-area'>User Card + Game Area Goes Here</div>
      <div className='right-area'><Chatbox /></div>
    </div>
  );
}

export default App;
