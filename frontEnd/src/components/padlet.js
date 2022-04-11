import * as React from 'react';
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
import "../styles/blog.css"


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

export default function RecipeReviewCard() {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <div className="cardBlog">
      <Card sx={{ maxWidth: 345 }} className="Card">
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
              G
            </Avatar>
          }
          action={
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          }
          title="Guillermo Mejia"
          subheader="April 18, 2022"
        />
        <CardContent>
          <CardHeader
            title="Mr Wines cobra menos"
          />

          <Typography variant="body2" color="text.secondary" tittle="holaa">
            Hola, hoy me contacte con la pagina de Mr Wines y la verdad que me sorprendio el buen trabajo que hacen , no dudaron en asesorarme y elegir el mejor vino para el cumpleaños de mi suegro , muy conforme con las marcas que trabajan y muy buen precio , Recomendableee!!  
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <FavoriteIcon />
          </IconButton>
          <IconButton aria-label="share">
          </IconButton>
          <ExpandMore
            expand={expanded}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </ExpandMore>
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
          <CardHeader
            title="Comments"
          />
            <div className="CommentBody">
            <CardHeader className="NameComment"
            title="Jorge Gonzales"
          />
              <p className="Comment">Hola la verdad me hicieron quedar muy bien con mi suegro ami tambien!</p>
            </div>
            <div className="CommentBody">
            <CardHeader className="NameComment"
            title="Neymar Jr"
          />
              <p className="Comment">La verdad ami me parecen caros los precios</p>
            </div>
            <div className="CommentBody">
            <CardHeader className="NameComment"
            title="Leo Messi"
          />
              <p className="Comment">Concuerdo con Jorge</p>
            </div>
            <div className="BoxComment">
            <Typography>Leave your comment</Typography>
            <textarea className="textarea"/>
             <button className="btnComment">Comment</button>
            </div>
            
          </CardContent>
        </Collapse>
      </Card>
    </div>
  );
}
