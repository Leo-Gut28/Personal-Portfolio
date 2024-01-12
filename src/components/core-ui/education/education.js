import { Container } from '@mui/material';
import React, { useContext } from 'react';
//import education from '../../../assets/lottie/education.json';
import { ThemeContext } from '../../../contexts/theme-context';
import { educationData } from '../../../data/educationData';
//import AnimationLottie from '../../helper/animation-lottie';
import EducationCard from './education-card';
import './education.css';

function Education() {

    const { theme } = useContext(ThemeContext);
    return (
        <div style={{ backgroundColor: theme.secondary }}>
            <Container className="education" id="education">
                <div className="education-body">
                   
                    <div className="education-description">
                        <h1 style={{ color: theme.primary }}>Education</h1>
                        {educationData.map(edu => (
                            <EducationCard
                                key={edu.id}
                                id={edu.id}
                                institution={edu.institution}
                                course={edu.course}
                                startYear={edu.startYear}
                                endYear={edu.endYear}
                                empty={edu.emptySpace}
                                coursework={edu.coursework}
                                course1={edu.course1}
                                course2={edu.course2}
                                course3={edu.course3}
                                course4={edu.course4}
                                course5={edu.course5}
                                course6={edu.course6}
                                course7={edu.course7}
                                coursework1={edu.coursework1}
                                course8={edu.course8}
                                course9={edu.course9}
                                course10={edu.course10}
                                
                            />
                        ))}
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default Education
