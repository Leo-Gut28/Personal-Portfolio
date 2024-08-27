import { makeStyles } from '@mui/styles';
import React, { useContext } from 'react';
import Fade from 'react-reveal/Fade';
import eduImgBlack from '../../../assets/svg/education/eduImgBlack.svg';
import eduImgWhite from '../../../assets/svg/education/eduImgWhite.svg';
import { ThemeContext } from '../../../contexts/theme-context';
import './education.css';

function EducationCard({ id, institution, course, startYear, endYear, emptySpace, coursework, certificate, course2, 
    course3, course4, course5, course6, course7, coursework1, course8, course9, course10, course11, course12, course13}) {

    const { theme } = useContext(ThemeContext);

    const useStyles = makeStyles((t) => ({
        educationCard: {
            backgroundColor: theme.quaternary,
        },
    }));

    const classes = useStyles();

    return (
        <Fade bottom>
            <div key={id} className={`education-card ${classes.educationCard}`} >
                <div className="educard-img" style={{ backgroundColor: theme.primary }}>
                    <img src={theme.type === 'light' ? eduImgBlack : eduImgWhite} alt="" />
                </div>
                <div className="education-details">
                    <h6 style={{ color: theme.primary }}>{startYear}-{endYear}</h6>
                    <h4 style={{ color: theme.tertiary, fontSize: '23px' }}>{course}</h4>
                    <h4 style={{ color: theme.tertiary, fontSize: '23px' }}>{certificate}</h4>
                    <h5 style={{ color: theme.tertiary }}>{institution}</h5>
                    <h5 style={{ color: theme.tertiary }}>{emptySpace}</h5>
                    <br /> {/* This <br> tag adds a line break */}
                    <p style={{ color: theme.tertiary, fontSize: '22px'}}>{coursework}</p>

                    <p style={{ color: theme.tertiary, fontSize: '20px', textIndent: '20px' }}>{course2}</p>
                    <p style={{ color: theme.tertiary, fontSize: '20px', textIndent: '20px' }}>{course3}</p>
                    <p style={{ color: theme.tertiary, fontSize: '20px', textIndent: '20px' }}>{course4}</p>
                    <p style={{ color: theme.tertiary, fontSize: '20px', textIndent: '20px' }}>{course5}</p>
                    <p style={{ color: theme.tertiary, fontSize: '20px', textIndent: '20px' }}>{course6}</p>
                    <p style={{ color: theme.tertiary, fontSize: '20px', textIndent: '20px' }}>{course7}</p>
                    <p style={{ color: theme.tertiary, fontSize: '20px', textIndent: '20px' }}>{course8}</p>
                    <p style={{ color: theme.tertiary, fontSize: '20px', textIndent: '20px' }}>{course9}</p>
                    <p style={{ color: theme.tertiary, fontSize: '20px', textIndent: '20px' }}>{course10}</p>
                    <br /> {/* This <br> tag adds a line break */} 
                    <p style={{ color: theme.tertiary, fontSize: '22px'}}>{coursework1}</p>
                    <p style={{ color: theme.tertiary, fontSize: '20px', textIndent: '20px' }}>{course11}</p>
                    <p style={{ color: theme.tertiary, fontSize: '20px', textIndent: '20px' }}>{course12}</p>
                    <p style={{ color: theme.tertiary, fontSize: '20px', textIndent: '20px' }}>{course13}</p>
                    
                    
                </div>
            </div>
        </Fade>
    )
}

export default EducationCard
