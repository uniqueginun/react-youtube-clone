import React from "react";

export default function SideItem(props) {
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
                    src={video.snippet.thumbnails.default.url}
                    alt={video.snippet.title}
                    width={video.snippet.thumbnails.default.width}
                    height={video.snippet.thumbnails.default.height}
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
            </div>
        </div>
    );
}
