// import React from 'react';
import { IoIosArrowDown } from 'react-icons/io';
import p1 from '../assets/p1.png'
import {Typography, Card, Button } from '@mui/material'; 
import { CiLight } from 'react-icons/ci';
import { MdOutlineDarkMode } from 'react-icons/md';
import { useState } from 'react';

const Sidebar = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleMode = () => {
    setIsDarkMode(!isDarkMode);
    // Here you can write logic to switch between light and dark mode
    // For example, you can toggle a CSS class on the body element or update a state in a parent component to change the theme
    if (isDarkMode) {
      document.body.style.backgroundColor = '#EFF9F0'; // Light mode background color
    } else {
      document.body.style.backgroundColor = '#1E1E1E'; // Dark mode background color
    }
  };

  // Set initial background color
  document.body.style.backgroundColor = isDarkMode ? '#1E1E1E' : '#EFF9F0';
  
  return (
    
      <div>
      <Card elevation={4} sx={{minWidth:'265px',height:'170%', backgroundColor:'#EFF9F0'}}>
        <div style={{display:'flex', margin:'10px 20px'}}>
          <Typography variant='h4' color={'orange'}>Task</Typography>
          <Typography variant='h4' >mate</Typography>
        </div>
          <Typography style={{margin:'0px 15px'}}>Focus.Priority.Execute</Typography>

          <Card elevation={3} style={{width:'85%', margin:'10px'}}>
            <aside style={{display:'flex'}}>
            <div>
              <Typography><img src={p1} height="50px" width="50px" alt="p1" /></Typography>
            </div>
            <div style={{marginTop:'5px'}}>
              <Typography style={{fontWeight:'600'}}>Irvan Moses<IoIosArrowDown style={{fontWeight:'600'}}/></Typography>
              <Typography style={{fontSize:'0.8rem'}}>irvanmoses10@gmail.com</Typography>
          </div>
            </aside>
          </Card>

                
                <Button variant='outlined' style={{color:'black', width:'90%', margin:'10px',border:'none'}}>Menu <IoIosArrowDown style={{marginLeft:'150px'}}/></Button>
                


                <div style={{display:'flex' ,flexDirection:'column', gap:'10px'}}>
                  <Button variant='outlined' style={{ width:'80%', marginLeft:'20px',color:'black', border:"none"}}
                  onMouseEnter={(e) => e.target.style.backgroundColor = 'orange'}
                  onMouseLeave={(e) => e.target.style.backgroundColor = ''}>
                  Overview</Button>
                  <Button variant='outlined' style={{ width:'80%', marginLeft:'20px',color:'black', border:"none"}}
                  onMouseEnter={(e) => e.target.style.backgroundColor = 'orange'}
                  onMouseLeave={(e) => e.target.style.backgroundColor = ''}>
                  Task List</Button>
                  <Button variant='outlined' style={{ width:'80%', marginLeft:'20px',color:'black', border:"none"}} onMouseEnter={(e) => e.target.style.backgroundColor = 'orange'}
                  onMouseLeave={(e) => e.target.style.backgroundColor = ''}>
                  Project Overview</Button>
                  <Button variant='outlined' style={{ width:'80%', marginLeft:'20px',color:'black', border:"none"}} onMouseEnter={(e) => e.target.style.backgroundColor = 'orange'}
                  onMouseLeave={(e) => e.target.style.backgroundColor = ''}>
                  Calendar</Button>
                  <Button variant='outlined' style={{ width:'80%', marginLeft:'20px',color:'black', border:"none"}} onMouseEnter={(e) => e.target.style.backgroundColor = 'orange'}
                  onMouseLeave={(e) => e.target.style.backgroundColor = ''}>
                  Settings</Button>
                </div>
                
                <div>
                <Button variant='outlined' style={{color:'black', width:'90%', margin:'10px',border:'none'}}>List <IoIosArrowDown style={{marginLeft:'150px'}}/></Button>
                </div>

                <div style={{display:'flex' ,flexDirection:'column', gap:'10px'}}>
                <Button variant='outlined' style={{ width:'80%', marginLeft:'20px',color:'black', border:"none"}}
                onMouseEnter={(e) => e.target.style.backgroundColor = 'orange'}
                onMouseLeave={(e) => e.target.style.backgroundColor = ''}>
                Personal</Button>
                <Button variant='outlined' style={{ width:'80%', marginLeft:'20px',color:'black', border:"none"}}
                onMouseEnter={(e) => e.target.style.backgroundColor = 'orange'}
                onMouseLeave={(e) => e.target.style.backgroundColor = ''}>
                Design</Button>
                <Button variant='outlined' style={{ width:'80%', marginLeft:'20px',color:'black', border:"none"}} onMouseEnter={(e) => e.target.style.backgroundColor = 'orange'}
                onMouseLeave={(e) => e.target.style.backgroundColor = ''}>
                Department</Button>
                <Button variant='outlined' style={{ width:'80%', marginLeft:'20px',color:'black', border:"none"}} onMouseEnter={(e) => e.target.style.backgroundColor = 'orange'}
                onMouseLeave={(e) => e.target.style.backgroundColor = ''}>
                Research</Button>
                </div>
                  
                
                <div>
      <header style={{ padding: '20px', textAlign: 'center' }}>
        <h1>{isDarkMode ? 'Dark Mode' : 'Light Mode'}</h1>
      </header>
      <footer style={{ position: 'fixed', bottom: '20px', left: '20px', display: 'flex', alignItems: 'center' }}>
        <Button variant='contained' style={{ color: isDarkMode ? 'white' : 'black', border: 'none', borderRadius: '10px', marginRight: '10px' }} onClick={toggleMode}>
          <CiLight />
          Light
        </Button>
        <Button variant='contained' style={{ color: isDarkMode ? 'white' : 'black', border: 'none', borderRadius: '10px' }} onClick={toggleMode}>
          <MdOutlineDarkMode />
          Dark
        </Button>
      </footer>
    </div>
          
      </Card>
      </div>
    

    
  );
};

export default Sidebar;
