import React from 'react'
import { NavLink } from 'react-router-dom';

export default function Card(props) {
    return (
        <>
             <div className="col-md-4 col-10 mx-auto">
                <div className="card">
                    <img src={props.imgsrc} className="card-img-top" alt={props.title}></img>
                    <div className="card-body">
                        <h5 className="card-title font-weight-bold">{props.title}</h5>
                        <div><p className="card-text">{props.description}</p></div>
                        <NavLink to={props.visit} className="btn-get-started">Know More</NavLink>
                    </div>
                </div>
            </div>
        </>
    )
}
