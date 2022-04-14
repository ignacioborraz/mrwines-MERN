//importo de librerias externas
import React, {useEffect, useState} from 'react'
import {Box, Typography} from '@mui/material'
import {Link as LinkRouter} from "react-router-dom"
import EditIcon from '@mui/icons-material/Edit'
import DeleteIcon from '@mui/icons-material/Delete'
import AddIcon from '@mui/icons-material/Add'

import {connect} from 'react-redux'
import topicActions from '../redux/actions/topicActions'

function Comments(props) {

    //console.log(props)

    const [note, setNote] = useState(props.note)
    const [comments,setComments] = useState(props.note.comments)
    const [inputText,setInputText] = useState("")
    const [reload,setReload] = useState(false)
    const [newButton,setNewButton] = useState(false)

    useEffect(() => {  
        props.getOneTopic(props.note._id)
            .then(res => setNote(...res))
            console.log(note)
    }, [reload])

    async function toAdd(event) {
        const commentData = {
            topicId: note._id,
            comment: inputText
        }   
        await props.addComment(commentData)
        setInputText("")
        setReload(!reload)
    }
    
    async function toModify(event) {
        event.preventDefault()
        const commentData = {
            commentId: event.target.id,
            comment: comments,
        }
        await props.modifyComment(commentData)
        setReload(!reload)
        setNewButton(false)
    }

    function toChangeInputs(event) {
        setNewButton(true)
    }
    
    async function toDelete(event) {
        await props.deleteComment(event.target.id)
        setReload(!reload)
    }

    return (
        <>
            {note.comments?.map((comment) =>
                (props.user ?
                    (props.user.id !== comment.userId._id ? 
                        <Box key={comment._id} sx={{margin: '16px', padding: '8px',  display: 'flex', color: 'white', backgroundColor: 'rgb(0, 73, 48)'}}>
                            <div>
                                <img alt={comment.userId._id} src={comment.userId.userPhoto} />
                            </div>
                            <Box sx={{paddingLeft: '8px', width: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end'}}>
                                <Typography variant='subtitle1' sx={{width: '100%', padding: '8px', paddingTop: '0'}}>{comment.userId.email}</Typography>
                                <Typography variant="subtitle2" sx={{width: '100%', display: 'flex', padding: '8px',  color: 'black', backgroundColor: 'rgb(126, 196, 165)'}}>{comment.comment}</Typography>
                            </Box>
                        </Box> :
                        <Box key={comment._id} sx={{margin: '16px', padding: '8px',  display: 'flex', color: 'white', backgroundColor: 'rgb(74, 140, 111)'}}>
                            <div>
                                <img alt={comment.userId._id} src={comment.userId.userPhoto} />
                            </div>
                            <Box sx={{paddingLeft: '8px', width: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end'}}>
                                <Typography variant='h6' sx={{width: '100%', color: 'white'}}>{comment.userId.email}</Typography>
                                <Box sx={{width: '100%', display: 'flex', paddingTop: '8px', paddingLeft: '0'}}>
                                    {newButton ? 
                                    <>
                                        <textarea rows='2' onChange={(event) => setComments(event.target.value)} defaultValue={comment.comment} className='myInputforComment fredokaFont' />
                                        <EditIcon id={comment._id} onClick={toModify} sx={{bgcolor: 'rgb(196, 165, 126)', '&:hover': {bgcolor: 'rgba(196, 165, 126, 0.7)'}, padding: '5px', margin: '5px', color: 'white', width: '30px', height: '30px', borderRadius: '15px'}} />
                                    </> : <>
                                        <textarea rows='2' disabled onChange={(event) => setComments(event.target.value)} defaultValue={comment.comment} className='myInputforComment fredokaFont' />
                                        <EditIcon id={comment._id} onClick={toChangeInputs} sx={{bgcolor: 'rgb(196, 165, 126)', '&:hover': {bgcolor: 'rgba(196, 165, 126, 0.7)'}, padding: '5px', margin: '5px', color: 'white', width: '30px', height: '30px', borderRadius: '15px'}} />
                                    </>
                                    }
                                    <DeleteIcon id={comment._id} onClick={toDelete} sx={{bgcolor: 'rgb(196, 165, 126)', '&:hover': {bgcolor: 'rgba(196, 165, 126, 0.7)'}, padding: '5px', marginTop: '5px', marginBottom: '5px', color: 'white', width: '30px', height: '30px', borderRadius: '15px'}} />
                                </Box>
                            </Box>
                        </Box>
                    ) : 
                    (
                        <Box key={comment._id} sx={{margin: '16px', padding: '8px',  display: 'flex', color: 'white', backgroundColor: 'rgb(0, 73, 48)'}}>
                            <div className='divImgComment'>
                                <img className="onlyimgComment" alt={comment.userId.name} src={comment.userId.userPhoto} />
                            </div>
                            <Box sx={{paddingLeft: '8px', width: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end'}}>
                                <Typography variant='h6' sx={{width: '100%', padding: '8px', paddingTop: '0'}} className='fredokaFont smallT'>{comment.userId.email}</Typography>
                                <Typography variant="subtitle2" sx={{width: '100%', display: 'flex', padding: '8px',  color: 'black', backgroundColor: 'rgb(126, 196, 165)'}} className='fredokaFont'>{comment.comment}</Typography>
                            </Box>
                        </Box> 
                    )
                )
            )}
            {props.user ?
                (<Box sx={{margin: '16px', padding: '8px', display: 'flex', color: 'white', backgroundColor: 'rgb(74, 140, 111)'}}>
                    <div className='divImgComment2'>
                        <img className="onlyimgComment2" alt={props.user.name} src={props.user.userPhoto} />
                    </div>
                    <Box sx={{width: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
                        <Box sx={{width: '100%', display: 'flex', paddingLeft: '8px', paddingRigth: '8px'}}>
                            <textarea rows='2' onChange={(event) => setInputText(event.target.value)} value={inputText} />
                            <AddIcon onClick={toAdd} sx={{bgcolor: 'rgb(196, 165, 126)', '&:hover': {bgcolor: 'rgba(196, 165, 126, 0.7)'}, padding: '5px', margin: '5px', marginRigth: '0', color: 'white', width: '30px', height: '30px', borderRadius: '15px'}} />
                        </Box>
                    </Box>
                </Box>
                ) : (
                    <LinkRouter to={'/login'}>log in to add a comment!</LinkRouter>
                )
            }
        </>
    )
}

const mapDispatchToProps = {
    addComment: topicActions.addComment,
    modifyComment: topicActions.modifyComment,
    deleteComment: topicActions.deleteComment,
    getOneTopic: topicActions.getOneTopic
}
const mapStateToProps = (state) => {
    return {
        user: state.userReducer.user
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Comments)