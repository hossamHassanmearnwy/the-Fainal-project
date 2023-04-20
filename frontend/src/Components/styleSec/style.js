import React from 'react';
import { useTranslation } from 'react-i18next';

const Sec = (props) => {
    const {t, i18n} = useTranslation();
    document.body.dir = i18n.dir();
 
    return ( <>
    



    <p className='fs-3 mt-5 py-3 border-bottom border-warning text-left' style={{width:"fit-content", borderWidth:"3px", marginBottom:"-1.5%" }}>
        {props.header}
        {/* {t('Featured Product')} */}
        </p>
    

    <p className='fs-5 mb-0 pb-3 border-bottom border-warning text-left' style={{width:"fit-content", borderWidth:"3px"}}>{props.head}</p>



    </>
    );
 }
 export default Sec