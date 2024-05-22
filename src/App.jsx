import { useEffect, useRef, useState } from 'react'
import './App.css'

function App() {
  const [length, setLength] = useState(8)
  const [numAllowed, setNumAllowed] = useState(false)
  const [cherAllowed, setCherAllwoed] = useState(false)
  const [passward, setPassward] = useState('')

  const copymypass = useRef(null)

  const passgen = () => {
    let pass = ''
    let str = "ABCDEFGHIJKLMNOPQRSTUVWZYZabcdefghijklmnopqrstuvwxyz"
    if (numAllowed) {
      str += "1234567890"
    }
    if (cherAllowed) {
      str += "!@#$^%&*()_+"
    }
    for (let i = 0; i <= length; i++) {
      const cher = Math.floor(Math.random() * str.length + 1)  //  notes here so yaha parr jab cher me ek number jenrate ho ke aa jaega like 33 wo number str ke length ke andar ka hi hoga so ab kya hoga ki jo number aaya he wo ek index value he ye index positin so ab passward me ham bari bari 6 bar tak add karte range 
      pass += str.charAt(cher) // yaha par str.cher(cher) me ye ho rha he ki str me bot sari value he or index value he like 01234566 so on to yahan par  cher at iss liye use ho rhahejaise cher me 47 ke to str ke 47 wale index pe jo value he wo pass me chali jae  jase aagr cher==4  he to jo 4 index pe value he wo add ho jae pas me  
    }

    setPassward(pass)
  }
  useEffect(() => {
    passgen()
  }, [length, cherAllowed, numAllowed])

  const copypass = () => {
    copymypass.current?.select()
    window.navigator.clipboard.writeText(passward)

  }

  return (
    <>
      <div className="box-wrapper">
      <div className="box">
      <h1>Password Generator</h1>
        <div className="top">
          <input type="text" className='passinput' readOnly placeholder='passward' value={passward} ref={copymypass} />
          <button className='btn' onClick={copypass}>copy</button></div>
        <div className="main">
          <div><input className='range' type="range" min={6} max={100} value={length} onChange={(e) => { setLength(e.target.value) }} /> <span>length {length}</span>
          </div>

          <div>
          <input className='cheqbox' type="checkbox" checked={numAllowed} onChange={() => { setNumAllowed(prev => !prev) }} /> <span>number</span>
          </div>
          <div>
          <input className='cheqbox' type="checkbox" checked={cherAllowed} onChange={() => { setCherAllwoed(prev => !prev) }} on /> <span>cher</span> 
          </div>
        </div>
      </div>
      </div>
    </>
  )
}

export default App
