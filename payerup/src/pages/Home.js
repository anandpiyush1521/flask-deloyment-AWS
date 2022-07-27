import React, { Component } from "react";
import Navbar from "../components/Navbar.js";
import Banner from "../components/Banner.js";
import Footer from "../components/Footer.js";

class Home extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Banner
          title="PAYERUP INDIA Welcomes You"
          subtitle="दानी कभी दु:ख नहीं पाता, उसे कभी पाप नहीं घेरता। –ऋग्वेद"
        />
        <div className="container">
          <h2>Welcome</h2>
          <p>
            According to “THE HINDU Business Line”, INDIA’s hunger statistics
            are poorest in the world and nearly 40 per cent of the food produced
            in India is wasted every year.
          </p>
          <p>
            A study in 2010 co-authored by Ramandeep Arora, a consultant
            pediatric oncologist at Max Super Specialty Hospital in New Delhi,
            estimated that about 40,000-50,000 new cases of childhood cancer
            occur in India every year. showed that parents of 45% of children
            abandoned treatment. Researchers found that more than 95% of the
            treatment abandonment cases occurred for lack of money. This is just
            one case, there are many cases like this in India. A lot of people
            would like to help, they try t do visit trust or donate money. Often
            the money is misused. So here we have the “payerup INDIA App”. Here
            you can directly help the needy through this. And the government can
            verify if the poor are being benefited or not.  
          </p>
          <p>
            Till now We don’t have online donation app on this theme where you
            can directly donate money to needy ones. Previously For food
            donation, We have a food bank to donate food but this also delays
            the help of the needy people. But with the help of “payerup INDIA”,
            we can reach people quickly with good food.
          </p>
          <p>
            <b>
              <u>D:\sublime\20minwebsite\index.html</u>
            </b>
          </p>
        </div>
        <Footer />
      </div>
    );
  }
}
export default Home;
