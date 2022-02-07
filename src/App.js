import React, { useEffect, useState } from 'react'
import api from './services/api';
function App() {
  const [characters, setCharacters] = useState([])
  const [loading, setLoading] = useState(true)
  useEffect(()=>{
    const getAll = async (page = 1) => {
      try{
      setLoading(true)
      const {data:results} = await api.get(`?page=${page}`)
      if(page > 149) {
        return results.data;
      }
      const nextPageData = await getAll(page + 1);
      
      return [...results.data, ...nextPageData];

      }catch(e) {
        console.log(e)
      } finally {
        setLoading(false)
      }
  }
  ;(async () => {
    const data = await getAll()
    setCharacters(data)
    })()
    },[])
  // uma forma de pesquisar os personagens por nome, filme, TV show ou vídeo-game
      /*
      .filter(char=>{ 
        return (
        char.name.includes('a') ||
        char.films.includes('a') ||
        char.tvShows.includes('a') ||
        char.videoGames.includes('a')
        )
    } )
      */
  return (
    <div className="App">
    </div>
  );
}

export default App;
