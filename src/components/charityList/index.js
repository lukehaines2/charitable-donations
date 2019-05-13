import React from "react";

import "./charityList.scss";

export const CharityList = props => {
  
  const onClick = (e) => {
    props.handleChartyClick(e.currentTarget.dataset.id);
  };

  return (
    <div className="charityListContainer">
      {props.charities.map(charity => (
        <div key={charity.name} className="charityList" data-id={charity.id} onClick={onClick}>
          <div>{charity.name}</div>
          <img className="logo" src={charity.logo} alt={charity.name} />
        </div>
      ))}
    </div>
  )
}
