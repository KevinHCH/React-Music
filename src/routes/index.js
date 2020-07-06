import React from "react";
import { Route } from "wouter";

import Test from "../components/Test/Test";
import Results from "../components/Results"
import Search from "../components/Search/Search";
import Artist from "../components/Artist"
import Album from "../components/Album"
const RoutePaths = () => {
  return (
    <>
      <Route path="/" exact component={Search}>
        Home
      </Route>
      <Route path="/test" component={Test}></Route>
      <Route path="/search/:query" component={Results}>Search</Route>
      <Route path="/album/:id" component={Album} />
      <Route path="/artist/:id" component={Artist}/>
    </>
  );
};

export default RoutePaths;
