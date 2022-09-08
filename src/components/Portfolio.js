import React, { Component } from 'react'

export default class Portfolio extends Component {
  render() {
    return (
        <section className="section bg-custom-gray" id="portfolio">
        <div className="container">
            <h1 className="mb-5"><span className="text-danger">My</span> Project</h1>
            <div className="portfolio">
            <ul className="nav nav-pills nav-fill mb-2 justify-content-center" id="pills-tab" role="tablist">
                <li className="nav-item" role="presentation">
                    <a className="btn nav-link active" data-toggle="pill" data-target="#pills-home" role="tab" aria-controls="pills-home" aria-selected="true">Online Auction Project</a>
                </li>
                <li className="nav-item" role="presentation">
                    <a className="btn nav-link" data-toggle="pill" data-target="#pills-profile" role="tab" aria-controls="pills-profile" aria-selected="false">Personal Health Assistant</a>
                </li>
            </ul>
            <hr/>
            <div className="tab-content mt-4" id="pills-tabContent">
                <div className="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
                    <div className="row">
                        <div className="col-md-6">
                            <iframe width="550" height="375" src="https://www.youtube.com/embed/FOOEn4aIbM8" title="vnhp online aution" frameBorder="4" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>                       
                        </div>
                        <div className="col-md-6">
                            <h4 className='text-center'>My mission in <span className='text-danger'>Online Auction Project</span></h4>
                            <div data-spy="scroll" className='pre-scrollable' data-target="#myScrollspy" data-offset="10">
                                <h5>ADMIN PAGE</h5>
                                <h6>FUNCTION</h6>
                                <p className='mb-0'>-<span className='text-danger'> Login/Logout:</span> Client won't be able to access any admin page if they aren't logged in.</p>
                                <p className='mb-0'>-<span className='text-danger'> Admin profile:</span> Display admin information. Client also change their information and password.</p>
                                <p className='mb-0'>-<span className='text-danger'> Dasboard:</span> I have gotten data from API and have displayed it by charts and statistics.</p>
                                <p className='mb-0'>-<span className='text-danger'> Customer:</span>  Display all customer by datatable. Client also see user's bidding histories and all payment histories</p>
                                <p className='mb-0'>-<span className='text-danger'> Feedback:</span>  Each card for one product, you can click on comment to show all comments of that product.</p>
                                <p className='mb-0'>-<span className='text-danger'> Bill:</span> I have displayed all bills of all customers from API, client have searched text so client can search to look for which bill they need. Besides, I also have displayed 3 statuses of bill (Paid + Unpaid + Pending Payment).</p>
                                <p className='mb-0'>-<span className='text-danger'> Bill Detail:</span> Client can click on detail button to view Bill Detail and can call for customer remind their payment or other issuess.</p>
                                <p className='mb-0'>-<span className='text-danger'> Category:</span> Displayed all categories of website from API, client also can active or deactive one category. It will show up or disappear on user page. Besides, client can add new or edit any categoríe thay want</p>
                                <p className='mb-3'>-<span className='text-danger'> Product:</span> Displayed all products of website from API, client can also active or deactive one product. It will show up or disappear on user page. Besides, client can add new or edit any products thay want</p>
                                <h6>SOFTWARE</h6>
                                <p className='mb-0'>- Visual studio code 2019</p>
                                <p className='mb-0'>- SQL SERVER 2019</p>
                                <p className='mb-3'>- Github</p>
                                <h6>TECHNOLOGY</h6>
                                <p className='mb-0'>- ReactJS, Bootstrap, CSS (front-end)</p>
                                <p className='mb-0'>- Laravel API (back-end)</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">
                    <div class="row">
                        <div className="col-md-6">
                            <iframe width="550" height="360" src="https://www.youtube.com/embed/JYM16JwFCSU" title="vnhp health care" frameBorder="4" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                        </div>
                        <div className="col-md-6">
                            <h4 className='text-center'>My mission in <span className='text-danger'>Personal Health Assistant</span></h4>
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
