
import React, { useContext } from 'react';
import './ece350project.css';
import finalelevator from '../../../assets/png/finalelevator.JPG';
import initialelevator from '../../../assets/png/initialelevator.png';
import componentelevator from '../../../assets/png/componentselevator.png';
import hallefectdiagram from '../../../assets/png/halleffectdiagram.png';
import buttondiagram from '../../../assets/png/buttondiagram.png';
import breadboardelevator from '../../../assets/png/breadboardelevator.png'
import { Container } from '@mui/material';
import { ThemeContext } from '../../../../src/contexts/theme-context';
import { ece350projectData } from '../../../data/ece350projectData';
import { Helmet } from 'react-helmet'
import ECE350Project from '../../../../src/components/container/ece350project-container';


function ECE350ProjectUI() {

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
                        <h2 style={{ color: theme.primary }}>{ece350projectData.title}</h2>
                        <p style={{ color: theme.tertiary }}>{ece350projectData.description1}<br /><br />{ece350projectData.description2}</p>
                    </div>
                    <div className="about-animation">
                    <img src={finalelevator} alt="ANIMATED GIF" width="400" height="400"/>
                    </div>
                </div>
                <div className = "sensors">
                    <div className = "about-description">
                    <h3 style={{ color: theme.primary }}>{ece350projectData.sensordiagrams}</h3>
                        <h4 style={{ color: theme.tertiary }}>{ece350projectData.description3}</h4>
                        <p style={{ color: theme.tertiary }}>{ece350projectData.description4}</p>
                        <div className="about-animation-center">
                            <img src={initialelevator} alt="" width="400" height="500"/>
                        </div>
                        <br /><br />
                        <h4 style={{ color: theme.tertiary }}>{ece350projectData.description5}</h4>
                        <p style={{ color: theme.tertiary }}>{ece350projectData.description6}</p>
                        <div className="about-animation-center">
                            <img src={componentelevator} alt="" width="400" height="200"/>
                        </div>
                        <br></br>
                        <p style={{ color: theme.tertiary }}>{ece350projectData.description7}</p>
                        <div className="about-animation-center">
                            <img src={hallefectdiagram} alt="" width="400" height="400"/>
                        </div>
                        <br /><br />
                        <p style={{ color: theme.tertiary }}>{ece350projectData.description8}</p>
                        <div className="about-animation-center">
                            <img src={buttondiagram} alt="" width="400" height="400"/>
                        </div>
                        <br></br>
                        <p style={{ color: theme.tertiary }}>{ece350projectData.description9}</p>
                        <div className="about-animation-center">
                            <img src={breadboardelevator} alt="" width="400" height="400"/>
                        </div>
                        <br></br>
                        <p style={{ color: theme.tertiary }}>{ece350projectData.description10}</p>
                    </div>
                </div>

                <div className="back-button">
                    <ECE350Project to="/#education" label="Back to Projects" />
                    </div>

            </Container>
        </div>
    );
}

export default ECE350ProjectUI;