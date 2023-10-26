import * as React from 'react';
import { useLocation } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CardActions from '@mui/material/CardActions';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar/Avatar';
import IconButton from '@mui/material/IconButton/IconButton';
import { CharacterEntityVm } from '../character-collection.vm';
import * as classes from './hotel-card.styles';

interface Props {
  character: CharacterEntityVm;
  onEdit?: (id: string) => void;
}

export const CharacterCard: React.FunctionComponent<Props> = (props) => {
  const { character, onEdit } = props;

  const location = useLocation();

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
                onClick={() => onEdit(character.id)}
                image={character.image}
                title={character.name}
                style={{ borderRadius: 120, height: 0, padding: '50.25%' }}
              />
              <Typography variant="subtitle1" gutterBottom>
                {`Current Location: ${character.location.name}`}
              </Typography>
            </div>
          </CardContent>
          <CardActions>
            <IconButton onClick={() => onEdit(character.id)}>
              {'Details of this Character'}
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
            <Typography variant="subtitle1" gutterBottom>
              {`${character.name} was born in: ${character.origin.name}`}
            </Typography>
            <Typography variant="subtitle1" gutterBottom>
              {`Gender: ${character.gender}`}
            </Typography>
          </div>
        </CardContent>
        <CardActions></CardActions>
      </Card>
    </div>
  );
};
