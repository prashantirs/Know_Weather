import React,{useState} from 'react'
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar';
import Weather from './components/Weather/Weather';

function App() {

  const [city, setCity] = useState("Waidhan")

  const handleSearchChange=(event)=>  {
    setTimeout(() => {
      setCity(event.target.value);
    }, 1500);
    
    
 }

let  apiKey =process.env.REACT_APP_WEATHER_API

return (
    <>
    <Navbar handleSearchChange={handleSearchChange} />
    {/* <Navbar  /> */}
    <Weather apiKey={apiKey} city={city}/>
    <Footer/>
    </>
  );
}

export default App;
