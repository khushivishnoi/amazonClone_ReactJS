import React from 'react'
import './Header.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBasketShopping, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom";
import {useStateValue} from'./StateProvider';
import {auth} from'./firebase';

function Header() {
    const [{ basket,user }, dispatch] = useStateValue();
    const handleAuthenticaton = () => {
        if (user) {
          auth.signOut();
        }
      }

    return (
        <div className='header'>
            <Link to="/">
                <img
                    className="header_logo"
                    src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
                />
            </Link>
            <div className="header__search">
                <input className="header__searchInput" type="text" />

                <FontAwesomeIcon icon={faMagnifyingGlass} className='header_searchIcon' />


            </div>
            <div className="Header_nav">
            <Link to={!user && '/login'}>
                <div onClick={handleAuthenticaton} className='Header_option'>
                    <span className='Header_IstLine'>Hello {!user ? 'Guest' : user.email}</span>
                    <span className='Header_2ndLine'>{user ? 'Sign Out' : 'Sign In'}</span>
                    
                </div></Link>
                <Link to='/orders'>
                <div className='Header_option'>
                    <span className='Header_IstLine'>Return</span>
                    <span className='Header_2ndLine'> & Order</span>
                </div></Link>
                <div className='Header_option'>
                    <span className='Header_IstLine'>Your</span>
                    <span className='Header_2ndLine'>Prime</span>
                </div>
                
                <Link to='/checkout'>
                <div className='header_optionBasket'>
                    <FontAwesomeIcon icon={faBasketShopping} />
                    <span className="header__optionLineTwo header__basketCount">
                    {basket?.length}
                    </span>
                </div>
                </Link>

            </div>
        </div>
    );
}

export default Header
