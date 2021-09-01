import React from 'react'
import { NavLink } from "react-router-dom";

export default function Common(props) {
    return (
        <section id="header" className="d-flex align-items-center">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-10 mx-auto">
                    <div className="row">
                        <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                            <h1> {props.name} <br/>
                                <strong className="brand-name">(praveen-95572)</strong>
                            </h1>
                            <h2 className="my-3">
                                We are the team of talented developer making websites.
                            </h2>
                            <div className="mt-3">
                                <NavLink to={props.visit} className="btn-get-started">{props.btname}</NavLink>
                                <NavLink to="www.github.com/praveen-95572" className="btn-get-started github mx-5">Github</NavLink>
                            </div>
                        </div>

                        <div className="col-lg-6 order-1 order-lg-2 header-img">
                            <img src={props.imgsrc} className="img-fluid animated" alt="home" />
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </section>
      );
};
