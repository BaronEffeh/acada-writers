import React from "react";

const Home = () => {
    return (
        <><section id="home">
            <section className="welcome">
                <div className="welcome-content">
                    <h3>Create Top-notch Trusted Academic Statement of Purpose with us.</h3>
                    <p>Acada writers help you collect your professional experiences into an appeating document improving your chance of securing admission into your dream institution.</p>
                    <button id="get-started">Get Started</button>
                </div>
                <div className="table">
                    <table>
                        <tbody>
                            <td>
                                <div className="custom-select">
                                    <select name="tag-category" id="tag-category">
                                        <option value="" disabled selected hidden>Task Category</option>
                                        <option value="visas">Letter of Explanation - Visas</option>
                                        <option value="application-essay">Statement of purpose - Admission/Application Essay</option>
                                        <option value="letter-of-interest">Letter of Expression of Interest to potential professors</option>
                                        <option value="uk-resume">UK styled resume</option>
                                        <option value="canadian-resume">Canadian styled resume</option>
                                    </select>
                                    <span className="select-arrow"><img src={process.env.PUBLIC_URL + '/Vector.png'} alt="Arrow down" /></span>
                                </div>
                            </td>

                            <tr>
                                <td>
                                    <div className="custom-select">
                                        <select name="timeline" id="timeline">
                                            <option value="" disabled selected hidden>How soon do you need it?</option>
                                            <option value="15-days">15 days</option>
                                            <option value="10-days">10 days</option>
                                            <option value="7-days">7 days</option>
                                            <option value="3-days">3 days</option>
                                            <option value="1-day">1 day</option>
                                        </select>
                                        <span className="select-arrow"><img src={process.env.PUBLIC_URL + '/Vector.png'} alt="Arrow down" /></span>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>Price<span id="price"><span id="naira">N</span>2,854</span>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </section>
        </section>

            <section className="about">
                <div className="about-container">
                    <div className="why-acada-writers">
                        <hr />
                        <h4>Why Acada Writers</h4>
                        <p>Acada Writers brings you one-step closer to your goal. It is the one platform that aids in the simplification of your academic admission process.</p>
                        <img src={process.env.PUBLIC_URL + '/about.png'} alt="About" />
                    </div>
                    <div className="value-privacy">
                        <img src={process.env.PUBLIC_URL + '/value-added-services.png'} alt="Value added services" />
                        <h5 id="value-added-services">Value added services</h5>
                        <p>We make you focus on other aspects of your application process while we get you appealing personal statement.</p>
                        <img src={process.env.PUBLIC_URL + '/privacy.png'} alt="Privacy" />
                        <h5 id="privacy">Privacy</h5>
                        <p>We don't share client's information with any third party as noted in our terms and condition. We provide confidentiality services.</p>
                    </div>
                    <div className="support-use">
                        <img src={process.env.PUBLIC_URL + '/great-support.png'} alt="Great support" />
                        <h5 id="great-support">Great Support</h5>
                        <p>We are available 24/7. We have lots of staffs working around the clock to ensure we provide satisfaction to our client.</p>
                        <img src={process.env.PUBLIC_URL + '/ease-of-use.png'} alt="Ease of use" />
                        <h5 id="ease-of-use">Ease of use</h5>
                        <p>Simple layout, easy to find information. Our platform is user-friendly, making it a breeze for you to understand and use.</p>
                    </div>
                </div>
            </section>

            <section id="contact">
                <div className="contact-form">
                    <h4>Contact Us</h4>
                    <p>Reach out to our support team and get instant feedback.</p>
                    <form action="">
                        <label htmlFor="name">Name</label>
                        <input type="text" />
                        <label htmlFor="email">Email</label>
                        <input type="text" />
                        <label htmlFor="phone">Phone</label>
                        <input type="number" />
                        <label htmlFor="message">Message</label>
                        <textarea name="message" id="message" cols="30" rows="10"></textarea>
                        <button>Submit</button>
                    </form>
                </div>
            </section>
        </>
    );
}

export default Home;