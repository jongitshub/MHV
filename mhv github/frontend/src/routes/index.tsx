import { Link } from 'react-router-dom'
import ThemeController from '../components/ThemeController'
import ImageCarousel from '../components/ImageCarousel'


export default function IndexPage() {
  return (
    <>
    <ThemeController />
      <div>
        <ul className='flex place-content-center space-x-40'>
        <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="/sign-up">Sign Up</Link>
          </li>
          <li>
            <Link to="/sign-in">Sign In</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
        </ul>
      </div>
    <ImageCarousel />
    </>
  )
}