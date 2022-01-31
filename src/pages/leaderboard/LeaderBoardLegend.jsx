import React from "react";
import "./leaderboard.css";

function LeaderBoardLegend() {
  return (
    <div className="leaderboard-legend flex flex-row items-center justify-between mt-10">
      <div className="leaderboard-legend-rating">
        <p>Rating</p>
      </div>
      <div className="leaderboard-legend-name">
        <p>Name</p>
      </div>
      <div className="leaderboard-legend-badges">
        <p>Badges</p>
      </div>
      <div className="leaderboard-legend-video">
        <p>Video</p>
      </div>
      <div className="leaderboard-legend-note">
        <p>Note</p>
      </div>
      <div className="leaderboard-legend-points">
        <p>Points</p>
      </div>
    </div>
  );
}

export default LeaderBoardLegend;
