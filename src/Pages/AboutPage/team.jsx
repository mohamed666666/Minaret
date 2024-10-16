import React from "react";
import { Component } from "react";
import { TiSocialFacebook } from "react-icons/ti";
import { TiSocialLinkedin } from "react-icons/ti";
import { FiPhone } from "react-icons/fi";
import Mohamidali from '/Assets/images/AboutPage/team/2.png'
import ceo from '/Assets/images/AboutPage/team/3.png'
import Amira from '/Assets/images/AboutPage/team/4.png'
import Abdelrhman from '/Assets/images/AboutPage/team/5.png'
import Gehad from '/Assets/images/AboutPage/team/6.png'
import Shimaa from '/Assets/images/AboutPage/team/7.png'
import saif from '/Assets/images/AboutPage/team/8.png'
import Doaa from '/Assets/images/AboutPage/team/9.png'
import { withTranslation } from 'react-i18next';

class Team extends Component {
    state = {}
    render() {
        const { t } = this.props;
        return (
            <section className="padc Team-section bg1">
                <div className="header">
                    <div className="title">
                        <p >{t("Meet")} <span style={{color:'#8A1848'}}> {t("the Team")}</span></p>
                    </div>
                    <div className="desc">
                        <p>{t("The Architects Behind Your Brand's Ascension")}</p>
                    </div>
                </div>

                <div className="team desc items-center">
                    
                    <div className="member">
                        <div className="mem-image">
                            <img src={ceo} alt="" />
                        </div>
                        <div className="mem-data">
                            <div className="Name">
                                <p>{t("Ahmed El Khatib")}  </p>
                            </div>
                            <div className="job">
                            {t("CEO")}

                            </div>
                            <hr/>
                            <div className="summary lg:h-[180px]" >
                                <p>{t("Growing up")} </p>
                            </div>
                            <div className="social">
                                <div className="icon"> <TiSocialLinkedin size={20} /></div>
                                <div className="icon"> <TiSocialFacebook size={20}/></div>
                                <div className="icon"> <FiPhone size={20}/></div>
                            </div>
                            <div className="social2">
                                <div className="icon"> <TiSocialLinkedin size={10} /></div>
                                <div className="icon"> <TiSocialFacebook size={10}/></div>
                                <div className="icon"> <FiPhone size={10}/></div>
                            </div>
                        </div>
                    </div>

                    <div className="member">
                        <div className="mem-image">
                            <img src={Mohamidali} alt="" />
                        </div>
                        <div className="mem-data ">
                            <div className="Name ">
                                <p>{t("Mohamed Ali")}  </p>
                            </div>
                            <div className="job">
                            {t("Software Manager")}
                            </div>
                            <hr/>
                            <div className="summary lg:h-[190px]" >
                                <p>{t("As a Software Manager")}</p>
                            </div>
                            <div className="social">
                                <div className="icon"> <TiSocialLinkedin size={20} /></div>
                                <div className="icon"> <TiSocialFacebook size={20}/></div>
                                <div className="icon"> <FiPhone size={20}/></div>

                            </div>
                            <div className="social2">
                                <div className="icon"> <TiSocialLinkedin size={10} /></div>
                                <div className="icon"> <TiSocialFacebook size={10}/></div>
                                <div className="icon"> <FiPhone size={10}/></div>
                            </div>
                        </div>
                    </div>

                    <div className="member">
                        <div className="mem-image">
                            <img src={Abdelrhman} alt="" />
                        </div>
                        <div className="mem-data ">
                            <div className="Name ">
                                <p>{t("Abdelrahman Fathy")}  </p>
                            </div>
                            <div className="job">
                            {t("Web Developer")}
                            </div>
                            <hr/>
                            <div className="summary lg:h-[180px]" >
                                <p>{t("Abdelrahman")}</p>
                            </div>
                            <div className="social">
                                <div className="icon"> <TiSocialLinkedin size={20} /></div>
                                <div className="icon"> <TiSocialFacebook size={20}/></div>
                                <div className="icon"> <FiPhone size={20}/></div>

                            </div>
                            <div className="social2">
                                <div className="icon"> <TiSocialLinkedin size={10} /></div>
                                <div className="icon"> <TiSocialFacebook size={10}/></div>
                                <div className="icon"> <FiPhone size={10}/></div>
                            </div>
                        </div>
                    </div>

                    <div className="member">
                        <div className="mem-image">
                            <img src={Gehad} alt="" />
                        </div>
                        <div className="mem-data ">
                            <div className="Name ">
                                <p>{t("Gehad M. Shehata")}  </p>
                            </div>
                            <div className="job">
                            {t("Team manager")}
                            </div>
                            <hr/>
                            <div className="summary lg:h-[190px]" >
                                <p>{t("Gehad")}</p>
                            </div>
                            <div className="social">
                                <div className="icon"> <TiSocialLinkedin size={20} /></div>
                                <div className="icon"> <TiSocialFacebook size={20}/></div>
                                <div className="icon"> <FiPhone size={20}/></div>

                            </div>
                            <div className="social2">
                                <div className="icon"> <TiSocialLinkedin size={10} /></div>
                                <div className="icon"> <TiSocialFacebook size={10}/></div>
                                <div className="icon"> <FiPhone size={10}/></div>
                            </div>
                        </div>
                    </div>

                    <div className="member">
                        <div className="mem-image">
                            <img src={Shimaa} alt="" />
                        </div>
                        <div className="mem-data ">
                            <div className="Name ">
                                <p>{t("Shimaa Karam")}  </p>
                            </div>
                            <div className="job">
                            {t("Sr.Graphic Designer")}
                            </div>
                            <hr/>
                            <div className="summary lg:h-[180px]" >
                                <p>{t("Shimaa")}</p>
                            </div>
                            <div className="social">
                                <div className="icon"> <TiSocialLinkedin size={20} /></div>
                                <div className="icon"> <TiSocialFacebook size={20}/></div>
                                <div className="icon"> <FiPhone size={20}/></div>

                            </div>
                            <div className="social2">
                                <div className="icon"> <TiSocialLinkedin size={10} /></div>
                                <div className="icon"> <TiSocialFacebook size={10}/></div>
                                <div className="icon"> <FiPhone size={10}/></div>
                            </div>
                        </div>
                    </div>

                    <div className="member h-full">
                        <div className="mem-image">
                            <img src={Amira} alt="" />
                        </div>
                        <div className="mem-data ">
                            <div className="Name ">
                                <p>{t("Amira Mohamed")}  </p>
                            </div>
                            <div className="job">
                            {t("Sr.Graphic Designer")}
                            </div>
                            <hr/>
                            <div className="summary lg:h-[190px]" >
                                <p>{t("Amira")}</p>
                            </div>
                            <div className="social">
                                <div className="icon"> <TiSocialLinkedin size={20} /></div>
                                <div className="icon"> <TiSocialFacebook size={20}/></div>
                                <div className="icon"> <FiPhone size={20}/></div>

                            </div>
                            <div className="social2">
                                <div className="icon"> <TiSocialLinkedin size={10} /></div>
                                <div className="icon"> <TiSocialFacebook size={10}/></div>
                                <div className="icon"> <FiPhone size={10}/></div>
                            </div>
                        </div>
                    </div>

                    <div className="member h-full">
                        <div className="mem-image">
                            <img src={saif} alt="" />
                        </div>
                        <div className="mem-data ">
                            <div className="Name ">
                                <p>{t("Saif R Mostafa")}  </p>
                            </div>
                            <div className="job">
                            {t("Front-End Developer")}
                            </div>
                            <hr/>
                            <div className="summary lg:h-[180px]" >
                                <p>{t("Saif")}</p>
                            </div>
                            <div className="social">
                                <div className="icon"> <TiSocialLinkedin size={20} /></div>
                                <div className="icon"> <TiSocialFacebook size={20}/></div>
                                <div className="icon"> <FiPhone size={20}/></div>

                            </div>
                            <div className="social2">
                                <div className="icon"> <TiSocialLinkedin size={10} /></div>
                                <div className="icon"> <TiSocialFacebook size={10}/></div>
                                <div className="icon"> <FiPhone size={10}/></div>
                            </div>
                        </div>
                    </div>

                    <div className="member h-full">
                        <div className="mem-image">
                            <img src={Doaa} alt="" />
                        </div>
                        <div className="mem-data ">
                            <div className="Name ">
                                <p>{t("Doaa Asqalany")}  </p>
                            </div>
                            <div className="job">
                            {t("Account Manager")}
                            </div>
                            <hr/>
                            <div className="summary lg:h-[190px]" >
                                <p>{t("Doaa")}</p>
                            </div>
                            <div className="social">
                                <div className="icon"> <TiSocialLinkedin size={20} /></div>
                                <div className="icon"> <TiSocialFacebook size={20}/></div>
                                <div className="icon"> <FiPhone size={20}/></div>

                            </div>
                            <div className="social2">
                                <div className="icon"> <TiSocialLinkedin size={10} /></div>
                                <div className="icon"> <TiSocialFacebook size={10}/></div>
                                <div className="icon"> <FiPhone size={10}/></div>
                            </div>
                        </div>
                    </div>

                </div>

            </section>
        );
    }
}

export default withTranslation()(Team);