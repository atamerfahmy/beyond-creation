import React, { useEffect, useState } from 'react';
import Layout from './components/Layout';
import TopLayout from './components/TopLayout';
import MidLayout from './components/MidLayout';
import BottomLayout from './components/BottomLayout';

const APP_ID = process.env.REACT_APP_APP_ID;

const App = () => {

     const [temp, setTemp] = useState({});

     const [dimensions, setDimensions] = useState({width: window.innerWidth});

     useEffect(() => {
          window.addEventListener('resize', updateWindowDimensions);

          return () => {
               window.removeEventListener('resize');
          }
     }, [])

     const updateWindowDimensions = () => {
          setDimensions({ width: window.innerWidth, height: window.innerHeight });
     }

     console.log(dimensions)

     useEffect(() => {
          console.log(APP_ID)
          fetch(
               `https://api.openweathermap.org/data/2.5/weather?lat=26.96546281915211&lon=33.883077697384714&appid=${APP_ID}`)
               .then((res) => res.json())
               .then((json) => {
                    console.log(json)
                    let { temp } = json.main;
                    let CTemp = ((5/9) * (temp - 32));
                    console.log(CTemp)
                    setTemp({
                         icon: '',
                         temperature: CTemp.toFixed(2)
                    })

               })
     }, [])
     return (
          <Layout>
               <TopLayout width={dimensions.width} temp={temp}/>
               <MidLayout/>
               <BottomLayout width={dimensions.width}/>
               
          </Layout>
     );
}

export default App;
