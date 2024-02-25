import 'bootstrap/dist/css/bootstrap.min.css';
import {HashRouter  as Router, Route, Routes } from 'react-router-dom';
import Home from './Home.js';
import VideoPlayer from './VideoPlayer.js';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='https://vathsavvarma.github.io/moiveweb/' element={<Home />}/>
          <Route path='https://vathsavvarma.github.io/moiveweb/playing/:videoId' element={<VideoPlayer />}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
