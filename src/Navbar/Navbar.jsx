// Navbar.js
import { Button, Card, Typography } from '@mui/material';
import { BsThreeDots } from 'react-icons/bs';
import { CiSearch, CiSquarePlus } from 'react-icons/ci';
import { FaRegCalendarAlt } from 'react-icons/fa';
import { IoIosAdd, IoIosArrowDown, IoIosArrowDropdown } from 'react-icons/io';
import { MdArrowOutward, MdOutlineKeyboardArrowDown } from 'react-icons/md';
import p1 from '../assets/p1.png'



const Navbar = () => {
    return (
        <div style={{width:'82%'}}>
        <Card sx={{minWidth:'82%', height:'25%',
        backgroundColor:'orange'}}>
            <Typography color={'white'} style={{marginTop:'7%', padding:'0px 20px',fontSize:'0.8rem'}}>Projects / My Project</Typography>
            <Typography color={'white'} style={{padding:'0px 20px', fontSize:'1.8rem'}}>My Projects <MdOutlineKeyboardArrowDown /></Typography>
            <Typography color={'white'} style={{display:'flex', justifyContent:'flex-end', marginRight:'20px'}}><FaRegCalendarAlt />12 Feb 2023</Typography>
        </Card>
        <aside style={{display:'flex' , justifyContent: 'space-around'}}>
            <div>
                <Typography style={{padding:'10px',color:'lightslategray',fontWeight:'500', marginTop:'20px'}}>Priority</Typography>
                <Typography style={{padding:'10px',color:'lightslategray',fontWeight:'500'}}>Due Date</Typography>
                <Typography style={{padding:'10px',color:'lightslategray',fontWeight:'500'}}>Tags</Typography>
                <Typography style={{padding:'15px 0px',color:'lightslategray',fontWeight:'500'}}>Assignees</Typography>
            </div>
            <div style={{padding:'5px'}}>
                <Button variant='contained' style={{color:'black' , backgroundColor:'lightgray',padding:'5px',marginTop:'20px'}}>Medium</Button>
                <Typography style={{padding:'10px 0px'}}>28 Feb 2023</Typography>
                <div style={{display:'flex', gap:'10px'}}>
                    <Button variant='contained' style={{color:'black',textTransform:'capitalize', backgroundColor:'orange'}}>Meetings</Button>
                    <Button variant='contained' style={{color:'black',textTransform:'capitalize', backgroundColor:'lightyellow'}}>UI Design</Button>
                    <Button variant='contained' style={{color:'black',textTransform:'capitalize', backgroundColor:'lightskyblue'}}>Development</Button>
                    <Button variant='contained' style={{color:'black',textTransform:'capitalize', backgroundColor:'lightgreen'}}>UX Research</Button>
                </div>
                <div style={{display:'flex', padding:'20px 0px', gap:'10px'}}>
                    <Typography style={{border:'1px solid black', borderRadius:'30px',padding:'10px'}}>Irvan Moses</Typography>
                    <Typography style={{border:'1px solid black', borderRadius:'30px',padding:'10px'}}>Hstypo Studio</Typography>
                    <Typography style={{border:'1px solid black', borderRadius:'30px',padding:'10px'}}>+2 more</Typography>
                    <IoIosAdd style={{fontSize:'2rem', backgroundColor:'silver', borderRadius:'30px',marginTop:'10px'}}/>
                </div>
            </div>
            <div>
                <Button style={{border:'1px solid black', color:'black', backgroundColor:'white', width:'120%', marginTop:'10px',display:'flex', justifyContent:'flex-start'}}>Search task or project            <CiSearch style={{fontSize:'1.5rem'}}/></Button>
            </div>
        </aside>
        
            <div style={{display:'flex',justifyContent:'space-between'}}>
            <div>
                <Button variant='outlined' style={{marginLeft:'50px',backgroundColor:'orange',color:'white',border:'none'}}>New Task <IoIosArrowDropdown style={{color:'white'}}/></Button>
            </div>
            <div style={{marginRight:'50px'}}>
                <Button style={{color:'black',width:'20%', margin:'10px', border:'1px solid black',textTransform:'capitalize'}}>Filter <IoIosArrowDown style={{marginLeft:'20px'}}/></Button>
                <Button style={{color:'black',width:'20%', margin:'10px', border:'1px solid black',textTransform:'capitalize'}}>Sort <IoIosArrowDown style={{marginLeft:'20px'}}/></Button>
                <Button style={{color:'black',width:'20%', margin:'10px', border:'1px solid black',textTransform:'capitalize'}}>Label <IoIosArrowDown style={{marginLeft:'20px'}}/></Button>
                <Button style={{color:'black',width:'20%', margin:'10px', border:'1px solid black', textTransform:'capitalize'}}>Catergory <IoIosArrowDown style={{marginLeft:'10px'}}/></Button>
            </div>
            </div>

            {/* Home Content */}
            <section style={{backgroundColor:'#EAFFFD',display:'flex',justifyContent:"space-between"}}>
                <div className='firstRow' style={{backgroundColor:'#EAFFFD', marginTop:'10px',display:'flex',gap:'20px',  flexDirection:'column'}}>
                    <Card elevation={4} style={{width:'100%',display:'flex',borderRadius:'10px', justifyContent:'space-between', marginLeft:'10px',padding:'10px'}}>
                        <div style={{marginLeft:'10px'}}>
                            <Typography>Todo</Typography>
                        </div>
                        <div style={{display:'flex'}}>
                            <Typography><BsThreeDots /></Typography>
                            <Typography><CiSquarePlus /></Typography>
                        </div>
                    </Card>
                     <Card elevation={4} style={{backgroundColor:'#FFFD98',width:'100%', marginLeft:'10px',padding:'10px',borderRadius:'20px'}}>
                         <div style={{display:'flex', justifyContent:'space-between'}}>
                             <Typography>⭐ Today</Typography>
                             <Typography><MdArrowOutward style={{borderRadius:'50%',border:'1px solid black'}}/></Typography>
                         </div>
                         <div>
                           <Typography variant='h6' style={{fontWeight:'600'}}>Create a Visual <br /> Style Guide</Typography>
                         </div>
                         <div style={{display:'flex', justifyContent:'space-between'}}>
                             <Typography>09.00 AM - 09.30Am</Typography>
                             <Typography><img src={p1}height='30px' width='30px' alt="p1" /></Typography>
                         </div>
                     </Card>
                     <Card elevation={4} style={{backgroundColor:'#48ACF0',width:'100%', marginLeft:'10px',padding:'10px',borderRadius:'20px'}}>
                         <div style={{display:'flex', justifyContent:'space-between'}}>
                             <Typography>18 Feb 2023</Typography>
                             <Typography><MdArrowOutward style={{borderRadius:'50%',border:'1px solid black'}}/></Typography>
                         </div>
                         <div>
                           <Typography variant='h6' style={{fontWeight:'600'}}>Slicing <br /> Landing Page</Typography>
                         </div>
                         <div style={{display:'flex', justifyContent:'space-between'}}>
                             <Typography>07.30 AM - 09.30Am</Typography>
                             <Typography><img src={p1}height='30px' width='30px' alt="p1" /></Typography>
                         </div>
                     </Card>
                     <Card elevation={4} style={{backgroundColor:'#F5DBCB',width:'100%', marginLeft:'10px',padding:'10px',borderRadius:'20px'}}>
                         <div style={{display:'flex', justifyContent:'space-between'}}>
                             <Typography>⭐ 28 Feb 2023</Typography>
                             <Typography><MdArrowOutward style={{borderRadius:'50%',border:'1px solid black'}}/></Typography>
                         </div>
                         <div>
                           <Typography variant='h6' style={{fontWeight:'600'}}>Testing and <br /> User Feedback</Typography>
                         </div>
                         <div style={{display:'flex', justifyContent:'space-between'}}>
                             <Typography>09.00 AM - 09.30Am</Typography>
                             <Typography><img src={p1}height='30px' width='30px' alt="p1" /></Typography>
                         </div>
                     </Card>
                     <Card elevation={4} style={{backgroundColor:'#61E786',width:'100%', marginLeft:'10px',padding:'10px',borderRadius:'20px'}}>
                         <div style={{display:'flex', justifyContent:'space-between'}}>
                             <Typography>02 Mar 2023</Typography>
                             <Typography><MdArrowOutward style={{borderRadius:'50%',border:'1px solid black'}}/></Typography>
                         </div>
                         <div>
                           <Typography variant='h6' style={{fontWeight:'600'}}>Create User</Typography>
                         </div>
                         <div style={{display:'flex', justifyContent:'space-between'}}>
                             <Typography>09.00 AM - 09.30Am</Typography>
                             <Typography><img src={p1}height='30px' width='30px' alt="p1" /></Typography>
                         </div>
                     </Card>
                </div>

                <div className='secondRow' style={{backgroundColor:'#EAFFFD', marginTop:'10px',display:'flex',gap:'20px',flexDirection:'column'}}>
                    <Card elevation={4} style={{width:'100%',display:'flex', justifyContent:'space-between', marginLeft:'10px',padding:'10px',borderRadius:'10px'}}>
                    <div style={{marginLeft:'10px'}}>
                        <Typography>In Progress</Typography>
                    </div>
                    <div style={{display:'flex'}}>
                        <Typography><BsThreeDots /></Typography>
                        <Typography><CiSquarePlus /></Typography>
                    </div>
                    </Card>
                    <Card elevation={4} style={{backgroundColor:'#F5DBCB',width:'100%', marginLeft:'10px',padding:'10px',borderRadius:'20px'}}>
                         <div style={{display:'flex', justifyContent:'space-between'}}>
                             <Typography>⭐ Today</Typography>
                             <Typography><MdArrowOutward style={{borderRadius:'50%',border:'1px solid black'}}/></Typography>
                         </div>
                         <div>
                           <Typography variant='h6' style={{fontWeight:'600'}}>Testing and <br /> User Feedback</Typography>
                         </div>
                         <div style={{display:'flex', justifyContent:'space-between'}}>
                             <Typography>09.00 AM - 09.30Am</Typography>
                             <Typography><img src={p1}height='30px' width='30px' alt="p1" /></Typography>
                         </div>
                     </Card>
                     <Card elevation={4} style={{backgroundColor:'#61E786',width:'100%', marginLeft:'10px',padding:'10px',borderRadius:'20px'}}>
                         <div style={{display:'flex', justifyContent:'space-between'}}>
                             <Typography>13 Feb 2023</Typography>
                             <Typography><MdArrowOutward style={{borderRadius:'50%',border:'1px solid black'}}/></Typography>
                         </div>
                         <div>
                           <Typography variant='h6' style={{fontWeight:'600'}}>Analyze <br /> Research Data</Typography>
                         </div>
                         <div style={{display:'flex', justifyContent:'space-between'}}>
                             <Typography>07.30 AM - 09.30Am</Typography>
                             <Typography><img src={p1}height='30px' width='30px' alt="p1" /></Typography>
                         </div>
                     </Card>
                     <Card elevation={4} style={{backgroundColor:'#FFFD98',width:'100%', marginLeft:'10px',padding:'10px',borderRadius:'20px'}}>
                         <div style={{display:'flex', justifyContent:'space-between'}}>
                             <Typography>14 Feb 2023</Typography>
                             <Typography><MdArrowOutward style={{borderRadius:'50%',border:'1px solid black'}}/></Typography>
                         </div>
                         <div>
                           <Typography variant='h6' style={{fontWeight:'600'}}>UX Research: <br /> Usability Testing</Typography>
                         </div>
                         <div style={{display:'flex', justifyContent:'space-between'}}>
                             <Typography>07.30 AM - 09.30Am</Typography>
                             <Typography><img src={p1}height='30px' width='30px' alt="p1" /></Typography>
                         </div>
                     </Card>
                    </div>

                    <div className='thirdRow' style={{backgroundColor:'#EAFFFD', marginTop:'10px',display:'flex',gap:'20px',flexDirection:'column'}}>
                    <Card elevation={4} style={{backgroundColor:'#FDFFFC',width:'100%',display:'flex', justifyContent:'space-between', marginLeft:'10px',padding:'10px',borderRadius:'10px'}}>
                    <div style={{marginLeft:'10px'}}>
                        <Typography>Completed</Typography>
                    </div>
                    <div style={{display:'flex'}}>
                        <Typography><BsThreeDots /></Typography>
                        <Typography><CiSquarePlus /></Typography>
                    </div>
                    </Card>
                    <Card elevation={4} style={{backgroundColor:'#EDF6F9',width:'100%', marginLeft:'10px',padding:'10px',borderRadius:'20px'}}>
                         <div style={{display:'flex', justifyContent:'space-between'}}>
                             <Typography>⭐ Today</Typography>
                             <Typography><MdArrowOutward style={{borderRadius:'50%',border:'1px solid black'}}/></Typography>
                         </div>
                         <div>
                           <Typography variant='h6' style={{fontWeight:'600'}}>Meetings <br /> with Clients</Typography>
                         </div>
                         <div style={{display:'flex', justifyContent:'space-between'}}>
                             <Typography>09.00 AM - 09.30Am</Typography>
                             <Typography><img src={p1}height='30px' width='30px' alt="p1" /></Typography>
                         </div>
                     </Card>
                     <Card elevation={4} style={{backgroundColor:'#EDF6F9',width:'100%', marginLeft:'10px',padding:'10px',borderRadius:'20px'}}>
                         <div style={{display:'flex', justifyContent:'space-between'}}>
                             <Typography>Today</Typography>
                             <Typography><MdArrowOutward style={{borderRadius:'50%',border:'1px solid black'}}/></Typography>
                         </div>
                         <div>
                           <Typography variant='h6' style={{fontWeight:'600'}}>Develop Back-End <br /> Systems</Typography>
                         </div>
                         <div style={{display:'flex', justifyContent:'space-between'}}>
                             <Typography>07.30 AM - 09.30Am</Typography>
                             <Typography><img src={p1}height='30px' width='30px' alt="p1" /></Typography>
                         </div>
                     </Card>
                     <Card elevation={4} style={{backgroundColor:'#EDF6F9',width:'100%', marginLeft:'10px',padding:'10px',borderRadius:'20px'}}>
                         <div style={{display:'flex', justifyContent:'space-between'}}>
                             <Typography>Today</Typography>
                             <Typography><MdArrowOutward style={{borderRadius:'50%',border:'1px solid black'}}/></Typography>
                         </div>
                         <div>
                           <Typography variant='h6' style={{fontWeight:'600'}}>Implement <br />Security Features</Typography>
                         </div>
                         <div style={{display:'flex', justifyContent:'space-between'}}>
                             <Typography>07.30 AM - 09.30Am</Typography>
                             <Typography><img src={p1}height='30px' width='30px' alt="p1" /></Typography>
                         </div>
                     </Card>
                    </div>

                    <div className='forthRow' style={{backgroundColor:'#EAFFFD', marginTop:'10px',display:'flex',gap:'20px',flexDirection:'column'}}>
                    <Card elevation={4} style={{width:'100%',display:'flex', justifyContent:'space-between', marginLeft:'10px',padding:'10px',borderRadius:'10px'}}>
                    <div style={{marginLeft:'10px'}}>
                        <Typography>Overdue</Typography>
                    </div>
                    <div style={{display:'flex'}}>
                        <Typography><BsThreeDots /></Typography>
                        <Typography><CiSquarePlus /></Typography>
                    </div>
                    </Card>
                    <Card elevation={4} style={{backgroundColor:'#EDF6F9',width:'100%', marginLeft:'10px',padding:'10px',borderRadius:'20px'}}>
                         <div style={{display:'flex', justifyContent:'space-between'}}>
                             <Typography>24 Feb 2023</Typography>
                             <Typography><MdArrowOutward style={{borderRadius:'50%',border:'1px solid black'}}/></Typography>
                         </div>
                         <div>
                           <Typography variant='h6' style={{fontWeight:'600'}}>Create Mockups <br /> for Dribbble Shot</Typography>
                         </div>
                         <div style={{display:'flex', justifyContent:'space-between'}}>
                             <Typography>09.00 AM - 09.30Am</Typography>
                             <Typography><img src={p1}height='30px' width='30px' alt="p1" /></Typography>
                         </div>
                     </Card>
                     <Card elevation={4} style={{backgroundColor:'#EDF6F9',width:'100%', marginLeft:'10px',padding:'10px',borderRadius:'20px'}}>
                         <div style={{display:'flex', justifyContent:'space-between'}}>
                             <Typography>24 Feb 2023</Typography>
                             <Typography><MdArrowOutward style={{borderRadius:'50%',border:'1px solid black'}}/></Typography>
                         </div>
                         <div>
                           <Typography variant='h6' style={{fontWeight:'600'}}>Optimize Web <br /> Performance</Typography>
                         </div>
                         <div style={{display:'flex', justifyContent:'space-between'}}>
                             <Typography>07.30 AM - 09.30Am</Typography>
                             <Typography><img src={p1}height='30px' width='30px' alt="p1" /></Typography>
                         </div>
                     </Card>
                    </div>
                    <div className='fifthRow' style={{backgroundColor:'#EAFFFD', marginTop:'10px',display:'flex',gap:'20px',flexDirection:'column'}}>
                    <Card elevation={4} style={{width:'40%', marginLeft:'10px',padding:'10px',borderRadius:'10px'}}>
                    <div style={{display:'flex', justifyContent:'space-between',}}>
                        <Typography><BsThreeDots /></Typography>
                        <Typography><CiSquarePlus /></Typography>
                    </div>
                    </Card>
                    </div>
                
            </section>
        </div>
        
    );
}

export default Navbar;

