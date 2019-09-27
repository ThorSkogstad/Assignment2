import React from "react";
import { Card } from "@dhis2/ui-core/build/es/Card";

const Footer = () => {
  return (
    <section className="Footer">
      <section className="Grid-Container">
        <section className="row">
          <section className="col-3-3">
            <Card className="grow">
              <h4>
                This app is made for educational purposes. I take no
                responsibility for how you use application or the information
                you found here. Use at your own risk. This product uses the
                Spotify API.
              </h4>
            </Card>
          </section>
        </section>
      </section>
    </section>
  );
};

export default Footer;
