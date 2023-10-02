import { makeStyles } from '@mui/styles';
import React, { useContext } from 'react';
import { ThemeContext } from '../../contexts/theme-context';
import { HashLink as NavLink } from 'react-router-hash-link';



const Pokerandom = ({ to, label, }) => {
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
    drawerLinks: {
        fontFamily: 'var(--primaryFont)',
        width: '50%',
        fontSize: '1.3rem',
        fontWeight: 600,
        [t.breakpoints.down('sm')]: {
          fontSize: '1.125rem',
        },
    },
  }));

  const classes = useStyles();

  return (
    <div>
      <NavLink to={to} smooth={true} spy={true} duration={2000}>
        <span className={classes.drawerLinks}>
            <button className={classes.contactBtn}>{label}</button>
        </span>
    </NavLink>
    </div>
    
  );
};

export default Pokerandom;