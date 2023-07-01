import useFetch from "../Hooks/useFetch";

export default function Fetch() {
  const url = "https://swapi.dev/api/people/";
  const { data } = useFetch(url, null);
  console.log(data);
  return (
    <div>{data && data.results.map((el) => <p key={el.url}>{el.name}</p>)}</div>
  );
}
