import React, { Component, PropTypes, createElement } from 'react';
import { mount } from 'enzyme';
import highOrderProvider from '../src';

describe('provider', () => {
  it('should be able to create simple provider', () => {
    @highOrderProvider
    class ExampleProvider extends Component {
      render() {
         const { originalProps, component, args } = this.props;

        return createElement(component, {
          ...originalProps,
          placeholder: args.join(','),
        });
      }
    }

    @ExampleProvider(100, 200)
    class MyComponent extends Component {
      static onEnter = () => 'onEnter function';

      render() {
        const { placeholder } = this.props;
        return (
          <input type="text" placeholder={placeholder} />
        );
      }
    }


    const wrapper = mount(
      <MyComponent name="Zlatko" />
    );

    expect(wrapper.find('input').length).toBe(1);
    expect(wrapper.find('input').prop('placeholder')).toBe('100,200');

    //MyComponent.onEnter().should.equal('onEnter function');
  });
});
