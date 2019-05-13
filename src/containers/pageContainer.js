import React from "react";


export default class PageContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      charities: [],
      doantions: []
    }
  }

  render() {
    return(
      <div className="pageContainer">
        <header>
          header
        </header>
        <main>
          main
        </main>
        <footer>
          footer
        </footer>
      </div>
    )
  }
}
