
import React, { useContext } from 'react';
import './pokerandom.css';
import pokepicture from '../../../assets/png/PokeRandom.gif';
import pokepart1 from '../../../assets/png/Part1Poke.gif';
import pokepart2 from '../../../assets/png/Part2Poke.gif';
import { Container } from '@mui/material';
import { ThemeContext } from '../../../../src/contexts/theme-context';
import { pokerandomData } from '../../../data/pokerandomData';
import { Helmet } from 'react-helmet'
import Pokerandom from '../../../../src/components/container/pokerandom-container';



function PokerandomUI() {

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
                        <h2 style={{ color: theme.primary }}>{pokerandomData.title}</h2>
                        <p style={{ color: theme.tertiary }}>{pokerandomData.description1}<br /><br />{pokerandomData.description2}</p>
                    </div>
                    <div className="about-animation">
                    <img src={pokepicture} alt="ANIMATED GIF" width="400" height="600"/>
                    </div>
                </div>
                <div className = "sensors">
                    <div className = "about-description">
                    <h3 style={{ color: theme.primary }}>{pokerandomData.sensordiagrams}</h3>
                        <h4 style={{ color: theme.tertiary }}>{pokerandomData.description3}</h4>
                        <p style={{ color: theme.tertiary }}>{pokerandomData.description4}</p>
                        <div className="about-animation-center">
                            <img src={pokepart1} alt="" width="400" height="600"/>
                        </div>
                        <br /><br />
                        <h4 style={{ color: theme.tertiary }}>{pokerandomData.description5}</h4>
                        <p style={{ color: theme.tertiary }}>{pokerandomData.description6}</p>
                        <div className="about-animation-center">
                            <img src={pokepart2} alt="" width="400" height="600"/>
                        </div>
                        <br /><br />
                        <h4 style={{ color: theme.tertiary }}>{pokerandomData.description7}</h4>
                        <p style={{ color: theme.tertiary }}>{pokerandomData.description8}</p>
                    </div>
                </div>

                <div className="back-button">
                    <Pokerandom to="/#education" label="Back to Projects" />
                    </div>

            </Container>
        </div>
    );
}

export default PokerandomUI;