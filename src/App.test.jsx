import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';
import { shallow, mount } from 'enzyme';


it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});

describe('<App />', () => {
  it('renders 1 <App /> component', () => {
    const component = shallow(<App />);
    expect(component).toHaveLength(1); 
  });

  it('should call submit function on submit', () => {
    const wrapper = mount(<App />)
    const wrapperInstance = wrapper.instance();
    const submit = jest.spyOn(wrapperInstance, 'submit')
    wrapperInstance.forceUpdate()
    wrapper.find('#form').simulate('submit');
    expect(submit).toHaveBeenCalled();
  })
});
