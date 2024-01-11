import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
 <>
    <div class="container">
    <div class="img">
        <div class="form-box">
            <div class="form">
                <h2>Register</h2>
            <div class="input-box">
                <input type="text" required/>
                <label for="">Username</label>
            </div>
            <div class="input-box">
                <input type="text" required/>
                <label for="">Email</label>
            </div>
            <div class="input-box">
                <input type="password" required/>
                <label for="">Password</label>
            </div>
            <div class="links">
                <a href="#">Forgot password?</a>
                <a href="#">Sign in</a>
            </div>
            <button type="submit">Sign up</button>
            </div>
        </div>
    </div>
</div>
</>
  )
}

export default App
