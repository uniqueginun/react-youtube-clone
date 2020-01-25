import React, {Component} from 'react';
import SvgIcon from "@material-ui/core/SvgIcon";
import IconButton from "@material-ui/core/IconButton";
import SideItem from "./SideItem";

function LikeIcon(props) {
    return (
        <SvgIcon {...props}>
            <path d="M1 21h4V9H1v12zm22-11c0-1.1-.9-2-2-2h-6.31l.95-4.57.03-.32c0-.41-.17-.79-.44-1.06L14.17 1 7.59 7.59C7.22 7.95 7 8.45 7 9v10c0 1.1.9 2 2 2h9c.83 0 1.54-.5 1.84-1.22l3.02-7.05c.09-.23.14-.47.14-.73v-1.91l-.01-.01L23 10z" />
        </SvgIcon>
    );
}

function DislikeIcon(props) {
    return (
        <SvgIcon {...props}>
            <path d="M15 3H6c-.83 0-1.54.5-1.84 1.22l-3.02 7.05c-.09.23-.14.47-.14.73v1.91l.01.01L1 14c0 1.1.9 2 2 2h6.31l-.95 4.57-.03.32c0 .41.17.79.44 1.06L9.83 23l6.59-6.59c.36-.36.58-.86.58-1.41V5c0-1.1-.9-2-2-2zm4 0v12h4V3h-4z" />
        </SvgIcon>
    );
}

function ShareIcon(props) {
    return (
        <SvgIcon {...props}>
            <path d="M11.7333 8.26667V4L19.2 11.4667L11.7333 18.9333V14.56C6.4 14.56 2.66667 16.2667 0 20C1.06667 14.6667 4.26667 9.33333 11.7333 8.26667Z" />
        </SvgIcon>
    );
}

function SaveIcon(props) {
    return (
        <SvgIcon {...props}>
            <path d="M14 10H2v2h12v-2zm0-4H2v2h12V6zm4 8v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zM2 16h8v-2H2v2z" />
        </SvgIcon>
    );
}


class PlayVideo extends Component {

    state = {
        localVideo: null
    }

    videoSelected = (videoIndex) => {
        const selected = this.props.items.find((item, index) => index === videoIndex+1)
        this.setState(prevState => {
            return {
                ...prevState, localVideo: selected
            }
        })
    }

    render() {

        const {video, items} = this.props;

        let playVideo = video;

        if (this.state.localVideo) {
            playVideo = this.state.localVideo
        }

        const vidURI = "https://www.youtube.com/embed/"+playVideo.id.videoId;

        return (
            <div className="video-play">
                <div className="video-part">
                    <iframe width="909" height="515"
                            src={vidURI}
                            frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>
                    <div className="video-details">
                        <p className="video-title">
                            {playVideo.snippet.title}
                        </p>
                        <div className="detail-stats">
                            <p>119 views•Jan 25, 2020</p>
                            <div className="detail-icons">
                                <div className="like-btns">
                                    <IconButton style={{fontSize: 10}}>
                                        <LikeIcon
                                            style={{
                                                color: "gray",
                                                fontSize: "24px",
                                                height: "20px",
                                                width: "20px",
                                                opacity: "0.5",
                                                paddingLeft: "2px"
                                            }}
                                        />
                                        <span className="state-num">10</span>
                                    </IconButton>
                                    <IconButton style={{fontSize: 10}}>
                                        <DislikeIcon
                                            style={{
                                                color: "gray",
                                                fontSize: "24px",
                                                height: "20px",
                                                width: "20px",
                                                opacity: "0.5",
                                                paddingLeft: "2px"
                                            }}
                                        />
                                        <span className="state-num">0</span>
                                    </IconButton>
                                </div>
                                <IconButton style={{fontSize: 10}}>
                                    <ShareIcon
                                        style={{
                                            color: "gray",
                                            fontSize: "24px",
                                            height: "24px",
                                            width: "30px",
                                            opacity: "0.5",
                                            paddingLeft: "2px"
                                        }}
                                    />
                                    <span className="state-text">SHARE</span>
                                </IconButton>
                                <IconButton style={{fontSize: 10}}>
                                    <SaveIcon
                                        style={{
                                            color: "gray",
                                            fontSize: "24px",
                                            height: "27px",
                                            width: "27px",
                                            opacity: "0.5",
                                            paddingLeft: "2px"
                                        }}
                                    />
                                    <span className="state-text">SAVE</span>
                                </IconButton>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="list-part">
                    {items.filter(item => item.id.videoId != video.id.videoId).map((item, index) => <SideItem videoSelected={() => this.videoSelected(index)} index={index} key={index} video={item} />)}
                </div>
            </div>
        );
    }
}

export default PlayVideo;