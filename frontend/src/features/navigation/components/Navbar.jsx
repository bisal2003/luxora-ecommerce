import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import { Link, useNavigate } from 'react-router-dom';
import { Badge, Button, Chip, Stack, useMediaQuery, useTheme } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { selectUserInfo } from '../../user/UserSlice';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { selectCartItems } from '../../cart/CartSlice';
import { selectLoggedInUser } from '../../auth/AuthSlice';
import { selectWishlistItems } from '../../wishlist/WishlistSlice';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import TuneIcon from '@mui/icons-material/Tune';
import { selectProductIsFilterOpen, toggleFilters } from '../../products/ProductSlice';



export const Navbar=({isProductList=false})=> {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const userInfo=useSelector(selectUserInfo)
  const cartItems=useSelector(selectCartItems)
  const loggedInUser=useSelector(selectLoggedInUser)
  const navigate=useNavigate()
  const dispatch=useDispatch()
  const theme=useTheme()
  const is480=useMediaQuery(theme.breakpoints.down(480))

  const wishlistItems=useSelector(selectWishlistItems)
  const isProductFilterOpen=useSelector(selectProductIsFilterOpen)

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleToggleFilters=()=>{
    dispatch(toggleFilters())
  }

  const settings = userInfo?.isGuest 
    ? [
        {name:"Home",to:"/"},
        {name:'Logout',to:"/logout"},
      ]
    : [
        {name:"Home",to:"/"},
        {name:'Profile',to:loggedInUser?.isAdmin?"/admin/profile":"/profile"},
        {name:loggedInUser?.isAdmin?'Orders':'My orders',to:loggedInUser?.isAdmin?"/admin/orders":"/orders"},
        {name:'Logout',to:"/logout"},
      ];

  return (
    <AppBar 
      position="sticky" 
      sx={{
        backgroundColor: "rgba(13,13,13,0.92)",
        backdropFilter: "blur(16px)",
        borderBottom: "1px solid rgba(212,175,55,0.1)",
        boxShadow: "0 4px 24px rgba(0,0,0,0.4)",
        transition: "all 0.3s ease",
      }}
    >
        <Toolbar sx={{p:1,height:"4.5rem",display:"flex",justifyContent:"space-around"}}>

          <Typography 
            variant="h6" 
            noWrap 
            component="a" 
            href="/" 
            sx={{ 
              mr: 2, 
              display: { xs: 'none', md: 'flex' },
              fontFamily: "'Poppins', sans-serif",
              fontWeight: 700, 
              fontSize: "1.75rem",
              letterSpacing: '.15rem', 
              background: 'linear-gradient(135deg, #D4AF37 0%, #F5D98A 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              textDecoration: 'none',
              transition: 'all 0.3s ease',
              '&:hover': {
                transform: 'scale(1.05)',
                filter: 'brightness(1.2)',
              }
            }}
          >
            LUXORA
          </Typography>



          <Stack flexDirection={'row'} alignItems={'center'} justifyContent={'center'} columnGap={2}>
            <Tooltip title="Open settings">
              <IconButton 
                onClick={handleOpenUserMenu} 
                sx={{ 
                  p: 0,
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    transform: 'scale(1.1)',
                    filter: 'drop-shadow(0 0 8px rgba(212,175,55,0.5))',
                  }
                }}
              >
                <Avatar 
                  alt={userInfo?.name} 
                  src="null"
                  sx={{
                    border: '2px solid',
                    borderColor: 'primary.main',
                    bgcolor: '#1A1A1A',
                    color: 'primary.main',
                    fontWeight: 700,
                  }}
                />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ 
                mt: '45px',
                '& .MuiPaper-root': {
                  backgroundColor: '#1A1A1A',
                  borderRadius: '12px',
                  border: '1px solid rgba(212,175,55,0.2)',
                  boxShadow: '0 8px 32px rgba(0,0,0,0.4)',
                }
              }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >

              {
                loggedInUser?.isAdmin && 
              
                <MenuItem  
                  onClick={handleCloseUserMenu}
                  sx={{
                    '&:hover': {
                      backgroundColor: 'rgba(212,175,55,0.1)',
                      '& .MuiTypography-root': {
                        color: 'primary.main',
                      }
                    }
                  }}
                >
                  <Typography component={Link} color={'text.primary'} sx={{textDecoration:"none", transition: 'color 0.2s ease'}} to="/admin/add-product" textAlign="center">Add new Product</Typography>
                </MenuItem>
              
              }
              {settings.map((setting) => (
                <MenuItem 
                  key={setting} 
                  onClick={handleCloseUserMenu}
                  sx={{
                    '&:hover': {
                      backgroundColor: 'rgba(212,175,55,0.1)',
                      '& .MuiTypography-root': {
                        color: 'primary.main',
                      }
                    }
                  }}
                >
                  <Typography component={Link} color={'text.primary'} sx={{textDecoration:"none", transition: 'color 0.2s ease'}} to={setting.to} textAlign="center">{setting.name}</Typography>
                </MenuItem>
              ))}
            </Menu>
            <Typography 
              variant='h6' 
              fontWeight={400}
              sx={{
                fontFamily: "'Inter', sans-serif",
                color: 'text.primary',
              }}
            >
              {is480?`${userInfo?.name.toString().split(" ")[0]}`:`Hey👋, ${userInfo?.name}`}
            </Typography>
            {loggedInUser.isAdmin && (
              <Button 
                variant='contained' 
                size="small"
                sx={{
                  background: 'linear-gradient(135deg, #D4AF37 0%, #F5D98A 100%)',
                  color: '#0D0D0D',
                  fontWeight: 700,
                  borderRadius: '8px',
                  px: 2,
                  '&:hover': {
                    background: 'linear-gradient(135deg, #F5D98A 0%, #D4AF37 100%)',
                    transform: 'scale(1.05)',
                  }
                }}
              >
                Admin
              </Button>
            )}
            {userInfo?.isGuest && (
              <Chip 
                label="Guest" 
                size="small" 
                sx={{
                  background: 'linear-gradient(135deg, #D4AF37 0%, #F5D98A 100%)',
                  color: '#0D0D0D',
                  fontWeight: 700,
                  border: 'none',
                }}
              />
            )}
            <Stack sx={{flexDirection:"row",columnGap:"1rem",alignItems:"center",justifyContent:"center"}}>

            
            {
            !userInfo?.isGuest && cartItems?.length>0 && 
            <Badge  
              badgeContent={cartItems.length} 
              sx={{
                '& .MuiBadge-badge': {
                  backgroundColor: '#D4AF37',
                  color: '#0D0D0D',
                  fontWeight: 700,
                }
              }}
            >
              <IconButton 
                onClick={()=>navigate("/cart")}
                sx={{
                  color: '#FFFFFF',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    color: 'primary.main',
                    transform: 'scale(1.1)',
                  }
                }}
              >
                <ShoppingCartOutlinedIcon />
              </IconButton>
            </Badge>
            }
            
            {
              !loggedInUser?.isAdmin && !userInfo?.isGuest &&
                  <Stack>
                      <Badge 
                        badgeContent={wishlistItems?.length}
                        sx={{
                          '& .MuiBadge-badge': {
                            backgroundColor: '#D4AF37',
                            color: '#0D0D0D',
                            fontWeight: 700,
                          }
                        }}
                      >
                          <IconButton 
                            component={Link} 
                            to={"/wishlist"}
                            sx={{
                              color: '#FFFFFF',
                              transition: 'all 0.3s ease',
                              '&:hover': {
                                color: 'primary.main',
                                transform: 'scale(1.1)',
                              }
                            }}
                          >
                            <FavoriteBorderIcon />
                          </IconButton>
                      </Badge>
                  </Stack>
            }
            {
              isProductList && (
                <IconButton 
                  onClick={handleToggleFilters}
                  sx={{
                    color: isProductFilterOpen ? 'primary.main' : '#FFFFFF',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      color: 'primary.main',
                      transform: 'scale(1.1)',
                    }
                  }}
                >
                  <TuneIcon />
                </IconButton>
              )
            }
            
            </Stack>
          </Stack>
        </Toolbar>
    </AppBar>
  );
}