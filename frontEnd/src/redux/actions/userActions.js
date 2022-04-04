import axios from 'axios';

const userActions = {
    signUpUser: (userData) => {
        //console.log(userData)
        return async (dispatch, getState) => {
            const res = await axios.post('https://mytinerary-borraz.herokuapp.com/api/auth/signUp', {userData}) //envio a la api los datos del usuario nuevo
            //console.log(res)
            dispatch({ //despacho al reductor
                type: 'message',
                payload: {
                    view: true,
                    message: res.data.message,
                    success: res.data.success
                }
            })
        }
    },
    logInUser: (userLogin) => {
        //console.log(userLogin)
        return async (dispatch, getState) => {
            const res = await axios.post('https://mytinerary-borraz.herokuapp.com/api/auth/logIn', {userLogin})
            //console.log(res)
            if(res.data.success) { //si tiene exito
                localStorage.setItem('token',res.data.response.token) //en el almacenamiento local guardamos el token para que no se cierre sesion cuando salgamos
                dispatch({
                    type: 'user',
                    payload: res.data.response.userData
                })
            } else {
                dispatch({
                    type: 'message',
                    payload: {
                        view: true,
                        message: res.data.message,
                        success: res.data.success
                    }
                })
            }
        } 
    },
    signOutUser: (closeData) => {
        //console.log(closeData)
        return async (dispatch, getState) => {
            const res = axios.post('https://mytinerary-borraz.herokuapp.com/api/auth/signOut',{closeData}) //envio a la api los datos del usuario que cierra sesion
            //console.log(res)
            localStorage.removeItem('token')
            dispatch({
                type: 'user',
                payload: null
            })
        }   
    },
    verifyToken: (token) => {
        return async (dispatch, getState) => {
            //console.log(token)
            const user = await axios.get('https://mytinerary-borraz.herokuapp.com/api/auth/loginToken', {headers: {'Authorization': 'Bearer '+token}} )
            //console.log(user)
            if (user.data.success) {
                dispatch({
                    type: 'user',
                    payload: user.data.response
                })
                dispatch({
                    type: 'message',
                    payload: {
                        view: true,
                        message: user.data.message,
                        success: user.data.success
                    }
                })
            } else {
                localStorage.removeItem('token')
            }
        }
    }
}

export default userActions;
//la accion despacha al reductor