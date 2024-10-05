import logo from '../assets/logo.svg'
import '../App.css'
import { Link } from 'react-router-dom'


export default function Nav() {

  

  return (
    <div className='  flex justify-between mt-10 mx-5 items-center
    md:mx-20 
    lg:mx-64 lg:mt-16'>

        <div>

<img src={logo} alt="Logo" id='Logo' className='w-20
md:w-24
lg:w-28'/>

        </div>

        <div>

<ul className='flex gap-3
md:gap-6
lg:gap-8'>

    <li className='text-xs font-semibold text-amber-800
    md:text-lg
    lg:text-lg '>
    <Link to={'/'}>Store</Link>
    </li>
    
    <li className='text-xs font-semibold text-amber-800
    md:text-lg
    lg:text-lg'>
   <Link to={'/favorite'} > Favorite</Link>
    </li>

    <li className='text-xs font-semibold text-amber-800
    md:text-lg
    lg:text-lg'>
    <Link to={'/blog'}>Blog</Link>
    </li>

    <li className='text-xs font-semibold text-amber-800
    md:text-lg
    lg:text-lg'>
   <Link to={'/about'} >About</Link>
    </li>
</ul>
        </div>
    </div>
  )
}
