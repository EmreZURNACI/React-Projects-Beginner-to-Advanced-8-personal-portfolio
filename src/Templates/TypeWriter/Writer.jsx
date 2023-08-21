import React from 'react';
import Typewriter from "typewriter-effect";
import './style.css'
import { useThemeContext } from '../../Contexts/ThemeCon';
import CV from '../../CV.pdf';
import { useTranslation } from 'react-i18next';
function App() {
    const { theme } = useThemeContext();
    const { t } = useTranslation();
    return (
        <div className={"writer container mt-5 " + (theme === "Light" ? "text-dark" : "text-light")}>
            <Typewriter
                onInit={(typewriter) => {
                    typewriter
                        .typeString("<h1 className='name'>Osman Emre ZURNACI</h1>")
                        .pauseFor(500)
                        .typeString(`<h1 className='job'>` + t("ben") + ` Full Stack</h1>`)
                        .pauseFor(200)
                        .typeString("<h1 className='job'>Web</h1>")
                        .pauseFor(200)
                        .typeString(`<h1 className='job'>` + t("geliştirici") + `</h1>`)
                        .pauseFor(500)
                        .typeString(`<div><a href=${CV} download=${CV} className="btn btn-primary ms-4">Get CV</a></div>`)
                        .pauseFor(10000)
                        .deleteAll()
                        .start();
                }}
                options={{
                    autoStart: true,
                    loop: true
                }}
            />
        </div>
    );
}

export default App;
