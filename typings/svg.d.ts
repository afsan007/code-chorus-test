declare module '*.svg' {
  import React from 'react';

  type SvgrComponent = React.StatelessComponent<React.SVGAttributes<SVGElement>>;
  const svgComponent: SvgrComponent;
  export default svgComponent;
}
