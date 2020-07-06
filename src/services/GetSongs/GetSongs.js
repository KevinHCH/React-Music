import Request from "../Request";

const getSongsByArtist = (artist) => {
  const request = new Request();
  return request.get(`/search?q=${artist}`);
};

export default getSongsByArtist;
