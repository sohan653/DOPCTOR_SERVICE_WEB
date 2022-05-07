import React from 'react';
import { Helmet } from 'react-helmet-async';
import Gallery from '../Gallery/Gallery';
import Maps from '../Maps/Maps';
import Services from '../Services/Services';
const bannerimg='https://www.pngkey.com/png/detail/26-263538_transparent-geometric-pattern.png'
const bannerFirstImg='https://img.freepik.com/free-photo/beautiful-young-female-doctor-looking-camera-office_1301-7807.jpg?w=2000'
const Banner = ({setOrder}) => {
    
    return (
        <>
         <Helmet>
                <title>Dr TASNIM</title>
            </Helmet>
        <section className="relative z-10  h-[80vh] ">
 
  <div className="md:absolute top-0 left-0 md:w-1/3 lg:w-2/5 h-full">
    <img className="h-32 hidden md:block md:h-full w-full md:w-auto" src={bannerFirstImg} alt=""/>
    <img className="md:absolute object-cover h-auto  md:bottom-0 md:left-0 md:ml-12 lg:ml-32  md:h-5/6 w-full md:w-auto md:object-cover md:object-left" src={bannerFirstImg} alt=""/>
  </div>
  <div className=" absolute top-20 left-7 md:left-[800px] md:top-7  px-4 h-full mx-auto">
    <div className="w-full md:w-1/2 lg:w-3/5  pt-20 md:pt-0 lg:pt-0 ">
      <h1 className="mt-8 text-3xl text-blue-900  md:text-4xl md:text-10xl xl:text-12xl leading-tight font-heading font-bold">DR. TASNIM JARA</h1>
      <p className="mb-2 mt-4 font-bold md:mb-32 text-darkBlueGray-400">Hi this is Tasnim Jara.I am Doctor graduation from Dhaka Medical College.I will help you find complete and detail information about Medicines, Diseases, Health Tips, Doctor & Hospital Directory</p>
      <button className="inline-block py-4 px-10 text-xl leading-8 text-white font-heading font-medium tracking-tighter text-center bg-blue-500 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 hover:bg-blue-600 rounded-xl" href="#">Click For Details</button>
    </div>
  </div>
</section>
<Services setOrder={setOrder}></Services>
<Gallery></Gallery>
<Maps></Maps>
        </>
    );
};

export default Banner;