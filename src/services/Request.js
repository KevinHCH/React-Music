class Request {
  API_URL = process.env.REACT_APP_API_URL;
  API_KEY = process.env.REACT_APP_API_KEY;
  header = new Headers();

  constructor() {
    this.header.append("x-rapidapi-host", "deezerdevs-deezer.p.rapidapi.com");
    this.header.append("x-rapidapi-key", this.API_KEY);
    this.header.append("Content-Type", "application/json");
    this.header.append("useQueryString", true)
    
  }
  setHeader(key, value) {
    this.header.append(key, value);
  }
  get(urlParams) {
    const URL = `${this.API_URL}${urlParams}`;
    return fetch(URL, {
      method: "GET",
      headers: this.header
    })
      .then((res) => res.json())
      .catch(console.log);
  }//get
  post(data, url = "") {
    const URL = url ?? this.API_URL;
    return fetch(URL, {
      method: "POST",
      headers: this.header,
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .catch(console.log);
  }//post
  
}//Request

export default Request