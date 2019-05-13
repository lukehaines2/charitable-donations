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
      isLoading: false
    }
    this.handleChartyClick = this.handleChartyClick.bind(this);
  }

  componentDidMount() {
    //
  }

  handleChartyClick(id) {
    this.setState({
      isLoading: true
    });

    // Call donations api using charity ID
    getDonationData(id).then(res => {
      console.log('res', res.donations);
      this.setState({
        selectedCharity: id,
        donations: res,
        isLoading: false
      });
    });
  }

  render() {
    const { charities, donations, isLoading } = this.state;

    return(
      <div className="pageContainer">
        <main>
          <CharityList {...{charities}} handleChartyClick={this.handleChartyClick} />
          {isLoading ? <div> Loading...</div> : <Donations {...{donations}} />}
        </main>
      </div>
    )
  }
}
