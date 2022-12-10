import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
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
      <Navbar />
      <Parallax pages={2}>
        <ParallaxLayer
          speed={0.05}
          factor={2}
          style={{
            backgroundSize: 'cover',
            backgroundImage: `url(${a})`,
          }}
        >
          <Footer />
        </ParallaxLayer>
      </Parallax>
    </div>
  )
}

export default App
