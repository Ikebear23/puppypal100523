import { useState } from "react";
import { puppyList } from "./data";
import "./App.css";

function App() {
  const [puppies, setPuppies] = useState(puppyList);
  const [pupId, setPupid] = useState(null);
  const featuredpup = puppies.find((pup) => pup.id === pupId);

  return (
    <>
      {puppies.map((puppy) => {
        return (
          <p
            onClick={() => {
              setPupid(puppy.id);
            }}
            key={puppy.id}
          >
            {puppy.name}
          </p>
        );
      })}
      {pupId && (
        <div>
          <h2>{featuredpup.name}</h2>
          <p>{featuredpup.email}</p>
        </div>
      )}
    </>
  );
}

export default App;
