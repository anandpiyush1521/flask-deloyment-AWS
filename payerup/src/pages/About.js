import React, { Component } from "react";
import Footer from "../components/Footer.js";
import Navbar from "../components/Navbar.js";
import Banner from "../components/Banner.js";

class About extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Banner
          title="About Me!"
          subtitle="This page is all about faith and humanity!"
        />
        <div className="container">
          <h2>About</h2>
          <p>
            First you have to create your account on payerup INDIA App.
            Receivers have to fill their ration card number if they have. Then –
          </p>
          <ul>
            <li>
              No need to donate money to any trust or any organization, you can
              directly help to needy one.
            </li>
            <li>
              You can directly donate your money to only “Antyodaya & BPL” card
              holder via phone pay or directly from your bank account.{" "}
            </li>
            <li>
              Here restaurants will be able to find suitable charities in their
              local areas to donate their excess food every day.
            </li>
            <li>
              Not only restaurant, anyone can donate food to needy one specially
              during flood & other Natural disasters.
            </li>
            <li>
              For food donation, Reciever have to reach donar. And it depends on
              the donor and the receiver that the receiver has to go to the
              donor for the food or the donor himself will deliver or send the
              food to the recipient.
            </li>
          </ul>

          <p>
            During this pandemic, in Kota, a group called{" "}
            <h1>"It happens only in Kota"</h1> has provided free food to the
            needy people and students. But Anshu Maharaj, the founder of this
            group himself, said that he gave food to many for free but left too
            much because he was doing this work through phone call and
            Instagram, due to which he could not attend a lot of calls. And many
            of the messages also remained unseen. This app will be very useful
            for such people and no needy will be deprived now.
          </p>
        </div>
        <Footer />
      </div>
    );
  }
}

export default About;
