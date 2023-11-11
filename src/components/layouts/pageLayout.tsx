import { Fragment, ReactNode } from 'react';
import SEO from '../settings/SEO';

export default function PageLayout({ children }: { children: ReactNode }) {
  return (
    <Fragment>
      <SEO />
      <div >
        {children}
      </div>
    </Fragment>
  );
}
