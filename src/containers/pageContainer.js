import React from "react";
import stub from "../stubData/charities";

import { CharityList } from "../components/charityList";
import { Donations } from "../components/donations";

import { getDonationData } from "../util/api";

export default class PageContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      charities: stub,
      selectedCharity: null,
      donations: [],
      isLoading: false,
      error: null
    };
    this.handleCharityClick = this.handleCharityClick.bind(this);
  }

  componentDidMount() {
    // If we wanted to initialise the app with a selected charity, we can comment this back in
    // NOTE: Ideally this would be a number rather than string, (could toString in component now but it feels unnecessary/wrong)
    this.handleCharityClick("183092");
  }

  handleCharityClick(id) {
    this.setState({
      isLoading: true,
      selectedCharity: id
    });

    // Call donations api using charity ID
    getDonationData(id).then(res => {
      this.setState({
        donations: res.donations ? res.donations : [],
        isLoading: false,
        error: !res.donations && res[0].desc
      });
    });
  }

  render() {
    const { charities, selectedCharity, donations, isLoading, error } = this.state;

    return (
      <div className="pageContainer">
        <main>
          <CharityList {...{charities, selectedCharity, isLoading}} handleCharityClick={this.handleCharityClick} />
          <Donations {...{donations, isLoading, error}} />
        </main>
      </div>
    )
  }
}
