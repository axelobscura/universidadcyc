
import * as React from 'react';
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
          <Typography
            variant='h6'
            color='primary'
          >
            Instituto Mexicano del Cemento y del Concreto A.C.
          </Typography>
          <Typography
            variant='h2'
            component='h1'
            align='center'
            gutterBottom
          >
            Universidad Del Cemento y del Concreto
          </Typography>

          <form noValidate autoComplete='off' style={{'width':'50%'}}>
            <TextField  
              label='Usuario' 
              fullWidth='true'
              margin='dense'
              sx={{
                marginBottom: '10px'
              }}
            />
            <TextField  
              label='Contraseña' 
              fullWidth='true'
              type='password'
            />
            <Link href='/panel'>
              <Button 
                variant="contained" 
                endIcon={<SendIcon />} 
                style={{ 
                  'height': '55px', 
                  'marginTop': '8px', 
                  'fontSize': '2rem',
                  'display': 'flex',
                  'alignItems': 'center'
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
