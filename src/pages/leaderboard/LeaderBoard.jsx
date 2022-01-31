import "./leaderboard.css";
import react from "react";
import LeaderBoardTitle from "./LeaderBoardTitle";
import LeaderBoardLegend from "./LeaderBoardLegend";
import blob from "../../assets/blob.png";
import React from "react";

function LeaderBoard() {
  return (
    <div className="leaderboard">
      <div className="container">
        <div className="leaderboard-content flex flex-col">
          <LeaderBoardTitle />
          <LeaderBoardLegend />
        </div>
      </div>
    </div>
  );
}

export default LeaderBoard;
