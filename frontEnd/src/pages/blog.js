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
        <>
        <div className="containerBlog">
            <div className="blog">
                <>
                <h1 className="title red">BLOG</h1>
                <h2 className="h2Blog">Tell us about you and the wine</h2>
                </>
                {props.user ? (
                    <Accordion>
                        <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
                            <Typography>Tell us!</Typography>
                        </AccordionSummary>
                        <AccordionDetails style={{  display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                            <TextareaAutosize onChange={(event) => setTitle(event.target.value)} value={title} aria-label="empty textarea" placeholder="Title" style={{ width: 300, marginBottom: 20 }}/>
                            <TextareaAutosize onChange={(event) => setText(event.target.value)} value={text} aria-label="empty textarea" placeholder="Ingresa el texto" style={{ width: 600, height: 100 }}/>
                            <AddBoxIcon onClick={() => addNote()} />
                        </AccordionDetails>
                    </Accordion>) : null }
                <div className="containerCardBlog">
                    {notes.map((note) => (
                        <div key={note._id}> 
                            <Padlet note={note} />
                        </div>
                    ))}  
                </div>
            </div>
        </div>
        </>
    )

}

const mapDispatchToProps = {
    getTopics: topicActions.getTopics,
    uploadTopic: topicActions.uploadTopic,
    deleteTopic: topicActions.deleteTopic,
}

const mapStateToProps = (state) => {
    return {user: state.userReducer.user}
}

export default connect(mapStateToProps, mapDispatchToProps)(Blog)