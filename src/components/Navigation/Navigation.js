import { Link } from 'react-router-dom';
import './navigation.css';

export const Navigation = () => {
    return (
        <div>
            <a href="/"><img src='https://logos-world.net/wp-content/uploads/2021/02/Simple-Logo-2011-2014.png' /></a> 
            
        <div className='navigation'>
            <Link className='link' to="/">Login</Link>
            <Link className='link' to="/register">Register</Link>
        </div>
        </div>
    )
    
}
