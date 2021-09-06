import React from "react";

const CardItem = props => {
    const { active: isActive, num } = props;
    const active = isActive ? "-active" : "";
    return (
        <span>
      <div className={`card-item__numberItem ${active}`}>{num}</div>
    </span>
    );
};
export default CardItem;
