import React from "react";
import { Component } from "react";
import image from '/Assets/images/AboutPage/bro.png'
import './about.css';
import { withTranslation } from 'react-i18next';
import i18n from 'i18next';

class Sec3 extends Component {
    state = {  } 
    render() { 
        const { t } = this.props;
        const currentLanguage = i18n.language.split('-')[0];
        return (
            <section className="padc bg2 sec-reverse">
                    <div className="left-about">
                        <div className="imagepana">
                        <img src={image} alt="" />
                        </div>
                        
                    </div>

                    <div className="right" >
                        <div className="title" style={{marginBottom:'10px'}}>
                        {/* {t("Our")} <p className="mcolor">{t("Message")}</p>  */}
                        {currentLanguage === 'en' ? ( <> {t("Our")} <p className="mcolor">{t("Message")} </p> </> ) : ( <p className="mcolor"> {t("OurMessage")} </p> )} 
                        </div>
                        <div className="desc">
                            <p>
                            {t("Beyond merely")}</p>
                        </div>

                    </div>
            </section>
        );
    }
}
 
export default withTranslation()(Sec3);
