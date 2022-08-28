import React, { useEffect, Fragment } from "react";
import AOS from "aos";
import { Route, Routes } from "react-router-dom";
// Import Css
import "../src/assets/font/font-awesome.css";
import "./scss/components/section.scss";
import "./scss/components/form.scss";
import "./scss/components/box.scss";

//
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
//
import routes from "./pages";
import Page404 from "./pages/404";

const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);
  return (
    <Fragment>
      <Header />
      <Routes>
        {routes.map((data, idx) => (
          <Route key={idx} path={data.path} element={data.component} exact />
        ))}

        <Route path="*" element={<Page404 />} />
      </Routes>
      <Footer />
    </Fragment>
  );
};

export default App;
