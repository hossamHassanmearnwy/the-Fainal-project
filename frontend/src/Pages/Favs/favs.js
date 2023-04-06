import React from 'react'
import "./fav.css"
import Card from 'react-bootstrap/Card';

export default function Fav() {
  return (
    <div className='container'>
     <div> <h3 className='hfav'> your favs  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="red" class="bi bi-heart-fill" viewBox="0 0 16 16" >
  <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"/>
</svg> </h3></div>
<br />
<div className='container' id='fav'>
<Card  className='col-4' id='favCard'>
      <Card.Img variant="top" src="/1.jpg" className='cardImg' />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
       

      </Card.Body>
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="red" className='myHeart' class="bi bi-heart-fill" viewBox="0 0 16 16" >
  <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"/>
</svg>
    </Card>

</div>
    </div>
  )
}
