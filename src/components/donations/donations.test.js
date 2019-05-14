import { Donations } from "./";
import { DonationTicket } from "./donationTicket";

describe('<Donations /> component', () => {
  let props = {
    donations: [],
    isLoading: false,
    error: null
  };

  it('should render', () => {
    const component = shallow(<Donations {...props} />);
    expect(component).toBeTruthy();
  });

  it('should render loading div while isLoading = true', () => {
    props.isLoading = true;
    const component = shallow(<Donations {...props} />);
    const loadingDiv = component.find("div.loading");
    expect(loadingDiv).toHaveLength(1);
    expect(loadingDiv.text()).toEqual("Loading...");
  });

  it('should display an error when there is... an error', () => {
    props.error = true;
    const component = shallow(<Donations {...props} />);
    const errorDiv = component.find("div.error");
    const loadingDiv = component.find("div.loading");
    const displaycomponent = component.find("DonationTicket");

    expect(errorDiv).toHaveLength(1);
    expect(loadingDiv).toHaveLength(0);
    expect(displaycomponent).toHaveLength(0);
  });

});

describe('<DonationTicket /> component', () => {
  let props = {
    donations: []
  };

  it('should render', () => {
    const component = shallow(<DonationTicket {...props} />);
    expect(component).toBeTruthy();
  });

});
