import React from "react";

function Home() {
    return(
        <div>
        <section id="home" className="py-5 text-center text-light pt-5">
        <div className="primary-overlay">
            < div className="container ">
                <div className="row">
                    <div className="col-lg-6 col-md-12 ">
                        <h1 className="display-1  " >Manoj Adikari</h1>
                        <p className="lead">Hello, I am a full-stack web developer. Web designing has been a passion of mine
                            for a very long time and I would be honoured to help provide an insightful website for
                            anyone. </p>
                    </div>
                    <div className="col-lg-6 mt-5  ">
                        <img src="./images/My_Image" className="img-fluid d-none d-lg-block float-right " alt=""/>
                    </div>


                </div>
            </div>
            <div id="navbarhead"></div>
        </div>

        
    </section>

<section id="about">

<div className="container substyle ">
    <div className="row">
        <div className="col-lg-5 col-md-12  ">
            <img src="./images/My_Image.jpg" className="img-fluid d-none d-lg-block float-right " alt=""/>
        </div>
        <div className="col-lg-6 col-md-12 abstyle">
            <h3 className="display-4 text-info  ">About Me</h3>
                <p>I have various experiences in Sri Lanka and Australia as an It manager, computer programmer.
            These vivid practical experiences help me to understand the backend of designing and developing automated
            systems.
            This position appeals to me as I have seven + years of experience in developing systems in different
            languages for
            the central engineering consultancy bureau (government sector) and miracle network & solution (private
            sector).
            Namely, a few of the systems that I was involved in developing an accounting system (ERP), vehicle
            management system,
            leased property information management system, rate handling system, stock management system, distribution
            management system,
            and point of sale system. Hence, in Pro-pac Packaging pvt ltd in Australia currently, I am working as a
            machine operator, however,
            they have assigned me to work in the front end of an enterprise resource planning system that is recently
            implemented in the Adelaide branch
            to provide feedback on the development as a user as I have knowledge and experience in programming and
            automated systems.
            I have completed my diploma in information technology, database management system development, and
            computerized accounting and also a
            bachelor of information technology (undergraduate third year). Currently, I am following a certificate in
            Full Stack Developer At the
            University of Adelaide Australia and it will be completed in May 2023.. </p>
               
        </div>
    </div>
</div>

</section>
</div>
    
 

    );
    
}
export default Home;