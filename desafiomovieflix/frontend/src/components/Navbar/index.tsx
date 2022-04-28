import { useEffect, useState } from 'react';
import { getTokenData, isAuthenticated, TokenData } from 'utils/auth';
import history from 'utils/history';
import { removeAuthData } from 'utils/requests';
import './styles.css';

type AuthData = {
    authenticated: boolean,
    tokenData?: TokenData
}

const Navbar = () => {

    const [ authData, setAuthData ] = useState<AuthData>({authenticated: false});

    useEffect(() => {
        if (isAuthenticated()) {
            setAuthData({
                authenticated: true,
                tokenData: getTokenData()
            })
        }
        else {
            setAuthData({
                authenticated: false
            })
        }
    }, [])

    const handleLogoutClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
        event.preventDefault();
        removeAuthData();
        setAuthData ({
            authenticated: false
        });
        history.replace('/');
    }

    return (
        <nav className="bg-primary navbar-nav-container">
            <div className='navbar-title'>
                <a href="/">
                    <h2>MovieFlix</h2>
                </a>
            </div>
            <div>
                {authData.authenticated ? (
                    <>
                        <span>{authData.tokenData?.user_name}</span>
                        <a href="#logout" onClick={handleLogoutClick}>Sair</a>
                    </>
                ) : (
                    ''
                )}
            </div>
        </nav>
    );
};

export default Navbar;
