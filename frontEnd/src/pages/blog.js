//from react
import {useState,useEffect} from "react"

//from redux
import {connect} from "react-redux"
import topicActions from "../redux/actions/topicActions"

//from app
import "../styles/blog.css"
import Padlet from "../components/padlet"

//from libraries
import Accordion from '@mui/material/Accordion'
import AccordionSummary from '@mui/material/AccordionSummary'
import AccordionDetails from '@mui/material/AccordionDetails'
import AddBoxIcon from "@mui/icons-material/AddBox"
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import TextareaAutosize from '@mui/material/TextareaAutosize'
import Typography from '@mui/material/Typography'
import AddIcon from '@mui/icons-material/Add'



function Blog(props) {

    const [notes,setNotes] = useState([])
    const [title,setTitle] = useState("")
    const [text,setText] = useState("")
    const [reload, setReload] =useState(false)

    useEffect(() => {  
        props.getTopics().then((res) =>setNotes(res))
    }, [reload])

    async function addNote(event) {
        const commentData = {
            title: title,
            text: text
        }   
        await props.uploadTopic(commentData)
        setTitle("")
        setText("")
        setReload(!reload)
    }

    return (
        <div className="containerBlog">
            <div className="blog">
                <div>
                    <h1 className="title red">BLOG</h1>
                    <h2 className="h2Blog">Tell us about you and the wine</h2>
                </div>
                {/* {props.user ? (
                    <Accordion>
                        <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
                            <Typography>Post something!</Typography>
                        </AccordionSummary>
                        <AccordionDetails style={{  display: 'flex', flexDirection: 'column', alignItems: 'center', width:'100%', minWidth:300}}>
                            <TextareaAutosize className="textarea" onChange={(event) => setTitle(event.target.value)} value={title} aria-label="empty textarea" placeholder="Title" style={{ width: 275, marginBottom: 20, padding:'5px' }}/>
                            <TextareaAutosize className="textarea" onChange={(event) => setText(event.target.value)} value={text} aria-label="empty textarea" placeholder="Topic" style={{ width: 300, minHeight: 100, maxHeight:200, marginBottom: 20, padding:'5px', overflowY: 'scroll'}}/>
                            <AddIcon onClick={() => addNote()} sx={{bgcolor: 'black', '&:hover': {bgcolor: 'rgb(178, 18, 52)'}, padding: '3px', color: 'white', width: '30px', height: '30px', borderRadius: '15px'}}/>
                        </AccordionDetails>
                    </Accordion>) 
                    : null } */}
                <div className="containerCardBlog">
                    {notes.map((note) => (
                        <div key={note._id}> 
                            <Padlet note={note}/>
                        </div>
                    ))}
                    {props.user ? (
                        <div className="containerPadlet newPadlet">
                            <div className="postTopic">
                                {/* <img className="photoPadlet" alt={props.user.userName} src={props.user.userPhoto} /> */}
                                {/* <h2>{props.user.userName}</h2> */}
                                <h2>Post something!</h2>
                            </div>
                            <div className='padleTopic'>
                                <div className="borderTop">
                                    <textarea className="textarea text-blog titleBlog setTopic" onChange={(event) => setTitle(event.target.value)} value={title} aria-label="empty textarea" placeholder="Title" />
                                    <textarea className="textarea text-blog bodyBlog setTopic" onChange={(event) => setText(event.target.value)} value={text} aria-label="empty textarea" placeholder="Topic"/>
                                    <AddIcon onClick={() => addNote()} sx={{bgcolor: 'white', '&:hover': {bgcolor: 'rgb(178, 18, 52)', color:'white'}, padding: '3px', color: 'black', width: '30px', height: '30px', borderRadius: '15px', margin:'9px'}}/>
                                </div>
                                <div className="emptyCommentSpace"></div>
                            </div>
                        </div>) 
                    : null }  
                </div>
            </div>
        </div>
    )

}

const mapDispatchToProps = {
    getTopics: topicActions.getTopics,
    modifyTopic: topicActions.modifyTopic,
    uploadTopic: topicActions.uploadTopic,
}

const mapStateToProps = (state) => {
    return {user: state.userReducer.user}
}

export default connect(mapStateToProps, mapDispatchToProps)(Blog)