import { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  const handleFormSubmit = e => {
    const email = e.target.email.value;
    const password = e.target.password.value;
    const user = { email, password };
    fetch('http://localhost:3000/user', {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(user)
    })
      .then(res => res.json())
      .then(data => console.log(data));
    e.preventDefault()
  }

  return (
    <form onSubmit={handleFormSubmit} className=' w-50 mx-auto form-control'>
      <div className="mb-3">
        <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
        <input type="email" name='email' className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
      </div><div className="mb-3">
        <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
        <input type="password" name='password' className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
      </div>
      <input className='form-control btn btn-primary' type="submit" />
    </form>
  )
}

export default App
