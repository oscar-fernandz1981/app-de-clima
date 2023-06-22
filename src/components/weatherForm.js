import React,{ useState } from "react";

export default function WeatherForm({newLocation}){
    const [city, setCity]= useState("");

   

    function handleSubmit(e){
        e.preventDefault();
        console.log({city});

        if(city===""|| !city) return;

        newLocation(city);
    }

    return (

        <div className="container">

            <form onSubmit={handleSubmit}>
                <div className="input-group mb-3 mx-auto">
                    <input type="text" className="form-control" placeholder="Ciudad" onChange={(e)=>setCity(e.target.value)}/>
                    <button className="btn btn-primary imput-group-text" type="submit">buscar</button>
                </div>
            </form>
        </div>
    );

}