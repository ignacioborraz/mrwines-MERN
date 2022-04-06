import * as React from 'react';





export default function SignIn () {
        return (
            <>
               <form className="formSignIn">
                   <label for="FName">First Name</label>
                   <input type="text" name="FName" id="FName"/>
                   <label for="LName">Last Name</label>
                   <input type="text" name="LName" id="LName"/>
                   
               </form>
            </>
        )
    }
