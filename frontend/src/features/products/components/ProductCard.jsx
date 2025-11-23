import { FormHelperText, Paper, Stack, Typography, useMediaQuery, useTheme, Tooltip} from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';
import Checkbox from '@mui/material/Checkbox';
import { useDispatch, useSelector } from 'react-redux';
import { selectWishlistItems } from '../../wishlist/WishlistSlice';
import { selectLoggedInUser } from '../../auth/AuthSlice';
import { addToCartAsync,selectCartItems } from '../../cart/CartSlice';
import { selectUserInfo } from '../../user/UserSlice';
import {motion} from 'framer-motion'
import {toast} from 'react-toastify'

export const ProductCard = ({id,title,price,thumbnail,brand,stockQuantity,handleAddRemoveFromWishlist,isWishlistCard,isAdminCard}) => {


    const navigate=useNavigate()
    const wishlistItems=useSelector(selectWishlistItems)
    const loggedInUser=useSelector(selectLoggedInUser)
    const userInfo=useSelector(selectUserInfo)
    const cartItems=useSelector(selectCartItems)
    const dispatch=useDispatch()
    let isProductAlreadyinWishlist=-1


    const theme=useTheme()
    const is1410=useMediaQuery(theme.breakpoints.down(1410))
    const is932=useMediaQuery(theme.breakpoints.down(932))
    const is752=useMediaQuery(theme.breakpoints.down(752))
    const is500=useMediaQuery(theme.breakpoints.down(500))
    const is608=useMediaQuery(theme.breakpoints.down(608))
    const is488=useMediaQuery(theme.breakpoints.down(488))
    const is408=useMediaQuery(theme.breakpoints.down(408))

    isProductAlreadyinWishlist=wishlistItems.some((item)=>item.product._id===id)

    const isProductAlreadyInCart=cartItems.some((item)=>item.product._id===id)

    const handleAddToCart=async(e)=>{
        e.stopPropagation()
        if(userInfo?.isGuest){
            toast.info("Please login to add items to cart")
            return
        }
        const data={user:loggedInUser?._id,product:id}
        dispatch(addToCartAsync(data))
    }

    const handleWishlistClick = (e, id) => {
        if(userInfo?.isGuest){
            e.stopPropagation()
            toast.info("Please login to add items to wishlist")
            return
        }
        handleAddRemoveFromWishlist(e, id)
    }


  return (
    <>

    {

    isProductAlreadyinWishlist!==-1 ?
    <Stack 
      component={isAdminCard?"":isWishlistCard?"":is408?'':Paper} 
      mt={is408?2:0} 
      elevation={3} 
      p={2.5} 
      width={is408?'auto':is488?"200px":is608?"240px":is752?"300px":is932?'240px':is1410?'300px':'340px'} 
      sx={{
        cursor:"pointer",
        backgroundColor: '#1A1A1A',
        borderRadius: '16px',
        border: '1px solid rgba(212,175,55,0.1)',
        transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
        overflow: 'hidden',
        position: 'relative',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '4px',
          background: 'linear-gradient(90deg, #D4AF37 0%, #F5D98A 50%, #D4AF37 100%)',
          opacity: 0,
          transition: 'opacity 0.3s ease',
        },
        '&:hover': {
          transform: 'translateY(-8px)',
          boxShadow: '0 12px 40px rgba(212,175,55,0.25)',
          borderColor: 'rgba(212,175,55,0.3)',
          '&::before': {
            opacity: 1,
          }
        }
      }} 
      onClick={()=>navigate(`/product-details/${id}`)}
    >

        {/* image display */}
        <Stack 
          sx={{
            backgroundColor: '#0D0D0D',
            borderRadius: '12px',
            p: 2,
            mb: 2,
          }}
        >
            <img 
              width={'100%'} 
              style={{
                aspectRatio:1/1,
                objectFit:"contain",
                transition: 'transform 0.4s ease',
              }} 
              height={'100%'}  
              src={thumbnail} 
              alt={`${title}`}
              onMouseEnter={(e) => e.target.style.transform = 'scale(1.05)'}
              onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
            />
        </Stack>

        {/* lower section */}
        <Stack flex={2} justifyContent={'flex-end'} spacing={1} rowGap={2}>

            <Stack>
                <Stack flexDirection={'row'} alignItems={'center'} justifyContent={'space-between'}>
                    <Typography 
                      variant='h6' 
                      fontWeight={600}
                      sx={{
                        fontFamily: "'Poppins', sans-serif",
                        color: '#FFFFFF',
                        fontSize: is408?'1rem':'1.1rem',
                      }}
                    >
                      {title}
                    </Typography>
                    {
                    !isAdminCard && 
                    <motion.div whileHover={{scale:1.2,y:-8}} whileTap={{scale:1}} transition={{duration:.3,type:"spring"}}>
                        <Checkbox 
                          onClick={(e)=>e.stopPropagation()} 
                          checked={isProductAlreadyinWishlist} 
                          onChange={(e)=>handleWishlistClick(e,id)} 
                          icon={<FavoriteBorder sx={{color: '#C4C4C4'}} />} 
                          checkedIcon={<Favorite sx={{color:'#D4AF37'}} />} 
                          disabled={userInfo?.isGuest}
                          sx={{
                            '&:hover': {
                              backgroundColor: 'rgba(212,175,55,0.1)',
                            }
                          }}
                        />
                    </motion.div>
                    }
                </Stack>
                <Typography 
                  color={"text.secondary"}
                  sx={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: '0.9rem',
                  }}
                >
                  {brand}
                </Typography>
            </Stack>

            <Stack sx={{flexDirection:"row",justifyContent:"space-between",alignItems:"center"}}>
                <Typography 
                  sx={{
                    fontFamily: "'Poppins', sans-serif",
                    fontSize: is408?'1.2rem':'1.5rem',
                    fontWeight: 700,
                    background: 'linear-gradient(135deg, #D4AF37 0%, #F5D98A 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                  }}
                >
                  ₹{price.toLocaleString('en-IN')}
                </Typography>
                {
                    !isWishlistCard? isProductAlreadyInCart?
                    <Typography 
                      sx={{
                        color: '#51CF66',
                        fontSize: '0.85rem',
                        fontWeight: 600,
                      }}
                    >
                      Added to cart
                    </Typography>
                    :
                    !isAdminCard &&
                    <motion.button  
                      whileHover={{scale:1.05}} 
                      whileTap={{scale:0.98}} 
                      onClick={(e)=>handleAddToCart(e)} 
                      style={{
                        padding: is408?"8px 12px":"10px 20px",
                        borderRadius:"10px",
                        outline:"none",
                        border:"none",
                        cursor:"pointer",
                        background: "linear-gradient(135deg, #D4AF37 0%, #F5D98A 100%)",
                        color:"#0D0D0D",
                        fontSize:is408?'.75rem':is488?'.75rem':is500?'.8rem':'.85rem',
                        fontWeight: 700,
                        fontFamily: "'Poppins', sans-serif",
                        textTransform: 'uppercase',
                        letterSpacing: '0.05em',
                        boxShadow: '0 4px 12px rgba(212,175,55,0.3)',
                        transition: 'all 0.3s ease',
                      }}
                      onMouseEnter={(e) => {
                        e.target.style.boxShadow = '0 6px 20px rgba(212,175,55,0.5)';
                      }}
                      onMouseLeave={(e) => {
                        e.target.style.boxShadow = '0 4px 12px rgba(212,175,55,0.3)';
                      }}
                    >
                        <div style={{display:"flex",alignItems:"center",columnGap:".5rem"}}>
                            <p>Add To Cart</p>
                        </div>
                    </motion.button>
                    :''
                }
                
            </Stack>
            {
                stockQuantity<=20 && (
                    <FormHelperText 
                      sx={{
                        fontSize:".9rem",
                        fontWeight: 600,
                        color: stockQuantity <= 5 ? '#FF6B6B' : '#F5D98A',
                      }} 
                    >
                      {stockQuantity===1?"⚠️ Only 1 left in stock":"⚠️ Limited stock available"}
                    </FormHelperText>
                )
            }
        </Stack>
    </Stack> 
    :''
    
    
    }
    
    </>
  )
}
