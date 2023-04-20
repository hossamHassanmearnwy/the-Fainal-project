import React from 'react';
import list from '../../data';
import '../Amazon/amazon.css';
import Cards from '../Card/Cards';
import Slider from '../Slider/Slider';
import Sec from './../styleSec/style';
import SummaryProd from './../summary/summaryProd';
import BestSec from './../besrSellers/BestSec';
import OffersSlider from "../../Components/offersSlider/OffersSlider";
import offersList from "../../offersData";
import { useTranslation } from 'react-i18next';

const Amazon = ({handleClick}) => {
    const {t, i18n} = useTranslation();
    document.body.dir = i18n.dir();
  return (
    <>

    <div className='container'>
    <Sec header={t('Featured Product')}/>
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

    {
        
        <OffersSlider handleClick={handleClick} />
          
        }
    <SummaryProd />
    </div>

    
    </>
  )
}

export default Amazon