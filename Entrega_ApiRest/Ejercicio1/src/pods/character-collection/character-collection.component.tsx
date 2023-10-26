import * as React from 'react';
import Button from '@mui/material/Button';
import { CharacterEntityVm } from './character-collection.vm';
import { CharacterCard } from './components/hotel-card.component';
import * as classes from './character-collection.styles';

interface Props {
  characterCollection: CharacterEntityVm[];
  onChangePage: () => void;
  onChangeBackPage: () => void;
  onEdit: (id: string) => void;
  onDelete: (id: string) => void;
}

export const CharacterCollectionComponent: React.FunctionComponent<Props> = (
  props
) => {
  const { characterCollection, onChangePage, onEdit, onChangeBackPage } = props;

  return (
    <div className={classes.root}>
      <div>
        <Button variant="contained" color="primary" onClick={onChangeBackPage}>
          Previous Page
        </Button>
        <Button
          style={{ marginLeft: '8px' }}
          variant="contained"
          color="primary"
          onClick={onChangePage}
        >
          Next Page
        </Button>
      </div>

      <ul className={classes.list}>
        {characterCollection.map((character) => (
          <li key={character.id}>
            <CharacterCard character={character} onEdit={onEdit} />
          </li>
        ))}
      </ul>
    </div>
  );
};
