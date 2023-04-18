import React from 'react';
import list from '../../data';
import '../Amazon/amazon.css';
import Cards from '../Card/Cards';
import Slider from '../Slider/Slider';
import Sec from './../styleSec/style';
import SummaryProd from './../summary/summaryProd';
import BestSec from './../besrSellers/BestSec';

const Amazon = ({handleClick}) => {
  return (
    <>

    <div className='container'>
    <Sec header='Featured Product'/>
    <section className='py-5 border-top'>
    <div className='row'>
        {
            list.map((item)=>(
                <Cards item={item} key={item.id} handleClick={handleClick} />
            ))
        }
        </div>
        
        <div className='row'>
        {
            list.map((item)=>(
                <Cards item={item} key={item.id} handleClick={handleClick}  />
            ))
        }
        </div>
    </section>


    <BestSec />
    <SummaryProd />
    </div>

    
    </>
  )
}

export default Amazon