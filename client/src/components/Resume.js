import React from "react";

function Resume() {
    return(
        <section id="skill" className="bg-light py-5 text-center">

        <div className="container">

            <div className="row">
                <div className="col-12">
                    <div className="info-book">
                        <h2 className="display-4 text-info" style={{ marginTop: "50px" }}>My Skills</h2>
                        <p className="lead mt-3">My programming language and tools </p>
                        <a href="https://docs.google.com/document/d/1ZZvnRJOo-vOrAwvU0rlj1YT0z-HCRyuK/edit?usp=sharing&ouid=106094290608935730038&rtpof=true&sd=true" class="btn btn-outline-info btn-lg " target="_blank"> My
                            Resume</a>
                        <div className="d-flex flex-row justify-content-center text-info ">
                            <div className="icon">

                                <i className="fa fa-html5"></i>
                               
                            </div>
                            <div className="icon">

                                <i className="fa fa-css3 "/>
                               
                            </div>
                            <div className="icon">
                                <i className="fa fa-github "></i>

                            </div>
                            <div className="icon">
                                <i className="fab fa-js-square"></i>

                            </div>

                        </div>
                    </div>
                    
                    <div id="accordion" role="tablist" className="pt-5">
                        <div className="card">
                            <div className="card-header" role="tab">
                                <h5 className="mb-0">
                                    <div data-toggle="collapse" href="#collapse1">
                                        <i className="fa fa-arrow-circle-down"></i> Front and Development
                                    </div>
                                </h5>
                            </div>
                            <div id="collapse1" className="collapse show" data-parent="#accordion">
                                <div className="card-body">
                                    <p className="lead"> For designing a website as a frontend developer I am good in HTML,
                                        CSS, Bootstrap, Foundation framework. </p>
                                </div>
                            </div>
                        </div>
                        <div className="card" role="tablist">
                            <div className="card-header">

                                <div data-toggle="collapse" href="#collapse2" class="">
                                    <h5 className="mb-0">
                                        <i className="fa fa-arrow-circle-down"></i>
                                        Backend Development</h5>
                                </div>
                            </div>
                            <div id="collapse2" className="collapse" data-parent="#accordion">
                                <div className="card-body">
                                    <p className="lead"> As a backend developer I can use Javascript, Jquery, Node Js</p>
                                </div>
                            </div>

                        </div>

                        <div className="card" role="tablist">
                            <div className="card-header">
                                <h5 className="mb-0">
                                    <div data-toggle="collapse" href="#collapse3">
                                        <i className="fa fa-arrow-circle-down"></i> Collaboration
                                    </div>
                                </h5>

                            </div>
                            <div id="collapse3" className="collapse" data-parent="#accordion">
                                <div className="card-body">
                                    <p className="lead">I have experience in Github to collaboration As a group </p>
                                </div>
                            </div>

                        </div>
                        <div class="card" role="tablist">
                            <div class="card-header">
                                <h5 class="mb-0">
                                    <div data-toggle="collapse" href="#collapse4">
                                        <i class="fa fa-arrow-circle-down"></i> Graphics Designing
                                    </div>
                                </h5>

                            </div>
                            <div id="collapse4" class="collapse" data-parent="#accordion">
                                <div class="card-body">
                                    <p class="lead">I have Knowledge of photoshop and Illustrator </p>
                                </div>
                            </div>

                        </div>

                    </div>
                </div>
            </div>
        </div>

    </section>
    );
    
}
export default Resume;