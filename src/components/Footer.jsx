import logo from '../assets/logo.svg'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <div style={{backgroundColor: '#F1ECE8'}}
    className="h-20 mt-20 flex justify-around items-center">

<img src={logo} alt="" className='w-16
md:w-20
 lg:w-28'/>

<ul className='flex flex-wrap gap-3
lg:gap-5'>
  
  <li className='text-amber-700 text-xs
  md:text-sm
  lg:text-lg'>
    <Link to={'/'}>Store</Link>
  </li>

  <li className='text-amber-700 text-xs
  md:text-sm
  lg:text-lg' >
    <Link to={'favorite'}>Favorite</Link>
  </li>

  <li className='text-amber-700 text-xs
  md:text-sm
  lg:text-lg'>
    <Link to={'/blog'}>Blog</Link>
  </li>

  <li className='text-amber-700 text-xs
  md:text-sm
  lg:text-lg'>
    <Link to={'/about'}>About</Link>
  </li>

</ul>

    </div>
  )
}
