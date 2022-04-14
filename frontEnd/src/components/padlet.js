//from react
import {useState,useEffect} from "react"

//from redux
import {connect} from "react-redux"
import topicActions from "../redux/actions/topicActions"

//from app
import "../styles/blog.css"
import Comments from './comments'

//from libraries
import {styled} from "@mui/material/styles"
import EditIcon from "@mui/icons-material/Edit"
import IconButton from "@mui/material/IconButton"
import FavoriteIcon from '@mui/icons-material/Favorite'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import {Typography} from '@mui/material'


const ExpandMore = styled((props) => {
    const {expand, ...other } = props
    return <IconButton {...other} />
})(({ theme, expand }) => ({
      transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
      marginLeft: "auto",
      transition: theme.transitions.create("transform", {duration: theme.transitions.duration.shortest})
}))

function Padlet(props) {

    //console.log(props)

    const [note, setNote] = useState(props.note)
    const [title,setTitle] = useState(props.note.title)
    const [text,setText] = useState(props.note.text)
    const [newButton,setNewButton] = useState(false)
    const [reload, setReload] =useState(false)

    useEffect(() => {  
        props.getOneTopic(props.note._id)
          .then(res => setNote(...res))
          //console.log(note)
    }, [reload])

    async function modifyNote(event) {
      event.preventDefault()
        const commentData = {
          id: props.note._id,
          title: title,
          text: text
        }
        await props.modifyTopic(commentData)
        setReload(!reload)
        setNewButton(false)
    }

    function toChangeInputs(event) {
        setNewButton(true)
    }

    async function toLike() {
        await props.likeTopic(props.note._id)
        setReload(!reload)
    }

    return (
      <>
      {props.user ?
          (props.user.id === props.note.userTopic._id ? 
                  (<div className='padleTopic'>
                      {newButton ? 
                      <>
                          <textarea onChange={(event) => setTitle(event.target.value)} defaultValue={note.title} />
                          <textarea onChange={(event) => setText(event.target.value)} defaultValue={note.text} />
                          <EditIcon id={note._id} onClick={modifyNote} />
                      </> : <>
                          <textarea disabled value={note.title} />
                          <textarea disabled value={note.text} />
                          <EditIcon id={note._id} onClick={toChangeInputs} />
                      </>
                      }
                      <IconButton onClick={toLike} aria-label="cart">
                          {note.likes.includes(props.user.id) ?
                              <FavoriteIcon /> :
                              <FavoriteBorderIcon />}
                          <Typography sx={{color: 'black', paddingLeft: '5px'}}>{note.likes.length} likes</Typography>
                      </IconButton>
                  </div>) : (<div>
                      <textarea disabled value={note.title} />
                      <textarea disabled value={note.text} />
                      <IconButton onClick={toLike} aria-label="cart">
                          {note.likes.includes(props.user.id) ?
                              <FavoriteIcon /> :
                              <FavoriteBorderIcon />}
                          <Typography sx={{color: 'black', paddingLeft: '5px'}}>{note.likes.length} likes</Typography>
                      </IconButton>
                  </div>)
          ) : ( <>
                <textarea disabled value={note.title} />
                <textarea disabled value={note.text} />
                <IconButton aria-label="cart">
                    <FavoriteBorderIcon />
                    <Typography sx={{color: 'black', paddingLeft: '5px'}}>{note.likes.length} likes</Typography>
                </IconButton>
            </>
          )
        }
        <Comments note={props.note} /></>
    )
}

const mapDispatchToProps = {
    getOneTopic: topicActions.getOneTopic,
    modifyTopic: topicActions.modifyTopic,
    likeTopic: topicActions.likeTopic
}

const mapStateToProps = (state) => {
    return {user: state.userReducer.user}
}

export default connect(mapStateToProps, mapDispatchToProps)(Padlet)