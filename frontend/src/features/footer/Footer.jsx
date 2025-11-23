import { Box, IconButton, TextField, Typography, useMediaQuery, useTheme } from '@mui/material'
import { Stack } from '@mui/material'
import React from 'react'
import { QRCodePng, appStorePng, googlePlayPng ,facebookPng,instagramPng,twitterPng,linkedinPng} from '../../assets'
import SendIcon from '@mui/icons-material/Send';
import { MotionConfig, motion } from 'framer-motion';
import { Link } from 'react-router-dom';



export const Footer = () => {

    const theme=useTheme()
    const is700=useMediaQuery(theme.breakpoints.down(700))

    const labelStyles={
        fontWeight:300,
        cursor:'pointer'
    }

  return (
    <Stack 
      sx={{
        backgroundColor: '#0D0D0D',
        borderTop: '2px solid',
        borderImage: 'linear-gradient(90deg, transparent 0%, #D4AF37 50%, transparent 100%) 1',
        paddingTop: "4rem",
        paddingLeft: is700?"2rem":"4rem",
        paddingRight: is700?"2rem":"4rem",
        paddingBottom: "2rem",
        rowGap: "4rem",
        color: '#FFFFFF',
        position: 'relative',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '1px',
          background: 'linear-gradient(90deg, transparent 0%, #D4AF37 50%, transparent 100%)',
        }
      }}
    >

            {/* upper */}
            <Stack flexDirection={'row'} rowGap={'1rem'} justifyContent={is700?"":'space-around'} flexWrap={'wrap'}>

                <Stack rowGap={'1.5rem'} padding={'1rem'}>
                    <Typography 
                      variant='h6' 
                      fontSize={'1.75rem'}
                      sx={{
                        fontFamily: "'Poppins', sans-serif",
                        fontWeight: 700,
                        background: 'linear-gradient(135deg, #D4AF37 0%, #F5D98A 100%)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                      }}
                    >
                      LUXORA
                    </Typography>
                    <Typography 
                      variant='h6'
                      sx={{
                        fontFamily: "'Poppins', sans-serif",
                        fontWeight: 600,
                        color: '#D4AF37',
                      }}
                    >
                      Subscribe
                    </Typography>
                    <Typography 
                      sx={{
                        ...labelStyles, 
                        color: '#C4C4C4',
                        fontFamily: "'Inter', sans-serif",
                      }}
                    >
                      Get exclusive offers on luxury items
                    </Typography>
                    <TextField 
                      placeholder='Enter your email' 
                      sx={{
                        '& .MuiOutlinedInput-root': {
                          backgroundColor: '#1A1A1A',
                          borderRadius: '12px',
                          color: '#FFFFFF',
                          '& fieldset': {
                            borderColor: 'rgba(212,175,55,0.3)',
                          },
                          '&:hover fieldset': {
                            borderColor: '#D4AF37',
                          },
                          '&.Mui-focused fieldset': {
                            borderColor: '#D4AF37',
                            borderWidth: 2,
                          },
                        },
                      }} 
                      InputProps={{
                        endAdornment: (
                          <IconButton 
                            sx={{
                              color: '#D4AF37',
                              '&:hover': {
                                backgroundColor: 'rgba(212,175,55,0.1)',
                              }
                            }}
                          >
                            <SendIcon />
                          </IconButton>
                        ),
                      }}
                    />
                </Stack>

                <Stack rowGap={'1.5rem'} padding={'1rem'}>
                    <Typography 
                      variant='h6'
                      sx={{
                        fontFamily: "'Poppins', sans-serif",
                        fontWeight: 600,
                        color: '#D4AF37',
                      }}
                    >
                      Support
                    </Typography>
                    <Typography 
                      sx={{
                        ...labelStyles, 
                        color: '#C4C4C4',
                        fontFamily: "'Inter', sans-serif",
                        '&:hover': { color: '#F5D98A' },
                        transition: 'color 0.3s ease',
                      }}
                    >
                      123 Luxury Avenue, New York, NY 10001
                    </Typography>
                    <Typography 
                      sx={{
                        ...labelStyles, 
                        color: '#C4C4C4',
                        fontFamily: "'Inter', sans-serif",
                        '&:hover': { color: '#F5D98A' },
                        transition: 'color 0.3s ease',
                      }}
                    >
                      contact@luxora.com
                    </Typography>
                    <Typography 
                      sx={{
                        ...labelStyles, 
                        color: '#C4C4C4',
                        fontFamily: "'Inter', sans-serif",
                        '&:hover': { color: '#F5D98A' },
                        transition: 'color 0.3s ease',
                      }}
                    >
                      +1 (555) 123-4567
                    </Typography>
                </Stack>

                <Stack rowGap={'1.5rem'} padding={'1rem'}>
                    <Typography  
                      variant='h6'
                      sx={{
                        fontFamily: "'Poppins', sans-serif",
                        fontWeight: 600,
                        color: '#D4AF37',
                      }}
                    >
                      Account
                    </Typography>
                    <Typography 
                      sx={{
                        ...labelStyles, 
                        color: '#C4C4C4',
                        fontFamily: "'Inter', sans-serif",
                        '&:hover': { color: '#F5D98A', paddingLeft: '4px' },
                        transition: 'all 0.3s ease',
                      }}
                    >
                      My Account
                    </Typography>
                    <Typography 
                      sx={{
                        ...labelStyles, 
                        color: '#C4C4C4',
                        fontFamily: "'Inter', sans-serif",
                        '&:hover': { color: '#F5D98A', paddingLeft: '4px' },
                        transition: 'all 0.3s ease',
                      }}
                    >
                      Login / Register
                    </Typography>
                    <Typography 
                      sx={{
                        ...labelStyles, 
                        color: '#C4C4C4',
                        fontFamily: "'Inter', sans-serif",
                        '&:hover': { color: '#F5D98A', paddingLeft: '4px' },
                        transition: 'all 0.3s ease',
                      }}
                    >
                      Cart
                    </Typography>
                    <Typography 
                      sx={{
                        ...labelStyles, 
                        color: '#C4C4C4',
                        fontFamily: "'Inter', sans-serif",
                        '&:hover': { color: '#F5D98A', paddingLeft: '4px' },
                        transition: 'all 0.3s ease',
                      }}
                    >
                      Wishlist
                    </Typography>
                    <Typography 
                      sx={{
                        ...labelStyles, 
                        color: '#C4C4C4',
                        fontFamily: "'Inter', sans-serif",
                        '&:hover': { color: '#F5D98A', paddingLeft: '4px' },
                        transition: 'all 0.3s ease',
                      }}
                    >
                      Shop
                    </Typography>
                </Stack>

                <Stack rowGap={'1.5rem'} padding={'1rem'}>
                    <Typography  
                      variant='h6'
                      sx={{
                        fontFamily: "'Poppins', sans-serif",
                        fontWeight: 600,
                        color: '#D4AF37',
                      }}
                    >
                      Quick Links
                    </Typography>
                    <Typography 
                      sx={{
                        ...labelStyles, 
                        color: '#C4C4C4',
                        fontFamily: "'Inter', sans-serif",
                        '&:hover': { color: '#F5D98A', paddingLeft: '4px' },
                        transition: 'all 0.3s ease',
                      }}
                    >
                      Privacy Policy
                    </Typography>
                    <Typography 
                      sx={{
                        ...labelStyles, 
                        color: '#C4C4C4',
                        fontFamily: "'Inter', sans-serif",
                        '&:hover': { color: '#F5D98A', paddingLeft: '4px' },
                        transition: 'all 0.3s ease',
                      }}
                    >
                      Terms Of Use
                    </Typography>
                    <Typography 
                      sx={{
                        ...labelStyles, 
                        color: '#C4C4C4',
                        fontFamily: "'Inter', sans-serif",
                        '&:hover': { color: '#F5D98A', paddingLeft: '4px' },
                        transition: 'all 0.3s ease',
                      }}
                    >
                      FAQ
                    </Typography>
                    <Typography 
                      sx={{
                        ...labelStyles, 
                        color: '#C4C4C4',
                        fontFamily: "'Inter', sans-serif",
                        '&:hover': { color: '#F5D98A', paddingLeft: '4px' },
                        transition: 'all 0.3s ease',
                      }}
                    >
                      Contact
                    </Typography>
                </Stack>

                <Stack rowGap={'1rem'} padding={'1rem'}>
                    <Typography  variant='h6'>Download App</Typography>
                    <Typography sx={{...labelStyles,color:"graytext",fontWeight:500}}>Save $3 with App New User Only</Typography>
                    <Stack flexDirection={'row'} columnGap={'.5rem'}>

                        <Box width={'100px'} height={"100px"}>
                            <img src={QRCodePng} height={'100%'} width={'100%'} style={{objectFit:'contain'}} alt="QR Code"/>
                        </Box>

                        <Stack justifyContent={'space-around'}>
                            <Stack>
                                <img style={{width:"100%",height:"100%",cursor:"pointer"}} src={googlePlayPng} alt="GooglePlay" />
                            </Stack>
                            <Stack>
                                <img style={{width:"100%",height:'100%',cursor:"pointer"}} src={appStorePng} alt="AppStore" />
                            </Stack>
                        </Stack>
                    </Stack>

                    <Stack mt={.6} flexDirection={'row'} columnGap={'2rem'}>
                        <MotionConfig whileHover={{scale:1.1}} whileTap={{scale:1}}>
                            <motion.img style={{cursor:"pointer"}} src={facebookPng} alt="Facebook" />
                            <motion.img style={{cursor:"pointer"}} src={twitterPng} alt="Twitter" />
                            <motion.img style={{cursor:"pointer"}} src={instagramPng} alt="Instagram" />
                            <motion.img style={{cursor:"pointer"}} src={linkedinPng} alt="Linkedin" />
                        </MotionConfig>
                    </Stack>
                </Stack>

            </Stack>

            {/* lower */}
            <Stack 
              alignSelf={"center"} 
              sx={{
                borderTop: '1px solid rgba(212,175,55,0.2)',
                pt: 3,
                width: '100%',
                textAlign: 'center',
              }}
            >
                <Typography 
                  sx={{
                    color: '#C4C4C4',
                    fontFamily: "'Inter', sans-serif",
                    fontSize: '0.9rem',
                  }}
                >
                  &copy; Luxora {new Date().getFullYear()}. All rights reserved. Crafted with excellence.
                </Typography>
            </Stack>

    </Stack>
  )
}
