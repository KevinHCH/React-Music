import React, { Fragment, useState, useEffect } from "react";
import { useRoute } from "wouter";
import Tracklist from "../Tracklist";
import getAlbum from "../../services/GetAlbum";
import "./style.css";

const Label = ({ title, text }) => {
  return (
    <p>
      <b>{title}: </b> {text}
    </p>
  );
};
const Album = () => {
  const [album, setAlbum] = useState({});
  const [loading, setLoading] = useState(true);
  const [match, params] = useRoute("/album/:id");
  const { id } = params;
  useEffect(() => {
    const loadAlbum = async (id) => {
      const data = await getAlbum(id);
      setAlbum(data);
      setLoading(false);
    };
    loadAlbum(id);
  }, [id]);
  // El loading es muy importante para esperar la respuesta de la API, asi se evita renderizar el component 2 veces
  if (loading) return null;
  const {
    artist,
    genres,
    link,
    nb_tracks,
    release_date,
    title,
    tracks,
    available,
    cover_medium
  } = album;

  const { name, picture_big } = artist;
  const isAvailable = available ? "yes" : "no"

  return (
    <>
    <div className="album">
      <header>
        <h3>{title}</h3>
        <div className="subtitle">
          <h4>{name}</h4>
          <figure>
            <img src={picture_big} alt={name} title={name} />
          </figure>
        </div>
      </header>
      <div className="wrapper">
        <div>
        <div className="genres">
          <b>Genres: </b>
          {genres?.data.map((genre) => (
            <span key={genre.id}>{genre.name}</span>
          ))}
        </div>
        <div className="info">
          <Label title="Release date" text={release_date} />
          <Label title="Tracks" text={nb_tracks} />
          <Label title="Available" text={isAvailable} />

        </div>
        </div>
        <div>
          <figure>
            <img src={cover_medium} alt={name} />
          </figure>
        </div>
      </div>
          <Tracklist tracks={tracks} />
    </div>
    </>
  );
};

export default Album;
