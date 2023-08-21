import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import axios from 'axios';
import Skill from './Skill';
import Github from '../Images/github.png';
import ReactImage from '../Images/React.png';
import PhpImage from '../Images/Php.png';
import CSharpImage from '../Images/CSharp.png'
import MySqlImage from '../Images/MySql.png'
import MongoDBImage from '../Images/MongoDB.jpg'
import FullWeb from '../Images/web.webp';
import ElectronJs from '../Images/electronjs.webp'
import Bootstrap from '../Images/Bootstrap.png'
import EntityFrameWork from '../Images/entityFrameWork.png'
import Jquery from '../Images/jquerylogo,.png'
import Mssql from '../Images/mssql.png'
import { useThemeContext } from '../Contexts/ThemeCon';
import { Card, CardBody, CardTitle, CardSubtitle } from 'reactstrap'
import { useTranslation } from 'react-i18next';
import { capitalize } from '../textCapitiliza';
function Abilities() {
  const [count, setCount] = useState(5);
  const { t } = useTranslation();
  const { theme } = useThemeContext();
  const [repos, setRepos] = useState();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    axios.get("https://api.github.com/users/EmreZURNACI/repos")
      .then((res) => setRepos(res.data))
      .finally(() => (setLoading(false)))
      .catch((err) => alert(err))
  }, [])
  const langs = [
    [ReactImage, "React"], [PhpImage, "Php"], [CSharpImage, "C#"], [MySqlImage, "MySql"], [MongoDBImage, "MongoDB"], [FullWeb, "HTML,CSS,JS"], [Bootstrap, "BOOTSTRAP"], [ElectronJs, "ELECTRONJS"], [EntityFrameWork, "EntityFrameWork"], [Jquery, "Jquery"], [Mssql, "Mssql"]
  ];
  return (
    <div className={(theme === "Light" ? "bg-light " : "bg-dark ")}>
      <Helmet>
        <title>{capitalize(t("Yetenekler"))}</title>
      </Helmet>
      <div className='container'>
        <div className='row yetenekler'>
          <div className="col-4 pt-4">
            <h2 className={"text-center pb-3 " + (theme === "Light" ? "text-dark" : "text-white")}>{capitalize(t("Yetenekler"))}</h2>
            <div className='p-0 m-0 languages'>
              {
                langs.map((lang, index) => (
                  <Skill key={index} lang={lang[1]} imagePath={lang[0]} />
                ))
              }
            </div>
          </div>
          <div className="col-8 pt-4">
            <h2 className={"text-center pb-3 " + (theme === "Light" ? "text-dark" : "text-white")}>{capitalize(t("Bazı Projeler"))}</h2>
            <ul className='d-flex flex-wrap gap-3 m-0 p-0 align-items-center justify-content-center'>
              {
                loading === true ?
                  <div className="spinner-border text-primary" role="status">
                    <span className="visually-hidden">Loading...</span>
                  </div> : repos.map((repo, index) => {
                    if (index <= count) {
                      return (
                        <Card key={index}
                          style={{ width: '20rem' }}>
                          <img alt="Sample" src={Github} />
                          <CardBody>
                            <CardTitle tag="h5">
                              {repo.name}
                            </CardTitle>
                            <CardSubtitle
                              className="mb-2 text-muted"
                              tag="h6"
                            >
                              <div className='d-flex flex-column'>
                                <p className='m-0 p-0 d-flex align-items-center justify-content-between'><span className='fw-bold'>Push Date:</span><span>{repo.pushed_at}</span> </p>
                                <p className='m-0 p-0 d-flex align-items-center justify-content-between'><span className='fw-bold'>Dominant Language:</span><span>{repo.language}</span></p>
                              </div>
                            </CardSubtitle>
                            <a href={repo.html_url} className='btn btn-primary'>{capitalize(t("git"))}</a>
                          </CardBody>
                        </Card>
                      )
                    }
                  })
              }
              {
                repos &&
                (repos.length >= (count + 2))
                &&
                <div className='d-flex align-items-center justify-content-center'>
                  <span className={"btn btn-warning text-white"} onClick={() => setCount(count + 6)} >{capitalize(t("dahasını yükle"))}</span>
                </div>
              }
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Abilities