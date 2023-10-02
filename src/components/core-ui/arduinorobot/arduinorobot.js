
import React, { useContext } from 'react';
import './arduinorobot.css';
import botpicture from '../../../assets/png/Bot_SetUp.png';
import hallefect from '../../../assets/png/Hall-Effect_Diagram.png';
import lcddisplay from '../../../assets/png/Display_Diagram.png';
import rgbsensor from '../../../assets/png/RGB-Sensor_Diagram.png';
import { Container } from '@mui/material';
import { ThemeContext } from '../../../../src/contexts/theme-context';
import { arduinorobotData } from '../../../data/arduinorobotData';
import Arduinorobot from '../../container/arduinorobot_container';
import { Helmet } from 'react-helmet'


function ArduinorobotUI() {

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
                <div className="about-body">
                    <div className="about-description">
                        <h2 style={{ color: theme.primary }}>{arduinorobotData.title}</h2>
                        <p style={{ color: theme.tertiary }}>{arduinorobotData.description1}<br /><br />{arduinorobotData.description2}</p>
                    </div>
                    <div className="about-animation">
                    <img src={botpicture} alt="" width="400" height="400"/>
                    </div>
                </div>
                <div className = "sensors">
                    <div className = "about-description">
                    <h3 style={{ color: theme.primary }}>{arduinorobotData.sensordiagrams}</h3>
                        <h4 style={{ color: theme.tertiary }}>{arduinorobotData.description3}</h4>
                        <p style={{ color: theme.tertiary }}>{arduinorobotData.description4}</p>
                        <br /><br />
                        <h4 style={{ color: theme.tertiary }}>{arduinorobotData.description5}</h4>
                        <p style={{ color: theme.tertiary }}>{arduinorobotData.description6}</p>
                        <div className="about-animation">
                            <img src={rgbsensor} alt="" width="400" height="400"/>
                        </div>
                        <br /><br />
                        <h4 style={{ color: theme.tertiary }}>{arduinorobotData.description7}</h4>
                        <p style={{ color: theme.tertiary }}>{arduinorobotData.description8}</p>
                        <div className="about-animation">
                            <img src={lcddisplay} alt="" width="400" height="400"/>
                        </div>
                        <br /><br />
                        <h4 style={{ color: theme.tertiary }}>{arduinorobotData.description9}</h4>
                        <p style={{ color: theme.tertiary }}>{arduinorobotData.description10}</p>
                        <div className="about-animation">
                            <img src={hallefect} alt="" width="400" height="400"/>
                        </div>


            
                    </div>
                </div>

                <div className="back-button">
                    <Arduinorobot to="/#education" label="Back to Projects" />
                    </div>

            </Container>
        </div>
    );
}

export default ArduinorobotUI;