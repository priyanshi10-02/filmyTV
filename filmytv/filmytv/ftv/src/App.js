import React from 'react';
import './App.css';
import Row from './Row';
import requests from './request';
import Banner from './Banner';

import Nav from './Nav';
function App() {
  return (
    
    <div className="App">
    {<Banner/>}
    <Nav/>
    <Row title="NETFLIX ORIGINALS" fetchUrl= {requests.fetchNetflixOriginal}
      isLargeRow
    />
    <Row title="Trending Now" fetchUrl= {requests.fetchTrending}/>
    <Row title="Top Rated" fetchUrl= {requests.fetchTopRated}/>
    
    <Row title="Action Movies" fetchUrl= {requests.fetchActionMovies}/>
    <Row title="Comedy Movies" fetchUrl= {requests.fetchComedyMovies}/>
    <Row title="Romance Movies" fetchUrl= {requests.fetchRomanceMovies}/>
    <Row title="Documentaries " fetchUrl= {requests.fetchDocumentaries}/>
    <Row title="Horror Movies" fetchUrl= {requests.fetchHorrorMovies}/> 
     </div>
  );
}

export default App;
