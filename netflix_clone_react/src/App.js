import NavBar from './Components/NavBar/NavBar';
import React from 'react';
import './App.css'
import Banner from './Components/Banner/Banner';
import RowPost from './Components/RawPoster/RowPost';
import { Action, Originals,ComedyMovies,HorrorMovies ,RomanceMovies,Documentaries} from './url'

function App() { 


  return (
    <div className="App">
        <NavBar/>
        <Banner/>
        <RowPost url={Originals} title='Netflix Originals'  />
        <RowPost url={Action} title='Action' isSmall  />
        <RowPost url={ComedyMovies} title='Comedy' isSmall  />
        <RowPost url={HorrorMovies} title='Horror' isSmall  />
        <RowPost url={RomanceMovies} title='Romance' isSmall  />
        <RowPost url={Documentaries} title='Documentaries' isSmall  />
    </div>
  );
}

export default App;
