# react-high-order-component

Create react higher-order components (providers) simply.

# Example

## Create your High-Order component

```js
import React, { PropTypes, Component, createElement } from 'react';
import highOrderProvider from 'react-high-order-provider';

@highOrderProvider
export default class Example extends Component {
  render() {
    const { props, component } = this.props;

    return createElement(component, {
      ...props,
      myAditionalProp: 123,
    });
  }
}
```

## Extend your component

```js
import React, { Component } from 'react';
import exampleProvider from './Example';

@exampleProvider
function MyComponent(props) {
  return (
    <input type="text" placeholder={props.myAditionalProp} />
  );
}
```

## The result will be

```html
<input type="text" placeholder="123" />
```
