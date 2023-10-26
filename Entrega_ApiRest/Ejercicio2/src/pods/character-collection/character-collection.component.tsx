import * as React from 'react';
import Button from '@mui/material/Button';
import { CharacterEntityVm } from './character-collection.vm';
import { CharacterCard } from './components/hotel-card.component';
import * as classes from './character-collection.styles';

interface Props {
  characterCollection: CharacterEntityVm[];
  onCreateHotel: () => void;
  onEdit: (id: string, character: any) => void;
  onDelete: (id: string) => void;
}

export const CharacterCollectionComponent: React.FunctionComponent<Props> = (
  props
) => {
  const { characterCollection, onCreateHotel, onEdit, onDelete } = props;

  return (
    <div className={classes.root}>
      <Button variant="contained" color="primary" onClick={onCreateHotel}>
        Next Page
      </Button>

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
