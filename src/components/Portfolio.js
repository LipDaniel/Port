import React, { Component } from 'react'

export default class Portfolio extends Component {
  render() {
    return (
        <section className="section bg-custom-gray" id="portfolio">
        <div className="container">
            <h1 className="mb-5"><span className="text-danger">My</span> Project</h1>
            <div className="portfolio">
                <div className="filters">
                    <a href="#" data-filter=".new" className="active">
                        Online Auction Project
                    </a>
                    <a href="#" data-filter=".advertising">
                        Heathling Care
                    </a>
                    <a href="#" data-filter=".branding">
                        Branding
                    </a>
                    <a href="#" data-filter=".web">
                        Web
                    </a>
                </div>
                <div className="portfolio-container"> 
                    <div className="col-md-6 col-lg-4 web new">
                        <div className="portfolio-item">
                            <img src={require('../imgs/web-1.jpg')} className="img-fluid" />
                            <div className="content-holder">
                                <a className="img-popup" href="../imgs/web-1.jpg"></a>
                                <div className="text-holder">
                                    <h6 className="title">WEB</h6>
                                    <p className="subtitle">Expedita corporis doloremque velit in totam!</p>
                                </div>
                            </div>   
                        </div>             
                    </div>
                    <div className="col-md-6 col-lg-4 web new">
                        <div className="portfolio-item">
                            <img src={require('../imgs/web-2.jpg')} className="img-fluid" />
                            <div className="content-holder">
                                <a className="img-popup" href="../imgs/web-2.jpg"></a>
                                <div className="text-holder">
                                    <h6 className="title">WEB</h6>
                                    <p className="subtitle">Expedita corporis doloremque velit in totam!</p>
                                </div>
                            </div> 
                        </div>                         
                    </div>
                    <div className="col-md-6 col-lg-4 advertising new">
                        <div className="portfolio-item">
                            <img src={require('../imgs/advertising-2.jpg')} className="img-fluid" />                         
                            <div className="content-holder">
                                <a className="img-popup" href="../imgs/advertising-2.jpg"></a>
                                <div className="text-holder">
                                    <h6 className="title">ADVERSTISING</h6>
                                    <p className="subtitle">Expedita corporis doloremque velit in totam!</p>
                                </div>
                            </div>    
                        </div>              
                    </div> 
                    <div className="col-md-6 col-lg-4 web">
                        <div className="portfolio-item">
                            <img src={require('../imgs/web-4.jpg')} className="img-fluid" />
                            <div className="content-holder">
                                <a className="img-popup" href="../imgs/web-4.jpg"></a>
                                <div className="text-holder">
                                    <h6 className="title">WEB</h6>
                                    <p className="subtitle">Expedita corporis doloremque velit in totam!</p>
                                </div>
                            </div>
                        </div>                                                     
                    </div>

                    <div className="col-md-6 col-lg-4 advertising"> 
                        <div className="portfolio-item">
                            <img src={require('../imgs/advertising-1.jpg')} className="img-fluid" />                               
                            <div className="content-holder">
                                <a className="img-popup" href="../imgs/advertising-1.jpg"></a>
                                <div className="text-holder">
                                    <h6 className="title">ADVERSITING</h6>
                                    <p className="subtitle">Expedita corporis doloremque velit in totam!</p>
                                </div>
                            </div>
                        </div>                                                       
                    </div> 
                    <div className="col-md-6 col-lg-4 web new">
                        <div className="portfolio-item">
                            <img src={require('../imgs/web-3.jpg')} className="img-fluid" />  
                          <div className="content-holder">
                                <a className="img-popup" href="../imgs/web-3.jpg"></a>
                                <div className="text-holder">
                                    <h6 className="title">WEB</h6>
                                    <p className="subtitle">Expedita corporis doloremque velit in totam!</p>
                                </div>
                            </div>
                        </div>                                                     
                    </div>
                    <div className="col-md-6 col-lg-4 advertising new">
                        <div className="portfolio-item">
                            <img src={require('../imgs/advertising-3.jpg')} className="img-fluid" />       
                          <div className="content-holder">
                                <a className="img-popup" href="../imgs/advertising-3.jpg"></a>
                                <div className="text-holder">
                                    <h6 className="title">ADVERSITING</h6>
                                    <p className="subtitle">Expedita corporis doloremque velit in totam!</p>
                                </div>
                            </div>
                        </div>                                                       
                    </div> 
                    <div className="col-md-6 col-lg-4 advertising new"> 
                        <div className="portfolio-item">
                            <img src={require('../imgs/advertising-4.jpg')} className="img-fluid" />            
                            <div className="content-holder">
                                <a className="img-popup" href="../imgs/advertising-4.jpg"></a>
                                <div className="text-holder">
                                    <h6 className="title">ADVERTISING</h6>
                                    <p className="subtitle">Expedita corporis doloremque velit in totam!</p>
                                </div>
                            </div>
                        </div>
                                
                    </div> 
                    <div className="col-md-6 col-lg-4 branding new">
                        <div className="portfolio-item">
                            <img src={require('../imgs/branding-1.jpg')} className="img-fluid" />                        
                            <div className="content-holder">
                                <a className="img-popup" href="../imgs/branding-1.jpg"></a>
                                <div className="text-holder">
                                    <h6 className="title">BRANDING</h6>
                                    <p className="subtitle">Expedita corporis doloremque velit in totam!</p>
                                </div>
                            </div> 
                        </div>
                    </div> 
                    <div className="col-md-6 col-lg-4 branding">
                        <div className="portfolio-item">
                            <img src={require('../imgs/branding-2.jpg')} className="img-fluid" />  
                            <div className="content-holder">
                                <a className="img-popup" href="../imgs/branding-2.jpg"></a>
                                <div className="text-holder">
                                    <h6 className="title">BRANDING</h6>
                                    <p className="subtitle">Expedita corporis doloremque velit in totam!</p>
                                </div>
                            </div>
                        </div>                                                     
                    </div> 
                    <div className="col-md-6 col-lg-4 branding new">
                        <div className="portfolio-item">
                            <img src={require('../imgs/branding-3.jpg')} className="img-fluid" />   
                            <div className="content-holder">
                                <a className="img-popup" href="../imgs/branding-3.jpg"></a>
                                <div className="text-holder">
                                    <h6 className="title">BRANDING</h6>
                                    <p className="subtitle">Expedita corporis doloremque velit in totam!</p>
                                </div>
                            </div>
                        </div>                                                    
                    </div> 
                    <div className="col-md-6 col-lg-4 branding">
                        <div className="portfolio-item">
                            <img src={require('../imgs/branding-4.jpg')} className="img-fluid" />                      
                            <div className="content-holder">
                                <a className="img-popup" href="../imgs/branding-4.jpg"></a>
                                <div className="text-holder">
                                    <h6 className="title">BRANDING</h6>
                                    <p className="subtitle">Expedita corporis doloremque velit in totam!</p>
                                </div>
                            </div>
                        </div>                                                      
                    </div> 
                    <div className="col-md-6 col-lg-4 branding">
                        <div className="portfolio-item">
                            <img src={require('../imgs/branding-5.jpg')} className="img-fluid"  />          
                            <div className="content-holder">
                                <a className="img-popup" href="../imgs/branding-5.jpg"></a>
                                <div className="text-holder">
                                    <h6 className="title">BRANDING</h6>
                                    <p className="subtitle">Expedita corporis doloremque velit in totam!</p>
                                </div>
                            </div>
                        </div>                                                   
                    </div>
                </div> 
            </div>  
        </div>            
    </section>
    )
  }
}
