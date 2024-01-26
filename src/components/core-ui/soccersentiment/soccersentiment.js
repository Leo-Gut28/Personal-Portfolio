
import React, { useContext } from 'react';
import './soccersentiment.css';
import mainpage from '../../../assets/png/main_page.png'
import resultpage from '../../../assets/png/results_page.png'
import final2022 from '../../../assets/png/argentinavsfrance.png'
import { Container } from '@mui/material';
import { ThemeContext } from '../../../../src/contexts/theme-context';
import { soccersentimentData } from '../../../data/soccersentimentData';
import SoccerSentiment from '../../container/soccersentiment-container';
import { Helmet } from 'react-helmet'


function SoccerSentimentUI() {

    const { theme } = useContext(ThemeContext);
    return (
        
        <div style={{ backgroundColor: theme.secondary }}>
            <Helmet>
                <title> Leonardo Gutierrez - Porfolio</title>
            </Helmet>
            <Container className="arduinorobot" id="arduinorobot">
                <div className="line-styling">
                    <div className="style-circle" style={{ backgroundColor: theme.primary }}></div>
                    <div className="style-circle" style={{ backgroundColor: theme.primary }}></div>
                    <div className="style-line" style={{ backgroundColor: theme.primary }}></div>
                </div>
                <div className="about-body-soccer">
                    <div className="about-description">
                        <h2 style={{ color: theme.primary }}>{soccersentimentData.title}</h2>
                        <p style={{ color: theme.tertiary }}>{soccersentimentData.description1}<br /><br />{soccersentimentData.description2}
                        <br /><br />{soccersentimentData.demo} </p>
                        <br /><br />
                        <p style={{ color: theme.tertiary }}>{soccersentimentData.additionalInfo.text} <a href={soccersentimentData.additionalInfo.link} target="_blank" rel="noopener noreferrer">Leo's Soccer Sentiment Analysis</a>.</p>
                    </div>

                    
                </div>
                <div className = "sensors">
                    <div className = "about-description">
                    <br /><br />
                    <h3 style={{ color: theme.primary }}>{soccersentimentData.mainpage}</h3>
                        <p style={{ color: theme.tertiary }}>{soccersentimentData.mainpagedescrp}</p>
                        <br /><br />
                        <div className="about-animation">
                            <img src={mainpage} alt="" width="1000" height="600"/>
                        </div>
                        <br /><br />
                        <h3 style={{ color: theme.primary }}>{soccersentimentData.resultpage}</h3>
                        <p style={{ color: theme.tertiary }}>{soccersentimentData.resultpagedesc}</p>
                        <div className="about-animation">
                            <img src={resultpage} alt="" width="1000" height="600"/>
                        </div>
                        <br /><br />
                        <h3 style={{ color: theme.primary }}>{soccersentimentData.argentinafrance}</h3>
                        <div className="about-animation">
                            <img src={final2022} alt="" width="1000" height="500"/>
                        </div>


            
                    </div>
                </div>

                <div className="back-button">
                    <SoccerSentiment to="/#education" label="Back to Projects" />
                    </div>

            </Container>
        </div>
    );
}

export default SoccerSentimentUI;