
import './addressBookStyle.css'
import { useDispatch, useSelector } from 'react-redux';
import editAddress from './../../Store/actions/addressAction'
import { useState, React } from 'react';


export default function AddressBook() {
  const firstName = useSelector((state) => state.editShippingAddress.Fname)
  const lastName = useSelector((state) => state.editShippingAddress.Lname)
  const phone = useSelector((state) => state.editShippingAddress.phoneNumber)
  const street = useSelector((state) => state.editShippingAddress.street)
  const city = useSelector((state) => state.editShippingAddress.city)
  const country = useSelector((state) => state.editShippingAddress.country)
  const zip = useSelector((state) => state.editShippingAddress.zip)
  const dispatch = useDispatch()

  const [user, setUser] = useState({
    fname: firstName,
    lname: lastName,
    phone: phone,
    street: street,
    city: city,
    country: country,
    zip: zip
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

      case "phone":
        setUser({ ...user, phone: ev.target.value });
        break;

      case "street":
        setUser({ ...user, street: ev.target.value });
        break;

      case "city":
        setUser({ ...user, city: ev.target.value });
        break;

      case "country":
        setUser({ ...user, country: ev.target.value });
        break;

      case "zip":
        setUser({ ...user, zip: ev.target.value });
        break;
      // default:
      //   return

    }
  }


  dispatch(editAddress(user))
  return (<>
    <h4>Edit Address</h4>
    <h2>Contact Information</h2>
    <div className='container'>
      <div>

      </div>
      <form onSubmit={(evt) => { handleSubmit(evt) }} >
        {/* first name */}
        <label htmlFor='fname' className='label'>first name</label><br />
        <input type="text" id="fname" name="fname" placeholder='Enter Your First Name' value={user.fname} onChange={(event) => { handleForm(event) }} /><br />

        {/* last name */}
        <label htmlFor='lname' className='label'>Last name</label><br />
        <input type="text" id="lname" name="lname" placeholder='Enter Your Last Name' value={user.lname} onChange={(event) => { handleForm(event) }} /><br />
        {/* phone number */}
        <label htmlFor='phone' className='label'>Phone Number</label><br />
        <input type="number" id="phone" name="phone" placeholder='Enter Your Phone Number' value={user.phone} onChange={(event) => { handleForm(event) }} />

        <br />
        <br />
        <h2>Address</h2>
        {/* Street */}
        <label htmlFor='street' className='label'>Street Address</label><br />
        <input type="text" id="street" name="street" placeholder='Enter Your Street Address' value={user.street} onChange={(event) => { handleForm(event) }} /><br />
        {/* City */}
        <label htmlFor='city' className='label'>City</label><br />
        <input type="text" id="city" name="city" placeholder='Enter Your City' autoComplete="address-level2" value={user.city} onChange={(event) => { handleForm(event) }} /><br />
        {/* Country */}
        <label htmlFor='country' className='label'>Country</label><br />
        <select id="country" name="country" autoComplete='country' placeholder='Chose Your Country' value={user.country} onChange={(event) => { handleForm(event) }} >
          <option></option>
          <option >Egypt</option>
          
        </select><br />
        {/* ZIP */}
        <label htmlFor='zip' className='label'>Zip / Postal Code </label><br />
        <input type="text" id="zip" name="zip" autoComplete="postal-code" value={user.zip} onChange={(event) => { handleForm(event) }} /><br />
      <br/>
        <button className="submit" type='submit'>Save Address</button>

      </form>

    </div>






  </>

  )
}
