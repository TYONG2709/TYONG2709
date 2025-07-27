import React from 'react';

function TopMenu() {
    return (
        <nav style={{ display: 'flex', justifyContent: 'center', backgroundColor: '#333', padding: '10px 0' }}>
            <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex' }}>
                <li style={{ margin: '0 15px' }}>
                    <a href="#about" style={{ color: 'white', textDecoration: 'none', fontSize: '18px' }}>About</a>
                </li>
                <li style={{ margin: '0 15px' }}>
                    <a href="#projects" style={{ color: 'white', textDecoration: 'none', fontSize: '18px' }}>Projects</a>
                </li>
                <li style={{ margin: '0 15px' }}>
                    <a href="#skills" style={{ color: 'white', textDecoration: 'none', fontSize: '18px' }}>Skills</a>
                </li>
                <li style={{ margin: '0 15px' }}>
                    <a href="#education" style={{ color: 'white', textDecoration: 'none', fontSize: '18px' }}>Education</a>
                </li>
                <li style={{ margin: '0 15px' }}>
                    <a href="#contact" style={{ color: 'white', textDecoration: 'none', fontSize: '18px' }}>Contacts</a>
                </li>
            </ul>
        </nav>
    );
};

export default TopMenu;