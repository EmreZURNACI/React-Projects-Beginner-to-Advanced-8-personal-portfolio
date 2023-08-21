import React,{useState} from 'react';
import { Outlet } from 'react-router-dom';
import Menu from '../Templates/Menu'
import { useThemeContext } from '../Contexts/ThemeCon';
import { Helmet } from 'react-helmet';
import { useTranslation } from 'react-i18next';
import Scroll from './Scroll';
import { capitalize } from '../textCapitiliza';
function HomeLayout() {
    const { t } = useTranslation();
    const { theme } = useThemeContext();
    const [distance, setDistance] = useState(0);
    window.addEventListener("scroll", function () {
        setDistance(document.documentElement.scrollTop);
    })
    return (
        <>
            <div className={theme === "Light" ? "bg-white" : "bg-dark"}>
               {
                distance>=500 && <Scroll/>
               }
                <Helmet>
                    <title>{capitalize(t("AnaMenü"))}</title>
                </Helmet>
                <div className={theme === "Light" ? "container-fluid " : "container-fluid"}>
                    <Menu />
                    <div className={theme === "Light" ? "full-line-dark" : "full-line-light"}></div>
                </div>
                <div className="container-fluid px-0">
                    <Outlet />
                </div>
            </div>
        </>

    )
}

export default HomeLayout