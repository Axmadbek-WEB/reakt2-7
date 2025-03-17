import { RiseLoader, ScaleLoader, ClockLoader } from "react-spinners"
import './App.css'
import { useState, useEffect } from "react";


// getDate()

function App() {
  const [load, setLoad] = useState(true)
  const [malumot, setMalumot] = useState([])
  useEffect(() => async function getDate() {
    try {
      const res = await fetch("https://randomuser.me/api");
      const data = await res.json();
      console.log(data);
      setMalumot(data.results[0]);
      setLoad(false);
      // console.log(load);
    } catch (error) {
      console.log(error)
    }


  }, []);
  return (
    <>
      {load &&
        <ClockLoader color="red" size={50} />
      }
      {load == false &&
        <div>
          <h1>{malumot.name.title} {malumot.name.first}</h1>
        </div>
      }
    </>
  )
}

export default App;
