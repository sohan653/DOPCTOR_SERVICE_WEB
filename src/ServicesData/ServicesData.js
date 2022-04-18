import healthImg from '../images/health-check.jpg'
import familyImg from '../images/family-planning.jpg'
import bloodImg from '../images/blood test.jpg'
const family='https://www.fhcsd.org/wp-content/uploads/Prenatal_Orientation-3.jpg'

const serviceData=[
    {
     id:1,   
    serviceName:'Health Checkup',
    bookingFee:100,
    description:'A health check does wonders for both the body and the mind; it identifies the course correction our body needs and gives your mind the faith that all is well.',
    img:healthImg
    },
    {
     id:2,   
    serviceName:'Family Planning',
    bookingFee:50,
    description:'Family planning allows spacing of pregnancies and can delay pregnancies in young women at increased risk of health problems and death from early childbearing',
    img:family
    },
    {
     id:3,   
    serviceName:'Blood Test',
    bookingFee:16,
    description:'Blood test determining your risk status for disease and conditions and Identifying treatment side effects.',
    img:bloodImg
    },
]
export default serviceData;