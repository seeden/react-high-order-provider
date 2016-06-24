# react-provide-props

Create react higher-order components (providers) simply. For what is this?
You can simply provide for example react-router to your components as high-order component.
That means you can avoid using context. Your new provider will update props of the component.

# Example

## Create provider

```js
import { PropTypes } from 'react';
import createProvider from 'react-provide-props';

const provider = createProvider('PlaceholderProvider', (props, context) => ({
  placeholder: `What is your favorite color ${props.name}?`,
}), {
  placeholder: PropTypes.string,
});

export default provider;
```

## Extend your component

```js
import React, { Component } from 'react';
import placeholderProvider from './placeholderProvider';

function MyComponent(props) {
  return (
    <input type="text" placeholder={props.placeholder} />
  );
}

export default placeholderProvider(MyComponent);
```

## Extend your component with ES7 decorator

```js
import React, { Component } from 'react';
import placeholderProvider from './placeholderProvider';

@placeholderProvider
export default class MyComponent extends Component {
  render () {
    return (
      <input type="text" placeholder={this.props.placeholder} />
    );
  }
}
```

## Use your component

```js
import React, { Component } from 'react';
import MyComponent from './MyComponent';

function MyComponent(props) {
  return (
    <MyComponent name="Zlatko" />
  );
}
```

## The result will be

```html
<input type="text" placeholder="What is your favorite color Zlatko" />
```
