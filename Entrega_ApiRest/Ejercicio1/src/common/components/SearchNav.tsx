import React from 'react';
import { Link } from 'react-router-dom';

import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

interface Props {
  inputHandler: (event: React.ChangeEvent<HTMLInputElement>) => void;
  searchHandler?: () => void;
  inputValue: string;
}

export const SearchNav: React.FC<Props> = (props) => {
  return (
    <>
      <TextField
        style={{ marginBottom: '10px' }}
        id="standard-basic"
        label="Search"
        variant="standard"
        type="text"
        placeholder="Search"
        value={props.inputValue}
        onChange={props.inputHandler}
      ></TextField>
      <Button variant="contained" type="submit" onClick={props.searchHandler}>
        Search
      </Button>
    </>
  );
};
