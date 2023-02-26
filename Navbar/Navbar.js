import React from "react";
import "./style.css";

const Navbar = () => {
      return (
        <div>
          <meta charSet="UTF-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <link rel="stylesheet" href="style.css" />
          <title>Navbar</title>
          <div className="wrapper">
            <img src="221379255-dc7fac8a-32fe-4dcb-9882-7ff099869b30.svg" className="logo" id="image" />
            <section className="img-wrapper">
              <img src="221379254-53be3abd-1472-4cb7-919d-cb0ff5c85037.svg" className="img" id="image" />
              <img src="221379253-d037b377-3fab-4226-911e-180d0d968303.svg" className="img" id="image" />
              <img src="221379251-7772175f-9e1b-402d-8c50-41228181945c.svg" className="img" id="image" />
              <img src="221379252-c52a7631-8314-4590-b72f-d3e97ee01a52.svg" className="img" id="image" />
            </section>
          </div>
        </div>
      );
    
  };

  export default Navbar