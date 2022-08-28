import React from "react";
import Button from "../components/button";

function Page404(props) {
  return (
    <section className="page-title p404">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div
              className="breadcrumbs center"
              data-aos="fade-up"
              data-aos-duration="800"
            >
              <h1>404</h1>
              <h2>Page Not Found</h2>
              <p>We can’t find the page that you’re looking for.</p>
              <Button title="Back To Homepage" path="/" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Page404;
