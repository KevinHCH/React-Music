import Request from "../Request";

const getAlbum = (id) => {
  const request = new Request();
  return request.get(`/album/${id}`);
};

export default getAlbum;
