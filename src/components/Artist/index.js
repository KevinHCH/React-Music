import React, { useState, useEffect } from "react";
import getArtist from "../../services/GetArtist";
import "./style.css";

const Artist = ({ id }) => {
  const [artist, setArtist] = useState({});
  // const [match, params] = useRoute("/artist/:id")
  const artistId = id;

  useEffect(() => {
    getArtist(artistId).then((data) => setArtist(data));
  }, []);

  const { name, link, picture_big, nb_album, nb_fan } = artist;

  return (
    <div className="artist-container">
      <a href={link} target="_blank" rel="noopener noreferrer">
        <figure>
          <img src={picture_big} alt={name} title={name} />
          <figcaption>{name}</figcaption>
        </figure>
      </a>
      <section>
        <ul>
          <li>
            <b>Total albums: {nb_album}</b>
          </li>
          <li>
            <b>Fans: {nb_fan}</b>
          </li>
        </ul>
      </section>
    </div>
  );
};

export default Artist;
