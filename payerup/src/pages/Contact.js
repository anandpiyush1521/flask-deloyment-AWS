import React, { Component } from "react";
import Footer from "../components/Footer.js";
import Navbar from "../components/Navbar.js";
import Banner from "../components/Banner.js";
import Appy from "../components/Appy.js";
class About extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Banner
          title="Contact"
          subtitle="Please contact us at payerupINDIA@gmail.com"
        />
        <div className="container">
          <h2>Contact Details - </h2>

          <ul>
            <li>
              <h5>Prakash Giri - prakashgiri@gmail.com </h5>
            </li>
            <li>
              <h5> Piyush Anand - piyusanand@gmail.com</h5>
            </li>
            <li>
              <h5> Nikhil Kumar Tiwari - nikhiltiwari@gmail.com</h5>
            </li>
            <li>
              <h5>Swapnil - swapnil@gmail.com</h5>
            </li>
          </ul>
          <h4>We are always here to help you! </h4>
          <Appy />

          <h2 className="text-center mb-4 textcolor">Get In Touch</h2>
          <p className="lead text-center">
            <h2> सङ्ग्रहैकपरः प्राप समुद्रोऽपि रसातलम् ।</h2>
          </p>
          <p className="lead text-center">
            <h2>दाता तु जलदः पश्य भुवनोपरि गर्जति ॥</h2>
          </p>

          <form>
            <div className="form-group row">
              <label className="col-sm-2 col-form-label">Name</label>
              <div className="col-sm-10">
                <input
                  className="form-control"
                  name="name"
                  placeholder="Name"
                  required
                />
              </div>
            </div>
            <div className="form-group row">
              <label className="col-sm-2 col-form-label">Select Gender*</label>
              <div className="col-sm-10">
                <input type="radio" name="gender" placeholder="male" /> Male
                <input type="radio" name="gender" placeholder="female" /> Female
              </div>
            </div>
            <div className="form-group row">
              <label className="col-sm-2 col-form-label">Phone</label>
              <div className="col-sm-10">
                <input
                  className="form-control"
                  name="phone"
                  placeholder="Phone"
                  required
                />
              </div>
            </div>
            <div className="form-group row">
              <label className="col-sm-2 col-form-label">Email</label>
              <div className="col-sm-10">
                <input
                  className="form-control"
                  name="email"
                  placeholder="E-mail"
                  required
                />
              </div>
            </div>
            <div className="form-group row">
              <label className="col-sm-2 col-form-label">Address*</label>
              <div className="col-sm-10">
                <input
                  className="form-control"
                  name="email"
                  placeholder="address"
                  required
                />
              </div>
            </div>
            <div className="form-group row">
              <label className="col-sm-2 col-form-label">
                Type of donation*
              </label>
              <div className="col-sm-10">
                <select>
                  <option>choose</option>
                  <option value="food">Food</option>
                  <option value="money">Money</option>
                  <option value="others">Others</option>
                </select>
              </div>
            </div>

            <div className="form-group row">
              <label className="col-sm-2 col-form-label">Enter Pincode*</label>
              <div className="col-sm-10">
                <input
                  className="form-control"
                  name="email"
                  placeholder="XXXXXX"
                  required
                />
              </div>
            </div>
            <div className="form-group row">
              <label className="col-sm-2 col-form-label">Enter location</label>
              <div className="col-sm-10">
                <input
                  className="form-control"
                  name="email"
                  placeholder="search"
                  required
                />
              </div>
            </div>
            <div className="form-group row">
              <label className="col-sm-2 col-form-label">Message</label>
              <div className="col-sm-10">
                <textarea
                  className="form-control"
                  name="text"
                  placeholder="How can we help you?"
                />
              </div>
            </div>

            <div className="form-group row">
              <label className="col-sm-2 col-form-label">Type of user*</label>
              <div className="col-sm-10">
                <select>
                  <option>choose</option>
                  <option value="food">Donor</option>
                  <option value="money">Reciever</option>
                </select>
              </div>
            </div>

            <div className="form-group row">
              <label className="col-sm-2 col-form-label">
                Enter Ration card no
              </label>
              <div className="col-sm-10">
                <input
                  className="form-control"
                  name="email"
                  placeholder="BPL / ANTYODAYA"
                  required
                />
              </div>
            </div>

            <div className="form-group row">
              <div className="col-sm-10">
                <button type="submit" className="btn btn-primary">
                  Enter
                </button>
              </div>
            </div>

            <h6>* columns are mandetory to fill</h6>
            <p>You can use it in Anderoid!</p>
          </form>

          {/* changes */}
        </div>
        <Footer />
      </div>
    );
  }
}

export default About;
