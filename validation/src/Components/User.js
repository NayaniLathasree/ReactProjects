import React from 'react'
import './UserForm.css'
import 'bootstrap/dist/css/bootstrap.min.css'

function User({user}) {
    return (
        <div>
            <tbody  id='table table-striped'>
                <tr>
                     <td>{ user.firstName}</td>
                    <td>{ user.lastName}</td>
                    <td>{ user.age}</td>
                </tr>
            </tbody>
        </div>
    )
}

export default User
