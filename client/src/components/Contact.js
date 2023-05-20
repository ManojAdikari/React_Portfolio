import React from "react";

function Contact() {

    const [formStatus, setFormStatus] = React.useState('Send')
    const onSubmit = (e) => {
        e.preventDefault()
        setFormStatus('Submitting...')
        const { name, email, message } = e.target.elements
        let conFom = {
            name: name.value,
            email: email.value,
            message: message.value,
        }
        console.log(conFom)
    }
    return (




        <section id="contact" className="py-5 text-center text-light pt-5">
            <div className="primary-overlay">
                <div className="container contact">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="info-contact">
                                <h2 className="display-4 text-info " style={{ marginTop: "50px" }} > Contact</h2>
                                <p className="lead">

                                </p>
                            </div>
                        </div>
                        <div className="col-md-7">
                            <div className="card">

                                <form id="contact form" onSubmit={onSubmit}>
                                    <div className="card-body">
                                        <h3 style={{ color: "black" }}>Please fill out this form to contact me</h3>
                                        <div className="row mt-4">



                                            <div className="col-md-6">
                                                <div className="form-group">
                                                    <input className="form-control" type="text" id="name" placeholder=" First Name" required />
                                                </div>
                                            </div>



                                            <div className="col-md-6">
                                                <div className="form-group">
                                                    <input type="text" placeholder=" Last Name" className="form-control" />
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="form-group">
                                                    <input type="email" placeholder=" Email" className="form-control" id="email" />
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="form-group">
                                                    <input type="text" placeholder=" Phone Number" className="form-control" />
                                                </div>
                                            </div>

                                            <div className="col-md-12">
                                                <div className="form-group">
                                                    <textarea name="" id="message" cols="30" rows="5" placeholder="Message"
                                                        className="form-control" required></textarea>
                                                </div>
                                            </div>
                                            <div className="col-md-12">
                                                <button className="btn btn-lg btn-info btn-block" type="submit">
                                                    {formStatus}
                                                </button>
                                            </div>
                                            <div id="message" className="massagestyle text-info ">
                                                <h4></h4>

                                            </div>

                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>

    );

}
export default Contact;