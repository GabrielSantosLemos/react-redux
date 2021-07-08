import { Provider } from 'react-redux';
import Sidebar from './components/Sidebar';
import Video from './components/Video';
import store from './store';
import { Link } from 'react-router-dom'
import './App.css';

function App() {
  return (
    <>
      <Provider store={store}>
        <div className="header">
          <h1>My Website</h1>
          <p>With a <b>flexible</b> layout.</p>
        </div>

        <div className="navbar">
          <Link to="/">Home</Link>
          <a href="./sobre">Sobre</a>
          <a href="#">Link</a>
        </div>

        <div className="row">
          <div className="side">
            <h2>About Me</h2>
            <h5>Photo of me:</h5>
            <div className="fakeimg" style={{height: "200px;"}}>Image</div>
            <p>Some text about me in culpa qui officia deserunt mollit anim..</p>
            <h3>More Text</h3>
            <p>Lorem ipsum dolor sit ame.</p>
            <div className="fakeimg" style={{height: "60px;"}}>Image</div>
            <br />
            <div className="fakeimg" style={{height: "60px;"}}>Image</div>
            <br />
            <div className="fakeimg" style={{height: "60px;"}}>Image</div>
          </div>
          <div className="main">
            <h2>TITLE HEADING</h2>
            <h5>Title description, Dec 7, 2017</h5>
            <div className="fakeimg" style={{height: "200px;"}}>Image</div>
            <p>Some text..</p>
            <p>Sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
            <br />
            <h2>TITLE HEADING</h2>
            <h5>Title description, Sep 2, 2017</h5>
            <div className="fakeimg" style={{height: "200px;"}}>Image</div>
            <p>Some text..</p>
            <p>Sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
          </div>
        </div>

        <div className="footer">
          <h2>Footer</h2>
        </div>

        <Video />
        <Sidebar />

      </Provider>
    </>
  );
}

export default App;