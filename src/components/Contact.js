import React, { Component } from 'react'
import ReCAPTCHA from 'react-google-recaptcha'
 

export default class Contact extends Component {
    constructor(props){
        super(props);
        this.state = {isVerified: false}
    }
    render() {
      const handleOnChange = () => {
          this.setState({isVerified: true});
      }
    const {Link} = this.props;
    return (
        <div className="section contact" id="contact">
        <div id="map" className="map"></div>
        <div className="container">
            <div className="row">
                <div className="col-lg-8">
                    <div className="contact-form-card">
                        <h4 className="contact-title">Send a message</h4>
                        <div>
                            <div className="form-group">
                                <input  className="form-control" type="text" placeholder="Name *" required />
                            </div>
                            <div className="form-group">
                                <input className="form-control" type="email" placeholder="Email *" required />
                            </div>
                            <div className="form-group">
                                <textarea className="form-control" id="" placeholder="Message *" rows="7" required></textarea>
                            </div>
                            <ReCAPTCHA
                                sitekey="6LdCBuUhAAAAAGxl-HXHo1mGgnZKs4ntSg-LeLff"
                                onChange={handleOnChange}
                                locale="en"
                            />
                            <div className="form-group mt-3">
                                <button type="submit" disabled={!this.state.isVerified} className="form-control btn btn-primary" >Send Message</button>
                            </div>
                        </div>
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
                                <h6 className="d-inline">Phone : <br/> <span className="text-muted">0909.146.094</span></h6>
                            </div>
                        </div>
                        <div className="row mb-2">
                            <div className="col-1 pt-1 mr-1">
                                <i className="ti-map-alt icon-md"></i>
                            </div>
                            <div className="col-10">
                                <h6 className="d-inline">Address :<br/> <span className="text-muted">32 10A street, Binh Hung, Binh Chanh district, HCMC</span></h6>
                            </div>
                        </div>
                        <div className="row mb-2">
                            <div className="col-1 pt-1 mr-1">
                                <i className="ti-envelope icon-md"></i>
                            </div>
                            <div className="col-10">
                                <h6 className="d-inline">Email :<br/> <span className="text-muted">nhan.nguyenkieu317@gmail.com</span></h6>
                            </div>
                        </div>
                        <ul className="social-icons pt-4">
                            {Link.map((item, index) => {
                                return(
                                    <li key={index} className="social-item">
                                        <a className="social-link text-dark" href={item.url} target="_blank">
                                            <i className={item.icon} aria-hidden="true"></i>
                                        </a>
                                    </li>
                                )
                            })}
                        </ul> 
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
  }
}
