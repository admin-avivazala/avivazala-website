import React from 'react';
import { ReactNode } from 'react';

export type ContentWrapperProps = {
  x?: boolean;
  y?: boolean;
  children: ReactNode;
};

export default function ContentWrapper({
  children,
  x = true,
  y = true
}: ContentWrapperProps) {

  let classNames:string[] = [];

  if(x) {
    classNames.push('px-10 lg:px-16');
  }
  if(y) {
    classNames.push('py-5 lg:py-8');
  }

  return <div className={classNames.join(' ')}>{children}</div>;
}
