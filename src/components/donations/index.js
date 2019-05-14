import React from "react";

import { DonationTicket } from "./donationTicket";

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
