import Request from "../Request";

const getArtist = (artist) => {
  const request = new Request();
  return request.get(`/artist/${artist}`);
};

export default getArtist;
