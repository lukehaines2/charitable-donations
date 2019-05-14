import { CharityList } from "./";
import stub from "../../stubData/charities";

describe('<CharityList /> component', () => {
  let props = {
    charities: stub,
    isLoading: false,
    selectedCharity: null,
    // handleCharityClick: jest.fn();
  }

  it('should render', () => {
    const component = shallow(<CharityList {...props} />);
    expect(component).toBeTruthy();
  });

  it('should add active class if there is a charity selected', () => {
    // active prop here
    // selectedCharity == charity.id
    const component = shallow(<CharityList {...props} />);
    expect(component.find('.active')).toBeFalsey();
  });

  it('should send the charity Id to handleCharityClick onClick', () => {
    // 
  });

});
