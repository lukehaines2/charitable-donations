import React from "react";
import cx from "classnames";

import "./charityList.scss";

export const CharityList = props => {
  const { charities, selectedCharity, isLoading, handleCharityClick } = props;

  const onClick = (e) => {
    const chosen = e.currentTarget.dataset.id;
    // We are preventing the user dispatching multiple calls for the same charity here
    // We are using the isLoading state elsewhere to block concurrent calls
    if (!isLoading && chosen !== selectedCharity) handleCharityClick(chosen);
  };

  // NOTE: Bit of hack for handling strings & numbers in state of selectedCharity - Ideally would never have alternating use of strings and numbers across our components
  const selCharity = selectedCharity ? selectedCharity.toString() : selectedCharity;
  return (
    <div className="charityListContainer">
      <div className="sectionHeader">Charities</div>
      {charities.map(charity => (
        <div key={charity.name} className={cx("charityList", {active: selCharity === charity.id})} data-id={charity.id} onClick={onClick}>
          <div className={cx("name", {active: selCharity === charity.id})}>{charity.name}</div>
          <img className="logo" src={charity.logo} alt={charity.name} />
        </div>
      ))}
    </div>
  )
};
