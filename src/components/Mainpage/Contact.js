import React, { Component } from 'react'
class Contact extends Component {
    state = {}
    render() {
        return (
            <section className="page-section" id="contact">
                <div className="container">
                    <div className="text-center">
                        <h2 className="section-heading text-uppercase">聯絡我們</h2>
                        <h3 className="section-subheading text-muted">聯絡我們的小標</h3>
                    </div>
                    {/* <!-- * * * * * * * * * * * * * * *-->
                    <!-- * * SB Forms Contact Form * *-->
                    <!-- * * * * * * * * * * * * * * *-->
                    <!-- This form is pre-integrated with SB Forms.-->
                    <!-- To make this form functional, sign up at-->
                    <!-- https://startbootstrap.com/solution/contact-forms-->
                    <!-- to get an API token!--> */}
                    <form id="contactForm" data-sb-form-api-token="API_TOKEN">
                        <div className="row align-items-stretch mb-5">
                            <div className="col-md-6">
                                <div className="form-group">
                                    {/* <!-- Name input--> */}
                                    <input className="form-control" id="name" type="text" placeholder="你的名字 *"
                                        data-sb-validations="required" />
                                    <div className="invalid-feedback" data-sb-feedback="name:required">請填寫名字!</div>
                                </div>
                                <div className="form-group">
                                    {/* <!-- Email address input--> */}
                                    <input className="form-control" id="email" type="email" placeholder="你的電子信箱 *"
                                        data-sb-validations="required,email" />
                                    <div className="invalid-feedback" data-sb-feedback="email:required">請填寫電子信箱!</div>
                                    <div className="invalid-feedback" data-sb-feedback="email:email">電子信箱無效!</div>
                                </div>
                                <div className="form-group mb-md-0">
                                    {/* <!-- Phone number input--> */}
                                    <input className="form-control" id="phone" type="tel" placeholder="你的電話 *"
                                        data-sb-validations="required" />
                                    <div className="invalid-feedback" data-sb-feedback="phone:required">請填寫電話!
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-group form-group-textarea mb-md-0">
                                    {/* <!-- Message input--> */}
                                    <textarea className="form-control" id="message" placeholder="您的訊息 *"
                                        data-sb-validations="required"></textarea>
                                    <div className="invalid-feedback" data-sb-feedback="message:required">請填寫訊息!
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <!-- Submit success message-->
                        <!---->
                        <!-- This is what your users will see when the form-->
                        <!-- has successfully submitted--> */}
                        <div className="d-none" id="submitSuccessMessage">
                            <div className="text-center text-white mb-3">
                                <div className="fw-bolder">表單發送成功!</div>
                                {/* <!-- To activate this form, sign up at */}
                                <br />
                                {/* <a
                                    href="https://startbootstrap.com/solution/contact-forms">https://startbootstrap.com/solution/contact-forms</a> --> */}
                            </div>
                        </div>
                        {/* <!-- Submit error message-->
                        <!---->
                        <!-- This is what your users will see when there is-->
                        <!-- an error submitting the form--> */}
                        <div className="d-none" id="submitErrorMessage">
                            <div className="text-center text-danger mb-3">發送訊息發生錯誤!</div>
                        </div>
                        {/* <!-- Submit Button--> */}
                        <div className="text-center"><button className="btn btn-primary btn-xl text-uppercase disabled"
                            id="submitButton" type="submit">發送訊息</button></div>
                    </form>
                </div>
            </section>
        );
    }
}

export default Contact;