import React from 'react';
import Spinner from './spinner.js';



const Card=({showData, loadingData, weather, forecast})=>{
   // console.log(loadingData);
   var today= new Date();
   var day= today.getDate();
   var month= today.getMonth()+1;
   var year= today.getFullYear();
   var date= day+'/'+month+'/'+year;

   var url="";
   var iconUrl="";

   var iconUrl3H="";
   var iconUrl6H="";
   var iconUrl9H="";

   var forecastDate3H="";
   var forecastDate6H="";
   var forecastDate9H="";

    if(loadingData){
        //console.log(loadingData);
        return <Spinner/>;
    }

    if(showData){
        url="http://openweathermap.org/img/w/";
        iconUrl= url + weather.weather[0].icon+".png";

        iconUrl3H= url+ forecast.list[1].weather[0].icon+".png";
        iconUrl6H= url+ forecast.list[2].weather[0].icon+".png";
        iconUrl9H= url+ forecast.list[3].weather[0].icon+".png";

        forecastDate3H= forecast.list[1].dt_txt.substring(8,10)+"/"+forecast.list[1].dt_txt.substring(5,7)+"/"+forecast.list[1].dt_txt.substring(0,4)+" "+forecast.list[1].dt_txt.substring(11,13);
        forecastDate6H= forecast.list[2].dt_txt.substring(8,10)+"/"+forecast.list[2].dt_txt.substring(5,7)+"/"+forecast.list[2].dt_txt.substring(0,4)+" "+forecast.list[2].dt_txt.substring(11,13);
        forecastDate9H= forecast.list[3].dt_txt.substring(8,10)+"/"+forecast.list[3].dt_txt.substring(5,7)+"/"+forecast.list[3].dt_txt.substring(0,4)+" "+forecast.list[3].dt_txt.substring(11,13);

       }

    return(
        <div className= "mt-4">
            {
                 showData=== true?(
                    <div className='container'>
                        <div className='card mb-3 mx-auto bg-dark text-light'>
                            <div className='row g-0'>
                                <div className='col-md-4'>
                                    <h3 className='card-title'>{weather.name}</h3>
                                    <p className='card-date'>{date}</p>
                                    <h1 className='card-temp'>{(weather.main.temp - 273.15).toFixed(1)}ºC</h1>
                                    <p className='card-desc'><img src={iconUrl} alt="icon"/>{weather.weather[0].description}</p>
                                    <img src="https://images.pexels.com/photos/3584283/pexels-photo-3584283.jpeg?auto=compress&cs=tinysrgb&w=600" className='img-fluid rounded-start' alt='..'/>

                                </div>
                                <div className='col-md-8'>
                                    <div className='card-body text-start mt-1'>
                                        <h5 className='card-text'>Temperatura máxima: {(weather.main.temp_max - 273.15).toFixed(1)}ºC </h5>
                                        <h5 className='card-text'>Temperatura mínima: {(weather.main.temp_min - 273.15).toFixed(1)}ºC </h5>
                                        <h5 className='card-text'>Sensación térmica: {(weather.main.feels_like - 273.15).toFixed(1)}ºC </h5>
                                        <h5 className='card-text'>Humedad: {(weather.main.humidity)} % </h5>
                                        <h5 className='card-text'>Velocidad del viento: {(weather.wind.speed)} m/s </h5>

                                    </div>
                                    <hr/>

                                    <div className='row mt-2'>
                                        
                                        <div className='col'>
                                            <p>{forecastDate3H} h</p>
                                            <p className='description'><img src={iconUrl3H} alt='icon'/>{forecast.list[1].weather[0].description} </p>
                                            <p className='temp'>{(forecast.list[1].main.temp-273.15).toFixed(1)}ºC</p>
                                        </div>

                                        
                                        <div className='col'>
                                            <p>{forecastDate6H} h</p>
                                            <p className='description'><img src={iconUrl6H} alt='icon'/>{forecast.list[2].weather[0].description} </p>
                                            <p className='temp'>{(forecast.list[2].main.temp-273.15).toFixed(1)}ºC</p>
                                        </div>

                                        
                                        <div className='col'>
                                            <p>{forecastDate9H} h</p>
                                            <p className='description'><img src={iconUrl9H} alt='icon'/>{forecast.list[3].weather[0].description} </p>
                                            <p className='temp'>{(forecast.list[3].main.temp-273.15).toFixed(1)}ºC</p>
                                        </div>


                                    </div>

                                </div>

                            </div>

                        </div>

                    </div>

                ):(
                    <h2 className="text-light">Sin datos</h2>
                   
                )
                
            }
        
        
        
        </div>
    );
    
}

export default Card;