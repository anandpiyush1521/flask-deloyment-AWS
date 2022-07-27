import React, { Component } from "react";
import Navbar from "../components/Navbar.js";
import Banner from "../components/Banner.js";
import Footer from "../components/Footer.js";

class Search extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Banner title="Search" subtitle="दान सबसे बड़ा धर्म!" />
        <div className="container">
          <button>
            <a href="https://rzp.io/l/SHHSZZFj">> PAY</a>
          </button>
        </div>
        <Footer />
      </div>
    );
  }
}
export default Search;
