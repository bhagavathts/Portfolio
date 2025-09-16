import React, { useState, useEffect } from "react";
import { Container, Typography, Grid, Button, Stack, Paper, Box, Fade, Zoom } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import LaunchIcon from "@mui/icons-material/Launch";
import ContactPhoneIcon from "@mui/icons-material/ContactPhone";
import ConnectWithoutContactIcon from "@mui/icons-material/ConnectWithoutContact";
export default function Contact() {
  const [hoveredCard, setHoveredCard] = useState(null);
  const [animateText, setAnimateText] = useState(false);
  const [particleAnimation, setParticleAnimation] = useState(false);

  useEffect(() => {
    setAnimateText(true);
    setTimeout(() => setParticleAnimation(true), 500);
  }, []);

  const backgroundParticles = Array.from({ length: 20 }, (_, i) => (
    <Box
      key={i}
      sx={{
        position: "absolute",
        width: { xs: "4px", sm: "6px" },
        height: { xs: "4px", sm: "6px" },
        background: "linear-gradient(45deg, #9c27b0, #673ab7)",
        borderRadius: "50%",
        top: `${Math.random() * 100}%`,
        left: `${Math.random() * 100}%`,
        opacity: 0.6,
        animation: `float ${3 + Math.random() * 4}s ease-in-out infinite`,
        animationDelay: `${Math.random() * 2}s`,
        transform: particleAnimation ? "scale(1)" : "scale(0)",
        transition: "transform 0.8s ease-out"
      }}
    />
  ));

  return (
    <Box
      id="contact"
      sx={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #0a0a0a 0%, #1a0033 25%, #2d1b69 50%, #1a0033 75%, #000000 100%)",
        position: "relative",
        overflow: "hidden",
        py: { xs: 6, sm: 8, md: 10 }
      }}
    >
      {/* Animated Background Elements */}
      <Box
        sx={{
          position: "absolute",
          top: "15%",
          right: "10%",
          width: { xs: "150px", md: "250px" },
          height: { xs: "150px", md: "250px" },
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(156, 39, 176, 0.15) 0%, transparent 70%)",
          animation: "pulse 4s ease-in-out infinite",
          zIndex: 0
        }}
      />
      <Box
        sx={{
          position: "absolute",
          bottom: "20%",
          left: "8%",
          width: { xs: "100px", md: "180px" },
          height: { xs: "100px", md: "180px" },
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(103, 58, 183, 0.2) 0%, transparent 70%)",
          animation: "pulse 6s ease-in-out infinite reverse",
          zIndex: 0
        }}
      />

      {/* Floating Particles */}
      {backgroundParticles}

      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
        {/* Header Section */}
        <Fade in={animateText} timeout={1000}>
          <Box textAlign="center" mb={{ xs: 6, sm: 8 }}>
            <Typography
              variant="h1"
              sx={{
                fontWeight: 900,
                fontSize: { xs: "2.5rem", sm: "3.5rem", md: "4.5rem", lg: "5rem" },
                background: "linear-gradient(45deg, #e91e63, #9c27b0, #673ab7, #3f51b5)",
                backgroundSize: "300% 300%",
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                animation: "gradientShift 3s ease-in-out infinite",
                mb: 2,
                letterSpacing: "-0.02em"
              }}
            >
              Let's Connect
            </Typography>
            
            <Box
              sx={{
                width: { xs: "80px", sm: "120px" },
                height: "4px",
                background: "linear-gradient(90deg, transparent, #e91e63, #9c27b0, transparent)",
                margin: "0 auto 32px",
                borderRadius: "2px",
                animation: "glow 2s ease-in-out infinite alternate"
              }}
            />
            
            <Typography
              variant="h5"
              sx={{
                color: "rgba(255, 255, 255, 0.9)",
                maxWidth: "700px",
                margin: "0 auto",
                lineHeight: 1.6,
                fontSize: { xs: "1.1rem", sm: "1.3rem", md: "1.5rem" },
                fontWeight: 400,
                textShadow: "0 2px 10px rgba(0,0,0,0.3)"
              }}
            >
              Ready to bring your ideas to life? Let's collaborate and create something extraordinary together!
            </Typography>
          </Box>
        </Fade>

        <Grid container spacing={{ xs: 3, sm: 4, md: 6 }} justifyContent="center">
          {/* Contact Info Section */}
          <Grid item xs={12} lg={6}>
            <Zoom in timeout={800} style={{ transitionDelay: "200ms" }}>
              <Paper
                elevation={0}
                onMouseEnter={() => setHoveredCard("contact")}
                onMouseLeave={() => setHoveredCard(null)}
                sx={{
                  p: { xs: 3, sm: 4, md: 5 },
                  borderRadius: "24px",
                  background: "linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%)",
                  backdropFilter: "blur(20px)",
                  border: "1px solid rgba(156, 39, 176, 0.3)",
                  position: "relative",
                  overflow: "hidden",
                  transition: "all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
                  transform: hoveredCard === "contact" ? "translateY(-12px) scale(1.02)" : "translateY(0)",
                  boxShadow: hoveredCard === "contact" 
                    ? "0 25px 50px rgba(156, 39, 176, 0.4)" 
                    : "0 8px 32px rgba(0, 0, 0, 0.3)",
                  "&::before": {
                    content: '""',
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: "linear-gradient(45deg, rgba(156, 39, 176, 0.1), rgba(103, 58, 183, 0.1))",
                    opacity: hoveredCard === "contact" ? 1 : 0,
                    transition: "opacity 0.3s ease"
                  }
                }}
              >
                <Box sx={{ position: "relative", zIndex: 1 }}>
                  <Box display="flex" alignItems="center" justifyContent="center" mb={4}>
                    <ContactPhoneIcon 
                      sx={{ 
                        fontSize: { xs: "2rem", sm: "2.5rem" }, 
                        color: "#e91e63",
                        mr: 2,
                        filter: "drop-shadow(0 4px 8px rgba(233, 30, 99, 0.3))"
                      }} 
                    />
                    <Typography
                      variant="h4"
                      sx={{
                        fontWeight: 700,
                        color: "#ffffff",
                        fontSize: { xs: "1.5rem", sm: "1.8rem", md: "2rem" }
                      }}
                    >
                      Get In Touch
                    </Typography>
                  </Box>

                  <Stack spacing={3}>
                    <Paper
                      sx={{
                        p: 3,
                        background: "rgba(255, 255, 255, 0.08)",
                        borderRadius: "16px",
                        border: "1px solid rgba(255, 255, 255, 0.1)",
                        transition: "all 0.3s ease",
                        "&:hover": {
                          background: "rgba(233, 30, 99, 0.1)",
                          border: "1px solid rgba(233, 30, 99, 0.3)",
                          transform: "translateX(8px)"
                        }
                      }}
                    >
                      <Stack direction="row" spacing={2} alignItems="center">
                        <PhoneIcon 
                          sx={{ 
                            color: "#4CAF50", 
                            fontSize: { xs: "1.5rem", sm: "1.8rem" },
                            filter: "drop-shadow(0 2px 4px rgba(76, 175, 80, 0.3))"
                          }} 
                        />
                        <Box>
                          <Typography 
                            variant="h6" 
                            sx={{ 
                              color: "#ffffff", 
                              fontWeight: 600,
                              fontSize: { xs: "1rem", sm: "1.1rem" }
                            }}
                          >
                            Mobile
                          </Typography>
                          <Typography 
                            variant="body1" 
                            sx={{ 
                              color: "rgba(255, 255, 255, 0.8)",
                              fontSize: { xs: "0.9rem", sm: "1rem" }
                            }}
                          >
                            +91-8220719228
                          </Typography>
                        </Box>
                      </Stack>
                    </Paper>

                    <Paper
                      sx={{
                        p: 3,
                        background: "rgba(255, 255, 255, 0.08)",
                        borderRadius: "16px",
                        border: "1px solid rgba(255, 255, 255, 0.1)",
                        transition: "all 0.3s ease",
                        "&:hover": {
                          background: "rgba(156, 39, 176, 0.1)",
                          border: "1px solid rgba(156, 39, 176, 0.3)",
                          transform: "translateX(8px)"
                        }
                      }}
                    >
                      <Stack direction="row" spacing={2} alignItems="center">
                        <EmailIcon 
                          sx={{ 
                            color: "#FF5722", 
                            fontSize: { xs: "1.5rem", sm: "1.8rem" },
                            filter: "drop-shadow(0 2px 4px rgba(255, 87, 34, 0.3))"
                          }} 
                        />
                        <Box>
                          <Typography 
                            variant="h6" 
                            sx={{ 
                              color: "#ffffff", 
                              fontWeight: 600,
                              fontSize: { xs: "1rem", sm: "1.1rem" }
                            }}
                          >
                            Email
                          </Typography>
                          <Typography 
                            variant="body1" 
                            sx={{ 
                              color: "rgba(255, 255, 255, 0.8)",
                              fontSize: { xs: "0.9rem", sm: "1rem" }
                            }}
                          >
                            bhagavathts@gmail.com
                          </Typography>
                        </Box>
                      </Stack>
                    </Paper>
                  </Stack>

                  <Box
                    sx={{
                      mt: 4,
                      p: 3,
                      background: "linear-gradient(45deg, rgba(233, 30, 99, 0.1), rgba(156, 39, 176, 0.1))",
                      borderRadius: "16px",
                      border: "1px solid rgba(233, 30, 99, 0.2)",
                      textAlign: "center"
                    }}
                  >
                    <Typography
                      variant="body1"
                      sx={{
                        color: "rgba(255, 255, 255, 0.9)",
                        fontSize: { xs: "0.9rem", sm: "1rem" },
                        fontStyle: "italic"
                      }}
                    >
                      Available for freelance projects and exciting collaborations 🚀
                    </Typography>
                  </Box>
                </Box>
              </Paper>
            </Zoom>
          </Grid>

          {/* Social Links Section */}
          <Grid item xs={12} lg={6}>
            <Zoom in timeout={800} style={{ transitionDelay: "400ms" }}>
              <Paper
                elevation={0}
                onMouseEnter={() => setHoveredCard("social")}
                onMouseLeave={() => setHoveredCard(null)}
                sx={{
                  p: { xs: 3, sm: 4, md: 5 },
                  borderRadius: "24px",
                  background: "linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%)",
                  backdropFilter: "blur(20px)",
                  border: "1px solid rgba(103, 58, 183, 0.3)",
                  position: "relative",
                  overflow: "hidden",
                  transition: "all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
                  transform: hoveredCard === "social" ? "translateY(-12px) scale(1.02)" : "translateY(0)",
                  boxShadow: hoveredCard === "social" 
                    ? "0 25px 50px rgba(103, 58, 183, 0.4)" 
                    : "0 8px 32px rgba(0, 0, 0, 0.3)",
                  "&::before": {
                    content: '""',
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: "linear-gradient(45deg, rgba(103, 58, 183, 0.1), rgba(63, 81, 181, 0.1))",
                    opacity: hoveredCard === "social" ? 1 : 0,
                    transition: "opacity 0.3s ease"
                  }
                }}
              >
                <Box sx={{ position: "relative", zIndex: 1 }}>
                  <Box display="flex" alignItems="center" justifyContent="center" mb={4}>
                    <ConnectWithoutContactIcon 
                      sx={{ 
                        fontSize: { xs: "2rem", sm: "2.5rem" }, 
                        color: "#673ab7",
                        mr: 2,
                        filter: "drop-shadow(0 4px 8px rgba(103, 58, 183, 0.3))"
                      }} 
                    />
                    <Typography
                      variant="h4"
                      sx={{
                        fontWeight: 700,
                        color: "#ffffff",
                        fontSize: { xs: "1.5rem", sm: "1.8rem", md: "2rem" }
                      }}
                    >
                      Follow My Journey
                    </Typography>
                  </Box>

                  <Stack 
                    direction={{ xs: "column", sm: "row" }} 
                    spacing={3} 
                    justifyContent="center"
                    alignItems="center"
                  >
                    <Button
                      variant="contained"
                      startIcon={<GitHubIcon />}
                      endIcon={<LaunchIcon />}
                      href="https://github.com/bhagavathts?tab=repositories"
                      target="_blank"
                      sx={{
                        px: { xs: 3, sm: 4 },
                        py: { xs: 1.5, sm: 2 },
                        borderRadius: "16px",
                        fontSize: { xs: "0.9rem", sm: "1rem", md: "1.1rem" },
                        fontWeight: 600,
                        background: "linear-gradient(45deg, #333333, #000000)",
                        color: "#ffffff",
                        minWidth: { xs: "200px", sm: "160px" },
                        transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                        boxShadow: "0 8px 25px rgba(0, 0, 0, 0.3)",
                        "&:hover": {
                          background: "linear-gradient(45deg, #000000, #333333)",
                          transform: "translateY(-4px)",
                          boxShadow: "0 12px 35px rgba(0, 0, 0, 0.4)"
                        }
                      }}
                    >
                      GitHub
                    </Button>
                    
                    <Button
                      variant="contained"
                      startIcon={<LinkedInIcon />}
                      endIcon={<LaunchIcon />}
                      href="https://www.linkedin.com/in/yourlinkedin/"
                      target="_blank"
                      sx={{
                        px: { xs: 3, sm: 4 },
                        py: { xs: 1.5, sm: 2 },
                        borderRadius: "16px",
                        fontSize: { xs: "0.9rem", sm: "1rem", md: "1.1rem" },
                        fontWeight: 600,
                        background: "linear-gradient(45deg, #0077b5, #005885)",
                        color: "#ffffff",
                        minWidth: { xs: "200px", sm: "160px" },
                        transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                        boxShadow: "0 8px 25px rgba(0, 119, 181, 0.3)",
                        "&:hover": {
                          background: "linear-gradient(45deg, #005885, #0077b5)",
                          transform: "translateY(-4px)",
                          boxShadow: "0 12px 35px rgba(0, 119, 181, 0.4)"
                        }
                      }}
                    >
                      LinkedIn
                    </Button>
                  </Stack>

                  <Box
                    sx={{
                      mt: 4,
                      p: 3,
                      background: "linear-gradient(45deg, rgba(103, 58, 183, 0.1), rgba(63, 81, 181, 0.1))",
                      borderRadius: "16px",
                      border: "1px solid rgba(103, 58, 183, 0.2)",
                      textAlign: "center"
                    }}
                  >
                    <Typography
                      variant="h6"
                      sx={{
                        color: "#ffffff",
                        fontSize: { xs: "1rem", sm: "1.1rem" },
                        fontWeight: 600,
                        mb: 1
                      }}
                    >
                      Let's Build Something Amazing
                    </Typography>
                    <Typography
                      variant="body1"
                      sx={{
                        color: "rgba(255, 255, 255, 0.8)",
                        fontSize: { xs: "0.9rem", sm: "1rem" }
                      }}
                    >
                      Open to new opportunities and innovative projects. 
                      Let's turn your vision into reality! ✨
                    </Typography>
                  </Box>
                </Box>
              </Paper>
            </Zoom>
          </Grid>
        </Grid>
      </Container>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-10px) rotate(180deg); }
        }
        
        @keyframes pulse {
          0%, 100% { transform: scale(1); opacity: 0.7; }
          50% { transform: scale(1.1); opacity: 1; }
        }
        
        @keyframes gradientShift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        
        @keyframes glow {
          0% { box-shadow: 0 0 20px rgba(233, 30, 99, 0.5); }
          100% { box-shadow: 0 0 40px rgba(156, 39, 176, 0.8); }
        }
      `}</style>
    </Box>
  );
}