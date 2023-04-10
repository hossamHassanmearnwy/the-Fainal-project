import React from 'react'
import Amazon from '../../Components/Amazon/Amazon'
import MainSideBar from './../../Components/MainSideBar/MainSideBar';

export default function Home() {
  return (<>
  <div className='mx-5 my-5'>
                <div className='row ' >
                    <div className='col-3 '>
                    {/* Main Sidebar */}
                  <MainSideBar/>
















  
  </div>
   <div className='col-9'>
                    <Amazon />
                </div>
  </div>
  </div>
  
  
  
  
  
  </>
  )
}
