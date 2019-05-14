import React from "react";

import "./donations.scss";

export const Donations = props => {
  const { donations, isLoading, error } = props;

  return (
    <div className="donationsContainer">
      <div className="sectionHeader">Donations</div>
      {error && <div>{error}</div>}
      {isLoading ?
        <div className="instructions">Loading...</div>
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
            <strong>{getDate(donation.donationDate)}</strong>
            <div>{donation.donorDisplayName}</div>
            <div>Donated: £{donation.amount}</div>
            <div>Message: {donation.message}</div>
          </div>
        ))
        :
        <div className="instructions">Please select a charity from the list!</div>
      }
    </React.Fragment>
  )
};

const getDate = date => {
  const dateRegex = date.match(/\d+/g);
  const newDate = new Date(parseInt(dateRegex[0])).toLocaleDateString('en-GB');
  return newDate
}
