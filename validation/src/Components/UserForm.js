import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './UserForm.css'

export const UserForm = ( { getUserFormData } ) => {
    // state for firstName
    const [firstNameError, setfirstNameError] = useState( false );
    const [firstNameErrorCharacter, setfirstNameErrorCharacter] = useState( false );

    // state for lastName
    const [lastNameError, setlastNameError] = useState( false );
    const [lastNameErrorCharacter, setlastNameErrorCharacter] = useState( false );

    // state for age
    const [ageError, setageError] = useState( false );
    const [ageErrorCharacter, setageErrorCharacter] = useState( false );

    const [userData, setuserData] = useState( {
        firstName: '',
        lastName: '',
        age:null,
    } )
    const updateuserData = (event) => {
        setuserData( {
            ...userData,
            [event.target.name]: event.target.value,
        } );
    }

    const saveData = ( event ) => {
        event.preventDefault();
        // Form Validation for firstName
        const { firstName, lastName, age } = userData;
        console.log(userData);
        if ( firstName ) {
            setfirstNameError( false )
            if ( firstName.search( /[^a-zA-Z]+/ )) {
                setfirstNameErrorCharacter(false)
            } else {
                setfirstNameErrorCharacter(true)
            }
        } else {
            setfirstNameErrorCharacter( false )
            setfirstNameError(true)
        }

        // Form Validation for lastName
        if ( lastName ) {
            setlastNameError( false )
            if ( lastName.search( /[^a-zA-Z]+/ )) {


            }
        } else {
            setlastNameErrorCharacter( false )
            setlastNameError(true)
        }

        // Form Validation for age
        if ( age ) {
            setageError( false )
            if ( age >0 && age <100) {
               
            } else {
                setageErrorCharacter(true)
            }
        } else {
            setageErrorCharacter( false )
            setageError(true)
        }
        getUserFormData( userData );
        
    }
    return (
        <div className="d-flex justify-content-center align-items-center">
            <form name="userForm" className="w-50" id='userform'>
                <h1 className="text-uppercase  text-center">Registration Form</h1>
                <div className="form-group">
                <label for="fname"><b>First Name</b></label> 
                 <input
                    type="text"
                    placeholder="Enter FirstName"
                    id="fname"
                    name="firstName"
                    className="form-control"
                    value={ userData.firstName }
                    onChange={ updateuserData}/>
                {firstNameError &&
                    <p className="text-danger" id='errmsg'>Please enter firstName</p>}
                {firstNameErrorCharacter &&
                     <p className="text-danger" id='errmsgchar'>Only characters are allowed</p>}
                </div>

                <div className="form-group">
                <label for="lname"><b>Last Name <span className="text-danger">*</span></b></label>
                 <input
                    type="text"
                    placeholder="Enter LastName"
                    name="lastName"
                    id="lname"
                    className="form-control"
                    value={userData.lastName}
                    onChange={ updateuserData } />
                    {lastNameError &&
                    <p className="text-danger" id='errmsg'>Please enter lastName</p>}
                    {lastNameErrorCharacter &&
                     <p className="text-danger" id='errmsgchar'>Only characters are allowed</p>}
                </div>

                <div className="form-group">
                    <label for="age"><b>Age <span className="text-danger">*</span></b></label>
                 <input
                    type="number"
                    placeholder="Enter Age"
                    name="age"
                    className="form-control"
                    value={ userData.age }
                    id="age"
                    onChange={ updateuserData } />
                    {ageError &&
                    <p className="text-danger" id='errmsga'> Please enter age</p>}
                    {ageErrorCharacter &&
                     <p className="text-danger" id='errmsgage'>Age should be greater than 0 and less than 100</p>}
                </div>
                        <br/>
                <div className="form-group">
                <button className="btn btn-primary w-25 p-2" id='btn'
                     onClick={ saveData }>Submit</button>
                </div>
            </form>
            <div id="output">

            </div>
        </div>
    )
}
