import React from "react";

function Footer() {
    return (
        <footer id="footer-main" className="bg-info text-center py-5 text-light">
            <div className="container">
                <div className="row">
                    
                <div className="card" >
                    <div className="d-flex flex-row justify-content-center text-info ">
                        <div className="p-4 icon">
                            <a href="https://www.facebook.com/manoj.adikari.5" target="_blank">
                                <i className="fa fa-facebook "></i>
                            </a>
                        </div>
                        <div className="p-4 icon">
                            <a href="https://twitter.com/i/flow/login" target="_blank">
                                <i className="fa fa-twitter "></i>
                            </a>
                        </div>
                        <div className="p-4 icon">
                            <a href="https://www.linkedin.com/in/manoj-priyankara-adikari-1b490b70/" target="_blank">
                                <i className="fa fa-linkedin "></i>
                            </a>
                        </div>
                        <div className="p-4 icon">
                            <a href="https://github.com/ManojAdikari" target="_blank">
                                <i className="fa fa-github "></i>
                            </a>
                        </div>
                    </div>
                    </div>
                    <div className="col-12">

                        <span className="lead">Design By: <a href="#" target="_blank" className="text-light">Manoj Adikari</a>

                        </span>
                    </div>
                </div>
            </div>
        </footer>

    );


}
export default Footer;