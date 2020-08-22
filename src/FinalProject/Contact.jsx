import React, { useState } from 'react';
const Contact=()=>{
    const [data,setData]=useState({
        fullname:"",
        phone:"",
        email:"",
        msg:"",
    });
   const inputEvent=(event)=>{
       const {name,value}=event.target;
       setData((prevalue)=>{
           return{
               ...prevalue,
               [name]:value,
           }
       })
   }

    const formsubmit=(e)=>{
        e.preventDefault() ;
        alert(`My Name is ${data.fullname}.Phone number ${data.phone} and my mail address ${data.email},Here is is my Message 😄 ${data.msg}`)                 

    }
    return (<>
        <div className="my-5">
            <h1 className="text-center">
                Contact Us ☎️
            </h1>
        </div>
        <div className="container contact_div">
            <div className="row">
                <div className="col-md-6 col-10 mx-auto">
                    <form onSubmit={formsubmit}>
                  
                        <div class="form-group row">
                            <label for="staticEmail" class="col-sm-2 col-form-label">Full Nmae</label>
                            <div class="col-sm-10">
                            <input type="text" readonly class="form-control-plaintext" id="" placeholder="Enter Your Full Name" autoComplete="off"
                            name="fullname"
                            value={data.fullname}
                            onChange={inputEvent}
                            required/>
                            </div>
                        </div><br/>
                        <div class="form-group row">
                            <label for="staticEmail" class="col-sm-2 col-form-label">Email</label>
                            <div class="col-sm-10">
                            <input type="text" readonly class="form-control-plaintext" id="staticEmail"  placeholder="email@gmail.com" autoComplete="off"
                            name="email"
                            value={data.email}
                            onChange={inputEvent}
                             required/>
                            </div>
                        </div><br/>
                        <div class="form-group row">
                            <label for="staticEmail" class="col-sm-2 col-form-label">Message</label>
                            <div class="col-sm-10">
                            <textarea class="form-control"
                            id="textarea"
                            rows='3' 
                            name="msg"
                            value={data.msg}
                            onChange={inputEvent}
                            required
                            autoComplete="off" 
                            placeholder="Message"
                            >

                            </textarea>
                            </div>
                        </div><br/>
                        <div class="form-group row">
                            <label for="inputnmuber" class="col-sm-2 col-form-label">Phone</label>
                            <div class="col-sm-10">
                            <input type="number" class="form-control" id="inputPassword" placeholder="Phone"
                            name="phone"
                            value={data.phone}
                            onChange={inputEvent}
                             required
                             autoComplete="off"
                             />
                            </div><br/> <br/>
                        <div class="form-group row">
                            <label for="inputPassword" class="col-sm-2 col-form-label">Password</label>
                            <div class="col-sm-10">
                            <input type="password" class="form-control" id="inputPassword" placeholder="Password" required/>
                            </div><br/> <br/>
                            <button class="btn btn-primary" type="submit">Submit form 💌</button>
                        </div>
                        </div>

                    </form>
                </div>
            </div>
        </div><br/><br/><br/><br/><br/><br/>
    </>)
};
export default Contact;