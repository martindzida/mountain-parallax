import NavLink from './NavLink'

const Footer = () => {
  return (
    <div className='w-full bg-transparent flex flex-col justify-center items-center gap-20 text-white uppercase font-light fixed bottom-0 left-0 p-12 z-10'>
      <div className='flex justify-center items-center gap-32'>
        <ul className='list-none'>
          <li>nevim</li>
          <li>cus</li>
          <li>ahoj</li>
        </ul>
        <span className='w-px h-12 bg-white'></span>
        <ul className='list-none'>
          <li>nevim</li>
          <li>cus</li>
          <li>ahoj</li>
        </ul>
      </div>
      <div className='text-xs'>
        <span>Created by: me</span>
      </div>
    </div>
  )
}

export default Footer
