import React, { useContext } from 'react';
import { Container } from '@mui/material';
import Marquee from "react-fast-marquee";
import { ThemeContext } from '../../../contexts/theme-context';
import { skillsData } from '../../../data/skillsData';
import { otherData } from '../../../data/otherskillsData'
import { skillsImage } from '../../../utils/skillsImage';
import './skills.css';

function Skills() {
    const { theme } = useContext(ThemeContext);

    const skillBoxStyle = {
        backgroundColor: theme.secondary,
        boxShadow: `0px 0px 12px ${theme.primary}`
    }

    return (
        <div style={{ backgroundColor: theme.secondary }}>
            <Container className="skills" id="skills">
                <div className="skillsHeader">
                    <h1 style={{ color: theme.primary }}>Skills</h1>
                </div>
                <div className="skillgroups">
                    <h2 style={{ color: theme.primary }}>Languages</h2>
                </div>
                <div className="skillsContainer">
                    <div className="skill--scroll">
                        <Marquee
                            gradient={false}
                            speed={80}
                            pauseOnHover={true}
                            pauseOnClick={true}
                            delay={0}
                            play={true}
                            direction="left"
                        >
                            {skillsData.map((skill, id) => (
                                <div className="skill--box" key={id} style={skillBoxStyle}>
                                    <img src={skillsImage(skill)} alt={skill} />
                                    <h3 style={{ color: theme.tertiary }}>
                                        {skill}
                                    </h3>
                                </div>
                            ))}
                        </Marquee>
                    </div>
                </div>
                <div className="skillgroups">
                    <h2 style={{ color: theme.primary }}>Other</h2>
                </div>
                <div className="skillsContainer">
                    <div className="skill--scroll">
                        <Marquee
                            gradient={false}
                            speed={80}
                            pauseOnHover={true}
                            pauseOnClick={true}
                            delay={0}
                            play={true}
                            direction="left"
                        >
                            {otherData.map((skill, id) => (
                                <div className="skill--box" key={id} style={skillBoxStyle}>
                                    <img src={skillsImage(skill)} alt={skill} />
                                    <h3 style={{ color: theme.tertiary }}>
                                        {skill}
                                    </h3>
                                </div>
                            ))}
                        </Marquee>
                    </div>
                </div>
            </Container>    
        </div>
    )
}

export default Skills
