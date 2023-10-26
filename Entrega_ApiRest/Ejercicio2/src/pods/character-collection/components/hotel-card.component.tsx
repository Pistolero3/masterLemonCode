import * as React from 'react';
import { useLocation } from 'react-router-dom';
import Axios from 'axios';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CardActions from '@mui/material/CardActions';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar/Avatar';
import EditIcon from '@mui/icons-material/Edit';
import IconButton from '@mui/material/IconButton/IconButton';
import Button from '@mui/material/Button';
import { CharacterEntityVm } from '../character-collection.vm';
import * as classes from './hotel-card.styles';
import { Character } from 'pods/character/Character.vm';
import { getCharacter } from 'pods/character/api';
import { useNavigate } from 'react-router-dom';
import { linkRoutes } from 'core/router';

interface Props {
  character: CharacterEntityVm;
  onEdit?: (id: string, character?: any) => void;
  onSave?: (character: Character) => void;
}

export const CharacterCard: React.FunctionComponent<Props> = (props) => {
  const { character, onEdit, onSave } = props;
  const [updatedCharacter, setUpdatedCharacter] = React.useState(character);
  const navigate = useNavigate();

  const location = useLocation();
  const bestSentence = character.bestSentences
    ? character.bestSentences
    : 'No best sentence yet';

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUpdatedCharacter({
      ...character,
      [name]: value,
    });
  };

  const handleUpdateCard = (id) => {
    const baseUrl = `http://localhost:3000/characters/${character.id}`;
    Axios.put(baseUrl, updatedCharacter);
    navigate(-1);
  };

  if (location.pathname === '/characters') {
    return (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
        }}
      >
        <Card
          style={{
            height: '100%',
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
          }}
        >
          <CardHeader
            avatar={
              <Avatar
                style={{
                  backgroundColor: 'blue',
                  color: 'white',
                  width: '100px',
                }}
                aria-label="Character"
              >
                {character.status}
              </Avatar>
            }
            title={character.name}
            subheader={character.species}
          />
          <CardContent>
            <div className={classes.content}>
              <CardMedia
                onClick={() => {
                  getCharacter(character.id);
                  navigate(linkRoutes.seeCharacter(character.id));
                }}
                image={character.image}
                title={character.name}
                style={{ borderRadius: 120, height: 0, padding: '50.25%' }}
              />
              <Typography variant="subtitle1" gutterBottom>
                {`Current Location: ${character.location.name}`}
              </Typography>
              <Typography variant="subtitle1" gutterBottom>
                {bestSentence}
              </Typography>
            </div>
          </CardContent>
          <CardActions>
            <IconButton
              onClick={() => navigate(linkRoutes.seeCharacter(character.id))}
            >
              {'Edit best sentence'}
            </IconButton>
            <IconButton
              onClick={() => navigate(linkRoutes.seeCharacter(character.id))}
            >
              <EditIcon />
            </IconButton>
          </CardActions>
        </Card>
      </div>
    );
  }

  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Card style={{ width: '500px', height: '700px' }}>
        <CardHeader
          avatar={
            <Avatar
              style={{
                backgroundColor: 'blue',
                color: 'white',
                width: '100px',
              }}
              aria-label="Character"
            >
              {character.status}
            </Avatar>
          }
          title={character.name}
          subheader={character.species}
        />
        <CardContent>
          <div className={classes.content}>
            <CardMedia
              onClick={() => onEdit(character.id)}
              image={character.image}
              title={character.name}
              style={{ borderRadius: 120, height: 0, padding: '50.25%' }}
            />
            <Typography variant="subtitle1" gutterBottom>
              {`Current Location: ${character.location.name}`}
            </Typography>
            <input
              type="text"
              name="bestSentences"
              value={updatedCharacter.bestSentences}
              onChange={handleInputChange}
              placeholder="Insert best sentence"
            ></input>
          </div>
        </CardContent>
        <Button
          style={{ width: '100%', marginTop: '32px' }}
          type="submit"
          variant="contained"
          color="primary"
          onClick={handleUpdateCard}
        >
          Actualizar Tarjeta
        </Button>
      </Card>
    </div>
  );
};
