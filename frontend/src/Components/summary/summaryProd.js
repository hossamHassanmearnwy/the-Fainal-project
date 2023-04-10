import React from 'react'
import list from '../../data';
import Sec from './../styleSec/style';
import Sum from './../styleSec/sumCard';

export default function SummaryProd() {
    return (
        <>

        <section className='row my-4'>
    <div className='col-lg-4 col-md-6 col-sm-12'>
    <Sec head='Featured Product' />
    {
        list.map((props)=>(
            <Sum props={props} key={props.id} />
        ))
    }
    </div>
    <div className='col-lg-4 col-md-6 col-sm-12'>
    <Sec head='Onsale Product' />
    {
        list.map((props)=>(
            <Sum props={props} key={props.id} />
        ))
    }
    </div>
    <div className='col-lg-4 col-md-6 col-sm-12'>
    <Sec head='Top Rated Product' />
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
