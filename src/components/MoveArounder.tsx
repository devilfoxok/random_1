import React, { FC } from "react";

const MoveArounder: FC = () => {
  const onClick = (e: React.MouseEvent<HTMLElement>) => {
    const target = e.target as HTMLElement;
    let a;
    if (!target.style.top && !target.style.left) a = "00";
    if (!target.style.top && target.style.left) a = "01";
    if (target.style.top && target.style.left) a = "11";
    if (target.style.top && !target.style.left) a = "10";
    switch (a) {
      case "00":
        target.style.left = document.documentElement.clientWidth - 100 + "px";
        break;
      case "01":
        target.style.top = document.documentElement.clientHeight - 100 + "px";
        break;
      case "11":
        target.style.left = "";
        break;
      case "10":
        target.style.top = "";
        break;
    }
  };

  return (
    <div>
      <div className="box" onClick={onClick}></div>
    </div>
  );
};

export default MoveArounder;
