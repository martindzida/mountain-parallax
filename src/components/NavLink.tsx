interface Props {
  href: string
  children: string
}

const NavLink = ({ href, children }: Props) => {
  return (
    <a
      href={href}
      className='relative hover:after:w-full after:w-0 after:transition-width after:duration-500 after:ease-in-out after:absolute after:block after:h-px after:bg-white'
    >
      {children}
    </a>
  )
}

export default NavLink
