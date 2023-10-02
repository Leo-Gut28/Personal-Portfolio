import { makeStyles } from '@mui/styles';
import React, { useContext } from 'react';
import { ThemeContext } from '../../contexts/theme-context';
import { HashLink as NavLink } from 'react-router-hash-link';

const Arduinorobot = ({ to, label }) => {
  const { theme } = useContext(ThemeContext);

  const useStyles = makeStyles((t) => ({
    contactBtn: {
      backgroundColor: theme.primary,
      color: theme.secondary,
      borderRadius: '30px',
      textTransform: 'inherit',
      textDecoration: 'none',
      width: '150px',
      height: '50px',
      fontSize: '1rem',
      fontWeight: '500',
      fontFamily: 'var(--primaryFont)',
      border: `3px solid ${theme.primary}`,
      transition: '500ms ease-out',
      '&:hover': {
        backgroundColor: theme.buttonColor,
        color: theme.secondary,
        border: `3px solid ${theme.buttonColor}`,
      },
      [t.breakpoints.down('sm')]: {
        display: 'none',
      },
    },
  }));

  const classes = useStyles();

  return (
    <div>
      <NavLink to={to} smooth={true} spy={true} duration={2000}>
      <button className={classes.contactBtn}>{label}</button>
    </NavLink>
    </div>
    
  );
};

export default Arduinorobot;