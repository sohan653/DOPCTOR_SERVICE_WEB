import React, { useEffect, useState } from 'react';
import Card from '../../Card/Card';

const Manage = () => {
   const [services,setServices]=useState([]);
   useEffect(()=>{
    fetch('https://morning-chamber-80231.herokuapp.com/services')
    .then(res => res.json())
    .then(data => setServices(data))
    
},[])
const deleteService=(id)=>{
   const url=`https://morning-chamber-80231.herokuapp.com/${id}`;
   fetch(url,{
    method: 'DELETE',
    headers: {
        'Content-Type': 'application/json'
       
      },
   }).then(d => console.log('success'))
}
console.log(services)
    return (<>
      <h2>manage product</h2>

        <div className='flex flex-wrap'>
          {services.map(service => <Card key={service._id} service={service}>
              <button onClick={()=>deleteService(service._id)} className='text-white'>delete</button>
          </Card>)}
        </div>
        </>
    );
};

export default Manage;