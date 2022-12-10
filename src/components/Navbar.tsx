import NavLink from './NavLink'

const Navbar = () => {
  return (
    <div className='w-full fixed flex justify-end gap-10 font-extralight uppercase text-white z-10 px-12 py-8'>
      <NavLink href='/'>Home</NavLink>
      <NavLink href='/'>About</NavLink>
    </div>
  )
}

export default Navbar
