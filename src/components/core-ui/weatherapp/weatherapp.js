
import React, { useContext } from 'react';
import './weatherapp.css';
import pokepart1 from '../../../assets/png/WebVersion.gif';
import pokepart2 from '../../../assets/png/AndroidStudio.gif';
import { Container } from '@mui/material';
import { ThemeContext } from '../../../contexts/theme-context';
import { weatherappData } from '../../../data/weatherappData';
import { Helmet } from 'react-helmet'
import Weatherapp from '../../../../src/components/container/weatherapp-container';



function WeatherappUI() {

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
                <div className="about-body-noimage">
                    <div className="about-description-noimage">
                        <h2 style={{ color: theme.primary }}>{weatherappData.title}</h2>
                        <p style={{ color: theme.tertiary }}>{weatherappData.description1}<br /><br />{weatherappData.description2}</p>
                    </div>
                </div>
                <div className = "sensors">
                    <div className = "about-description">
                    <h3 style={{ color: theme.primary }}>{weatherappData.sensordiagrams}</h3>
                        <h4 style={{ color: theme.tertiary }}>{weatherappData.description3}</h4>
                        <p style={{ color: theme.tertiary }}>{weatherappData.description4}</p>
                        <div className="about-animation">
                            <img src={pokepart1} alt="" width="400" height="600"/>
                        </div>
                        <br /><br />
                        <h4 style={{ color: theme.tertiary }}>{weatherappData.description5}</h4>
                        <p style={{ color: theme.tertiary }}>{weatherappData.description6}</p>
                        <div className="about-animation">
                            <img src={pokepart2} alt="" width="400" height="600"/>
                        </div>
                        <br /><br />
                        <h4 style={{ color: theme.tertiary }}>{weatherappData.description7}</h4>
                        <p style={{ color: theme.tertiary }}>{weatherappData.description8}</p>
                    </div>
                </div>

                <div className="back-button">
                    <Weatherapp to="/#education" label="Back to Projects" />
                    </div>

            </Container>
        </div>
    );
}

export default WeatherappUI;