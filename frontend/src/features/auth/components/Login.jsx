import {Box, FormHelperText, Stack, TextField, Typography, useMediaQuery, useTheme } from '@mui/material'
import React, { useEffect } from 'react'
import Lottie from 'lottie-react'
import { Link, useNavigate } from 'react-router-dom'
import { useForm } from "react-hook-form"
import { ecommerceOutlookAnimation, shoppingBagAnimation} from '../../../assets'
import {useDispatch,useSelector} from 'react-redux'
import { LoadingButton } from '@mui/lab';
import {selectLoggedInUser,loginAsync,selectLoginStatus, selectLoginError, clearLoginError, resetLoginStatus} from '../AuthSlice'
import { toast } from 'react-toastify'
import {MotionConfig, motion} from 'framer-motion'

export const Login = () => {
  const dispatch=useDispatch()
  const status=useSelector(selectLoginStatus)
  const error=useSelector(selectLoginError)
  const loggedInUser=useSelector(selectLoggedInUser)
  const {register,handleSubmit,reset,formState: { errors }} = useForm()
  const navigate=useNavigate()
  const theme=useTheme()
  const is900=useMediaQuery(theme.breakpoints.down(900))
  const is480=useMediaQuery(theme.breakpoints.down(480))
  
  // handles user redirection
  useEffect(()=>{
    if(loggedInUser && loggedInUser?.isVerified){
      navigate("/")
    }
    else if(loggedInUser && !loggedInUser?.isVerified){
      navigate("/verify-otp")
    }
  },[loggedInUser])

  // handles login error and toast them
  useEffect(()=>{
    if(error){
      toast.error(error.message)
    }
  },[error])

  // handles login status and dispatches reset actions to relevant states in cleanup
  useEffect(()=>{
    if(status==='fullfilled' && loggedInUser?.isVerified===true){
      toast.success(`Login successful`)
      reset()
    }
    return ()=>{
      dispatch(clearLoginError())
      dispatch(resetLoginStatus())
    }
  },[status])

  const handleLogin=(data)=>{
    const cred={...data}
    delete cred.confirmPassword
    dispatch(loginAsync(cred))
  }

  return (
    <Stack 
      width={'100vw'} 
      height={'100vh'} 
      flexDirection={'row'} 
      sx={{
        overflowY:"hidden",
        backgroundColor: '#0D0D0D',
      }}
    >
        
        {
          !is900 && 
       
        <Stack 
          flex={1} 
          justifyContent={'center'} 
          sx={{
            background: 'linear-gradient(135deg, #0D0D0D 0%, #1A1A1A 100%)',
            position: 'relative',
            '&::before': {
              content: '""',
              position: 'absolute',
              top: 0,
              right: 0,
              width: '2px',
              height: '100%',
              background: 'linear-gradient(180deg, transparent 0%, #D4AF37 50%, transparent 100%)',
            }
          }}
        >
          <Lottie animationData={ecommerceOutlookAnimation}/>
        </Stack> 
        }

        <Stack 
          flex={1} 
          justifyContent={'center'} 
          alignItems={'center'}
          sx={{
            backgroundColor: '#0D0D0D',
            position: 'relative',
          }}
        >

              <Stack 
                flexDirection={'row'} 
                justifyContent={'center'} 
                alignItems={'center'}
                sx={{ mb: 4 }}
              >

                <Stack rowGap={'.5rem'}>
                  <Typography 
                    variant='h2' 
                    sx={{
                      wordBreak:"break-word",
                      fontFamily: "'Poppins', sans-serif",
                      fontWeight: 700,
                      background: 'linear-gradient(135deg, #D4AF37 0%, #F5D98A 100%)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                    }}
                  >
                    PUTUL's FASHION

                  <Typography 
                    variant='h2' 
                    sx={{
                      wordBreak:"break-word",
                      fontFamily: "'Poppins', sans-serif",
                      fontWeight: 700,
                      background: 'linear-gradient(135deg, #D4AF37 0%, #F5D98A 100%)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                    }}
                  >
                    
                  </Typography>
                    LUXORA
                  </Typography>
                  <Typography 
                    alignSelf={'flex-end'} 
                    sx={{
                      color: '#C4C4C4',
                      fontFamily: "'Inter', sans-serif",
                      fontStyle: 'italic',
                    }} 
                    variant='body2'
                  >
                    - Premium Luxury Shopping
                  </Typography>
                </Stack>

              </Stack>

                <Stack 
                  mt={4} 
                  spacing={2.5} 
                  width={is480?"95vw":'28rem'} 
                  component={'form'} 
                  noValidate 
                  onSubmit={handleSubmit(handleLogin)}
                  sx={{
                    backgroundColor: '#1A1A1A',
                    p: is480 ? 3 : 4,
                    borderRadius: '20px',
                    border: '1px solid rgba(212,175,55,0.2)',
                    boxShadow: '0 8px 32px rgba(0,0,0,0.4)',
                  }}
                >

                    <motion.div whileHover={{y:-3}}>
                      <TextField 
                        fullWidth 
                        {...register("email",{required:"Email is required",pattern:{value:/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g,message:"Enter a valid email"}})} 
                        placeholder='Email'
                        sx={{
                          '& .MuiOutlinedInput-root': {
                            backgroundColor: '#0D0D0D',
                            borderRadius: '12px',
                            color: '#FFFFFF',
                            '& input': {
                              fontFamily: "'Inter', sans-serif",
                            }
                          }
                        }}
                      />
                      {errors.email && <FormHelperText sx={{mt:1, fontFamily: "'Inter', sans-serif"}} error>{errors.email.message}</FormHelperText>}
                    </motion.div>

                    
                    <motion.div whileHover={{y:-3}}>
                      <TextField 
                        type='password' 
                        fullWidth 
                        {...register("password",{required:"Password is required"})} 
                        placeholder='Password'
                        sx={{
                          '& .MuiOutlinedInput-root': {
                            backgroundColor: '#0D0D0D',
                            borderRadius: '12px',
                            color: '#FFFFFF',
                            '& input': {
                              fontFamily: "'Inter', sans-serif",
                            }
                          }
                        }}
                      />
                      {errors.password && <FormHelperText sx={{mt:1, fontFamily: "'Inter', sans-serif"}} error>{errors.password.message}</FormHelperText>}
                    </motion.div>
                    
                    <motion.div whileHover={{scale:1.03}} whileTap={{scale:0.98}}>
                      <LoadingButton 
                        fullWidth  
                        sx={{
                          height:'3rem',
                          borderRadius: '12px',
                          background: 'linear-gradient(135deg, #D4AF37 0%, #F5D98A 100%)',
                          color: '#0D0D0D',
                          fontWeight: 700,
                          fontSize: '1rem',
                          fontFamily: "'Poppins', sans-serif",
                          '&:hover': {
                            background: 'linear-gradient(135deg, #F5D98A 0%, #D4AF37 100%)',
                          }
                        }} 
                        loading={status==='pending'} 
                        type='submit' 
                        variant='contained'
                      >
                        Login
                      </LoadingButton>
                    </motion.div>

                    <motion.div whileHover={{scale:1.03}} whileTap={{scale:0.98}}>
                      <LoadingButton 
                        fullWidth 
                        sx={{
                          height:'3rem',
                          mt: 1,
                          borderRadius: '12px',
                          borderColor: '#D4AF37',
                          color: '#D4AF37',
                          borderWidth: 2,
                          fontWeight: 700,
                          fontSize: '0.95rem',
                          fontFamily: "'Poppins', sans-serif",
                          '&:hover': {
                            borderWidth: 2,
                            borderColor: '#F5D98A',
                            backgroundColor: 'rgba(212,175,55,0.1)',
                          }
                        }} 
                        variant='outlined' 
                        onClick={() => {
                          dispatch(loginAsync({ email: 'guest@mernshop.com', password: 'Guest@123' }))
                        }}
                      >
                        Continue as Guest
                      </LoadingButton>
                    </motion.div>

                    <Stack flexDirection={'row'} justifyContent={'space-between'} alignItems={'center'} flexWrap={'wrap-reverse'} sx={{ mt: 2 }}>

                      <MotionConfig whileHover={{x:4}} whileTap={{scale:1.05}}>
                          <motion.div>
                              <Typography 
                                mr={'1.5rem'} 
                                sx={{
                                  textDecoration:"none",
                                  color:"#C4C4C4",
                                  fontFamily: "'Inter', sans-serif",
                                  fontSize: '0.9rem',
                                  '&:hover': {
                                    color: '#D4AF37',
                                  },
                                  transition: 'color 0.3s ease',
                                }} 
                                to={'/forgot-password'} 
                                component={Link}
                              >
                                Forgot password
                              </Typography>
                          </motion.div>

                          <motion.div>
                            <Typography 
                              sx={{
                                textDecoration:"none",
                                color:"#C4C4C4",
                                fontFamily: "'Inter', sans-serif",
                                fontSize: '0.9rem',
                              }} 
                              to={'/signup'} 
                              component={Link}
                            >
                              Don't have an account? <span style={{color:'#D4AF37', fontWeight: 600}}>Register</span>
                            </Typography>
                          </motion.div>
                      </MotionConfig>

                    </Stack>

                </Stack>
        </Stack>
    </Stack>
  )
}
