import React from "react";
import cx from "classnames";

import "./charityList.scss";

export const CharityList = props => {
  const { charities, selectedCharity, isLoading, handleCharityClick } = props;

  const onClick = (e) => {
    const chosen = e.currentTarget.dataset.id;
    // We are preventing the user dispatching multiple calls for the same charity here
    // In a larger scale app, we would have some more complex debouncing along with some form of reusable async blocking UI behaviour
    if (!isLoading && chosen !== selectedCharity) handleCharityClick(chosen);
  };
console.log('L15 selectedCharity ===', selectedCharity);
  return (
    <div className="charityListContainer">
      <div className="sectionHeader">Charities</div>
      {charities.map(charity => (
        <div key={charity.name} className={cx("charityList", {active: selectedCharity === charity.id})} data-id={charity.id} onClick={onClick}>
          <div className={cx("name", {active: selectedCharity === charity.id})}>{charity.name}</div>
          <img className="logo" src={charity.logo} alt={charity.name} />
        </div>
      ))}
    </div>
  )
};
