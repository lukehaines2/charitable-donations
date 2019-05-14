import { CharityList } from "./";
import stub from "../../stubData/charities";

describe('<CharityList /> component', () => {
  let props = {
    charities: stub,
    isLoading: false,
    selectedCharity: null,
    // handleCharityClick: jest.fn();
  };

  it('should render', () => {
    const component = shallow(<CharityList {...props} />);
    expect(component).toBeTruthy();
  });

  it('should not have an active class if no charity selected', () => {
    const component = shallow(<CharityList {...props} />);
    expect(component.find('.active')).toHaveLength(0);
    expect(component.find('div.charityList.active')).toHaveLength(0);
    expect(component.find('div.name.active')).toHaveLength(0);
  });

  it('should add active class to .charityList and .name if there is a charity selected', () => {
    props.selectedCharity = 183092;
    const component = shallow(<CharityList {...props} />);

    expect(component.find('.active')).toHaveLength(2);
    expect(component.find('div.charityList')).toHaveLength(6);
    expect(component.find('div.charityList.active')).toHaveLength(1);
    expect(component.find('div.name')).toHaveLength(6);
    expect(component.find('div.name.active')).toHaveLength(1);
  });

  it('should send the charity Id to handleCharityClick onClick', () => {
    // 
  });

});
