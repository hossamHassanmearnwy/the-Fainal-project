import React, { useEffect, useState } from 'react'
import list from '../../data';
import Sec from './../styleSec/style';
import Sum from './../styleSec/sumCard';
import { useTranslation } from 'react-i18next';
// import productsaxios from "./../../axiosConfig/axiosInstance";


export default function SummaryProd() {
    // const [Products, setProducts] = useState([]);
    // useEffect(() => {
    //   productsaxios
    //     .get("/Products")
    //     .then((res) => {
    //       console.log(res.data);
    //       setProducts(res.data);
    //     })
    //     .catch((err) => {
    //       console.log(err);
    //     });
    // }, [setProducts]);
    const {t, i18n} = useTranslation();
    document.body.dir = i18n.dir();
    return (
        <>

        <section className='row my-4'>
    <div className='col-lg-4 col-md-6 col-sm-12'>
    <Sec head={t('Featured Product')} />
    {
        list.map((props)=>(
            <Sum props={props} key={props.id} />
        ))
    }
    </div>
    <div className='col-lg-4 col-md-6 col-sm-12'>
    <Sec head={t('Onsale Product')} />
    {
        list.map((props)=>(
            <Sum props={props} key={props.id} />
        ))
    }
    </div>
    <div className='col-lg-4 col-md-6 col-sm-12'>
    <Sec head={t('Top Rated Product')} />
    {
        list.map((props)=>(
            <Sum props={props} key={props.id} />
        ))
    }
    </div>
    </section>
    </>
    )
}
