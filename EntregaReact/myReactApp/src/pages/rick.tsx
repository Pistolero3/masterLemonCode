import React from "react";
import { Link } from "react-router-dom";
import { TableRow } from "../components/TableRow";
import type { MemberEntity } from "../model";
import { GetRickAndMorty, GetRickCharacter } from "../services/GetInfoFromApi";
import { SearchNav } from "../components/SearchNav";
import { TableHeader } from "../components/TableHeader";
import { useDebounce } from "use-debounce";
import Button from "@mui/material/Button";

export const RickPage: React.FC = () => {
  const [members, setMembers] = React.useState<MemberEntity[]>([]);
  const [page, setPage] = React.useState<number>(1);
  const [query, setQuery] = React.useState<string>("");
  const [inputValue, setInputValue] = React.useState<string>("");
  const [debouncedQuery] = useDebounce(query, 1000);

  const titles = ["Avatar", "Species", "Name", "Location", "Status"];

  React.useEffect(() => {
    GetRickAndMorty(page).then((resp) => setMembers(resp.results));
  }, [page]);

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const character = await GetRickCharacter(query);
        if (character && character.results) {
          setMembers(character.results);
        } else {
          alert(`${query} not found`);
          setInputValue("");
        }
      } catch (error) {
        console.error("Error fetching character:", error);
      }
    };

    fetchData();
  }, [debouncedQuery]);

  const inputHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value;
    setInputValue(newValue);
    setQuery(newValue);
  };

  return (
    <>
      <h2>Hello from Rick and Morty World</h2>
      <div className="searchContainer">
        <SearchNav
          inputHandler={inputHandler}
          inputValue={inputValue}
          buttonText="Back to Github"
          buttonDirection="/list"
        />
      </div>
      <div className="rickAndMortyContainer">
        <TableHeader titles={titles} />
        {members.map((member) => (
          <TableRow item={member} key={member.id} />
        ))}
      </div>
      <div className="pagination">
        <Button
          variant="outlined"
          onClick={() => setPage(page - 1)}
          disabled={page === 1}
        >
          Previous
        </Button>
        <Button
          variant="outlined"
          color="secondary"
          onClick={() => setPage(page + 1)}
          disabled={page === 42}
        >
          Next
        </Button>
      </div>
    </>
  );
};

export default RickPage;
