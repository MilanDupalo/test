import React from "react";
import trophy from "../../assets/trophy1.png";
import champions from "../../assets/champions.png";
function LeaderBoardTitle() {
  return (
    <div className="leaderboard-title flex flex-row items-center justify-center self-center">
      <figure className="trophy-img">
        <img src={trophy} alt="trophy-icon" />
      </figure>
      <figure>
        <img src={champions} alt="chempion-title" />
      </figure>
      <figure className="trophy-img">
        <img src={trophy} alt="trophy-icon" />
      </figure>
    </div>
  );
}

export default LeaderBoardTitle;
