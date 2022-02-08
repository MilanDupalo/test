import React from "react";
import ProfileData from "./ProfileData";

function LeaderBoardRow() {
  return (
    <div>
      {ProfileData.map((user) => {
        return (
          <div>
            <p>{user.fullName}</p>
            <p>{user.school}</p>
            <p>{user.grade}</p>
          </div>
        );
      })}
    </div>
  );
}

export default LeaderBoardRow;
