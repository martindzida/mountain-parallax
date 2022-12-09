import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import NavLink from './NavLink'
import a from './assets/1.jpg'
import b from './assets/2.jpg'
import c from './assets/3.jpg'
import d from './assets/4.jpg'
import e from './assets/5.jpg'
import f from './assets/6.jpg'
import g from './assets/7.jpg'

function App() {
  return (
    <div className='w-full h-full flex justify-center font-martian'>
      <div className='w-full fixed flex justify-end gap-10 font-extralight uppercase text-white z-10 px-12 py-8'>
        <NavLink href='/'>Home</NavLink>
        <NavLink href='/'>About</NavLink>
      </div>
      <Parallax pages={2}>
        <ParallaxLayer
          speed={0.05}
          factor={2}
          style={{
            backgroundSize: 'cover',
            backgroundImage: `url(${a})`,
          }}
        ></ParallaxLayer>
        <ParallaxLayer speed={0.5} factor={1.5} style={{ backgroundSize: 'cover', backgroundImage: `url(${g})` }}></ParallaxLayer>
      </Parallax>
    </div>
  )
}

export default App
