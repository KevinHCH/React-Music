import React, { useState, useEffect, Fragment } from "react";
import { Link } from "wouter";
import style from "./style.css";
import Modal from "../Modal";
import Artist from "../Artist";

const Song = (props) => {
  const [showModal, setShowModal] = useState(false);
  const { title, duration, preview, artist, album } = props;
  const { id, name } = artist;
  const { id: albumId, cover_medium } = album;
  const formatedName = `${name} - ${title}`;
  const minute = 60;
  const formatedDuration =
    "0" +
    parseFloat(duration / minute)
      .toFixed(2)
      .replace(/\./, ":");

  const setVolume = (volume = "0.05") => {
    [...document.getElementsByTagName("audio")].forEach(
      (audio) => (audio.volume = volume)
    );
  };
  const handleAudios = () => {
    document.addEventListener(
      "play",
      (e) => {
        const audios = [...document.getElementsByTagName("audio")];
        audios.forEach((audio) => {
          if (audio != e.target) {
            e.target.parentElement.parentElement.classList.remove("mute");
            audio.pause();
          }
          audio.parentElement.parentElement.classList.add("mute");
        });
      },
      true
    );
  };
  useEffect(() => {
    setVolume();
    handleAudios();
    setShowModal(false);
  }, [showModal]);
  return (
    <Fragment >
    <div className="song mute">
      {/* // <div className={`${style.song}`}> */}
      <header>
        <h4>{title}</h4>
      </header>
      <section>
        <figure>
          <img src={cover_medium} alt={formatedName} title={formatedName} />
        </figure>
        <div>
          <p className="links">
            {/* <Link className="artist" href={`/artist/${id}`} >{name}</Link> */}
            <span className="artist" onClick={() => setShowModal(true)}>
              {name}{" "}
            </span>
            <Link className="album-name" href={`/album/${albumId}`}>
              Album
            </Link>
          </p>
          <p>
            <b>Duration:</b> {formatedDuration} min
          </p>
        </div>
        <audio volume="0.2" preload="auto" controls className="audioPlayer">
          <source src={preview} />
        </audio>
      </section>
      
    </div>
      <Modal show={showModal} component={<Artist id={id}  />} />
      </Fragment >
  );
};

export default Song;
