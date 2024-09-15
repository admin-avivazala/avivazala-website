import { ReactNode, Suspense } from 'react';
import Loading from './Loading';

export type SuspenseLoadingProps = {
  text?: string;
  children: ReactNode;
};

export default function SuspenseLoading({
  text,
  children
}: SuspenseLoadingProps) {
  return <Suspense fallback={<Loading text={text} />}> {children}</Suspense>;
}
