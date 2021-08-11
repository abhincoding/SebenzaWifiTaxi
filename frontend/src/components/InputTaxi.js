import React,{Fragment, useState} from 'react';
import './InputTaxi.css'
const InputTaxi = () => {

    const [data,setData] = useState({
        name:"",
        numberplate:"",
        routerid:"",
        locationzone:""
    })

    function handleChange(e){
        const newData= {...data}
        newData[e.target.id]= e.target.value;
        setData(newData)
       

    }
   

    const onSubmitForm = async(e) =>{
        e.preventDefault();
        try {
            const body = {data};
            const response = await fetch("/taxi",{
                method: "POST",
                headers:{"Content-type":"application/json"},
                body: JSON.stringify(body)
            });
          
            window.location="/";
        } catch (err) {
            console.error(err.message)
        }
    };
    return (
        <Fragment>
        <h1 className="text-center mt-5">
            SebenzaWifi Taxi dashboard
        </h1> 
        
        <h2>Add new Taxi information</h2>
        <form className="d-flex mt-5" onSubmit={onSubmitForm}>    
            <div id="form"> 
                <div class="form-group">
                <label for="inputTaxi" class="form-label">Full name</label>
                <input id ="name" maxLength="50" type="text" required placeholder="Full Name" className="form-control" value={data.name} onChange={(e) => handleChange(e)}/>
                </div>

                <div class="form-group">
                <label for="inputTaxi" class="form-label">Number plate</label>
                <input id="numberplate" maxLength="9" type="text" required placeholder="Number plate" className="form-control" value={data.numberplate} onChange={(e) => handleChange(e)}/>
                </div>
                
                <div class="form-group">
                <label for="inputTaxi" class="form-label">Router ID</label>
                <input id="routerid" maxLength="10" type="text" required placeholder="Router ID" className="form-control" value={data.routerid} onChange={(e) => handleChange(e)}/>
                </div>
                
                <div class="form-group">
                <label for="inputTaxi" class="form-label">Location zone</label>
                <input id="locationzone" maxLength="50" type="text" required placeholder="Location zone" className="form-control" value={data.locationzone} onChange={(e) => handleChange(e)}/>
                </div>

                
                </div>
                
            <button onSubmit={onSubmitForm} className="btn btn-success btn-sm">Add</button>
        </form>
        &nbsp;
        </Fragment>
    );
};

export default InputTaxi;

