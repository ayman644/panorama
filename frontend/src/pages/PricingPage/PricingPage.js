import { Navigation } from '../../components/Navigation'
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function PricingPage() {
    const [planType, setPlanType] = useState('monthly'); 
    const [openStates, setOpenStates] = useState({});

    const toggleCollapse = (key) => {
        setOpenStates((prevState) => ({
        ...prevState,
        [key]: !prevState[key]
        }));
    };

    return (
        <div>
        <Navigation />
            <div className="container mt-20" style={{ marginTop: '90px' }}>
            <main>
                <div className="text-center my-15">
                <h1>Search Pro with Panorama</h1>
                <p>Upgrade to more searches, something and upload files.</p>
                <div className="container">
                <div className="btn-group my-4">
                    <button 
                    className={`btn btn-outline-secondary ${planType === 'monthly' ? 'active' : ''}`}
                    onClick={() => setPlanType('monthly')}
                    >
                    Monthly plans
                    </button>
                    <button 
                    className={`btn btn-outline-secondary ${planType === 'annual' ? 'active' : ''}`}
                    onClick={() => setPlanType('annual')}
                    >
                    Annual plans
                    </button>
                </div>

                <div className="row text-center">
                    {planType === 'monthly' && (
                    <>
                        <div className="col-md-4">
                        <div className="card mb-4 shadow-sm">
                            <div className="card-body">
                            <h5 className="card-title">Free</h5>
                            <h3>$0 <small className="text-muted">per month</small></h3>
                            <ul className="list-unstyled mt-3 mb-4">
                                <li>5 queries per month</li>
                                <li>Support from Panorama community</li>
                                <li>Reports</li>
                                <li>Dashboards</li>
                            </ul>
                            <button className="btn btn-dark">Select</button>
                            </div>
                        </div>
                        </div>
                        <div className="col-md-4">
                        <div className="card mb-4 shadow-sm">
                            <div className="card-body">
                            <h5 className="card-title">Pro</h5>
                            <h3>$3.99 <small className="text-muted">per month</small></h3>
                            <ul className="list-unstyled mt-3 mb-4">
                                <li>100 queries per month</li>
                                <li>Support from Panorama community</li>
                                <li>Reports</li>
                                <li>Dashboards</li>
                            </ul>
                            <button className="btn btn-dark">Select</button>
                            </div>
                        </div>
                        </div>
                    </>
                    )}
                    {planType === 'annual' && (
                    <div className="col-md-4">
                        <div className="card mb-4 shadow-sm">
                        <div className="card-body">
                            <h5 className="card-title">Super</h5>
                            <h3>$30 <small className="text-muted">per year</small></h3>
                            <ul className="list-unstyled mt-3 mb-4">
                            <li>1000 queries per month</li>
                            <li>Support from Panorama community</li>
                            <li>Reports</li>
                            <li>Dashboards</li>
                            </ul>
                            <button className="btn btn-dark">Select</button>
                        </div>
                        </div>
                    </div>
                    )}
                </div>
                </div>
                </div>

                <section className="my-5">
                <h2>Heading for FAQs</h2>
                <div className="accordion" id="faqAccordion">
                    <div className="card">
                    <div className="card-header" id="headingOne">
                        
                           <h5 className="mb-0" onClick={() => toggleCollapse('collapseOne')}
              aria-expanded={openStates.collapseOne || false}
              aria-controls="collapseOne" data-toggle="collapse" data-target="#collapseOne">How to calculate your subscription cost? </h5> 
                        
                    </div>
                    <div id="collapseOne" 
          className={`collapse ${openStates.collapseOne ? 'show' : ''}`}
          aria-labelledby="headingOne"
          data-parent="#faqAccordion" >
                        <div className="card-body">
                        Use our pricing calculator at the top of this page to determine the price of your subscription. Simply enter how many users you have and choose a billing cycle (annual or monthly).

</div>
                    </div>
                    </div>
                    <div className="card">
                    <div className="card-header" id="headingTwo">
                        <h5 className="mb-0" onClick={() => toggleCollapse('collapseTwo')}
              aria-expanded={openStates.collapseTwo || false}
              aria-controls="collapseTwo" data-toggle="collapse" data-target="#collapseTwo">
                            Payment Options?
                        </h5>
                    </div>
                    <div id="collapseTwo" className={`collapse ${openStates.collapseTwo ? 'show' : ''}`} aria-labelledby="headingTwo" data-parent="#faqAccordion">
                        <div className="card-body">
                        You can pay monthly subscriptions by credit card (MasterCard, Visa, or American Express) or PayPal.

For annual subscriptions, you can pay by credit card, bank transfer, or check.
                        </div>
                    </div>
                    </div>
                    <div className="card">
                    <div className="card-header" id="headingThree">
                        <h5 className="mb-0" onClick={() => toggleCollapse('collapseThree')} data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                        Free trial period, refunds, & subscription plan details
                        </h5>
                    </div>
                    <div id="collapseThree" className={`collapse ${openStates.collapseThree ? 'show' : ''}`} aria-labelledby="headingThree" data-parent="#faqAccordion">
                        <div className="card-body">
                        sign up for a 7-day free trial, Cancel any time, no payment information required.
                        </div>
                    </div>
                    </div>
                </div>
                </section>
            </main>

            <footer className="pt-4 my-md-5 pt-md-5 border-top">
                <div className="row">
                <div className="col-12 col-md">
                    <small className="d-block mb-3 text-muted">©Panorama 2024</small>
                    <ul className="list-unstyled">
                    <li><a href="#">Privacy</a>
                    <a href="#">Terms</a>
                    <a href="#">Support</a></li>
                    </ul>
                    <div className='contact_icons'>
              <a href="#" className="text-muted me-3"><i className="fab fa-facebook fa-lg"></i></a>
              <a href="#" className="text-muted me-3"><i className="fab fa-linkedin fa-lg"></i></a>
              <a href="#" className="text-muted me-3"><i className="fab fa-youtube fa-lg"></i></a>
              <a href="#" className="text-muted"><i className="fab fa-instagram fa-lg"></i></a>
            </div>
                </div>
                <div className="col-6 col-md">
                    <h5>Topic</h5>
                    <ul className="list-unstyled text-small">
                    <li><a className="text-muted" href="#">Products</a></li>
                    <li><a className="text-muted" href="#">News</a></li>
                    <li><a className="text-muted" href="#">Media</a></li>
                    </ul>
                </div>
                <div className="col-6 col-md">
                    <h5>Topic</h5>
                    <ul className="list-unstyled text-small">
                    <li><a className="text-muted" href="#">Resources</a></li>
                    <li><a className="text-muted" href="#">Technical support</a></li>
                    <li><a className="text-muted" href="#">Purchasing</a></li>
                    </ul>
                </div>
                <div className="col-6 col-md">
                    <h5>Topic</h5>
                    <ul className="list-unstyled text-small">
                    <li><a className="text-muted" href="#">Learn</a></li>
                    <li><a className="text-muted" href="#">Partners</a></li>
                    <li><a className="text-muted" href="#">Training & certification</a></li>
                    </ul>
                </div>
                </div>
            </footer>
            </div>
    </div>
    );
}

export default PricingPage;
