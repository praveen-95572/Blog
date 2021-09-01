import React, { useState } from 'react'

export default function Contact() {
    const [data,setData] = useState({
        fullname:'', 
        phone:'',
        email:'',
        msg:'',
    });

    const InputEvent =(event) =>{
        const {name , value} = event.target;

        setData((preVal) => {
            return{
                ...preVal,
                [name] : value,
            };
        });
        
    };


    const formSubmit =(e) =>{
        e.preventDefault();
        alert(
            `My name is ${data.fullname}. My mobile number is ${data.phone} and email is ${data.email}`
        );

    };

    return (
        <>
        <div className="my-5">
            <h1 className="text-center"> Contact US</h1>
        </div>
        <div className="container contact_div">
            <div className="row">
                <div className="col-md-6 col-10 mx-auto">
                    <form onSubmit={formSubmit}>
                        <div className="mb-3">
                            <label for="exampleFormControlInput1" className="form-label">Full Name</label>
                            <input 
                            type="text" 
                            className="form-control" 
                            id="exampleFormControlInput1" 
                            name="fullname"
                            value={data.fullname}
                            onChange={InputEvent}
                            placeholder="Enter your name"
                            required />
                        </div>
                        <div className="mb-3">
                            <label for="exampleFormControlInput1" className="form-label">Phone</label>
                            <input 
                            type="number" 
                            className="form-control" 
                            id="exampleFormControlInput1" 
                            name="phone"
                            value={data.phone}
                            onChange={InputEvent}
                            placeholder="Mobile no."
                            required />
                        </div>
                        <div className="mb-3">
                            <label for="exampleFormControlInput1" className="form-label">Email address</label>
                            <input 
                            type="email" 
                            className="form-control" 
                            id="exampleFormControlInput1" 
                            name="email"
                            value={data.email}
                            onChange={InputEvent}
                            placeholder="name@example.com"
                            required />
                        </div>
                        <div className="mb-3">
                        <label for="exampleFormControlTextarea1" className="form-label">Subject</label>
                        <textarea 
                            className="form-control" 
                            id   ="exampleFormControlTextarea1" 
                            name="msg"
                            value={data.msg}
                            onChange={InputEvent}
                            rows="3" 
                            placeholder="Ask anything"
                            required></textarea>
                        </div>

                        <div className="col-12">
                            <button className="btn btn-outline-secondary" type="submit">Submit Form</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        </>
    );
};
