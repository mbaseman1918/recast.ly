import { API_KEY, YOUTUBE_API_KEY } from '../config/config.js';
import exampleVideoData from '../data/exampleVideoData.js';

$.ajaxPrefilter(function (settings, _, jqXHR) {
  jqXHR.setRequestHeader('Authorization', API_KEY);
});

var searchYouTube = (query, callback) => {
  // TODO
  $.get('https://app-hrsei-api.herokuapp.com/api/recastly/videos', {q: query}, function(data) {
    callback(data.splice(0, 5));
  });

};

export default searchYouTube;
