import React, { Component } from "react";
import Navbar from "../components/Navbar.js";
import Banner from "../components/Banner.js";
import Footer from "../components/Footer.js";

class Information extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Banner title="Information" subtitle="दान सबसे बड़ा धर्म!" />
        <div className="container">
          <h2>Welcome</h2>
          <h6>
            First you have to create your account on payerup INDIA App.
            Receivers have to fill their ration card number if they have . Then
            –
          </h6>
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
          <h3>
            When we throw food, it produces methane — a greenhouse gas even more
            potent than carbon dioxide.
          </h3>
          <p>
            <button>
              <a href="https://www.instagram.com/" title="click to visit">
                Instagram
              </a>
            </button>
          </p>
          <p>
            <button>
              <a href="https://twitter.com/?lang=en" title="click to visit">
                twitter
              </a>
            </button>
          </p>
          <p>
            <button>
              <a href="https://rzp.io/l/SHHSZZFj">PAY</a>
            </button>
          </p>
        </div>
        <Footer />
      </div>
    );
  }
}
export default Information;
