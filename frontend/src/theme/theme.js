import { createTheme } from "@mui/material/styles";

// LUXORA - Premium Black & Gold Luxury Brand Identity
export const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: "#D4AF37",        // Metallic Gold
      light: "#F5D98A",       // Soft Gold
      dark: "#B8941F",        // Deep Gold
      contrastText: "#0D0D0D" // Rich Black for text on gold
    },
    secondary: {
      main: "#F5D98A",        // Soft Gold
      light: "#FFF4D6",       // Lighter Gold
      dark: "#D4AF37"         // Metallic Gold
    },
    background: {
      default: "#0D0D0D",     // Rich Black
      paper: "#1A1A1A"        // Deep Charcoal
    },
    text: {
      primary: "#FFFFFF",     // Pure White
      secondary: "#C4C4C4"   // Light Gray
    },
    divider: "#D4AF37",       // Gold dividers
    error: {
      main: "#FF6B6B"
    },
    success: {
      main: "#51CF66"
    },
  },

  

  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
  typography: {
    fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
    h1: {
      fontFamily: "'Poppins', sans-serif",
      fontWeight: 700,
      fontSize: "6rem",
      letterSpacing: "-0.02em",
      lineHeight: 1.2,
      "@media (max-width:960px)": {
        fontSize: "5rem",
      },
      "@media (max-width:600px)": {
        fontSize: "4rem",
      },
      "@media (max-width:414px)": {
        fontSize: "2.5rem",
      },
    },
    h2: {
      fontFamily: "'Poppins', sans-serif",
      fontWeight: 700,
      fontSize: "3.75rem",
      letterSpacing: "-0.01em",
      lineHeight: 1.3,
      "@media (max-width:960px)": {
        fontSize: "3rem",
      },
      "@media (max-width:662px)": {
        fontSize: "2.3rem",
      },
      "@media (max-width:414px)": {
        fontSize: "2.2rem",
      },
    },
    h3: {
      fontFamily: "'Poppins', sans-serif",
      fontWeight: 600,
      fontSize: "3rem",
      letterSpacing: "-0.01em",
      lineHeight: 1.3,
      "@media (max-width:960px)": {
        fontSize: "2.4rem",
      },
      "@media (max-width:662px)": {
        fontSize: "2rem",
      },
      "@media (max-width:414px)": {
        fontSize: "1.7rem",
      },
    },
    h4: {
      fontFamily: "'Poppins', sans-serif",
      fontWeight: 600,
      fontSize: "2.125rem",
      lineHeight: 1.4,
      "@media (max-width:960px)": {
        fontSize: "1.5rem",
      },
      "@media (max-width:600px)": {
        fontSize: "1.25rem",
      },
    },
    h5: {
      fontFamily: "'Poppins', sans-serif",
      fontWeight: 600,
      fontSize: "1.5rem",
      lineHeight: 1.5,
      "@media (max-width:960px)": {
        fontSize: "1.25rem",
      },
      "@media (max-width:600px)": {
        fontSize: "1.1rem",
      },
    },
    h6: {
      fontFamily: "'Poppins', sans-serif",
      fontWeight: 600,
      fontSize: "1.25rem",
      lineHeight: 1.6,
      "@media (max-width:960px)": {
        fontSize: "1.1rem",
      },
      "@media (max-width:600px)": {
        fontSize: "1rem",
      },
    },
    body1: {
      fontFamily: "'Inter', sans-serif",
      fontWeight: 400,
      fontSize: "1rem",
      lineHeight: 1.7,
      letterSpacing: "0.01em",
      "@media (max-width:960px)": {
        fontSize: "1rem",
      },
      "@media (max-width:600px)": {
        fontSize: ".9rem",
      },
    },
    body2: {
      fontFamily: "'Inter', sans-serif",
      fontWeight: 400,
      fontSize: "1rem",
      lineHeight: 1.6,
      "@media (max-width:960px)": {
        fontSize: "1rem",
      },
      "@media (max-width:600px)": {
        fontSize: "1rem",
      },
      "@media (max-width:480px)": {
        fontSize: ".97rem",
      },
    },
    button: {
      fontFamily: "'Poppins', sans-serif",
      fontWeight: 600,
      textTransform: "uppercase",
      letterSpacing: "0.08em",
    },
  },
  
  // LUXORA Custom Shadows
  shadows: [
    "none",
    "0 2px 8px rgba(0,0,0,0.15)",
    "0 4px 12px rgba(0,0,0,0.2)",
    "0 4px 20px rgba(0,0,0,0.25)",
    "0 6px 24px rgba(0,0,0,0.3)",
    "0 8px 32px rgba(0,0,0,0.35)",
    "0 2px 8px rgba(212,175,55,0.15)", // Gold shadow
    "0 4px 16px rgba(212,175,55,0.25)",
    "0 6px 24px rgba(212,175,55,0.3)",
    ...Array(16).fill("0 4px 20px rgba(0,0,0,0.25)")
  ],
  
  // LUXORA Component Overrides
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          padding: "12px 32px",
          transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
          "&:hover": {
            transform: "scale(1.03)",
            boxShadow: "0 6px 24px rgba(212,175,55,0.4)",
          },
        },
        contained: {
          background: "linear-gradient(135deg, #D4AF37 0%, #F5D98A 100%)",
          color: "#0D0D0D",
          fontWeight: 700,
          "&:hover": {
            background: "linear-gradient(135deg, #F5D98A 0%, #D4AF37 100%)",
          },
        },
        outlined: {
          borderColor: "#D4AF37",
          color: "#D4AF37",
          borderWidth: 2,
          "&:hover": {
            borderColor: "#F5D98A",
            backgroundColor: "rgba(212,175,55,0.08)",
            borderWidth: 2,
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          backgroundColor: "#1A1A1A",
          borderRadius: 16,
          boxShadow: "0 4px 20px rgba(0,0,0,0.25)",
          transition: "all 0.3s ease",
          "&:hover": {
            transform: "translateY(-4px)",
            boxShadow: "0 8px 32px rgba(212,175,55,0.2)",
          },
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage: "none",
          backgroundColor: "#1A1A1A",
          borderRadius: 12,
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: "rgba(13,13,13,0.85)",
          backdropFilter: "blur(12px)",
          boxShadow: "0 4px 20px rgba(0,0,0,0.3)",
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          "& .MuiOutlinedInput-root": {
            borderRadius: 12,
            "& fieldset": {
              borderColor: "#C4C4C4",
            },
            "&:hover fieldset": {
              borderColor: "#D4AF37",
            },
            "&.Mui-focused fieldset": {
              borderColor: "#D4AF37",
              borderWidth: 2,
            },
          },
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          fontWeight: 600,
        },
      },
    },
  },
});

export default theme;