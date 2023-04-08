
import Form from 'react-bootstrap/Form';
import './accountInformationStyle.css';
import { useState, React } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import updateUserInfo from './../../Store/actions/updateInfo';
// import Button from 'react-bootstrap/Button';
// import Form from 'react-bootstrap/Form';



export default function AccountInformation() {
  const firstName = useSelector((state) => state.updateInformation.firstName)
  const lastName = useSelector((state) => state.updateInformation.lastName)
  const dispatch = useDispatch()

  const [user, setUser] = useState({
    fname: firstName,
    lname: lastName
  })



  const handleSubmit = (e) => {
    e.preventDefault()
  }

  const handleForm = (ev) => {
    switch (ev.target.name) {
      case "fname":
        setUser({ ...user, fname: ev.target.value });
        break;

      case "lname":
        setUser({ ...user, lname: ev.target.value });
        break;
      // default:
      //   return

    }
  }

  dispatch(updateUserInfo(user))

  return (<>
    <h4>Edit Account Information</h4>

    <div className='container'>
      <form onSubmit={(evt) => { handleSubmit(evt) }} action='/myaccount'>
        {/* first name */}
        <label htmlFor='fname' className='label'>first name</label><br />
        <input type="text" id="fname" name="fname" placeholder='Enter Your First Name' value={user.fname} onChange={(event) => { handleForm(event) }} /><br />

        {/* last name */}
        <label htmlFor='lname' className='label'>Last name</label><br />
        <input type="text" id="lname" name="lname" placeholder='Enter Your Last Name' value={user.lname} onChange={(event) => { handleForm(event) }} /><br />
        {/* birth date */}
        <label htmlFor='date' className='label'>Birth Date</label><br />
        <input type="date" id="date" name="date" placeholder='chose your birth date' />
        <br /><br />
        {/* <button className="date-btn">Select Date</button> */}
        {/* ////////////////// Password ///////////// */}
        <h4>Edit Password</h4>

        {/* Current Password */}
        <label htmlFor='currentPass' className='label'>Current Password</label><br />
        <input type="password" id="currentPass" name="currentPass" placeholder='Enter Current Password' onChange={(event) => { handleForm(event) }} /><br />

        {/* New Password */}
        <label htmlFor='newPass' className='label'>New Password</label><br />
        <input type="password" id="newPass" name="newPass" placeholder='Enter New Password' onChange={(event) => { handleForm(event) }} /><br />
        {/* Confirm New Password */}
        <label htmlFor='conNewPass' className='label'>Confirm New Password</label><br />
        <input type="password" id="conNewPass" name="conNewPass" placeholder='Confirm New Password' />
        {/* <button className="date-btn">Select Date</button> */}

        <br /><br />
        <button className="submit" type='submit'>Save</button>
      </form>
      <br />
    </div>


  </>
  )
}
