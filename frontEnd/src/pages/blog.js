import react, { useState, useEffect } from "react";
import "../styles/blog.css";
import Padlet from "../components/padlet";
import tineraryActions from "../redux/actions/tineraryActions";
import { connect } from "react-redux";
import Acccordion from "../components/acoordion";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import TextareaAutosize from '@mui/material/TextareaAutosize';
import AddBoxIcon from "@mui/icons-material/AddBox";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";



function Blog(props) {
  const [date, setdate] = useState([]);
  const [detalleText, setdetalleText] = useState("");
  const [dateTitle, setdateTitle] = useState("");
 const [reload, setReload] = useState(false)
  
  useEffect(() => {  
   
      props.getTineraries().then((res) =>setdate(res))
          
  }, [reload]);

  async function addNote() {
    const commentData = {
      title: dateTitle,
      text: detalleText,
    }; 
   
    await props.uploadTinerary(commentData);
   setReload(!reload)
  }

  async function deleteNote(id) {

    await props.deleteTin(id)
     // .then((res) =>//setNotes(...res))
setReload(!reload)
  }

  
console.log(date)
  return (
    <>
   
    <div className="containerBlog">
      <div className="blog">
        <div>
          <h1 className="title red">BLOG</h1>
          <h2 className="h2Blog">Tell us about you and the wine</h2>
        </div>
        {props.user ? (

          <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
          
        >
          <Typography>Ingresa tu tema</Typography>
        </AccordionSummary>
        <AccordionDetails style={{  display: 'flex', flexDirection: 'column', alignItems: 'center',}}>
        <TextareaAutosize
        onInput={(event) => setdateTitle(event.target.value)}
        aria-label="empty textarea"
        placeholder="Ingresa el titulo"
        style={{ width: 300, marginBottom: 20 }}
      />
      <TextareaAutosize
      onInput={(event) => setdetalleText(event.target.value)}
        aria-label="empty textarea"
        placeholder="Ingresa el texto"
        style={{ width: 600, height: 100 }}
      />
      <AddBoxIcon
      onClick={() => {
        addNote();
      }}
    />
        </AccordionDetails>
      </Accordion>
        ): null}
        

        <div className="containerCardBlog">
          {date.topics?.map((date) => (
            <>
             <Padlet data={date} />
             <div style={{ display: 'flex', flexDirection: 'column' }}>
             {date.userName === props.user.userName ? (

               <DeleteIcon  onClick={() => {
              deleteNote(date._id);
            }}/>
             ): null}
            
           
             </div>
            
            </>
           
        
          ))}  
        </div>
      </div>
    </div>
    </>
  );
}
const mapDispatchToProps = {
  getTineraries: tineraryActions.getTineraries,
  uploadTinerary: tineraryActions.uploadTinerary,
  deleteTin: tineraryActions.deleteTin,
};
const mapStateToProps = (state) => {
  return { user: state.userReducer.user };
};
export default connect(mapStateToProps, mapDispatchToProps)(Blog);
