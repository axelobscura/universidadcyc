import * as React from 'react';
import Link from 'next/link';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function Carta({ menu, contenido }) {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  if(!menu){
    return(
      <h2>Loading</h2>
    )
  }

  const menuFormat = menu.split(' ').join('-').toLowerCase();

  return (
    <Card sx={{ maxWidth: 245, background: '#141a21', margin: '10px 10px' }}>
      {/* 
      <Link href={`/categoria/${menuFormat}`}>
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
              R
            </Avatar>
          }
          action={
            <IconButton aria-label="settings">
              <MoreVertIcon  style={{color: '#fff'}} />
            </IconButton>
          }
          title={contenido.titulo}
        />
      </Link>
      */}
      <Link href={`/categoria/${menuFormat}`}>
        <CardMedia
          component="img"
          image={`https://webinarsenconcreto.com/${contenido.imagen}`}
          alt="Paella dish"
        />
      </Link>
      {/* 
      <CardContent>
        <Typography variant="body2" color="text.white">
          Durabilidad del concreto...
        </Typography>
      </CardContent>
      */}
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon style={{color: '#fff'}} />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon style={{color: '#fff'}} />
        </IconButton>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon style={{color: '#fff'}} />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Method:</Typography>
          <Typography paragraph>
            Heat 1/2 cup of the broth in a pot until simmering, add saffron and set
            aside for 10 minutes.
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}