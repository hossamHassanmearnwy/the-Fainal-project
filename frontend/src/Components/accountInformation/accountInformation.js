
import Form from 'react-bootstrap/Form';
import './accountInformationStyle.css';
import { useState, React } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import updateUserInfo from './../../Store/actions/updateInfo';
import { useTranslation } from 'react-i18next';
// import Button from 'react-bootstrap/Button';
// import Form from 'react-bootstrap/Form';



export default function AccountInformation() {
  const firstName = useSelector((state) => state.updateInformation.firstName)
  const lastName = useSelector((state) => state.updateInformation.lastName)
  const dispatch = useDispatch()
  const {t, i18n} = useTranslation();
  document.body.dir = i18n.dir();
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
    <h4>{t('Edit Account Information')}</h4>

    <div className='container'>
      <form onSubmit={(evt) => { handleSubmit(evt) }} action='/myaccount'>
        {/* first name */}
        <label htmlFor='fname' className='label'>{t("First Name")}</label><br />
        <input type="text" id="fname" name="fname" placeholder={t('Enter Your') + t("First Name")} value={user.fname} onChange={(event) => { handleForm(event) }} /><br />

        {/* last name */}
        <label htmlFor='lname' className='label'>{t("Last Name")}</label><br />
        <input type="text" id="lname" name="lname" placeholder={t('Enter Your') + t("Last Name")} value={user.lname} onChange={(event) => { handleForm(event) }} /><br />
        {/* birth date */}
        <label htmlFor='date' className='label'>{t('Date of Birth')}</label><br />
        <input type="date" id="date" name="date" placeholder={t('Enter Your') + t("Date of Birth")} />
        <br /><br />
        {/* <button className="date-btn">Select Date</button> */}
        {/* ////////////////// Password ///////////// */}
        <h4>{t('Edit Password')}</h4>

        {/* Current Password */}
        <label htmlFor='currentPass' className='label'>{t("Current Password")}</label><br />
        <input type="password" id="currentPass" name="currentPass" placeholder={t('Enter Your') + t("Current Password")}  onChange={(event) => { handleForm(event) }} /><br />

        {/* New Password */}
        <label htmlFor='newPass' className='label'>{t('New Password')}</label><br />
        <input type="password" id="newPass" name="newPass" placeholder={t('Enter Your') + t("New Password")} onChange={(event) => { handleForm(event) }} /><br />
        {/* Confirm New Password */}
        <label htmlFor='conNewPass' className='label'>{t('Confirm New Password')}</label><br />
        <input type="password" id="conNewPass" name="conNewPass" placeholder={t('Enter Your') + t("Confirm New Password")} />
        {/* <button className="date-btn">Select Date</button> */}

        <br /><br />
        <button className="submit" type='submit'>{t('Save')}</button>
      </form>
      <br />
    </div>


  </>
  )
}
