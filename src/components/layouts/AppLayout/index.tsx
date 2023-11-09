import Nav from '@/components/navigation/nav';

import { Fragment, ReactNode, useState } from 'react';

export default function AppLayout({ children }: { children: ReactNode }) {
  return (
    <Fragment>
      <Nav />
      <div className="max-w-6xl mx-auto">{children}</div>
    </Fragment>
  );
}
