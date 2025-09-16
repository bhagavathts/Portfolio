import React, { useState, useEffect } from "react";
import {
  Container,
  Typography,
  Grid,
  Avatar,
  Button,
  Paper,
  Box,
  Card,
  CardContent,
  Fade,
  Zoom,
  Grow,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import {
  Code as CodeIcon,
  Email as EmailIcon,
  Download as DownloadIcon,
  Star as StarIcon,
  Lightbulb as LightbulbIcon,
  AutoAwesome as AutoAwesomeIcon,
} from "@mui/icons-material";
import profile from "../assets/profile.jpg"

export default function DarkAboutSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeCard, setActiveCard] = useState(0);
  const [glowEffect, setGlowEffect] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 200);

    const cardTimer = setInterval(() => {
      setActiveCard((prev) => (prev + 1) % 3);
    }, 4000);

    const glowTimer = setInterval(() => {
      setGlowEffect((prev) => !prev);
    }, 2000);

    return () => {
      clearTimeout(timer);
      clearInterval(cardTimer);
      clearInterval(glowTimer);
    };
  }, []);

  const handleMouseMove = (event) => {
    setMousePosition({
      x: event.clientX / window.innerWidth,
      y: event.clientY / window.innerHeight,
    });
  };

  const expertiseAreas = [
    {
      icon: (
        <CodeIcon sx={{ fontSize: { xs: 45, md: 55 }, color: "#e91e63" }} />
      ),
      title: "Full-Stack Development",
      description:
        "Expert in MERN stack architecture with focus on scalable, high-performance applications",
      progress: 95,
      gradient: "linear-gradient(135deg, #e91e63 0%, #ad1457 100%)",
      accent: "#e91e63",
    },
    {
      icon: (
        <LightbulbIcon
          sx={{ fontSize: { xs: 45, md: 55 }, color: "#9c27b0" }}
        />
      ),
      title: "Backend Development",
      description:
        "Advanced Node.js and Express.js implementations with robust database design",
      progress: 90,
      gradient: "linear-gradient(135deg, #9c27b0 0%, #7b1fa2 100%)",
      accent: "#9c27b0",
    },
    {
      icon: (
        <AutoAwesomeIcon
          sx={{ fontSize: { xs: 45, md: 55 }, color: "#673ab7" }}
        />
      ),
      title: "Frontend Excellence",
      description:
        "Creating stunning React.js interfaces with modern UI/UX design principles",
      progress: 92,
      gradient: "linear-gradient(135deg, #673ab7 0%, #512da8 100%)",
      accent: "#673ab7",
    },
  ];

  return (
    <Container
      id="about"
      maxWidth="xl"
      onMouseMove={handleMouseMove}
      sx={{
        py: { xs: 8, md: 12 },
        minHeight: "100vh",
        background: `
          linear-gradient(135deg, 
            #0a0a0a 0%, 
            #1a1a2e 25%, 
            #16213e 50%, 
            #0f0f23 75%, 
            #000000 100%
          )
        `,
        position: "relative",
        overflow: "hidden",
        color: "#ffffff",
      }}
    >
      {/* Dynamic Background Effects */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: `
            radial-gradient(circle at ${mousePosition.x * 100}% ${
            mousePosition.y * 100
          }%, 
              rgba(156, 39, 176, 0.15) 0%, 
              transparent 50%
            ),
            radial-gradient(circle at 20% 20%, rgba(233, 30, 99, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 80% 80%, rgba(103, 58, 183, 0.1) 0%, transparent 50%)
          `,
          animation: "cosmicFlow 8s ease-in-out infinite",
          zIndex: 1,
        }}
      />

      {/* Floating Particles */}
      {[...Array(12)].map((_, i) => (
        <Box
          key={i}
          sx={{
            position: "absolute",
            width: { xs: 3, md: 5 },
            height: { xs: 3, md: 5 },
            borderRadius: "50%",
            background:
              i % 3 === 0 ? "#e91e63" : i % 3 === 1 ? "#9c27b0" : "#673ab7",
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            animation: `float ${4 + Math.random() * 4}s ease-in-out infinite ${
              Math.random() * 3
            }s`,
            opacity: 0.6,
            boxShadow: `0 0 20px currentColor`,
            zIndex: 1,
          }}
        />
      ))}

      {/* Quantum Grid Lines */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: `
            linear-gradient(rgba(156, 39, 176, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(156, 39, 176, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: "50px 50px",
          animation: "gridPulse 4s ease-in-out infinite",
          zIndex: 1,
        }}
      />

      <Box sx={{ position: "relative", zIndex: 2 }}>
        {/* Revolutionary Title */}
        <Fade in={isVisible} timeout={2000}>
          <Box sx={{ textAlign: "center", mb: { xs: 8, md: 12 } }}>
            <Typography
              variant={isMobile ? "h2" : "h1"}
              sx={{
                fontWeight: 900,
                background:
                  "linear-gradient(45deg, #ffffff 0%, #e91e63 25%, #9c27b0 50%, #673ab7 75%, #ffffff 100%)",
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundSize: "400% 400%",
                animation: "holographicShift 6s ease infinite",
                letterSpacing: { xs: 3, md: 6 },
                textShadow: glowEffect
                  ? "0 0 50px rgba(156, 39, 176, 0.8)"
                  : "0 0 30px rgba(233, 30, 99, 0.5)",
                transition: "textShadow 2s ease",
                mb: 3,
                fontSize: {
                  xs: "2.5rem",
                  sm: "3.5rem",
                  md: "4.5rem",
                  lg: "5rem",
                },
              }}
            >
              ABOUT ME
            </Typography>
            <Box
              sx={{
                width: { xs: 100, md: 150 },
                height: 4,
                background: "linear-gradient(90deg, #e91e63, #9c27b0, #673ab7)",
                margin: "0 auto",
                borderRadius: 2,
                animation: "neonPulse 2s ease-in-out infinite",
              }}
            />
            <Typography
              variant="h5"
              sx={{
                color: "rgba(255,255,255,0.8)",
                fontWeight: 300,
                letterSpacing: 2,
                mt: 4,
                fontSize: { xs: "1.2rem", md: "1.5rem" },
                animation: "fadeInUp 2s ease",
              }}
            >
              Architecting Digital Futures Through Innovation
            </Typography>
          </Box>
        </Fade>

        <Grid
          container
          spacing={6}
          justifyContent="center"
          alignItems="stretch"
        >
          {/* Enhanced Profile Section */}
          <Grid item xs={12} lg={5}>
            <Zoom in={isVisible} timeout={2500}>
              <Paper
                elevation={24}
                sx={{
                  p: { xs: 4, md: 6 },
                  height: "100%",
                  background: `
                    linear-gradient(135deg, 
                      rgba(26, 26, 46, 0.95) 0%, 
                      rgba(22, 33, 62, 0.95) 50%, 
                      rgba(15, 15, 35, 0.95) 100%
                    )
                  `,
                  backdropFilter: "blur(25px) saturate(180%)",
                  borderRadius: { xs: 4, md: 6 },
                  border: "2px solid rgba(156, 39, 176, 0.3)",
                  position: "relative",
                  overflow: "hidden",
                  textAlign: "center",
                  transition: "all 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
                  boxShadow:
                    "0 25px 60px rgba(0, 0, 0, 0.5), inset 0 1px 0 rgba(255, 255, 255, 0.1)",
                  "&:hover": {
                    transform: "translateY(-15px) scale(1.02)",
                    boxShadow:
                      "0 35px 80px rgba(156, 39, 176, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.2)",
                    border: "2px solid rgba(233, 30, 99, 0.6)",
                  },
                  "&::before": {
                    content: '""',
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    height: 6,
                    background:
                      "linear-gradient(90deg, #e91e63, #9c27b0, #673ab7, #e91e63)",
                    backgroundSize: "300% 100%",
                    animation: "gradientFlow 3s linear infinite",
                  },
                  "&::after": {
                    content: '""',
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    width: "200%",
                    height: "200%",
                    background:
                      "conic-gradient(from 0deg, transparent, rgba(156, 39, 176, 0.1), transparent)",
                    transform: "translate(-50%, -50%)",
                    animation: "rotate 10s linear infinite",
                    zIndex: -1,
                  },
                }}
              >
                {/* Holographic Profile Image */}
                <Box sx={{ position: "relative", mb: 4 }}>
                  <Box
                    sx={{
                      position: "relative",
                      display: "inline-block",
                      "&::before": {
                        content: '""',
                        position: "absolute",
                        top: -8,
                        left: -8,
                        right: -8,
                        bottom: -8,
                        borderRadius: "50%",
                        background:
                          "conic-gradient(from 0deg, #e91e63, #9c27b0, #673ab7, #e91e63)",
                        animation: "rotate 4s linear infinite",
                        zIndex: -1,
                      },
                    }}
                  >
                    <Avatar
                      alt="Bhagavath T S"
                      src={profile}
                      sx={{
                        width: { xs: 180, md: 220 },
                        height: { xs: 180, md: 220 },
                        border: "4px solid rgba(255, 255, 255, 0.2)",
                        boxShadow:
                          "0 20px 60px rgba(0, 0, 0, 0.4), inset 0 0 30px rgba(156, 39, 176, 0.2)",
                        transition: "all 0.6s cubic-bezier(0.4, 0, 0.2, 1)",
                        position: "relative",
                        zIndex: 1,
                        "&:hover": {
                          transform: "scale(1.15) rotate(5deg)",
                          boxShadow:
                            "0 30px 80px rgba(156, 39, 176, 0.6), inset 0 0 40px rgba(233, 30, 99, 0.3)",
                        },
                      }}
                    />
                  </Box>

              
                </Box>

                {/* Enhanced Name and Title */}
                <Typography
                  variant="h3"
                  sx={{
                    fontWeight: 900,
                    background:
                      "linear-gradient(45deg, #ffffff, #e91e63, #9c27b0)",
                    backgroundClip: "text",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundSize: "200% 200%",
                    animation: "textShimmer 3s ease-in-out infinite",
                    mb: 2,
                    fontSize: { xs: "2rem", md: "2.5rem" },
                    letterSpacing: 2,
                    textShadow: "0 0 30px rgba(255, 255, 255, 0.5)",
                  }}
                >
                  Bhagavath T S
                </Typography>

                <Typography
                  variant="h5"
                  sx={{
                    background:
                      "linear-gradient(45deg, #e91e63, #9c27b0, #673ab7)",
                    backgroundClip: "text",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    fontWeight: 700,
                    mb: 4,
                    fontSize: { xs: "1.3rem", md: "1.6rem" },
                    letterSpacing: 1,
                    textShadow: "0 0 20px rgba(233, 30, 99, 0.5)",
                  }}
                >
                  MERN Stack Developer
                </Typography>

                {/* Quantum Action Buttons */}
                <Box
                  sx={{
                    display: "flex",
                    gap: 3,
                    justifyContent: "center",
                    flexWrap: "wrap",
                  }}
                >
                  <Button
                    variant="contained"
                    startIcon={<EmailIcon />}
                    href="#contact"
                    sx={{
                      background:
                        "linear-gradient(45deg, #e91e63 30%, #ad1457 90%)",
                      px: 4,
                      py: 2,
                      fontWeight: 800,
                      borderRadius: 4,
                      fontSize: { xs: "1rem", md: "1.1rem" },
                      boxShadow: "0 8px 25px rgba(233, 30, 99, 0.4)",
                      textTransform: "uppercase",
                      letterSpacing: 1,
                      border: "2px solid transparent",
                      position: "relative",
                      overflow: "hidden",
                      "&:hover": {
                        background:
                          "linear-gradient(45deg, #c2185b 30%, #880e4f 90%)",
                        transform: "translateY(-4px)",
                        boxShadow: "0 15px 35px rgba(233, 30, 99, 0.6)",
                        border: "2px solid #e91e63",
                      },
                      "&::before": {
                        content: '""',
                        position: "absolute",
                        top: 0,
                        left: "-100%",
                        width: "100%",
                        height: "100%",
                        background:
                          "linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent)",
                        transition: "left 0.6s ease",
                      },
                      "&:hover::before": {
                        left: "100%",
                      },
                    }}
                  >
                    Get In Touch
                  </Button>

                  <Button
                    variant="outlined"
                    startIcon={<DownloadIcon />}
                    onClick={() => {
                      const link = document.createElement("a");
                      link.href = "/cv.pdf"; // path inside public folder
                      link.download = "Bhagavath MERN Stack.pdf"; // file name for download
                      link.click();
                    }}
                    sx={{
                      borderColor: "#9c27b0",
                      color: "#9c27b0",
                      borderWidth: 2,
                      px: 4,
                      py: 2,
                      fontWeight: 800,
                      borderRadius: 4,
                      fontSize: { xs: "1rem", md: "1.1rem" },
                      textTransform: "uppercase",
                      letterSpacing: 1,
                      backdropFilter: "blur(10px)",
                      position: "relative",
                      overflow: "hidden",
                      "&:hover": {
                        background: "rgba(156, 39, 176, 0.2)",
                        borderColor: "#9c27b0",
                        color: "#ffffff",
                        transform: "translateY(-4px)",
                        boxShadow: "0 15px 35px rgba(156, 39, 176, 0.4)",
                        "&::before": {
                          left: "100%",
                        },
                      },
                      "&::before": {
                        content: '""',
                        position: "absolute",
                        top: 0,
                        left: "-100%",
                        width: "100%",
                        height: "100%",
                        background:
                          "linear-gradient(90deg, transparent, rgba(156, 39, 176, 0.3), transparent)",
                        transition: "left 0.6s ease",
                      },
                    }}
                  >
                    Download CV
                  </Button>
                </Box>
              </Paper>
            </Zoom>
          </Grid>

          {/* Enhanced Content Section */}
          <Grid item xs={12} lg={7}>
            <Box
              sx={{
                height: "100%",
                display: "flex",
                flexDirection: "column",
                gap: 4,
              }}
            >
              {/* Main Description with Holographic Effect */}
              <Fade in={isVisible} timeout={3000}>
                <Paper
                  elevation={20}
                  sx={{
                    p: { xs: 4, md: 6 },
                    background: `
                      linear-gradient(135deg, 
                        rgba(26, 26, 46, 0.95) 0%, 
                        rgba(22, 33, 62, 0.95) 50%, 
                        rgba(15, 15, 35, 0.95) 100%
                      )
                    `,
                    backdropFilter: "blur(25px) saturate(180%)",
                    borderRadius: { xs: 4, md: 6 },
                    border: "2px solid rgba(103, 58, 183, 0.3)",
                    position: "relative",
                    overflow: "hidden",
                    boxShadow:
                      "0 25px 60px rgba(0, 0, 0, 0.5), inset 0 1px 0 rgba(255, 255, 255, 0.1)",
                    "&::before": {
                      content: '""',
                      position: "absolute",
                      top: 0,
                      left: 0,
                      right: 0,
                      height: 4,
                      background:
                        "linear-gradient(90deg, #673ab7, #9c27b0, #e91e63)",
                      backgroundSize: "300% 100%",
                      animation: "gradientFlow 4s linear infinite",
                    },
                  }}
                >
                  <Typography
                    variant="h3"
                    sx={{
                      fontWeight: 900,
                      background:
                        "linear-gradient(45deg, #ffffff, #e91e63, #9c27b0)",
                      backgroundClip: "text",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundSize: "200% 200%",
                      animation: "textShimmer 4s ease-in-out infinite",
                      mb: 4,
                      fontSize: { xs: "1.8rem", md: "2.5rem" },
                      letterSpacing: 1,
                      lineHeight: 1.3,
                    }}
                  >
                    Passionate MERN Stack Developer
                  </Typography>

                  <Typography
                    variant="body1"
                    sx={{
                      color: "rgba(255, 255, 255, 0.9)",
                      fontSize: { xs: "1.1rem", md: "1.2rem" },
                      lineHeight: 1.8,
                      mb: 3,
                      fontWeight: 400,
                    }}
                  >
                    Welcome to my digital realm! I'm{" "}
                    <Typography
                      component="span"
                      sx={{
                        fontWeight: 800,
                        background: "linear-gradient(45deg, #e91e63, #9c27b0)",
                        backgroundClip: "text",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        textShadow: "0 0 20px rgba(233, 30, 99, 0.5)",
                      }}
                    >
                      Bhagavath T S
                    </Typography>
                    , a passionate{" "}
                    <Typography
                      component="span"
                      sx={{
                        fontWeight: 800,
                        background: "linear-gradient(45deg, #9c27b0, #673ab7)",
                        backgroundClip: "text",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        textShadow: "0 0 20px rgba(156, 39, 176, 0.5)",
                      }}
                    >
                      MERN Stack Developer
                    </Typography>{" "}
                    with a solid educational background in{" "}
                    <Typography
                      component="span"
                      sx={{
                        fontWeight: 800,
                        background: "linear-gradient(45deg, #673ab7, #512da8)",
                        backgroundClip: "text",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        textShadow: "0 0 20px rgba(103, 58, 183, 0.5)",
                      }}
                    >
                      Artificial Intelligence & Data Science
                    </Typography>
                    . I specialize in architecting scalable, high-performance
                    web applications using modern development practices.
                  </Typography>

                  <Typography
                    variant="body1"
                    sx={{
                      color: "rgba(255, 255, 255, 0.85)",
                      fontSize: { xs: "1.1rem", md: "1.2rem" },
                      lineHeight: 1.8,
                      mb: 3,
                      fontWeight: 400,
                    }}
                  >
                    My core expertise lies in the MERN stack - mastering
                    React.js for dynamic frontends, Node.js and Express.js for
                    robust backends, and MongoDB for efficient database
                    solutions. I've successfully delivered enterprise-grade
                    projects, from sophisticated eCommerce platforms to complex
                    web applications that solve real-world business challenges.
                  </Typography>

                  <Typography
                    variant="body1"
                    sx={{
                      color: "rgba(255, 255, 255, 0.85)",
                      fontSize: { xs: "1.1rem", md: "1.2rem" },
                      lineHeight: 1.8,
                      fontWeight: 400,
                    }}
                  >
                    I believe in writing clean, maintainable code and creating
                    interfaces that not only look stunning but also provide
                    exceptional user experiences. Every project is an
                    opportunity to implement best practices, optimize
                    performance, and deliver solutions that exceed expectations.
                    My educational foundation in AI and Data Science adds
                    valuable analytical thinking to my development approach.
                  </Typography>
                </Paper>
              </Fade>

              {/* Expertise Cards with Quantum Effects */}
              <Grid
                container
                spacing={4}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                {expertiseAreas.map((area, index) => (
                  <Grid item xs={12} sm={6} lg={4} key={area.title}>
                    <Grow in={isVisible} timeout={3500 + index * 500}>
                      <Card
                        sx={{
                          height: "100%",
                          width: { xs: 250, sm: 300, lg: 450 },
                          background:
                            activeCard === index
                              ? `linear-gradient(135deg, 
                                rgba(26, 26, 46, 0.98) 0%, 
                                rgba(22, 33, 62, 0.95) 50%, 
                                rgba(15, 15, 35, 0.98) 100%
                              )`
                              : `linear-gradient(135deg, 
                                rgba(0, 0, 0, 0.8) 0%, 
                                rgba(15, 15, 35, 0.9) 100%
                              )`,
                          backdropFilter: "blur(20px) saturate(180%)",
                          borderRadius: 4,
                          border:
                            activeCard === index
                              ? `3px solid ${area.accent}`
                              : "2px solid rgba(255, 255, 255, 0.1)",
                          transition: "all 0.6s cubic-bezier(0.4, 0, 0.2, 1)",
                          transform:
                            activeCard === index
                              ? "translateY(-10px) scale(1.03)"
                              : "translateY(0) scale(1)",
                          boxShadow:
                            activeCard === index
                              ? `0 25px 50px ${area.accent}40, inset 0 1px 0 rgba(255, 255, 255, 0.2)`
                              : "0 10px 30px rgba(0, 0, 0, 0.3)",
                          cursor: "pointer",
                          position: "relative",
                          overflow: "hidden",
                          "&::before": {
                            content: '""',
                            position: "absolute",
                            top: 0,
                            left: 0,
                            right: 0,
                            height: 4,
                            background: area.gradient,
                            opacity: activeCard === index ? 1 : 0.6,
                            animation:
                              activeCard === index
                                ? "neonPulse 2s ease-in-out infinite"
                                : "none",
                          },
                          "&::after": {
                            content: '""',
                            position: "absolute",
                            top: "50%",
                            left: "50%",
                            width: "300%",
                            height: "300%",
                            background: `conic-gradient(from 0deg, transparent, ${area.accent}20, transparent)`,
                            transform: "translate(-50%, -50%)",
                            animation:
                              activeCard === index
                                ? "rotate 8s linear infinite"
                                : "none",
                            zIndex: -1,
                            opacity: 0.5,
                          },
                          "&:hover": {
                            transform: "translateY(-15px) scale(1.05)",
                            boxShadow: `0 30px 60px ${area.accent}60, inset 0 1px 0 rgba(255, 255, 255, 0.3)`,
                            border: `3px solid ${area.accent}`,
                          },
                        }}
                        onMouseEnter={() => setActiveCard(index)}
                      >
                        <CardContent
                          sx={{
                            textAlign: "center",
                            p: 4,
                            position: "relative",
                            zIndex: 1,
                          }}
                        >
                          <Box sx={{ mb: 3 }}>
                            <Box
                              sx={{
                                display: "inline-block",
                                p: 2,
                                borderRadius: "50%",
                                background: `linear-gradient(45deg, ${area.accent}30, ${area.accent}10)`,
                                border: `2px solid ${area.accent}50`,
                                boxShadow: `0 0 30px ${area.accent}40`,
                                animation:
                                  activeCard === index
                                    ? "quantumPulse 2s ease-in-out infinite"
                                    : "none",
                              }}
                            >
                              {area.icon}
                            </Box>
                          </Box>

                          <Typography
                            variant="h5"
                            sx={{
                              fontWeight: 800,
                              color: "#ffffff",
                              mb: 2,
                              fontSize: { xs: "1.3rem", md: "1.5rem" },
                              letterSpacing: 1,
                              textShadow:
                                activeCard === index
                                  ? `0 0 20px ${area.accent}`
                                  : "none",
                            }}
                          >
                            {area.title}
                          </Typography>

                          <Typography
                            variant="body2"
                            sx={{
                              color: "rgba(255, 255, 255, 0.8)",
                              mb: 3,
                              fontSize: { xs: "1rem", md: "1.1rem" },
                              lineHeight: 1.7,
                              fontWeight: 400,
                            }}
                          >
                            {area.description}
                          </Typography>

                          {/* Advanced Progress Bar */}
                          <Box sx={{ mb: 2 }}>
                            <Box
                              sx={{
                                display: "flex",
                                justifyContent: "space-between",
                                mb: 1,
                              }}
                            >
                              <Typography
                                variant="caption"
                                sx={{
                                  fontWeight: 700,
                                  color: "#ffffff",
                                  fontSize: "0.9rem",
                                }}
                              >
                                Expertise Level
                              </Typography>
                              <Typography
                                variant="caption"
                                sx={{
                                  fontWeight: 800,
                                  color: area.accent,
                                  fontSize: "0.9rem",
                                }}
                              >
                                {area.progress}%
                              </Typography>
                            </Box>
                            <Box
                              sx={{
                                height: 10,
                                borderRadius: 5,
                                backgroundColor: "rgba(255, 255, 255, 0.1)",
                                overflow: "hidden",
                                position: "relative",
                                border: "1px solid rgba(255, 255, 255, 0.2)",
                              }}
                            >
                              <Box
                                sx={{
                                  width: `${area.progress}%`,
                                  height: "100%",
                                  background: area.gradient,
                                  borderRadius: 5,
                                  boxShadow: `0 0 20px ${area.accent}60`,
                                  animation:
                                    activeCard === index
                                      ? "neonPulse 2s ease-in-out infinite"
                                      : "none",
                                  position: "relative",
                                  "&::after": {
                                    content: '""',
                                    position: "absolute",
                                    top: 0,
                                    left: 0,
                                    right: 0,
                                    bottom: 0,
                                    background:
                                      "linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.4), transparent)",
                                    animation:
                                      "shimmer 2s ease-in-out infinite",
                                  },
                                }}
                              />
                            </Box>
                          </Box>

                          {/* Quantum Star Rating */}
                          <Box
                            sx={{
                              display: "flex",
                              justifyContent: "center",
                              gap: 0.5,
                            }}
                          >
                            {[...Array(5)].map((_, starIndex) => (
                              <StarIcon
                                key={starIndex}
                                sx={{
                                  fontSize: 20,
                                  color:
                                    starIndex < Math.floor(area.progress / 20)
                                      ? area.accent
                                      : "rgba(255, 255, 255, 0.3)",
                                  filter:
                                    starIndex < Math.floor(area.progress / 20)
                                      ? `drop-shadow(0 0 8px ${area.accent})`
                                      : "none",
                                  animation:
                                    activeCard === index &&
                                    starIndex < Math.floor(area.progress / 20)
                                      ? "twinkle 1s ease-in-out infinite"
                                      : "none",
                                  animationDelay: `${starIndex * 0.2}s`,
                                }}
                              />
                            ))}
                          </Box>
                        </CardContent>
                      </Card>
                    </Grow>
                  </Grid>
                ))}
              </Grid>
            </Box>
          </Grid>
        </Grid>
      </Box>

      <style jsx>{`
        @keyframes holographicShift {
          0%,
          100% {
            background-position: 0% 50%;
          }
          25% {
            background-position: 100% 50%;
          }
          50% {
            background-position: 100% 100%;
          }
          75% {
            background-position: 0% 100%;
          }
        }

        @keyframes cosmicFlow {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
            opacity: 0.8;
          }
          33% {
            transform: translateY(-20px) rotate(1deg);
            opacity: 1;
          }
          66% {
            transform: translateY(10px) rotate(-1deg);
            opacity: 0.9;
          }
        }

        @keyframes float {
          0%,
          100% {
            transform: translateY(0px) translateX(0px);
          }
          25% {
            transform: translateY(-15px) translateX(5px);
          }
          50% {
            transform: translateY(-5px) translateX(-5px);
          }
          75% {
            transform: translateY(-10px) translateX(3px);
          }
        }

        @keyframes rotate {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        @keyframes quantumPulse {
          0%,
          100% {
            transform: scale(1);
            boxshadow: 0 0 20px currentColor;
          }
          50% {
            transform: scale(1.1);
            boxshadow: 0 0 40px currentColor, 0 0 60px currentColor;
          }
        }

        @keyframes neonPulse {
          0%,
          100% {
            opacity: 0.8;
            filter: brightness(1);
          }
          50% {
            opacity: 1;
            filter: brightness(1.3);
          }
        }

        @keyframes textShimmer {
          0%,
          100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }

        @keyframes gradientFlow {
          0% {
            background-position: 0% 50%;
          }
          100% {
            background-position: 300% 50%;
          }
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes gridPulse {
          0%,
          100% {
            opacity: 0.3;
          }
          50% {
            opacity: 0.6;
          }
        }

        @keyframes shimmer {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }

        @keyframes twinkle {
          0%,
          100% {
            transform: scale(1);
            filter: brightness(1);
          }
          50% {
            transform: scale(1.2);
            filter: brightness(1.5);
          }
        }
      `}</style>
    </Container>
  );
}
