import './App.css';
import './UserCard/UserCard'
import UserCard from './UserCard/UserCard';


function App() {
  const user = {
    userId: 1,
    username: 'wesSnipes',
    firstName: 'Wesley',
    lastName: 'Snipes',
    userStatus: 'Finance Newbie',
    userImgUrl: 'http://t0.gstatic.com/licensed-image?q=tbn:ANd9GcQoNG-jW5p2OrTrpjk-DMtQlic1W2EWuh-QNKpNJTocQUrWPxt8AxtdCnwkXNVbDm2OYAD2dAOTAQzXR3Q'
  }

  return (
    <div className="App">
      <div className="left-nav">Nav Bar Goes Here</div>
      <div className='left-area'>Task Area Goes Here</div>
      <div className='middle-area'>
        <UserCard user={user} />
      </div>
      <div className='right-area'>Chatbox Goes Here</div>
    </div>
  );
}

export default App;
