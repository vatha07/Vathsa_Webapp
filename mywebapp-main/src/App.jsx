import { useState } from 'react'
import InputComponent from './component/Inputcomponent'
import './App.css'
import ButtonComponent from './component/ButtonComponent'

function App() {
  const [showData, setShowData] = useState(false)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [age, setAge] = useState('')

  const handleSubmit = () => {
    if(name && email && password && age) {
      setShowData(true)
    }
    
  }

  const handleReset = () => {
    setName('')
    setEmail('')
    setPassword('')
    setAge('')
  }

  return (
    <div className="App">
      {
        !showData ? <>
          <InputComponent type="text" placeholder="Name" value={name} onChange={setName} />
          <InputComponent type="email" placeholder="Email" value={email} onChange={setEmail} />
          <InputComponent type="password" placeholder="Password" value={password} onChange={setPassword} />
          <InputComponent type="number" placeholder="Age" value={age} onChange={setAge} />
          <ButtonComponent name="Submit" onClick={() => { handleSubmit() }} />
          <ButtonComponent name="Reset" onClick={handleReset} />
        </> : <>
          <p>Name: {name}</p>
          <p>Email: {email}</p>
          <p>Age: {age}</p>
          <ButtonComponent name="Edit" onClick={() => { setShowData(false) }} />
        </>
      }

    </div>
  )
}

export default App
