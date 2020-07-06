import React, { useEffect } from "react";
import "./style.css";
const Tracklist = (props) => {
  const tracks = props.tracks.data;
  const artist = tracks[0].artist.name;

  function secondsToHms(d) {
    d = Number(d);
    const h = Math.floor(d / 3600);
    const m = Math.floor((d % 3600) / 60);
    const s = Math.floor((d % 3600) % 60);

    let mm = m < 10 ? `0${m}` : m;
    let ss = s < 10 ? `0${s}` : s;

    return `${mm}:${ss} mins`;
  }

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
          if (audio != e.target) audio.pause();
        });
      },
      true
    );
  };

  useEffect(() => {
    setVolume();
    handleAudios();
  }, []);
  return (
    <ul className="song-list">
      <li className="header">
        <b>Title</b>
        <b>Duration</b>
        <b>Music</b>
      </li>
      {tracks.map((track) => (
        <li key={track.id}>
          <b>{track.title}</b> 
          <a
            href={`https://www.youtube.com/results?search_query=${artist}+${track.title}`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn search"
          >
            Search
          </a>
          <b>{secondsToHms(track.duration)}</b>
          <audio controls>
            <source src={track.preview} />
          </audio>
        </li>
      ))}
    </ul>
  );
};
export default Tracklist;
