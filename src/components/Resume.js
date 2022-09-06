import React, { Component } from 'react'

export default class Resume extends Component {
  render() {
    const style = {
        height: "15px"
    }

    return (
        <section className="section" id="resume">
        <div className="container">
            <h2 className="mb-5"><span className="text-danger">My</span> Resume</h2>
            <div className="row">
                <div className="col-md-6 col-lg-6 col-sm-12">
                    <div className="card">
                      <div className="card-header">
                            <div className="mt-2">
                                <h4>Education</h4>
                                <span className="line"></span>  
                            </div>
                        </div>
                        <div className="card-body">
                            <h6 className="title text-danger">2021 - Present</h6>
                            <p>Software Engineering</p>
                            <p className="subtitle">I'm studying at Aptech Computer Education to get Advance Diploma in Software Engineering, i have finished web development certificate</p>
                            <hr/>
                            <h6 className="title text-danger">2016 - 2018</h6>
                            <p>Construction Engineering</p>
                            <p className="subtitle">I have learnt in Saigon Technology University gor 2 years and a student of Construction Engineering, then i decided not to study anymore and working in the F&B industry</p>
                            <hr/>
                            <h6 className="title text-danger">2015 - 2016</h6>
                            <p>High School Degree</p>
                            <p className="subtitle">Graduated at Ngo Gia Tu highschool, then took a year to unskilled labor, i have begun university at 2016</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 col-lg-6 col-sm-12">
                    <div className="card">
                      <div className="card-header">
                            <div className="pull-left">
                                <h4 className="mt-2">Skills</h4>
                                <span className="line"></span>  
                            </div>
                        </div>
                        <div className="card-body pb-2">
                            <h6>HTML5 &amp; CSS3</h6>
                            <div className="progress mb-2" style={style}>
                                <div className="progress-bar bg-danger" role="progressbar" style={{width: "80%"}} aria-valuenow="80" aria-valuemin="0" aria-valuemax="100">80%</div>
                            </div>
                            <h6>JavaScript</h6>
                            <div className="progress mb-2" style={style}>
                                <div className="progress-bar bg-danger" role="progressbar" style={{width: "60%"}} aria-valuenow="60" aria-valuemin="0" aria-valuemax="100">60%</div>
                            </div>
                            <h6>PHP</h6>
                            <div className="progress mb-2" style={style}>
                                <div className="progress-bar bg-danger" role="progressbar" style={{width: "70%"}} aria-valuenow="70" aria-valuemin="0" aria-valuemax="100">70%</div>
                            </div>
                            <h6>SQL Server</h6>
                            <div className="progress mb-2" style={style}>
                                <div className="progress-bar bg-danger" role="progressbar" style={{width: "75%"}} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">75%</div>
                            </div>
                            <h6>Laravel</h6>
                            <div className="progress mb-2" style={style}>
                                <div className="progress-bar bg-danger" role="progressbar" style={{width: "80%"}} aria-valuenow="80" aria-valuemin="0" aria-valuemax="100">80%</div>
                            </div>
                            <h6>ReactJS</h6>
                            <div className="progress mb-2" style={style}>
                                <div className="progress-bar bg-danger" role="progressbar" style={{width: "60%"}} aria-valuenow="60" aria-valuemin="0" aria-valuemax="100">60%</div>
                            </div>
                            <h6>Photoshop</h6>
                            <div className="progress mb-2" style={style}>
                                <div className="progress-bar bg-danger" role="progressbar" style={{width: "70%"}} aria-valuenow="70" aria-valuemin="0" aria-valuemax="100">70%</div>
                            </div>
                        </div>
                    </div>
                    <div className="card">
                      <div className="card-header">
                            <div className="pull-left">
                                <h4 className="mt-2">Languages</h4>
                                <span className="line"></span>  
                            </div>
                        </div>
                        <div className="card-body pb-2">
                          <h6>English</h6>
                            <div className="progress mb-2" style={style}>
                                <div className="progress-bar bg-danger" role="progressbar" style={{width: "65%"}} aria-valuenow="65" aria-valuemin="0" aria-valuemax="100">65%</div>
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
