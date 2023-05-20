/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";


function Portfolio() {
    return (

        <section id="portfolio" className="py-5 text-center" >

            <div className="container">
                <div className="row ">
                    <div className="col">
                        <h2 className="text-info" style={{ marginTop: "50px" }} >Portfolio</h2>
                        <p className="lead">Check out some projects</p>
                    </div>
                </div>
                <div className="row mt-3">


                    <div className="col-md-4">
                        <div className="itemBox">
                            <a href="https://fathomless-cove-45188.herokuapp.com//" target="_blank">
                                <img src={process.env.PUBLIC_URL + "/images/Screenshot.png"} alt="Metro Madness" className="img-fluid" />
                            </a>
                            <div className="box" style={{ backgroundColor: "rgb(46, 43, 43)" }}>
                                <h3 className="text-info ">Metro Madness</h3>
                                
                                <a href="https://github.com/RumaRDas/fun-with-color.git" target="_blank">
                                    <i className="fa fa-github text-info icon"></i>
                                </a>

                            </div>

                        </div>

                    </div>
                    <div className="col-md-4 shadow">
                        <div className="itemBox">
                            <a href="https://benarmstrong81.github.io/Worldy-Music-at-Your-Fingertips/" target="_blank" rel="noreferrer">
                            <img src={process.env.PUBLIC_URL + "/images/Freetify-deployed-image-working.PNG"} alt="Metro Madness" className="img-fluid" />
                            </a>

                            <div className="box"style={{ backgroundColor: "rgb(46, 43, 43)" }}>
                                <h3 className="text-info ">Worldy Music at Your Fingertips</h3>
                                
                                <a href="https://github.com/BenArmstrong81/Worldy-Music-at-Your-Fingertips" target="_blank" rel="noreferrer">
                                    <i className="fa fa-github text-info icon"></i>
                                </a>
                                
                            </div>
                        </div>

                    </div>
                    <div className="col-md-4 shadow">
                        <div className="itemBox">
                            <a href="https://www.cecb.lk/" target="_blank" rel="noreferrer">
                            <img src={process.env.PUBLIC_URL + "/images/cecb.png"} alt="Metro Madness" className="img-fluid" />
                            </a>

                            <div className="box"style={{ backgroundColor: "rgb(46, 43, 43)" }}>
                                <h3 className="text-info ">Central Engineering Consultancy Bureau Web Sri lanka</h3>
                               
                                <a href="#" target="_blank">
                                    <i className="fa fa-github text-info icon"></i>
                                </a>
                            </div>
                        </div>

                    </div>

                </div>
                <div className="row pt-0 pt-md-4 ">
                <div className="col-md-4 shadow">
                        <div className="itemBox">
                            <a href="#" target="_blank">
                            <img src={process.env.PUBLIC_URL + "/images/vms.png"} alt="Metro Madness" className="img-fluid" />
                            </a>

                            <div className="box"style={{ backgroundColor: "rgb(46, 43, 43)" }}>
                                <h3 className="text-info ">Vehicle Management system</h3>
                                
                                <a href="#" target="_blank">
                                    <i className="fa fa-github text-info icon"></i>
                                </a>
                                
                            </div>
                        </div>

                    </div>
                    <div className="col-md-4">
                    <div className="itemBox">
                            <a href="http://lrscarhires.com/" target="_blank" rel="noreferrer">
                            <img src={process.env.PUBLIC_URL + "/images/lrs.png"} alt="Metro Madness" className="img-fluid" />
                            </a>

                            <div className="box"style={{ backgroundColor: "rgb(46, 43, 43)" }}>
                                <h3 className="text-info ">LRS car Hires</h3>
                                
                               
                                
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                    <div className="itemBox">
                           

                            <div className="box"style={{ backgroundColor: "rgb(46, 43, 43)" }}>
                                <h3 className="text-info ">Saz Poly Packaging ERP</h3>
                                
                               
                                
                            </div>
                        </div>

                    </div>

                </div>
            </div>

        </section>
    );

}
export default Portfolio;