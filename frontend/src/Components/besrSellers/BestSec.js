import React, { useState } from 'react';
import list from '../../data';
import Sec from './../styleSec/style';
import Sum from './../styleSec/bestCard';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';


export default function BestSec() {

    const [activeTab, setActiveTab] = useState('first');

  const handleTabClick = (eventKey) => {
    setActiveTab(eventKey);
  };

    return (

            
            <Tab.Container id="left-tabs-example" defaultActiveKey="first">
            <Row className='col-lg-7 mb-0' style={{ position: "relative" , left :"43%" , top:"110px"}}>

            <Nav variant="pills" className="flex-column justify-content-end align-items-end" activeKey={activeTab} onSelect={handleTabClick}>
                <Nav.Item >
                    <Nav.Link eventKey="first" className='bg-none border-none rounded-pill text-warning px-1 text-decoration-none' 
                    style={{ border: activeTab === 'first' ? '1px solid #ffc107' : '', background: activeTab === 'first' ? 'none' : '' , outline: activeTab === 'first' ? 'none' : '' }}>Top 10</Nav.Link>
                </Nav.Item>
                <Nav.Item className='outline-none'>
                    <Nav.Link eventKey="second" className='bg-none border-none rounded-pill text-warning px-1 text-decoration-none' 
                    style={{ border: activeTab === 'second' ? '1px solid #ffc107' : '', background: activeTab === 'second' ? 'none' : '', outline: activeTab === 'second' ? 'none' : '' }}>Mobiles & Tablets</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="third" className='bg-none border-none rounded-pill text-warning px-1 text-decoration-none' 
                    style={{ border: activeTab === 'third' ? '1px solid #ffc107' : '', background: activeTab === 'third' ? 'none' : '', outline: activeTab === 'third' ? 'none' : ''  }}>Computers && Labtops</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="fourth" className='bg-none border-none rounded-pill text-warning px-1 text-decoration-none'
                    style={{ border: activeTab === 'fourth' ? '1px solid #ffc107' : '', background: activeTab === 'fourth' ? 'none' : '' , outline: activeTab === 'fourth' ? 'none' : '' }}>Power Supply</Nav.Link>
                </Nav.Item>
            </Nav>
            </Row>
        <Sec header='BestSeller Product' />
        <section className='py-4 border-top'>
        <Tab.Content>
                            <Tab.Pane eventKey="first">
                            <div className='d-flex direction-row'>
                            {
                                list.map((best)=>(
                                    <Sum best={best} key={best.id} />
                                ))
                            }
                            </div>
                            <div className='d-flex direction-row'>
                            {
                                list.map((best)=>(
                                    <Sum best={best} key={best.id} />
                                ))
                            }
                            </div>
                            </Tab.Pane>
                            <Tab.Pane eventKey="second">
                                <div className='d-flex direction-row'>
                                    {
                                        list.map((best) => (
                                            <Sum best={best} key={best.id} />
                                        ))
                                    }
                                </div> 
                                <div className='d-flex direction-row'>
                            {
                                list.map((best)=>(
                                    <Sum best={best} key={best.id} />
                                ))
                            }
                            </div>
                            </Tab.Pane>
                            <Tab.Pane eventKey="third">
                                <div className='d-flex direction-row'>
                                    {
                                        list.map((best) => (
                                            <Sum best={best} key={best.id} />
                                        ))
                                    }
                                </div> 
                                <div className='d-flex direction-row'>
                            {
                                list.map((best)=>(
                                    <Sum best={best} key={best.id} />
                                ))
                            }
                            </div>
                            </Tab.Pane>
                            <Tab.Pane eventKey="fourth">
                                <div className='d-flex direction-row'>
                                    {
                                        list.map((best) => (
                                            <Sum best={best} key={best.id} />
                                        ))
                                    }
                                </div> 
                                <div className='d-flex direction-row'>
                            {
                                list.map((best)=>(
                                    <Sum best={best} key={best.id} />
                                ))
                            }
                            </div>
                            </Tab.Pane>
                        </Tab.Content>
                        </section>
                
            </Tab.Container>


    )
}
