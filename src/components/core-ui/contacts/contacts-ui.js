import React, { useContext, useRef, useState } from 'react';
import { AiOutlineCheckCircle, AiOutlineSend } from 'react-icons/ai';
import { FiAtSign, FiPhone } from 'react-icons/fi';
import { HiOutlineLocationMarker } from 'react-icons/hi';
import { IoClose } from 'react-icons/io5';
import { Snackbar, SnackbarContent, IconButton } from '@mui/material';
import { ThemeContext } from '../../../contexts/theme-context';
import { contactsData } from '../../../data/contactsData';
import emailjs from '@emailjs/browser';
import './contacts.css';

const ContactUI = ({ open, success, errMsg, handleClose, classes }) => {
  const form = useRef();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const { theme } = useContext(ThemeContext);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_bcojfai', 'template_qrcc7o7', form.current, {
        publicKey: '6lW7adkKrtaDr6R8t',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          // Reset form fields after successful submission
        },
        (error) => {
          console.log('FAILED...', error.text);
        }
      );
  };

  return (
    <div className='contacts' id='contacts' style={{ backgroundColor: theme.secondary }}>
      <div className='contacts--container'>
        <h1 style={{ color: theme.primary }}>Contact (Coming Soon)</h1>
        <div className='contacts-body'>
          <div className='contacts-form'>
            <form ref={form} onSubmit={sendEmail}>
              <div className='input-container'>
                <label htmlFor='Name' className={classes.label}>
                  Name
                </label>
                <input
                  placeholder='John Doe'
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  type='text'
                  name='user_name'
                  className={`form-input ${classes.input}`}
                />
              </div>
              <div className='input-container'>
                <label htmlFor='Email' className={classes.label}>
                  Email
                </label>
                <input
                  placeholder='John@doe.com'
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  type='email'
                  name='user_email'
                  className={`form-input ${classes.input}`}
                />
              </div>
              <div className='input-container'>
                <label htmlFor='Message' className={classes.label}>
                  Message
                </label>
                <textarea
                  placeholder='Type your message....'
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  type='text'
                  name='message'
                  className={`form-message ${classes.message}`}
                />
              </div>
              <div className='submit-btn'>
                <button type='submit' className={classes.submitBtn}>
                  <p>{!success ? 'Send' : 'Sent'}</p>
                  <div className='submit-icon'>
                    <AiOutlineSend
                      className='send-icon'
                      style={{
                        animation: !success ? 'initial' : 'fly 0.8s linear both',
                        position: success ? 'absolute' : 'initial',
                      }}
                    />
                    <AiOutlineCheckCircle
                      className='success-icon'
                      style={{
                        display: !success ? 'none' : 'inline-flex',
                        opacity: !success ? '0' : '1',
                      }}
                    />
                  </div>
                </button>
              </div>
            </form>
          </div>
          <Snackbar
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'center',
            }}
            open={open}
            autoHideDuration={4000}
            onClose={handleClose}
          >
            <SnackbarContent
              action={
                <React.Fragment>
                  <IconButton size='small' aria-label='close' color='inherit' onClick={handleClose}>
                    <IoClose fontSize='small' />
                  </IconButton>
                </React.Fragment>
              }
              style={{
                backgroundColor: theme.primary,
                color: theme.secondary,
                fontFamily: 'var(--primaryFont)',
              }}
              message={errMsg}
            />
          </Snackbar>
        </div>
      </div>
      <img src={theme.contactsimg} alt='contacts' className='contacts--img' />
    </div>
  );
};

export default ContactUI;
