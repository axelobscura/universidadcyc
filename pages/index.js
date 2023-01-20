
import React, { useCallback } from 'react';
import Link from 'next/link';
import Layout from './components/Layout';
import styles from '../styles/Home.module.css';
import { Typography } from '@mui/material';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';

export default function Home() {

  return (
    <Layout>
      <div className={styles.container}>
        <main className={styles.main}>
          <img src='/logo.svg' alt='tecnológico del cemento y del concreto' title='tecnológico del cemento y del concreto' style={{ 'marginBottom' : '40px', 'width': '320px'}} />
          <form noValidate autoComplete='off' style={{'width':'80%'}}>
            <TextField  
              label='Usuario' 
              fullWidth='true'
              margin='dense'
              sx={{
                input: {
                  background: "#fff",
                  width: "100%",
                  fontSize: '1.2rem',
                  border: 'none'
                },
              }}
              InputLabelProps={{
                style: {
                  color: 'black',
                  fontSize: '1.5rem',
              }}}
              style ={{
                marginBottom: '20px'
              }}
            />
            <TextField  
              label='Contraseña' 
              fullWidth='true'
              type='password'
              sx={{
                input: {
                  background: "#fff",
                  width: "100%",
                  fontSize: '1.2rem',
                  border: 'none',
                },
              }}
              InputLabelProps={{
                style: {
                  color: 'black',
                  fontSize: '1.5rem',
              }}}
              style ={{
                marginBottom: '20px'
              }}
            />
            <Link href='/panel'>
              <Button 
                variant="contained" 
                endIcon={<SendIcon />} 
                style={{
                  borderRadius: 35,
                  backgroundColor: "#100839",
                  padding: "10px 25px",
                  fontSize: "1.5rem"
                }}
                fullWidth='true'
              >
                INGRESAR
              </Button>
            </Link>
          </form>
        </main>
      </div>
    </Layout>
  )
}
