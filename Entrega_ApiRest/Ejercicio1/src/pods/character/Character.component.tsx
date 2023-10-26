import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import { Lookup } from 'common/models';
import { formValidation } from './Character.validations';
import { Character } from './Character.vm';
import * as classes from './Character.styles';
import { CharacterCard } from '../character-collection/components/hotel-card.component';
import { CharacterEntityVm } from 'pods/character-collection/character-collection.vm';

interface Props {
  character: CharacterEntityVm;
  onSave: (character: Character) => void;
}

export const CharacterComponent: React.FunctionComponent<Props> = (props) => {
  const navigate = useNavigate();
  const { character, onSave } = props;

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <CharacterCard character={character} />

      <Button
        style={{ width: '500px' }}
        onClick={handleBack}
        type="submit"
        variant="contained"
        color="primary"
      >
        Back
      </Button>
    </div>
  );
};
