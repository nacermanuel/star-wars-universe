import './App.css';
import { useState ,useEffect } from 'react';

function App() {
  
  const [ data, setData] = useState('')
  
  useEffect(()=> {
    
    fetch('https://api.themoviedb.org/3/movie/550?api_key=94cd0919045936987eb36de68d9b0242')
      .then(response => response.json())
      .then(resp => {
        setData(resp.original_title)
        console.log(resp)
      })

  },[])


  return (
    <div className="App">
      {data}
     </div>
  );
}

export default App;
