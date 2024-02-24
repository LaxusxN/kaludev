import { FC, ReactNode } from "react";
import { Footer } from "./footer";
import { Header } from "./header";

interface LayoutProps {
  prop?: string;
  children?: ReactNode;
}

export const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <div className="bg-black">
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
