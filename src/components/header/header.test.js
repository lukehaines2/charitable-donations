import { Header } from "./";

describe('<Header /> component', () => {
  it('should render', () => {
    const component = shallow(<Header />);
    expect(component).toBeTruthy();
  });
});
