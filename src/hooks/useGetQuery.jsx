import { useLocation } from "react-router-dom";
import { useState, useMemo } from "react";


export const useGetQuery = (queryName) => {

  const { search } = useLocation();
  const [query, setQuery] = useState("");
  
  useMemo(() => {

    const url =  new URLSearchParams(search);
    const queryValue = url.get(queryName);

    const formatedQuery = queryValue.trim().toLowerCase();

    setQuery(formatedQuery);

  }, [search]);


  return {query}
}