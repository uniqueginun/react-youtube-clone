import React from "react";

export default function ResultItem(props) {
  const {video, index} = props;

  let style = {}

  if(index === 0) {
    style = {
      borderRadius: "120px"
    }
  }

  return (
    <div className="vedio">
      <div className="thumbnail" onClick={props.videoSelected}>
        <img
          src={video.snippet.thumbnails.medium.url}
          alt={video.snippet.title}
          width={video.snippet.thumbnails.medium.width}
          height={video.snippet.thumbnails.medium.height}
          style={style}
        />
      </div>
      <div className="data">
        <p className="title">
          {video.snippet.title}
        </p>
        <p className="second-row">
          <span className="channel">{video.snippet.channelTitle}</span>
          <span className="data">2 years ago</span>
        </p>
        <p className="description">
          {video.snippet.description}
        </p>
      </div>
    </div>
  );
}
