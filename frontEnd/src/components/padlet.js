import React, { useEffect, useState } from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import FavoriteIcon from "@mui/icons-material/Favorite";
// import MoreVertIcon from '@mui/icons-material/MoreVert';
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { connect } from "react-redux";
import tineraryActions from "../redux/actions/tineraryActions";
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import "../styles/blog.css";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

function RecipeReviewCard(props) {
  const [expanded, setExpanded] = useState(false);
  const [notes, setNotes] = useState(props.data);
  const [modifidTitle, setModifidTitle] = useState();
  const [modifidText, setModifidText] = useState();
 const [inputText, setInputText] = useState()
const [reload, setreload] =useState(false)
 
  async function likesOrDislikes(topicId) {
    await props.likeDislike(topicId).then((res) => console.log(res))
  }

  async function deleteNote(id) {

    await props.deleteTin(id)
      .then((res) =>setNotes(...res))
setreload(!reload)
  }

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  async function updateNote(id) { 
    const commentData = {
      title: modifidTitle,
      text: modifidText,
      id: id
    };
    await props.modifyTopic(commentData).then((res) =>setNotes(res))
    setreload(!reload)
  }

  async function addComentar(itinerarioId) {
      const comment = {
        id: itinerarioId,
        comment: inputText
      }
   
      await props.addComment(comment).then((res) =>setNotes(res), setInputText(""))
      setreload(!reload)
  }

  return (
    <>
   
    <div className="cardBlog">
      <Card sx={{ maxWidth: 345 }} className="Card">
        <CardHeader
          avatar={<Avatar aria-label="recipe">{notes?.userPhoto}</Avatar>}
          action={
            props.user.userName === notes.userName ? (
              <div className="iconblog">
                <EditIcon onClick={() => {
                  updateNote(notes._id)
                }} />

              </div>
            ) : null
          }
          title={notes.userName}
          subheader={new Date(notes.date).toUTCString()}
        />
{props.user.userName === notes.userName ? ( <CardContent>
  <div>
    <h3
      suppressContentEditableWarning={true}
      contentEditable
      onInput={(event) => setModifidTitle(event.currentTarget.textContent)}
    >{notes.title}</h3>
  </div>
  <div>
    <p
      suppressContentEditableWarning={true}
      contentEditable
      onInput={(event) => setModifidText(event.currentTarget.textContent)}
    > {notes?.text}</p>
  </div>
</CardContent>) : (<CardContent>
  <div>
    <h3
     
    >{notes.title}</h3>
  </div>
  <div>
    <p
     
    > {notes?.text}</p>
  </div>
</CardContent>)}
       
        <CardActions disableSpacing>
          <IconButton
          onClick={() => {
            likesOrDislikes(notes._id);
          }}
          aria-label="add to favorites">
            <FavoriteIcon />
            <p>{notes.likes.length}</p>
          </IconButton>
          <IconButton aria-label="share"></IconButton>
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
            <CardHeader title="Comments" />
           
          {notes.comments.map((dato, index) => (

            <div className="CommentBody">
            <Avatar aria-label="recipe">{dato.profile}</Avatar>
              <h3>{dato.user}</h3> 
              <p className="Comment">{dato.comment}</p>
            </div>
     ))}
    

        <div className="BoxComment">
              <Typography>Leave your comment</Typography>
              <textarea className="textarea" onChange={(event) => setInputText(event.target.value)} />
              <button onClick={() => addComentar(notes._id)} className="btnComment">Comment</button>
            </div>    
           
    
            
          </CardContent>
        </Collapse>
      </Card>
    </div>
    </>
  );
}
const mapDispatchToProps = {
  deleteTin: tineraryActions.deleteTin,
  modifyTopic: tineraryActions.modifyTopic,
  getTineraries: tineraryActions.getTineraries,
  addComment: tineraryActions.addComment,
  likeDislike: tineraryActions.likeDislike,
};
const mapStateToProps = (state) => {
  return { user: state.userReducer.user };
};

export default connect(mapStateToProps, mapDispatchToProps)(RecipeReviewCard);
