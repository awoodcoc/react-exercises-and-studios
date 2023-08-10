import data from "../data.json";
import { useState } from "react";

export default function MyProjects() {
  const [index, setIndex] = useState(0);
  const languages = data.map((lang) => {});
  function handleClick() {
    if (index < data.projects.length - 1) {
      setIndex(index + 1);
    } else {
      setIndex(0);
    }
  }
  return (
    <div>
      <button onClick={handleClick}>Next</button>
      <ul>
        <li>{data.language}</li>
        <li>{data.country}</li>
        <li>{data.speakers}</li>
        <li>{data.visited}</li>
      </ul>
    </div>
  );
}
