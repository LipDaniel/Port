import React, { Component } from 'react'

export default class About extends Component {
  render() {
    const {Link} = this.props;
    return (
        <div className="container-fluid">
        <div id="about" className="row about-section">
            <div className="col-lg-4 about-card">
                <h3 className="font-weight-light">Who am I ?</h3>
                <span className="line mb-5"></span>
                <h5 className="mb-3">Fullstack Developer In Our Lovely Earth</h5>
                <p className="mt-20">My goal is to be associate with a company where I can use my skills and gain more experience while improving the company's productivity and reputation.</p>
            </div>
            <div className="col-lg-4 about-card">
                <h3 className="font-weight-light">Personal Info</h3>
                <span className="line mb-5"></span>
                <ul className="mt40 info list-unstyled">
                    <li><span>Birthdate</span> : 31/07/1997</li>
                    <li><span>Email</span> : nhan.nguyenkieu317@gmail.com</li>
                    <li><span>Phone</span> : 0909.146.094 </li>
                    <li><span>Skype</span> : Nhan Nguyen </li>
                    <li><span>Address</span> :  32 10A street, Binh Hung, Binh Chanh district, HCMC.</li>
                </ul>
                <ul className="social-icons pt-3">
                    {Link.map((item, index) => {
                        return(
                            <li key={index} className="social-item"><a className="social-link" href={item.url} target="_blank"><i className={item.icon} aria-hidden="true" ></i></a></li>
                        )
                    })}
                </ul>  
            </div>
            <div className="col-lg-4 about-card">
                <h3 className="font-weight-light">My Expertise</h3>
                <span className="line mb-5"></span>
                <div className="row">
                    <div className="col-1 text-danger pt-1"><i className="ti-widget icon-lg"></i></div>
                    <div className="col-10 ml-auto mr-3">
                        <h6>Construction Engineering</h6>
                        <hr />
                    </div>
                </div>
                <div className="row">
                    <div className="col-1 text-danger pt-1"><i className="ti-paint-bucket icon-lg"></i></div>
                    <div className="col-10 ml-auto mr-3">
                        <h6>Web Development</h6>
                        <hr />
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
  }
}
