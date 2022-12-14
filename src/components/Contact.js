import React, { Component } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import emailjs from "emailjs-com";
import validator from "validator";
import $ from "jquery";

export default class Contact extends Component {
  render() {
    const check = () => {
      var name = $('#name').val();
      var message = $('#message').val();
      var email = $('#email').val();
      if(name && message && email){
        return true;
      }
    }
    const handleOnChange = () => {
      if(check()){
        $("#submit").prop('disabled', false); 
      }
    }
    function sendEmail(e) {
      e.preventDefault();
        emailjs
          .sendForm(
            "service_lviktvw",
            "template_b5leqhp",
            e.target,
            "pt1-IOUslFTu7LK7o"
          )
          .then((res) => {
            console.log(res);
          })
          .catch((err) => console.log(err));
        e.target.reset();
        $("#result").html("")

    }
    const validateEmail = (e) => {
      var email = e.target.value;

      if (validator.isEmail(email)) {
        $("#result")
          .html("* Valid email")
          .addClass("text-success")
          .removeClass("text-danger");
          return true;
      } else {
        $("#result")
          .html("* Invalid email")
          .addClass("text-danger")
          .removeClass("text-success");
      }
    };
    const { Link } = this.props;

    return (
      <div className="section contact" id="contact">
        <div id="map" className="map"></div>
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="contact-form-card">
                <h4 className="contact-title">Send a message</h4>
                <form onSubmit={sendEmail}>
                  <div className="form-group">
                    <input
                      className="form-control"
                      name="name"
                      onChange={check}
                      id="name"
                      type="text"
                      placeholder="Name *"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <input
                      className="form-control"
                      name="user_email"
                      id="email"
                      type="email"
                      onKeyUp={check}
                      onChange={(e) => validateEmail(e)}
                      placeholder="Email *"
                      required
                    />
                    <span id="result"></span>
                  </div>
                  <div className="form-group">
                    <textarea
                      className="form-control"
                      name="message"
                      id="message"
                      onChange={check}
                      placeholder="Message *"
                      rows="7"
                      required
                    ></textarea>
                  </div>
                  <ReCAPTCHA
                    sitekey="6Ld9E-UhAAAAAHheLWdVizJiV12m2f2RMUE-iHOU"
                    onChange={handleOnChange}
                    locale="en"
                  />
                  <div className="form-group mt-3">
                    <button
                      type="submit"
                      id="submit"
                      disabled
                      className="form-control btn btn-primary"
                      data-toggle="modal" 
                      data-target="#exampleModalCenter"
                    >
                      Send Message
                    </button>
                  </div>
                </form>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="contact-info-card">
                <h4 className="contact-title">Get in touch</h4>
                <div className="row mb-2">
                  <div className="col-1 pt-1 mr-1">
                    <i className="ti-mobile icon-md"></i>
                  </div>
                  <div className="col-10 ">
                    <h6 className="d-inline">
                      Phone : <br />{" "}
                      <span className="text-muted">0909.146.094</span>
                    </h6>
                  </div>
                </div>
                <div className="row mb-2">
                  <div className="col-1 pt-1 mr-1">
                    <i className="ti-map-alt icon-md"></i>
                  </div>
                  <div className="col-10">
                    <h6 className="d-inline">
                      Address :<br />{" "}
                      <span className="text-muted">
                        32 10A street, Binh Hung, Binh Chanh district, HCMC
                      </span>
                    </h6>
                  </div>
                </div>
                <div className="row mb-2">
                  <div className="col-1 pt-1 mr-1">
                    <i className="ti-envelope icon-md"></i>
                  </div>
                  <div className="col-10">
                    <h6 className="d-inline">
                      Email :<br />{" "}
                      <span className="text-muted">
                        nhan.nguyenkieu317@gmail.com
                      </span>
                    </h6>
                  </div>
                </div>
                <ul className="social-icons pt-4">
                  {Link.map((item, index) => {
                    return (
                      <li key={index} className="social-item">
                        <a
                          className="social-link text-dark"
                          href={item.url}
                          target="_blank"
                        >
                          <i className={item.icon} aria-hidden="true"></i>
                        </a>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="modal fade" id="exampleModalCenter" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered" role="document">
                <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLongTitle">Notification</h5>
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div className="modal-body">
                <i className="fa-regular fa-circle-check text-success"></i>  Send mail successfully
                </div>
                    <button type="button" className="m-3 btn btn-success" data-dismiss="modal">Close</button>
                </div>
            </div>
        </div>
      </div>
    );
  }
}
