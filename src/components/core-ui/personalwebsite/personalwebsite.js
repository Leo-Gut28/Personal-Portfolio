
import React, { useContext } from 'react';
import './personalwebsite.css';

import { Container } from '@mui/material';
import { ThemeContext } from '../../../contexts/theme-context';
import { personalwebsiteData } from '../../../data/personawebsiteData';
import { Helmet } from 'react-helmet'
import Personalwebsite from '../../container/personalwebsite-container';



function PersonalwebsiteUI() {

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
                        <h2 style={{ color: theme.primary }}>{personalwebsiteData.title}</h2>
                        <p style={{ color: theme.tertiary }}>{personalwebsiteData.description1}</p>
                    </div>
                </div>
                <div className = "sensors">
                    <div className = "about-description">
                    <h3 style={{ color: theme.primary }}>{personalwebsiteData.sensordiagrams}</h3>
                        <h4 style={{ color: theme.tertiary }}>{personalwebsiteData.description3}</h4>
                        <p style={{ color: theme.tertiary }}>{personalwebsiteData.description4}</p>
                        
                        <br /><br />
                        <h4 style={{ color: theme.tertiary }}>{personalwebsiteData.description5}</h4>
                        <p style={{ color: theme.tertiary }}>{personalwebsiteData.description6}</p>
                        
                        <br /><br />
                        <h4 style={{ color: theme.tertiary }}>{personalwebsiteData.description7}</h4>
                        <p style={{ color: theme.tertiary }}>{personalwebsiteData.description8}</p>
                        
                    </div>
                </div>

                <div className="back-button">
                    <Personalwebsite to="/#education" label="Back to Projects" />
                    </div>

            </Container>
        </div>
    );
}

export default PersonalwebsiteUI;