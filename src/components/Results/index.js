import { useRoute, useLocation  } from "wouter";
import React, { useState, useEffect, Fragment} from "react";
import "./style.css"
import getSongsByArtist from "../../services/GetSongs/GetSongs";
import Song from "../Song/Song";
import Spinner from "../Spinner/index"
import Search from "../Search/Search"
const Results = () => {
  const [songs, setSongs] = useState([]);
  // catchs the url params
  const [match, params] = useRoute("/search/:query");
  const [location, setLocation] = useLocation()
  const artist = params.query;
  
  useEffect(() => {
    
    const getSongs = async (artist) => {
      const { data } = await getSongsByArtist(artist);
      setSongs(data);
    };
    getSongs(artist);

  }, [artist]);
  
  return (
    <Fragment><Search />
    <div className="container-songs">
      
      {songs.length ? (
        songs.map((song) => <Song key={song.id} {...song} />)
      ) : (
        <Spinner />
      )}
    </div>
    </Fragment>
  );
};
export default Results;
