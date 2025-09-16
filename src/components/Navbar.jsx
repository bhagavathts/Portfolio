import React, { useState, useEffect,useMemo } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Box,
  Container,
  useScrollTrigger,
  Fade,
  Slide,
  Paper,
  Chip,
  Avatar,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import PersonIcon from "@mui/icons-material/Person";
import FlashOnIcon from "@mui/icons-material/FlashOn";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";
import EmailIcon from "@mui/icons-material/Email";
import { keyframes } from '@mui/system';


// Advanced animations with dark theme
const neonGlow = keyframes`
  0%, 100% {
    textShadow: 
      0 0 5px #9c27b0,
      0 0 10px #9c27b0,
      0 0 15px #9c27b0;
    filter: brightness(1);
  }
  50% {
    textShadow: 
      0 0 10px #e91e63,
      0 0 20px #e91e63,
      0 0 30px #e91e63,
      0 0 40px #e91e63;
    filter: brightness(1.2);
  }
`;

const holographicShift = keyframes`
  0% { 
    background-position: 0% 50%;
    transform: translateX(0px);
  }
  25% {
    background-position: 100% 50%;
    transform: translateX(-2px);
  }
  50% {
    background-position: 100% 50%;
    transform: translateX(0px);
  }
  75% {
    background-position: 0% 50%;
    transform: translateX(2px);
  }
  100% { 
    background-position: 0% 50%;
    transform: translateX(0px);
  }
`;

const plasmaFlow = keyframes`
  0%, 100% {
    backgroundPosition: '0% 50%';
  }
  50% {
    backgroundPosition: '100% 50%';
  }
`;

const levitate = keyframes`
  0%, 100% { 
    transform: translateY(0px) rotateX(0deg); 
  }
  25% { 
    transform: translateY(-8px) rotateX(2deg); 
  }
  75% { 
    transform: translateY(-4px) rotateX(-2deg); 
  }
`;

const electricPulse = keyframes`
  0%, 100% { 
    boxShadow: 
      0 0 20px rgba(156, 39, 176, 0.4),
      inset 0 0 20px rgba(156, 39, 176, 0.1);
  }
  50% { 
    boxShadow: 
      0 0 40px rgba(233, 30, 99, 0.8),
      0 0 60px rgba(233, 30, 99, 0.6),
      inset 0 0 30px rgba(233, 30, 99, 0.2);
  }
`;

const quantumBlur = keyframes`
  0%, 100% { 
    filter: blur(0px) hue-rotate(0deg);
    transform: scale(1);
  }
  33% { 
    filter: blur(1px) hue-rotate(90deg);
    transform: scale(1.02);
  }
  66% { 
    filter: blur(0.5px) hue-rotate(180deg);
    transform: scale(0.98);
  }
`;

const dimensionalShift = keyframes`
  0% { transform: perspective(1000px) rotateY(0deg) rotateX(0deg); }
  25% { transform: perspective(1000px) rotateY(5deg) rotateX(2deg); }
  50% { transform: perspective(1000px) rotateY(0deg) rotateX(0deg); }
  75% { transform: perspective(1000px) rotateY(-5deg) rotateX(-2deg); }
  100% { transform: perspective(1000px) rotateY(0deg) rotateX(0deg); }
`;

const cosmicOrbit = keyframes`
  0% { transform: rotate(0deg) translateX(30px) rotate(0deg); }
  100% { transform: rotate(360deg) translateX(30px) rotate(-360deg); }
`;


