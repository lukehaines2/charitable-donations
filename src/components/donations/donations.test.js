import { Donations } from "./";
import { DonationTicket } from "./donationTicket";
import donationsStub from "../../stubData/donations";

describe('<Donations /> component', () => {
  let props = {
    donations: [],
    isLoading: false,
    error: null
  };
  let component;
  beforeEach(() => {
    component = shallow(<Donations {...props} />);
  });

  it('should render', () => {
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
    const donation = component.find("DonationTicket");

    expect(errorDiv).toHaveLength(1);
    expect(loadingDiv).toHaveLength(0);
    expect(donation).toHaveLength(0);
  });

});

describe('<DonationTicket /> component', () => {
  let props = {
    donations: []
  };
  let component;
  beforeEach(() => {
    component = shallow(<DonationTicket {...props} />);
  });

  it('should render', () => {
    expect(component).toBeTruthy();
  });

  it('should render instructions with empty donation prop', () => {
    expect(component.find('.donationTicket')).toHaveLength(0);
    expect(component.find('.instructions')).toHaveLength(1);
  });

  it('should render donations when they are passed as prop', () => {
    props.donations = donationsStub;
    const component = shallow(<DonationTicket {...props} />);
    expect(component.find('.instructions')).toHaveLength(0);
    expect(component.find('.donationTicket')).toHaveLength(donationsStub.length);
  });

});
