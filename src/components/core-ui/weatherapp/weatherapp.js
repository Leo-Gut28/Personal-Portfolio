
import React, { useContext } from 'react';
import './weatherapp.css';
import webversion from '../../../assets/png/WebVersion.gif';
import updatedwebversion from '../../../assets/png/Updatedwebversion.gif'
import androidversion from '../../../assets/png/AndroidStudio.gif';
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
            <Container className="weatherapp" id="weatherapp">
            <div className="line-styling">
                <div className="style-circle" style={{ backgroundColor: theme.primary }}></div>
                <div className="style-circle" style={{ backgroundColor: theme.primary }}></div>
                <div className="style-line" style={{ backgroundColor: theme.primary }}></div>
            </div>

            <div className="weatherapp-body">
                <div className="weatherapp-description weatherapp-description-image">
                    <h2 style={{ color: theme.primary }}>{weatherappData.title}</h2>
                    <p style={{ color: theme.tertiary }}>{weatherappData.description1}<br /><br />{weatherappData.description2}</p>
                    <br></br>
                    <p style={{ color: theme.tertiary }}>{weatherappData.updates}</p>
                </div>

                <div className="weatherapp-description">
                    <h3 style={{ color: theme.primary }}>Updated Web</h3>
                    <p style={{ color: theme.tertiary }}>{weatherappData.web}</p>
                    <div className="weatherapp-animation">
                        <img src={updatedwebversion} alt="" width="800" height="800"/>
                    </div>
                    <div className="back-button">
                        <Weatherapp to="/livedemo" label="Live Demo"/>
                    </div>


                    <br></br>
                    <br></br>
                    <h3 style={{ color: theme.primary }}>{weatherappData.thedifferences}</h3>
                    <div className="side-by-side">
                        <div>
                            <h4 style={{ color: theme.tertiary }}>{weatherappData.description3}</h4>
                            <br></br>
                            <p style={{ color: theme.tertiary }}>{weatherappData.description4}</p>
                            <div className="weatherapp-animation">
                                <img src={webversion} alt="" width="400" height="600"/>
                            </div>
                        </div>
                        <div>
                            <h4 style={{ color: theme.tertiary }}>{weatherappData.description5}</h4>
                            <br></br>
                            <p style={{ color: theme.tertiary }}>{weatherappData.description6}</p>
                            <br></br>
                            <br></br>
                            <div className="weatherapp-animation">
                                <img src={androidversion} alt="" width="400" height="600"/>
                            </div>
                        </div>
                    </div>
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