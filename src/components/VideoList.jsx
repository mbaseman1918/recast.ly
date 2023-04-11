import VideoListEntry from './VideoListEntry.js';

var VideoList = (props) => {
  // console.log(props.children);
  //console.log(props);
  // <div key={video.id.videoId}><h5><em>videoListEntry</em><VideoListEntry video={video} /></h5></div>

  var vList = props.videos.map((video) => <VideoListEntry key = {video.id.videoId} video = {video} handleClick = {props.handleClick}/>);
  return (
    <div className="video-list">
      {vList}
    </div>
  );

};

// PropTypes tell other developers what `props` a component expects
// Warnings will be shown in the console when the defined rules are violated
VideoList.propTypes = {
  videos: PropTypes.array.isRequired,
};

// In the ES6 spec, files are "modules" and do not share a top-level scope.
// `var` declarations will only exist globally where explicitly defined.
export default VideoList;
