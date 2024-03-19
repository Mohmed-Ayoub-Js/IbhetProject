import Account from './components/app/Account'
import Content from './components/app/Content'
import { useEffect, useState } from 'react'
function App() {
  const [image, setImage] = useState('background.jpg')
  useEffect(() => {
    const i = localStorage.getItem('background')
    if (!i) {
      console.log('0')
    } else {
      setImage(i)
    }
  }, [])
  return (
    <>
      <div dir="rtl" style={{ backgroundImage: `url(${image})` }}>
        <Account />
        <Content />
      </div>
    </>
  )
}

export default App
