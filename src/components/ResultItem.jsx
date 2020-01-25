import React from "react";

export default function ResultItem() {
  return (
    <div className="vedio">
      <div className="thumbnail">
        <img
          src="https://i.ytimg.com/vi/hI8TCA3fJcs/mqdefault.jpg"
          alt="video thumbnail"
        />
      </div>
      <div className="data">
        <p className="title">
          Seriously - This American Life, Sara Bareilles, and Leslie Odom, Jr.
        </p>
        <p className="second-row">
          <span className="channel">This American Life</span>
          <span className="data">2 years ago</span>
        </p>
        <p className="description">
          This American Life asked Sara Bareilles to imagine what President
          Obama might be thinking about the 2016 election and Donald Trump, but
          can't say publicly.
        </p>
      </div>
    </div>
  );
}
