import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../../utils/constants";

export const Login = () => {

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
    const navigate = useNavigate();

    const navigateHome = () => {
        navigate('/home');
    };

    return (
        <div>
            <form onSubmit={handleLogin}>
                <input type="email" placeholder='Email' />
                <input type="password" placeholder='Password'/>
              <button onClick={navigateHome}>Login</button>
            </form>
      </div>
    )
}