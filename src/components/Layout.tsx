import React from "react";
import Footer from "./Footer";
import Header from "./Header";

type Props = { children: any };

const Layout = (props: Props) => {
  return (
    <div className="px-12">
      <Header />

      <div className="min-h-screen container">{props.children}</div>

      <Footer />
    </div>
  );
};

export default Layout;
