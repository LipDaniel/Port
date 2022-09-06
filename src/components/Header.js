import React, { Component } from 'react'

class Header extends Component{
    render(){
        const {Link} = this.props;
    return (
        <>
            <a href="components.html" className="btn btn-primary btn-component" data-spy="affix" data-offset-top="600"><i className="ti-shift-left-alt"></i> Components</a>
            <header className="header">
                <div className="container">
                    <ul className="social-icons pt-3">
                        {Link.map((item, index) => {
                            return(
                                <li className="social-item" key={index}>
                                    <a className="social-link text-light" href={item.url} target="_blank">
                                        <i className={item.icon} aria-hidden="true"></i>
                                    </a>
                                </li>
                            )
                        })}
                    </ul>  
                    <div className="header-content">
                        <h4 className="header-subtitle" >Hello, I am</h4>
                        <h1 className="header-title">Nhan Nguyen</h1>
                        <h6 className="header-mono" >Fullstack web developer</h6>
                        <a href="#" download className="btn btn-outline-danger">Download My CV</a>
                    </div>
                </div>
            </header>
            <nav className="navbar sticky-top navbar-expand-lg navbar-light bg-white" data-spy="affix" data-offset-top="510">
                <div className="container">
                    <button className="navbar-toggler ml-auto" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse mt-sm-20 navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item">
                                <a href="#home" className="nav-link">Home</a>
                            </li>
                            <li className="nav-item">
                                <a href="#about" className="nav-link">About</a>
                            </li>
                            <li className="nav-item">
                                <a href="#resume" className="nav-link">Resume</a>
                            </li>
                        </ul>
                        <ul className="navbar-nav brand">
                            <img src={require('../imgs/avatar.jpg')} className="brand-img" />
                            <li className="brand-txt">
                                <h5 className="brand-title">Nhan Nguyen</h5>
                                <div className="brand-subtitle">Fullstack web developer</div>
                            </li>
                        </ul>
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <a href="#portfolio" className="nav-link">Portfolio</a>
                            </li>
                            <li className="nav-item">
                                <a href="#blog" className="nav-link">Blog</a>
                            </li>
                            <li className="nav-item last-item">
                                <a href="#contact" className="nav-link">Contact</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
  }      
}
export default Header