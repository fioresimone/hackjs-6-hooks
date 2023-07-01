import { useEffect, useState } from "react";
import useDebounce from "../Hooks/useDebounce";

export default function Debounce() {
  const [searched, setSearched] = useState("");

  const [results, setResults] = useState([]);

  const debouncedSearched = useDebounce(searched, 3000);

  useEffect(() => {
    if (debouncedSearched) {
      API(debouncedSearched).then((results) => setResults(results));
    } else {
      setResults([]);
    }
  }, [debouncedSearched]);

  return (
    <div>
      <input
        type="text"
        onChange={(e) => setSearched(e.target.value)}
        className="border border-3 border-gray-900 w-96"
      />

      <ul className="bg-red-300">
        {results.map((el, i) => (
          <li key={i}>{el.name}</li>
        ))}
      </ul>
    </div>
  );
}

function API(search) {
  return fetch(`https://swapi.dev/api/people/?search=${search}`)
    .then((r) => r.json())
    .then((r) => r.results)
    .catch((error) => console.log(error));
}
