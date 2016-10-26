import React from 'react';
import hoistNonReactStatics from 'hoist-non-react-statics';

function createProvider(HighOrderComponent, ...args) {
  return (Component, ...args2) => {
    if (typeof Component !== 'function') {
      const args3 = [Component, ...args2];
      return (Component2) => {
        function StateLessComponent2(props) {
          return <HighOrderComponent originalProps={props} component={Component2} args={args3} />;
        }

        hoistNonReactStatics(StateLessComponent2, Component2);

        return StateLessComponent2;
      };
    }

    function StateLessComponent(props) {
      return <HighOrderComponent originalProps={props} component={Component} args={args} />;
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
