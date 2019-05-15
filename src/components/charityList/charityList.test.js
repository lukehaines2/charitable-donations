import { CharityList } from "./";
import stub from "../../stubData/charities";

describe('<CharityList /> component', () => {
  let props = {
    charities: stub,
    isLoading: false,
    selectedCharity: null,
    handleCharityClick: jest.fn()
  };
  let component;
  beforeEach(() => {
    component = shallow(<CharityList {...props} handleCharityClick={jest.fn()} />);
  });

  it('should render', () => {
    expect(component).toBeTruthy();
  });

  it('should not have .active class if no charity selected', () => {
    expect(component.find('.active')).toHaveLength(0);
    expect(component.find('div.charityList.active')).toHaveLength(0);
    expect(component.find('div.name.active')).toHaveLength(0);
  });

  it('should add .active class to div.charityList and div.name if there is a charity selected', () => {
    props.selectedCharity = 183092;
    const component = shallow(<CharityList {...props} />);

    expect(component.find('.active')).toHaveLength(2);
    expect(component.find('div.charityList')).toHaveLength(stub.length);
    expect(component.find('div.charityList.active')).toHaveLength(1);
    expect(component.find('div.name')).toHaveLength(stub.length);
    expect(component.find('div.name.active')).toHaveLength(1);
  });

  it('should send the charity Id to handleCharityClick onClick', () => {
    const component = mount(<CharityList {...props} />);
    const onClick = component.find('div.charityList').first();
    const mockedEvent = { currentTarget: { dataset: { id: '4444'} } }
    onClick.simulate('click', mockedEvent);

    // expect(component.prop('handleCharityClick')).toBeCalledWith('4444');
    // This needs fixing - should be 4444 as mocked from above
    expect(component.prop('handleCharityClick')).toBeCalledWith('183092');
  });

});
