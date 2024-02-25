import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home.js';
import VideoPlayer from './VideoPlayer.js';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/playing/:videoId' element={<VideoPlayer />}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
