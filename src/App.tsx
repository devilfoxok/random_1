import { useState } from "react";
import "./App.css";
import Button from "./components/Button";
import MoveArounder from "./components/MoveArounder";
import PeopleList from "./components/PeopleList";
import PriceTag from "./components/PriceTag";

export interface IPeople {
  name: string;
  birth_year: string;
}

function App() {
  const [people, setPeople] = useState<IPeople[]>([]);

  const fetchPosts = async (): Promise<void> => {
    try {
      const res = await fetch("https://swapi.dev/api/people");
      const json: { results?: IPeople[] } = await res.json();

      if (json.results) {
        const filteredPeople: IPeople[] = json.results.map((item) => {
          const filteredItem: Partial<IPeople> = {};

          filteredItem.name = item.name;
          filteredItem.birth_year = item.birth_year;

          return filteredItem as IPeople;
        });

        setPeople(filteredPeople);
      }
    } catch (e) {
      console.log("Fetch error: ", e);
    }
  };

  return (
    <>
      <PriceTag />
      <Button onClick={fetchPosts} />
      <PeopleList people={people}/>
      <MoveArounder />
    </>
  );
}

export default App;
