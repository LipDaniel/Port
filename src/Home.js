import React, { Component } from 'react'
import "./css/portfolio.css";
import "./css/themify-icons.css";
import Header from "./components/Header";
import About from './components/About';
import Resume from "./components/Resume";
import Experience from "./components/Experience";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default class Home extends Component {
  render() {
    const Link = [
      {
        url: "https://www.facebook.com/lip.louis/",
        icon: "ti-facebook"
      },
      {
        url: "https://twitter.com/NhnNguy32560823",
        icon: "ti-twitter"
      },
      {
        url: "https://myaccount.google.com/",
        icon: "ti-google"
      },
      {
        url: "https://www.instagram.com/nkdnhan_/",
        icon: "ti-instagram"
      },
      {
        url: "https://github.com/LipDaniel",
        icon: "ti-github"
      }
    ]
    return (
      <>
        <Header Link={Link}/>
        <About Link={Link}/>
        <Resume/>
        <Experience/>
        <Portfolio/>
        <Contact Link={Link}/>
        <Footer/>
      </>
    )
  }
}
