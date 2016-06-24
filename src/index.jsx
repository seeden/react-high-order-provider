import React from 'react';

function createProvider(HighOrderComponent) {
  return (Component) => (props) => <HighOrderComponent props={props} component={Component} />;
}

export default function (...args) {
  if (!args.length) {
    return (...decoratorArgs) => createProvider(decoratorArgs);
  }

  return createProvider(...args);
}
