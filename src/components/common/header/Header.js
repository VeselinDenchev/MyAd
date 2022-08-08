import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

import Breadcrumb from '../../breadcrumb/Breadcrumb';
import BottomBar from "./bottom-bar/BottomBar";
import NavBar from "./nav-bar/NavBar";
import TopBar from "./top-bar/TopBar";

export default function Header() {
    let location = useLocation();
    const [links, setLinks] = useState([]);
    
    let isHomePage = location.pathname === '/';
    let linksBuilder = [];

    useEffect(() => {
        if (!isHomePage) {
            const linksDestinations = location.pathname.split('/');
    
            for (let index = 0; index < linksDestinations.length; index++) {
                const isHomePageLink = index === 0;
                if (isHomePageLink) {
                    linksBuilder[0] = {to: linksDestinations[0], name: 'Home'};
                    continue;
                }
    
                linksBuilder[index] = {
                                    to: linksDestinations[index], 
                                    name: formatLinkDestinationName(linksDestinations[index])
                                };
            }
        }

        setLinks(linksBuilder);
    }, [location.pathname]);

    return (
        <header>
            <TopBar />
            <NavBar />
            <BottomBar />
            {!isHomePage ? <Breadcrumb links={links} /> : <></> }
        </header>
    );
}

function formatLinkDestinationName(name) {
    const nameWords = name.split('-');
    
    for (let index = 0; index < nameWords.length; index++) {
        nameWords[index] = toUpperFirstLetter(nameWords[index]);
    }

    const formattedName = nameWords.join(' ');

    return formattedName;
}

const toUpperFirstLetter = (string) => string.charAt(0).toUpperCase() + string.slice(1);