import React,{Fragment, useState} from 'react';
import './EditTaxi.css'
const EditTaxi = ({taxis}) => {

  
    const [data,setData] = useState({
        name:taxis.name,
        numberplate:taxis.numberplate,
        routerid:taxis.routerid,
        locationzone:taxis.locationzone
    })


    
    function handleChange(e){
        const newData= {...data}
       setData({...data,[e.target.id]: e.target.value})
  

    }
    

    const onSubmitForm= async(e) =>{
        e.preventDefault();
        console.log("edit on submit form=new location: "+data.locationzone);
        try {

            const body = {data};
            const response= await fetch(`/taxi/${taxis.id}`, {
                method: "PUT",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(body)
            });
            console.log(data)
            window.location="/";
        } catch (err) {
            console.error(err.message);            
        }
    }     
    return (
        <Fragment>
            <button type="button" className="btn btn-warning" data-bs-toggle="modal" data-bs-target={`#id${taxis.id}`}>Edit</button>

                <div id={`id${taxis.id}`} className="modal fade">
                <div className="modal-dialog">

                
                    <div className="modal-content">
                    <div className="modal-header">
                        <button type="button" className="close" data-bs-dismiss="modal">&times;</button>
                        <h4 className="modal-title">Edit Taxi name</h4>
                    </div>
                    <div className="modal-body">
                        <label>
                            Name
                            <input id="name"type="text" maxLength="50" required className="form-control" defaultValue={taxis.name} onChange={e=> handleChange(e)}/>
                        </label>

                        <label>
                            Number plate
                            <input id="numberplate" type="text" maxLength="9" required className="form-control" defaultValue={taxis.numberplate} onChange={e=> handleChange(e)}/>
                        </label>
                        
                        <label>
                            Router ID
                             <input id="routerid" type="text" maxLength="10" required className="form-control" defaultValue={taxis.routerid} onChange={e=> handleChange(e)}/>
                        </label>

                        <label>
                            Location
                             <input id="locationzone" type="text" maxLength="50" required className="form-control" defaultValue={taxis.locationzone} onChange={e=> handleChange(e)}/>
                        </label>
                        
                        
                    </div>
                    <div class="modal-footer">
                        <button type="button" className="btn btn-warning" data-bs-dismiss="modal" onClick={e=> onSubmitForm(e)}>Edit</button>
                        <button type="button" className="btn btn-default" data-bs-dismiss="modal">Close</button>
                    </div>
                    </div>

                </div>
            </div>


        </Fragment>
    );
};

export default EditTaxi;