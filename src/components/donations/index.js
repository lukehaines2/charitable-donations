import React from "react";

import "./donations.scss";

export const Donations = props => {
  const { donations, isLoading, error } = props;

  return (
    <div className="donationsContainer">
      {error && <div>{error}</div>}
      {isLoading ?
        <div>Loading...</div>
        :
        <DonationTicket {...{donations}} />
      }
    </div>
  )
};

const DonationTicket = ({donations}) => {
  return (
    <React.Fragment>
      {donations.length > 0 ?
        donations.map((donation, i) => (
          <div key={donation.donorDisplayName+i} className="donationTicket">
            <div>Donor: {donation.donorDisplayName} ({donation.currencyCode})</div>
            <div>Amount: {donation.amount}</div>
            <div>Date: {donation.donationDate}</div>
            <div>Amount: {donation.amount}</div>
            <div>Message: {donation.message}</div>
          </div>
        ))
        :
        <div>Please select a charity from the left!</div>
      }
    </React.Fragment>
  )
};
