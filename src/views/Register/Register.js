import { Link } from "react-router-dom";
import { BASE_URL } from "../../utils/constants";
import "./Register.css";

const handleLogin = (e) => {
    e.preventDefault();
    fetch(`${BASE_URL}/auth/register`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email:'test123@gmail.com',
        password: 'test123'
      })
    });
  }

export const Register = () => {
    return (
        <div>
            <form onSubmit={handleLogin}>
                <input type="email" placeholder='email' />
                <input type="password" placeholder='password'/>
                <button>
                  <Link className="button" to="/">Register</Link>
                </button>
            </form>
        </div>
    )
}