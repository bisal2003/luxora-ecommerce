import React from 'react';
import { Box, Typography, Button, Stack, useMediaQuery, useTheme } from '@mui/material';
import { motion } from 'framer-motion';

export const HeroSection = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const isSmall = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box
      sx={{
        position: 'relative',
        minHeight: isMobile ? '60vh' : '85vh',
        background: `
          linear-gradient(135deg, 
            rgba(13,13,13,0.95) 0%, 
            rgba(26,26,26,0.9) 50%, 
            rgba(13,13,13,0.95) 100%
          ),
          radial-gradient(circle at 20% 50%, rgba(212,175,55,0.08) 0%, transparent 50%),
          radial-gradient(circle at 80% 50%, rgba(245,217,138,0.06) 0%, transparent 50%)
        `,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: '-50%',
          width: '200%',
          height: '100%',
          background: 'linear-gradient(90deg, transparent 0%, rgba(212,175,55,0.03) 50%, transparent 100%)',
          animation: 'shimmer 8s infinite',
        },
        '@keyframes shimmer': {
          '0%': {
            transform: 'translateX(-50%)',
          },
          '100%': {
            transform: 'translateX(50%)',
          },
        },
      }}
    >
      {/* Decorative Gold Lines */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '2px',
          background: 'linear-gradient(90deg, transparent 0%, #D4AF37 50%, transparent 100%)',
          opacity: 0.6,
        }}
      />
      <Box
        sx={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: '2px',
          background: 'linear-gradient(90deg, transparent 0%, #D4AF37 50%, transparent 100%)',
          opacity: 0.6,
        }}
      />

      <Stack
        spacing={isMobile ? 3 : 5}
        alignItems="center"
        textAlign="center"
        sx={{
          zIndex: 1,
          px: isSmall ? 2 : 4,
          maxWidth: '1200px',
        }}
      >
        {/* Main Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Typography
            variant={isMobile ? 'h3' : 'h1'}
            sx={{
              fontFamily: "'Poppins', sans-serif",
              fontWeight: 700,
              background: 'linear-gradient(135deg, #FFFFFF 0%, #F5D98A 50%, #D4AF37 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              letterSpacing: isSmall ? '0.05em' : '0.08em',
              mb: 2,
              textShadow: '0 4px 20px rgba(212,175,55,0.3)',
            }}
          >
            Putul's Fashion-LUXORA
          </Typography>
        </motion.div>

        {/* Subtitle */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <Typography
            variant={isMobile ? 'h5' : 'h3'}
            sx={{
              fontFamily: "'Poppins', sans-serif",
              fontWeight: 600,
              color: '#FFFFFF',
              mb: 2,
              lineHeight: 1.4,
            }}
          >
            Premium Luxury Collection
          </Typography>
        </motion.div>

        {/* Description */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <Typography
            variant={isMobile ? 'body1' : 'h6'}
            sx={{
              fontFamily: "'Inter', sans-serif",
              fontWeight: 400,
              color: '#C4C4C4',
              maxWidth: '700px',
              lineHeight: 1.8,
              mb: 4,
            }}
          >
            Experience the epitome of elegance. Discover curated collections of premium products
            crafted for those who appreciate the finer things in life.
          </Typography>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <Stack
            direction={isSmall ? 'column' : 'row'}
            spacing={3}
            sx={{ mt: 2 }}
          >
            <Button
              variant="contained"
              size="large"
              onClick={() => {
                const productsSection = document.getElementById('products-section');
                if (productsSection) {
                  productsSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              sx={{
                px: isSmall ? 4 : 6,
                py: isSmall ? 1.5 : 2,
                fontSize: isSmall ? '0.95rem' : '1.1rem',
                fontWeight: 700,
                borderRadius: '12px',
                background: 'linear-gradient(135deg, #D4AF37 0%, #F5D98A 100%)',
                color: '#0D0D0D',
                textTransform: 'uppercase',
                letterSpacing: '0.1em',
                boxShadow: '0 8px 24px rgba(212,175,55,0.4)',
                transition: 'all 0.3s ease',
                '&:hover': {
                  transform: 'translateY(-2px) scale(1.05)',
                  boxShadow: '0 12px 32px rgba(212,175,55,0.6)',
                  background: 'linear-gradient(135deg, #F5D98A 0%, #D4AF37 100%)',
                },
              }}
            >
              Explore Collection
            </Button>
            <Button
              variant="outlined"
              size="large"
              onClick={() => {
                const productsSection = document.getElementById('products-section');
                if (productsSection) {
                  productsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
              }}
              sx={{
                px: isSmall ? 4 : 6,
                py: isSmall ? 1.5 : 2,
                fontSize: isSmall ? '0.95rem' : '1.1rem',
                fontWeight: 700,
                borderRadius: '12px',
                borderColor: '#D4AF37',
                borderWidth: 2,
                color: '#D4AF37',
                textTransform: 'uppercase',
                letterSpacing: '0.1em',
                transition: 'all 0.3s ease',
                '&:hover': {
                  borderWidth: 2,
                  borderColor: '#F5D98A',
                  backgroundColor: 'rgba(212,175,55,0.1)',
                  transform: 'translateY(-2px) scale(1.05)',
                  boxShadow: '0 8px 24px rgba(212,175,55,0.3)',
                },
              }}
            >
              View All Products
            </Button>
          </Stack>
        </motion.div>

        {/* Decorative Element */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 1 }}
        >
          <Box
            sx={{
              mt: 6,
              width: isSmall ? '150px' : '200px',
              height: '2px',
              background: 'linear-gradient(90deg, transparent 0%, #D4AF37 50%, transparent 100%)',
            }}
          />
        </motion.div>
      </Stack>

      {/* Floating Decorative Elements */}
      <Box
        sx={{
          position: 'absolute',
          top: '15%',
          left: '10%',
          width: '100px',
          height: '100px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(212,175,55,0.15) 0%, transparent 70%)',
          filter: 'blur(40px)',
          animation: 'float 6s ease-in-out infinite',
          '@keyframes float': {
            '0%, 100%': {
              transform: 'translateY(0px)',
            },
            '50%': {
              transform: 'translateY(-20px)',
            },
          },
        }}
      />
      <Box
        sx={{
          position: 'absolute',
          bottom: '20%',
          right: '15%',
          width: '150px',
          height: '150px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(245,217,138,0.12) 0%, transparent 70%)',
          filter: 'blur(50px)',
          animation: 'float 8s ease-in-out infinite',
          animationDelay: '1s',
        }}
      />
    </Box>
  );
};
