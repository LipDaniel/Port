import React, { Component } from 'react'

export default class Portfolio extends Component {
  render() {
    return (
        <section className="section bg-custom-gray" id="portfolio">
        <div className="container">
            <h1 className="mb-5"><span className="text-danger">My</span> Projects</h1>
            <div className="portfolio">
            <ul className="nav nav-pills nav-fill mb-2 justify-content-center" id="pills-tab" role="tablist">
                <li className="nav-item" role="presentation">
                    <a className="btn nav-link active" data-toggle="pill" data-target="#pills-home" role="tab" aria-controls="pills-home" aria-selected="true">Online Auction Project</a>
                </li>
                <li className="nav-item" role="presentation">
                    <a className="btn nav-link" data-toggle="pill" data-target="#pills-profile" role="tab" aria-controls="pills-profile" aria-selected="false">Personal Health Assistant</a>
                </li>
                <li className="nav-item" role="presentation">
                    <a className="btn nav-link" data-toggle="pill" data-target="#pills-real" role="tab" aria-controls="pills-real" aria-selected="false">Real Estate</a>
                </li>
                <li className="nav-item" role="presentation">
                    <a className="btn nav-link" data-toggle="pill" data-target="#pills-bamboo" role="tab" aria-controls="pills-bamboo" aria-selected="false">Bamboo Blinds Project</a>
                </li>
                <li className="nav-item" role="presentation">
                    <a className="btn nav-link" data-toggle="pill" data-target="#pills-bookstore" role="tab" aria-controls="pills-bookstore" aria-selected="false">Book Store</a>
                </li>
            </ul>
            <hr/>
            <div className="tab-content mt-4" id="pills-tabContent">
                <div className="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
                    <div className="row">
                        <div className="col-md-6">
                            <iframe className='img-fluid h-100' width="550" height="375" src="https://www.youtube.com/embed/FOOEn4aIbM8" title="vnhp online aution" frameBorder="4" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>                       
                        </div>
                        <div className="col-md-6">
                            <h4 className='text-center'>Missions in <span className='text-danger'>Online Auction Project</span></h4>
                            <div data-spy="scroll" className='pre-scrollable' data-target="#myScrollspy" data-offset="10">
                                <h5>ADMIN PAGE</h5>
                                <h6>FEATURES</h6>
                                <p className='mb-0'>-<span className='text-danger'> Login/Logout:</span> Client won't be able to access any admin pages if they aren't logged in.</p>
                                <p className='mb-0'>-<span className='text-danger'> Admin profile:</span> Display admin information. Client also changes their information and passwords.</p>
                                <p className='mb-0'>-<span className='text-danger'> Dasboard:</span> I have taken data from API and have displayed revenues by charts and statistic of loyal customer.</p>
                                <p className='mb-0'>-<span className='text-danger'> Customer:</span> Display all customer by a datatable. Client also sees user's bidding histories and all payment histories</p>
                                <p className='mb-0'>-<span className='text-danger'> Feedback:</span> Each card for one product, you can click on comment to show all product's review.</p>
                                <p className='mb-0'>-<span className='text-danger'> Bill:</span> I have displayed all bills of all customers from API, client has searched characters so client can search to look for which bill they need. Besides, I also have displayed 3 statuses of bill (Paid + Unpaid + Pending Payment).</p>
                                <p className='mb-0'>-<span className='text-danger'> Bill Detail:</span> Client can click on the detail button to view Bill Detail and call for customer to remind their payments or other issues.</p>
                                <p className='mb-0'>-<span className='text-danger'> Category:</span>  All categories are display on the website from API, client can activate or deactivate any categories. It can show up or disappear flexibly on user's page. Moreover, client can add or edit any categories they want</p>
                                <p className='mb-3'>-<span className='text-danger'> Product:</span> Displayed all products of website from API, client can also active or deactive one product. It will show up or disappear on user page. Besides, client can add new or edit any products they want</p>
                                <h6>SOFTWARE</h6>
                                <p className='mb-0'>- Visual studio code 2019</p>
                                <p className='mb-0'>- SQL SERVER 2019</p>
                                <p className='mb-3'>- Git</p>
                                <h6>TECHNOLOGY</h6>
                                <p className='mb-0'>- ReactJS, Bootstrap, CSS</p>
                                <p className='mb-0'>- Laravel, REST API</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">
                    <div className="row">
                        <div className="col-md-6">
                            <iframe className='img-fluid h-100' width="550" height="360" src="https://www.youtube.com/embed/JYM16JwFCSU" title="vnhp health care" frameBorder="4" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                        </div>
                        <div className="col-md-6">
                            <h4 className='text-center'>Missions in <span className='text-danger'>Personal Health Assistant</span></h4>
                            <div data-spy="scroll" className='pre-scrollable' data-target="#myScrollspy" data-offset="10">
                                <h5>ADMIN PAGE</h5>
                                <h6>FEATURES</h6>
                                <p className='mb-0'>-<span className='text-danger'> Login/Logout:</span> Client won't be able to access any admin page if they aren't logged in.</p>
                                <p className='mb-0'>-<span className='text-danger'> Admin profile:</span> Display admin information. Client also changes their information and passwords.</p>
                                <p className='mb-0'>-<span className='text-danger'> Dasboard:</span> I have taken data from API and have displayed revenues by charts and statistic of loyal customer.</p>
                                <p className='mb-0'>-<span className='text-danger'> Customer:</span> Display all customer by a datatable. Client also sees all user's bidding and payment histories</p>
                                <p className='mb-0'>-<span className='text-danger'> Feedback:</span> Present each card for one product, you can click on comments to show all product's review.</p>
                                <p className='mb-0'>-<span className='text-danger'> Product:</span> Displayed all products of website from API, client can also activate or deactivate one product. It will show up or disappear on user page. Besides, client can add or edit any products they want</p>
                                <p className='mb-0'>-<span className='text-danger'> Doctor:</span> Displayed all doctors of website from API. Moreover, client can add new doctors</p>
                                <p className='mb-0'>-<span className='text-danger'> Post:</span> Client can add new post about heathing of website. Besides, client can add new or edit any posts they want</p>
                                <p className='mb-3'>-<span className='text-danger'> Appointment:</span> Display all current and histories appointment</p>
                                <h6>SOFTWARE</h6>
                                <p className='mb-0'>- Visual studio code 2019</p>
                                <p className='mb-0'>- SQL SERVER 2019</p>
                                <p className='mb-3'>- Git</p>
                                <h6>TECHNOLOGY</h6>
                                <p className='mb-0'>- ReactJS, Bootstrap, CSS</p>
                                <p className='mb-0'>- Laravel, REST API</p>
                            </div>
                        </div>      
                    </div>
                </div>
                <div className="tab-pane fade" id="pills-real" role="tabpanel" aria-labelledby="pills-profile-tab">
                    <div className="row">
                        <div className="col-md-6">
                            <iframe className='img-fluid h-100' width="550" height="360" src="https://www.youtube.com/embed/-X04Wa_7BYs" title="real estate" frameBorder="4" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                        </div>
                        <div className="col-md-6">
                            <h4 className='text-center'>Missions in <span className='text-danger'>Real Estate</span></h4>
                            <div data-spy="scroll" className='pre-scrollable' data-target="#myScrollspy" data-offset="10">
                                <h5>ACCOUNTANT DEPARTMENT</h5>
                                <h6>DESCRIPTION</h6>
                                <p className='mb-3'>This is internal software for real estate
                                    company. This software provides solution
                                    for company to manage all activities so
                                    we divided into 4 departments: Business,
                                    Accountant, Director, Human Resources.
                                </p>
                                <h6>FEATURES</h6>
                                <p className='mb-0'>- Design Receipt: Sale Receipt, Deposit Receipt, Transfer Receipt, Cancel Receipt, Credit Receipt</p>
                                <p className='mb-0'>- Export into pdf file</p>
                                <p className='mb-0'>- Create a receipt when customer has paid Management all receipts</p>
                                <p className='mb-0'>- Create an email to remind customer pay for bill before 5 days up to date</p>
                                <p className='mb-0'>- Create notification for payment period before 5 days up to date</p>
                                <h6>SOFTWARE</h6>
                                <p className='mb-0'>- NetBean IDE 14</p>
                                <p className='mb-0'>- SQL SERVER 2019</p>
                                <p className='mb-3'>- Git</p>
                                <h6>TECHNOLOGY</h6>
                                <p className='mb-0'>- JavaFX, CSS, Jasper Report, MultiThread</p>
                            </div>
                        </div>      
                    </div>
                </div>
                <div className="tab-pane fade" id="pills-bamboo" role="tabpanel" aria-labelledby="pills-profile-tab">
                    <div className="row">
                        <div className="col-md-6">
                            <iframe className='img-fluid h-100' width="550" height="360" src="https://www.youtube.com/embed/-6cVpPemBZc" title="bamboo blinds" frameBorder="4" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                        </div>
                        <div className="col-md-6">
                            <h4 className='text-center'>Missions in <span className='text-danger'>Bamboo Blinds</span></h4>
                            <div data-spy="scroll" className='pre-scrollable' data-target="#myScrollspy" data-offset="10">
                                <h5>FULLSTACK</h5>
                                <h6>DESCRIPTION</h6>
                                <p className='mb-3'>
                                    This project specializes in selling bamboo
                                    blinds. Without payment gateway or buy
                                    directly on the website. So customer can
                                    contact directly company for home
                                    installation.
                                </p>
                                <h6>FEATURES</h6>
                                <p className='mb-0'>- Design Layout: Banner, About, Product, Constructor, Contact</p>
                                <p className='mb-0'>- Embed hotline for contact: Zalo, Messenger, Facebook, Phone</p>
                                <p className='mb-0'>- Product Management: Create, Delete, Edit.</p>
                                <p className='mb-0'>- Banner Management: Add, Delete, Edit</p>
                                <p className='mb-3'>- Login/Logout feature</p>
                                <h6>SOFTWARE</h6>
                                <p className='mb-0'>- Visual Studio Code</p>
                                <p className='mb-3'>- MySQL</p>
                                <h6>TECHNOLOGY</h6>
                                <p className='mb-0'>- Laravel, Javascript, Ajax, Bootstrap</p>
                            </div>
                        </div>      
                    </div>
                </div>
                <div className="tab-pane fade" id="pills-bookstore" role="tabpanel" aria-labelledby="pills-bookstore-tab">
                    <div className="row">
                        <div className="col-md-6">
                            <iframe className='img-fluid h-100' width="550" height="360" src="https://www.youtube.com/embed/yex0v2dIqDc" title="book store" frameBorder="4" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                        </div>
                        <div className="col-md-6">
                            <h4 className='text-center'>Missions in <span className='text-danger'>Book Store</span></h4>
                            <div data-spy="scroll" className='pre-scrollable' data-target="#myScrollspy" data-offset="10">
                                <h6>FEATURES</h6>
                                <p className='mb-0'>- Design Layout: dashboard, home, shopping cart, menu bar, book management</p>
                                <p className='mb-0'>- Using Live chart for statisticing revenue and loyal customer</p>
                                <p className='mb-0'>- Display and filter products with each category/author</p>
                                <p className='mb-0'>- Shopping cart: display chosen products with quantity and price, client can increase and decrease quantity over there</p>
                                <p className='mb-0'>- Book Management: Create, Read, Update, Delete.</p>
                                <p className='mb-0'>- Category Management: Create, Read, Update, Delete.</p>
                                <p className='mb-0'>- Author Management: Create, Read, Update, Delete.</p>
                                <p className='mb-3'>- Publishing Management: Create, Read, Update, Delete.</p>
                                <h6>SOFTWARE</h6>
                                <p className='mb-0'>- Visual Studio 2022</p>
                                <p className='mb-3'>- SQL Server 2019</p>
                                <h6>TECHNOLOGY</h6>
                                <p className='mb-0'>- C# .Net Framework, WPF, Single Thread</p>
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
