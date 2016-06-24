import React from 'react';
import hoistNonReactStatics from 'hoist-non-react-statics';

function createProvider(HighOrderComponent, ...args) {
  return (Component) => {
    function StateLessComponent(props) {
      return <HighOrderComponent props={props} component={Component} args={args} />;
    }

    hoistNonReactStatics(StateLessComponent, Component);

    return StateLessComponent;
  };
}

export default function (Component, ...args) {
  if (typeof Component !== 'function') {
    return (ComponentToDecorate) => createProvider(ComponentToDecorate, Component, ...args);
  }

  return createProvider(Component, ...args);
}
