import React, { useState, useEffect } from "react";
import API_KEY from "./keys";

const CONTEXT_KEY = "424bf47822d1ae43b";

const useGoogleSearch = (term) => {
  //creating my custom hook,
  const [data, setData] = useState(null);
  //the term is whatever someone types inside the input, like elon musk from the data layer
  //whenever the terms changes we want the use effect to be called
  //then the useEffect will get the all the search results and take you there
  useEffect(() => {
    const fetchData = async () => {
      fetch(
        `https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${term}`
        //get the json from the response
      )
        .then((response) => response.json())
        .then((result) => {
          setData(result);
        });
    };
    //call the function
    fetchData();
  }, [term]);
  //return the data which is an object
  return { data };
};

//basically the use Effect will get the data from the search result have access to it with data then display it in the google search

export default useGoogleSearch;
