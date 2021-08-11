import React, {Fragment, useEffect, useState} from 'react';
import EditTaxi from './EditTaxi';
const ListTaxi = () => {

    const [taxis, setTaxis] = useState([]);
    const deleteTaxi = async id =>{
        try {
            const deleteTaxi= await fetch(`/taxi/${id}`,{
                method: "DELETE"
            });
            setTaxis(taxis.filter(taxis=> taxis.id !== id))
        } catch (err) {
            console.error(err.message);
            
        }
    }


    const getTaxis= async()=>{
        try {
            const response = await fetch("/taxi");
            const jsonData= await response.json();
            setTaxis(jsonData);
        } catch (err) {
            console.error(err.message);            
        }
    }
    useEffect(() =>{
        getTaxis();
    },[]);

    
    return (
        <Fragment>
            <h2>List of taxi drivers</h2>

            <table className="table mt-5 text-center">
                <thead>
                <tr>
                    <th>Full name</th>
                    <th>Number plate</th>
                    <th>Router ID</th>
                    <th>Location</th>
                    <th>Edit</th>
                    <th>Delete</th>
                </tr>
                </thead>
                <tbody>
                    
                     {
                     taxis.map( taxis =>(
                         <tr key={taxis.id}>
                             <td>{taxis.name}</td>
                             <td>{taxis.numberplate}</td>
                             <td>{taxis.routerid}</td>
                             <td>{taxis.locationzone}</td>
                             <td><EditTaxi taxis={taxis}/></td>
                             <td><button className="btn btn-danger" onClick={()=> deleteTaxi(taxis.id)}>Delete</button></td>
                         </tr>
                     ))}
                
    
                </tbody>
            </table>
        </Fragment>
        

    );
};

export default ListTaxi;