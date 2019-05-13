import React from "react";

import "./donations.scss";

export const Donations = props => {
  const { donations } = props;
  console.log('donations', donations);

  return (
    <div className="donationsContainer">
      {donations.length > 0 ? 
        donations.map(donation => (
          <div key={donation.donationDate}>
            {donation}
          </div>
        ))
        :
        <div>Please select a charity from the left!</div>
      }
    </div>
  )
}
