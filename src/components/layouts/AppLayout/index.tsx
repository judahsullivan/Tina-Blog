import Footer from '@/components/navigation/footer';
import Nav from '@/components/navigation/nav';
import { Fragment, ReactNode  } from 'react';

export default function AppLayout({ children }: { children: ReactNode }) {
  return (
    <Fragment>
      <Nav />
      <div className="w-full ">{children}</div>
      <Footer />
    </Fragment>
  );
}
