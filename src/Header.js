import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faBell, faSearch, faUser } from '@fortawesome/free-solid-svg-icons'
function Header(){
    return(
        <>
            <header className="main_header">
                <div className="header_block">
                    <div className="header_logo">
                        <span>My Logo</span>   
                    </div>
                    <div className="search_box">
                        <div className="search_filed">
                            <form>
                                <select name="category" id="category">
                                    <option value="option1">Option 1</option>
                                    <option value="option2">Option 2</option>
                                    <option value="option3">Option 3</option>
                                    <option value="option4">Option 4</option>
                                </select>
                                <input type="text" placeholder="Search here..."/>
                                <button className='search_button'><FontAwesomeIcon icon={faSearch} color="gray" /></button>
                            </form>
                            
                        </div>
                    </div>
                    <div className="menus">
                        <ul>
                            <li>Dashboard</li>
                            <li>My work</li>
                            <li>contract</li>
                            <li><FontAwesomeIcon icon={faBell} color="blue" /></li>
                            <li><FontAwesomeIcon icon={faUser} color="blue" /></li>
                        </ul>
                    </div>
                </div>
            </header>
        </>
    );
}

export default Header;