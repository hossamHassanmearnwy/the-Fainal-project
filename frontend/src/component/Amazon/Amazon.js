import React from 'react';
import list from '../../data';
import '../Amazon/amazon.css';
import Cards from '../Card/Cards';
import Slider from '../Slider/Slider';

const Amazon = ({handleClick}) => {
  return (
    <>
    <Slider />
    <section>
        {
            list.map((item)=>(
                <Cards item={item} key={item.id} handleClick={handleClick} />
            ))
        }
    </section>
    </>
  )
}

export default Amazon