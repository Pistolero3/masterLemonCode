import React from "react";
import { Link } from "react-router-dom";
import { TableRow } from "../components/TableRow";
import type { MemberEntity } from "../model";
import { GetMembers } from "../services/GetInfoFromApi";
import { SearchNav } from "../components/SearchNav";
import { TableHeader } from "../components/TableHeader";
import Button from "@mui/material/Button";

export const ListPage: React.FC = () => {
  const [members, setMembers] = React.useState<MemberEntity[]>([]);
  const [inputValue, setInputValue] = React.useState<string>("lemoncode");
  const [org, setOrg] = React.useState<string>(inputValue);
  const [pageNumber, setPageNumber] = React.useState<number>(0);

  const itemsPerPage = 10;
  const pagesVisited = pageNumber * itemsPerPage;
  const titles = ["Avatar", "Id", "Name"];

  React.useEffect(() => {
    const storedInputValue = localStorage.getItem("inputValue");
    if (storedInputValue) {
      setInputValue(storedInputValue);
      setOrg(storedInputValue);
    }
  }, []);

  React.useEffect(() => {
    GetMembers(org).then((json) => setMembers(json));
  }, [org]);

  const orgHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const orgSearch = () => {
    setPageNumber(0);
    setOrg(inputValue);
    localStorage.setItem("inputValue", inputValue);
  };

  return (
    <>
      <h2>Hello from List page</h2>
      <div className="searchContainer">
        <SearchNav
          inputHandler={orgHandler}
          searchHandler={orgSearch}
          inputValue={inputValue}
          buttonText="Rick & Morty"
          buttonDirection="/rick"
        />
      </div>
      <div className="list-user-list-container">
        <TableHeader titles={titles} />
        {members
          .slice(pagesVisited, pagesVisited + itemsPerPage)
          .map((member) => (
            <TableRow item={member} key={member.id} />
          ))}
      </div>
      <div className="pagination">
        <Button
          variant="outlined"
          onClick={() => setPageNumber(pageNumber - 1)}
          disabled={pageNumber === 0}
        >
          Previous
        </Button>
        <Button
          variant="outlined"
          color="secondary"
          onClick={() => setPageNumber(pageNumber + 1)}
          disabled={members.length <= (pageNumber + 1) * itemsPerPage}
        >
          Next
        </Button>
      </div>
    </>
  );
};
