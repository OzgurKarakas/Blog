import './login.css';

export default function Login() {
  return (
    <div className='login'>
        <form action="" className="loginForm">
            <label>Email</label>
                <input type="text" placeholder='Enter your email...'/>
                <label>Password</label>
                <input type="password" placeholder='****' />
                <button className="loginButton">Login</button>
        </form>
        <button className='registerButton'>Register</button>
    </div>
  )
}
