import React from 'react';
import list from '../../data';
import '../Amazon/amazon.css';
import Cards from '../Card/Cards';
import Slider from '../Slider/Slider';
import Sec from './../styleSec/style';
import SummaryProd from './../summary/summaryProd';

const Amazon = ({handleClick, handleFav}) => {
  return (
    <>

    <div className='container'>
    <Sec header='Featured Product'/>
    <section className='py-5 border-top'>
    <div className='row'>
        {
            list.map((item)=>(
                <Cards item={item} key={item.id} handleClick={handleClick} handleFav={handleFav} />
            ))
        }
        </div>
        
        <div className='row'>
        {
            list.map((item)=>(
                <Cards item={item} key={item.id} handleClick={handleClick} handleFav={handleFav} />
            ))
        }
        </div>
    </section>



    <SummaryProd />
    </div>

    
    </>
  )
}

export default Amazon