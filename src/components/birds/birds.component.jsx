import React, { useState, useEffect, useRef } from 'react'
import { SassColor } from 'sass'
import BIRDS from 'vanta/dist/vanta.birds.min'
import './bird.styles.scss';
// Make sure window.THREE is defined, e.g. by including three.min.js in the document head using a <script> tag

const MyComponent = (props) => {
  const [vantaEffect, setVantaEffect] = useState(null)
  const myRef = useRef(null)
  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(BIRDS({
        el: myRef.current
      }))
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy()
    }
  }, [vantaEffect])
  return <div className='bird-screen' ref={myRef}>
    <h1 className='bird-h1'>GLOBALMETAROYALE</h1>
  </div>
}
export default MyComponent;