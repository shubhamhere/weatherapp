import React, { useEffect, useState } from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "./index.css";
function Temp() {
    const [val, Upval] = useState("");
    const [tem, upTemp] = useState('');
    // useEffect();
    const thisVal = (obj) => {
        Upval(obj.target.value)
    }
    let m = Math;
    console.log(m);
    useEffect(() => {
        const Ftapi = async () => {
            const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${val}&appid=af2b5bcf90031de9fe1f921865f29ad2`)
            const resjson = await response.json();
            console.log(resjson.main)
            upTemp(resjson.name)
            upTemp(resjson.main)
        }

        Ftapi();

    }, [val]
    )

    return (
        <>
            <div className=" container">
                <div className="row ">
                    <div className="col-lg-10 col-10 mx-auto text-center ">
                        <div className="d-flex  justify-content-center align-items-center cen">
                            <div class="card round" style={{ width: "20rem" }}>
                                <input placeholder="Enter City/Country Name" type="search" onChange={thisVal} className="mx-2 text-capitalize  font-weight-bold mt-2 p-2 rounded-pill inpo" />
                                {/* {!tem ? (<p>error</p>) : */}
                                {!tem ? <div class="card-body">
                                    <i class="fas fa-3x clr textshadow fa-cloud-sun"></i><br/>
                                    <h1 className="card-title m-3 text-capitalize textshadow1 text-secondary font-weight-bold pt-4 pb-5"> {val}</h1>
                                    <div className=" overflow-hidden">
                                    <h1 className="mt-2 overflow-hidden fas fa-street-view text-white textshadow font-weight-bold">NotFound</h1>
                                        <h5>Feels Alive</h5>
                                        <p class="card-text mt-3 textshadow text-white">Min ?°C | max ?°C</p>
                                    </div>
                                    <div class="ocean">
                                        <div class="wave"></div>
                                        <div class="wave"></div>
                                    </div>
                                </div> :
                                    <div class="card-body">
                                        <i class="fas fa-3x clr textshadow fa-cloud-sun"></i>

                                        <h1 className="card-title text-capitalize  textshadow1 text-secondary font-weight-bold mt-5 pb-2"> 
                                        <i class="fas fa-map-marker-alt"></i> {val}</h1>
                                        <div className=" overflow-hidden">
                                        <h1 className="mt-5 p-1 overflow-hidden  text-white textshadow font-weight-bold">{Math.round((tem.temp - 273.15)*10)/10}°C</h1>
                                            <h5>Feels like {Math.ceil( tem.temp_min- 273.15)}°C </h5>
                                            <p class="card-text mt-4 textshadow text-white">Min {Math.trunc(tem.feels_like - 275.15)}°C | Max {Math.ceil(tem.temp_max - 272.15)}°C</p>
                                        </div>
                                        <div class="ocean">
                                            <div class="wave"></div>
                                            <div class="wave"></div>
                                        </div>
                                    </div>
                                }
                                {/* } */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
}
export default Temp;
