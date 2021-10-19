import React from 'react'
import User from './User'
import './UserForm.css'
import 'bootstrap/dist/css/bootstrap.min.css'

function UserTable({userFormData}) {
    return (
        <div>
            <table id='table table-striped'>
                    <tr>
                        <td>First Name</td>
                        <td>Last Name</td>
                        <td>Age</td>
                    </tr>
                
                {
                userFormData.map( ( user, index ) => {
                    return <User key={ index } user={ user}/>
                })
                    }
            </table>
        </div>
    )
}

export default UserTable
