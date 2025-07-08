import React from 'react';

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore – Dynamic proxy mock for lucide-react icons
const IconsProxy: any = new Proxy(
  {},
  {
    get: () => () => React.createElement('svg', {}),
  }
);

export default IconsProxy;

export const Loader2 = () => React.createElement('svg', {});
export const X = () => React.createElement('svg', {});
export const Info = () => React.createElement('svg', {});
export const CheckCircle = () => React.createElement('svg', {});
export const AlertTriangle = () => React.createElement('svg', {});
export const Bell = () => React.createElement('svg', {});