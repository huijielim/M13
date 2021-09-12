import { useState } from 'react';
import './changeName.css';

export default function App() {
    const [user, setUser] = useState('Bob');
    const [isClicked, setIsClicked] = useState(false);

    const handleClick = () => {
        setUser(name);
        setIsClicked(!isClicked);
    };


    return (
        <div className='App'>
            <p>user name: {user}</p>
            <button 
                className={isClicked ? 'clicked' : 'not-clicked'} onClick={() => handleClick('Maria')}
            >
                change name!
            </button>
        </div>
    );
}