export default function StunningNavbar() {
  const sections = useMemo(() => [
    { 
      id: "about", 
      label: "About", 
      icon: PersonIcon, 
      emoji: "👤", 
      color: "#0d1421",
      accent: "#e91e63"
    },
    { 
      id: "skills", 
      label: "Skills", 
      icon: FlashOnIcon, 
      emoji: "⚡", 
      color: "#1a0d2e",
      accent: "#673ab7"
    },
    { 
      id: "projects", 
      label: "Projects", 
      icon: RocketLaunchIcon, 
      emoji: "🚀", 
      color: "#0f0f23",
      accent: "#3f51b5"
    },
    { 
      id: "contact", 
      label: "Contact", 
      icon: EmailIcon, 
      emoji: "📧", 
      color: "#1a0a2e",
      accent: "#f50057"
    },
  ], []); // empty dependency array ensures this is only initialized once

  const [activeSection, setActiveSection] = useState("home");
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [hoveredSection, setHoveredSection] = useState(null);

  const handleScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
      setActiveSection(id);
      setMobileOpen(false);
    }
  };

  useEffect(() => {
    const onScroll = () => {
      sections.forEach(({ id }) => {
        const element = document.getElementById(id);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top >= -100 && rect.top < window.innerHeight / 3) {
            setActiveSection(id);
          }
        }
      });
    };
    
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [sections]); // dependency array now works correctly because 'sections' is memoized

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 30,
  });

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };




  const drawer = (
    <Box 
      sx={{ 
        width: {
          xs: '85vw',  // 85% of viewport width on extra small screens
          sm: '70vw',  // 70% on small screens
          md: '50vw',  // 50% on medium screens
          lg: 380,     // Fixed width on large screens
        },
        maxWidth: '400px', // Maximum width
        minWidth: '280px', // Minimum width for very small screens
        height: '100vh',
        background: `
          linear-gradient(135deg, 
            rgba(13, 13, 43, 0.98) 0%,
            rgba(26, 0, 51, 0.98) 25%,
            rgba(15, 15, 35, 0.98) 50%,
            rgba(26, 10, 46, 0.98) 75%,
            rgba(13, 20, 33, 0.98) 100%
          )
        `,
        backdropFilter: 'blur(25px) saturate(180%)',
        position: 'relative',
        overflow: 'auto',
        display: 'flex',
        flexDirection: 'column',
        borderLeft: '2px solid rgba(156, 39, 176, 0.3)',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: `
            radial-gradient(circle at 20% 20%, rgba(156, 39, 176, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 80% 80%, rgba(233, 30, 99, 0.1) 0%, transparent 50%),
            linear-gradient(45deg, transparent 30%, rgba(103, 58, 183, 0.05) 50%, transparent 70%)
          `,
          backgroundSize: '400% 400%',
          animation: `${plasmaFlow} 8s ease-in-out infinite`,
          zIndex: 1,
        },
        '&::after': {
          content: '""',
          position: 'absolute',
          top: '10%',
          left: '10%',
          width: '80%',
          height: '80%',
          background: 'conic-gradient(from 0deg, transparent, rgba(156, 39, 176, 0.1), transparent, rgba(233, 30, 99, 0.1), transparent)',
          borderRadius: '50%',
          animation: `${cosmicOrbit} 20s linear infinite`,
          zIndex: 1,
        }
      }}
      role="presentation"
    >
      <Box sx={{ 
        p: { xs: 2, sm: 3, md: 4 }, 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center', 
        position: 'relative', 
        zIndex: 2, 
        flexShrink: 0,
        borderBottom: '1px solid rgba(156, 39, 176, 0.2)',
        minHeight: { xs: 60, sm: 70, md: 80 }
      }}>
        <Typography 
          variant="h5" 
          sx={{ 
            color: 'transparent',
            background: 'linear-gradient(45deg, #9c27b0, #e91e63, #673ab7)',
            backgroundClip: 'text',
            WebkitBackgroundClip: 'text',
            fontWeight: 800,
            letterSpacing: { xs: '0.5px', sm: '1px' },
            animation: `${neonGlow} 3s ease-in-out infinite`,
            fontSize: { 
              xs: '1.1rem', 
              sm: '1.3rem', 
              md: '1.5rem' 
            },
          }}
        >
          NAVIGATION
        </Typography>
        <IconButton 
          onClick={handleDrawerToggle}
          sx={{ 
            color: '#e91e63',
            background: 'rgba(233, 30, 99, 0.1)',
            border: '2px solid rgba(233, 30, 99, 0.3)',
            borderRadius: '12px',
            transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
            p: { xs: 1, sm: 1.5 },
            '&:hover': {
              transform: 'rotate(180deg) scale(1.2)',
              background: 'rgba(233, 30, 99, 0.2)',
              boxShadow: '0 0 25px rgba(233, 30, 99, 0.5)',
            }
          }}
        >
          <CloseIcon sx={{ fontSize: { xs: '1.2rem', sm: '1.5rem' } }} />
        </IconButton>
      </Box> 
      <List sx={{ 
        mt: { xs: 1, sm: 2, md: 3 }, 
        position: 'relative', 
        zIndex: 2, 
        flex: 1,
        pb: { xs: 4, sm: 6 },
        px: { xs: 2, sm: 3 },
      }}>
        {sections.map((section, index) => {
          const IconComponent = section.icon;
          const isActive = activeSection === section.id;
          return (
            <ListItem key={section.id} disablePadding sx={{ 
              mb: { xs: 2, sm: 2.5, md: 3 } 
            }}>
              <Paper
                elevation={isActive ? 12 : 0}
                sx={{
                  width: '100%',
                  background: isActive 
                    ? `linear-gradient(135deg, 
                        rgba(156, 39, 176, 0.3) 0%, 
                        rgba(233, 30, 99, 0.2) 50%, 
                        rgba(103, 58, 183, 0.3) 100%
                      )` 
                    : 'rgba(255, 255, 255, 0.05)',
                  backdropFilter: 'blur(15px)',
                  borderRadius: { xs: '15px', sm: '18px', md: '20px' },
                  border: isActive 
                    ? `2px solid ${section.accent}` 
                    : '1px solid rgba(255, 255, 255, 0.1)',
                  overflow: 'hidden',
                  animation: isActive 
                    ? `${electricPulse} 2s ease-in-out infinite, ${dimensionalShift} 6s ease-in-out infinite` 
                    : `${quantumBlur} ${3 + index * 0.5}s ease-in-out infinite`,
                  transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
                  '&:hover': {
                    background: `linear-gradient(135deg, 
                      rgba(156, 39, 176, 0.2) 0%, 
                      rgba(233, 30, 99, 0.15) 50%, 
                      rgba(103, 58, 183, 0.2) 100%
                    )`,
                    transform: { 
                      xs: 'translateX(8px) scale(1.02)', 
                      sm: 'translateX(12px) scale(1.03)', 
                      md: 'translateX(15px) scale(1.05)' 
                    },
                    boxShadow: `0 10px 40px ${section.accent}40`,
                    border: `2px solid ${section.accent}`,
                  },
                }}
              >
                <ListItemButton 
                  onClick={() => handleScroll(section.id)}
                  sx={{
                    py: { xs: 2, sm: 2.5, md: 3 },
                    px: { xs: 2, sm: 3, md: 4 },
                    borderRadius: { xs: '15px', sm: '18px', md: '20px' },
                    minHeight: { xs: 60, sm: 70, md: 80 },
                  }}
                >
                  <Box sx={{ 
                    display: 'flex', 
                    alignItems: 'center', 
                    gap: { xs: 2, sm: 2.5, md: 3 }, 
                    width: '100%' 
                  }}>
                    <Avatar
                      sx={{
                        width: { xs: 40, sm: 45, md: 50 },
                        height: { xs: 40, sm: 45, md: 50 },
                        background: isActive 
                          ? `linear-gradient(45deg, ${section.accent}, ${section.color})` 
                          : 'rgba(255, 255, 255, 0.1)',
                        border: `2px solid ${section.accent}`,
                        animation: isActive ? `${levitate} 3s ease-in-out infinite` : 'none',
                        flexShrink: 0,
                      }}
                    >
                      <IconComponent sx={{ 
                        color: 'white', 
                        fontSize: { xs: '1.2rem', sm: '1.3rem', md: '1.5rem' } 
                      }} />
                    </Avatar>
                    <Box sx={{ flex: 1, minWidth: 0 }}>
                      <ListItemText
                        primary={section.label}
                        sx={{
                          '& .MuiListItemText-primary': {
                            fontWeight: isActive ? 800 : 600,
                            color: isActive ? section.accent : '#ffffff',
                            fontSize: { 
                              xs: '1.1rem', 
                              sm: '1.2rem', 
                              md: '1.3rem' 
                            },
                            letterSpacing: { xs: '0.3px', sm: '0.4px', md: '0.5px' },
                            textShadow: isActive ? `0 0 15px ${section.accent}` : 'none',
                            lineHeight: 1.2,
                          }
                        }}
                      />
                    </Box>
                    <Chip
                      label={section.emoji}
                      size="medium"
                      sx={{
                        background: `linear-gradient(45deg, ${section.accent}30, ${section.color}50)`,
                        color: 'white',
                        fontSize: { xs: '1rem', sm: '1.1rem', md: '1.2rem' },
                        fontWeight: 'bold',
                        border: `1px solid ${section.accent}50`,
                        animation: isActive ? `${levitate} 2s ease-in-out infinite` : 'none',
                        flexShrink: 0,
                        '& .MuiChip-label': {
                          padding: { 
                            xs: '4px 8px', 
                            sm: '6px 12px', 
                            md: '8px 16px' 
                          },
                        }
                      }}
                    />
                  </Box>
                </ListItemButton>
              </Paper>
            </ListItem>
          );
        })}
      </List>
    </Box>
  );
  return (
    <>
      <Slide appear={false} direction="down" in={!trigger}>
        <AppBar
          position="fixed"
          elevation={0}
          sx={{
            background: trigger 
              ? `linear-gradient(135deg, 
                  rgba(13, 13, 43, 0.98) 0%, 
                  rgba(26, 0, 51, 0.95) 30%, 
                  rgba(15, 15, 35, 0.98) 70%, 
                  rgba(26, 10, 46, 0.95) 100%
                )` 
              : `linear-gradient(135deg, 
                  rgba(13, 13, 43, 0.95) 0%, 
                  rgba(26, 0, 51, 0.9) 25%, 
                  rgba(15, 15, 35, 0.95) 50%, 
                  rgba(26, 10, 46, 0.9) 75%, 
                  rgba(13, 20, 33, 0.95) 100%
                )`,
            backdropFilter: 'blur(25px) saturate(180%)',
            borderBottom: trigger 
              ? '2px solid rgba(156, 39, 176, 0.5)' 
              : '1px solid rgba(156, 39, 176, 0.2)',
            transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
            boxShadow: trigger 
              ? '0 8px 32px rgba(156, 39, 176, 0.3)' 
              : '0 4px 20px rgba(0, 0, 0, 0.3)',
            '&::before': {
              content: '""',
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: 'linear-gradient(90deg, transparent 0%, rgba(156, 39, 176, 0.1) 50%, transparent 100%)',
              backgroundSize: '200% 100%',
              animation: `${holographicShift} 6s ease-in-out infinite`,
              zIndex: -1,
            }
          }}
          onMouseMove={handleMouseMove}
        >
          <Container maxWidth="xl" sx={{ px: { xs: 1, sm: 2, md: 3 } }}>
            <Toolbar 
              disableGutters 
              sx={{ 
                display: "flex", 
                justifyContent: "space-between",
                py: { xs: 1, sm: 1.5, md: 2 },
                position: 'relative',
                minHeight: { xs: '60px', sm: '70px', md: '80px' },
              }}
            >
              <Box sx={{ position: 'relative', flex: 1 }}>
                <Typography
                  variant="h3"
                  sx={{
                    cursor: "pointer",
                    fontWeight: 900,
                    background: 'linear-gradient(45deg, #ffffff 0%, #e91e63 25%, #9c27b0 50%, #673ab7 75%, #ffffff 100%)',
                    backgroundSize: '400% 400%',
                    backgroundClip: 'text',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    animation: `${holographicShift} 4s ease-in-out infinite, ${neonGlow} 3s ease-in-out infinite`,
                    letterSpacing: { xs: '1px', sm: '1.5px', md: '2px' },
                    textTransform: 'uppercase',
                    position: 'relative',
                    fontSize: {
                      xs: '1.2rem',
                      sm: '1.6rem',
                      md: '2rem',
                      lg: '2.5rem',
                      xl: '3rem',
                    },
                    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                    lineHeight: 1,
                    '&:hover': {
                      transform: { 
                        xs: 'scale(1.05) translateY(-2px)', 
                        sm: 'scale(1.08) translateY(-3px)', 
                        md: 'scale(1.1) translateY(-5px)' 
                      },
                      filter: 'drop-shadow(0 10px 25px rgba(156, 39, 176, 0.6))',
                      animation: `${neonGlow} 1s ease-in-out infinite, ${dimensionalShift} 2s ease-in-out infinite`,
                    },
                    '&::after': {
                      content: '""',
                      position: 'absolute',
                      bottom: '-4px',
                      left: '50%',
                      transform: 'translateX(-50%)',
                      width: '0%',
                      height: { xs: '2px', md: '3px' },
                      background: 'linear-gradient(90deg, #9c27b0, #e91e63)',
                      transition: 'width 0.4s ease',
                    },
                    '&:hover::after': {
                      width: '100%',
                    }
                  }}
                  onClick={() => handleScroll("home")}
                >
                  Bhagavath T S
                </Typography>
              </Box>
              <Box sx={{ 
                display: { xs: "none", lg: "flex" }, 
                gap: 2, 
                alignItems: 'center',
                flexShrink: 0,
              }}>
                {sections.map((section, index) => {
                  const IconComponent = section.icon;
                  const isActive = activeSection === section.id;
                  const isHovered = hoveredSection === section.id;
                  return (
                    <Fade in={true} timeout={800 + index * 300} key={section.id}>
                      <Paper
                        elevation={isActive ? 16 : (isHovered ? 8 : 0)}
                        sx={{
                          background: isActive 
                            ? `linear-gradient(135deg, 
                                ${section.accent}40 0%, 
                                ${section.color}60 50%, 
                                ${section.accent}40 100%
                              )`
                            : isHovered 
                              ? 'rgba(255, 255, 255, 0.1)'
                              : 'rgba(255, 255, 255, 0.05)',
                          backdropFilter: 'blur(15px)',
                          borderRadius: '25px',
                          border: isActive 
                            ? `3px solid ${section.accent}` 
                            : `1px solid ${isHovered ? section.accent + '80' : 'rgba(255, 255, 255, 0.1)'}`,
                          transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
                          overflow: 'hidden',
                          position: 'relative',
                          animation: isActive ? `${electricPulse} 2s ease-in-out infinite, ${dimensionalShift} 8s ease-in-out infinite` : 'none',
                          '&::before': {
                            content: '""',
                            position: 'absolute',
                            top: '-50%',
                            left: '-50%',
                            width: '200%',
                            height: '200%',
                            background: `conic-gradient(from 0deg, transparent, ${section.accent}30, transparent)`,
                            transition: 'transform 0.6s ease',
                            transform: isHovered ? 'rotate(360deg)' : 'rotate(0deg)',
                            zIndex: -1,
                          },
                        }}
                      >
                        <Button
                          onClick={() => handleScroll(section.id)}
                          onMouseEnter={() => setHoveredSection(section.id)}
                          onMouseLeave={() => setHoveredSection(null)}
                          sx={{
                            color: isActive ? section.accent : "#ffffff",
                            textTransform: "uppercase",
                            fontWeight: isActive ? 800 : 700,
                            fontSize: "1.1rem",
                            px: 4,
                            py: 2,
                            borderRadius: '25px',
                            minWidth: 'auto',
                            letterSpacing: '1px',
                            transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
                            position: 'relative',
                            zIndex: 1,
                            '&:hover': {
                              color: section.accent,
                              transform: 'translateY(-8px) scale(1.1)',
                              backgroundColor: 'transparent',
                              textShadow: `0 0 20px ${section.accent}`,
                            },
                            '&:active': {
                              transform: 'translateY(-4px) scale(1.05)',
                            }
                          }}
                        >
                          <Box sx={{ 
                            display: 'flex', 
                            alignItems: 'center',
                            justifyContent:"center", 
                            gap: 2,
                            height: 40,
                            width: 130
                          }}>
                            <Avatar
                              sx={{
                                width: 40,
                                height: 40,
                                background: isActive 
                                  ? `linear-gradient(45deg, ${section.accent}, ${section.color})` 
                                  : 'rgba(255, 255, 255, 0.1)',
                                border: `2px solid ${isActive ? section.accent : 'rgba(255, 255, 255, 0.2)'}`,
                                transition: 'all 0.3s ease',
                                animation: isActive ? `${levitate} 3s ease-in-out infinite` : 'none',
                              }}
                            >
                              <IconComponent sx={{ fontSize: '1.2rem', color: 'white' }} />
                            </Avatar>
                            <Typography 
                              variant="button" 
                              sx={{ 
                                fontWeight: 'inherit',
                                fontSize: 'inherit',
                                letterSpacing: 'inherit'
                              }}
                            >
                              {section.label}
                            </Typography>
                          </Box>
                        </Button>
                      </Paper>
                    </Fade>
                  );
                })}
              </Box>
              <Paper
                elevation={8}
                sx={{
                  display: { xs: "flex", lg: "none" },
                  background: 'rgba(156, 39, 176, 0.2)',
                  backdropFilter: 'blur(15px)',
                  borderRadius: { xs: '15px', sm: '18px', md: '20px' },
                  border: '2px solid rgba(156, 39, 176, 0.5)',
                  overflow: 'hidden',
                  position: 'relative',
                  flexShrink: 0,
                  animation: `${electricPulse} 3s ease-in-out infinite`,
                  '&::before': {
                    content: '""',
                    position: 'absolute',
                    top: 0,
                    left: '-100%',
                    width: '100%',
                    height: '100%',
                    background: 'linear-gradient(90deg, transparent, rgba(233, 30, 99, 0.5), transparent)',
                    transition: 'left 0.6s ease',
                  },
                  '&:hover::before': {
                    left: '100%',
                  },
                }}
              >
                <IconButton
                  color="inherit"
                  edge="end"
                  onClick={handleDrawerToggle}
                  sx={{
                    color: '#e91e63',
                    p: { xs: 1, sm: 1.5, md: 2 },
                    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                    '&:hover': {
                      transform: 'rotate(180deg) scale(1.3)',
                      backgroundColor: 'rgba(233, 30, 99, 0.2)',
                    }
                  }}
                >
                  <MenuIcon sx={{ 
                    fontSize: { 
                      xs: '1.5rem', 
                      sm: '1.8rem', 
                      md: '2rem' 
                    } 
                  }} />
                </IconButton>
              </Paper>
              <Box
                sx={{
                  position: 'absolute',
                  width: { xs: '150px', sm: '200px' },
                  height: { xs: '150px', sm: '200px' },
                  borderRadius: '50%',
                  background: `
                    radial-gradient(circle, 
                      rgba(156, 39, 176, 0.1) 0%, 
                      rgba(233, 30, 99, 0.05) 40%,
                      transparent 70%
                    )
                  `,
                  pointerEvents: 'none',
                  transform: `translate(${mousePosition.x - 100}px, ${mousePosition.y - 100}px)`,
                  transition: 'transform 0.15s ease-out',
                  zIndex: -1,
                  filter: 'blur(1px)',
                }}
              />
            </Toolbar>
          </Container>
        </AppBar>
      </Slide>
      <Drawer 
        anchor="right" 
        open={mobileOpen} 
        onClose={handleDrawerToggle}
        PaperProps={{
          sx: {
            background: 'transparent',
            boxShadow: 'none',
          }
        }}
        BackdropProps={{
          sx: {
            backdropFilter: 'blur(15px) saturate(120%)',
            background: 'rgba(13, 13, 43, 0.6)',
          }
        }}
        sx={{
          display: { lg: 'none' }, // Hide drawer on large screens
        }}
      >
        {drawer}
      </Drawer>


    </>
  );
}