//import defaultExport from 'Search.jsx';
import Search from './Search.js';
import VideoPlayer from './VideoPlayer.js';
import VideoList from './VideoList.js';
import exampleVideoData from '../data/exampleVideoData.js';
import searchYouTube from '../lib/searchYouTube.js';

const {useState} = React;




var App = () => {

  const [videos, setVideos] = useState([]);
  const [video, setVideo] = useState(exampleVideoData[0]);

  let timeout = null;

  const searchHandler = (e) => {
    let query = e.target.value;
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      searchYouTube(query, (videos => {
        setVideos(videos);
      }));
    }, 500);

  };
  const handleClick = function(selectedVideo) {
    setVideo(selectedVideo);
  };
  return (
    <div>
      <nav className="navbar">
        <div className="col-md-6 offset-md-3">
          <div><h5><em>search</em><Search searchHandler={(e) => searchHandler(e)}/></h5></div>
        </div>
      </nav>
      <div className="row">
        <div className="col-md-7">
          <div><h5><em>videoPlayer</em> <VideoPlayer video={video}/></h5></div>
        </div>
        <div className="col-md-5">
          <div><h5><em>videoList</em> <VideoList videos={videos} handleClick = {handleClick}/></h5></div>
        </div>
      </div>
    </div>
  );

};



// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default App;
