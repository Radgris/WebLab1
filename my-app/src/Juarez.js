import React from 'react';
import logo from './logo.svg';
import './App.css';
import RouterTab from './RouterTab';

function Juarez() {
  
  const [displayvalues, SetValues] = React.useState([])

  const getDatafromApi = async () => {
    const apidata = await fetch('http://api.openweathermap.org/data/2.5/forecast?id=4013708&cnt=8&APPID=2104d38bbd22c6405f6a68ca788c2af0')
    const dates = await apidata.json()
    const parsed = dates.list
    console.log(parsed)
    //console.log('data')
    //console.log(apidata)
    SetValues(parsed)
  }

  React.useEffect(()=>{
    //console.log('effectused')
    var datafromapi = getDatafromApi()
  },[])

  return (
    <div>
        <RouterTab />
        <div className="forecast-table">
            <ul>
                {displayvalues.map(item=>(
                <li>{item.dt_txt}---{item.main.temp}---{item.main.humidity}</li>
                ))}
            </ul>
            </div>
        </div>
    );
}

export default Juarez;
