import coffee from '../assets/Hero-Coffee.png'
import arrow from '../assets/arrow-up-right.svg'


export default function Hero() {
  return (
<div className='mt-8 mx-5
md:mt-12' >

<div style={{backgroundImage : `url(${coffee})`, zIndex:'-100'}} className="
 w-full h-36 bg-no-repeat bg-center bg-cover rounded-2xl mx-auto
 md:w-5/6 md:h-60
 lg:w-2/3 lg:h-96
"></div>



<div className='bg-gradient-to-t from-amber-950 to-transparent pt-10 -mt-24
 flex justify-between items-center rounded-2xl
 md:w-5/6 md:mx-auto md:-mt-28
  lg:w-2/3 lg:mx-auto'>

<p className='text-white font-bold ml-4 text-sm mb-4
md:text-lg  md:tracking-wide
lg:text-2xl lg:ml-7'>
Your Everyday <br />
 Coffee
</p>

<button className='bg-white w-fit h-fit rounded-full mr-2 mb-4 
lg:mr-7 lg:mb-2'>
    <img src={arrow} alt="" className='w-6 p-1
    md:w-8
    lg:w-10 lg:p-2' />
</button>
</div>
    </div>
  )
}
