import React, { useState } from "react";
import { 
  Container, 
  Typography, 
  Grid, 
  Chip, 
  Box, 
  Card, 
  CardContent,
  LinearProgress,
  Fade,
  Zoom
} from "@mui/material";
import { 
  Storage as StorageIcon, 
  Web as WebIcon, 
  Build as BuildIcon 
} from "@mui/icons-material";

const skillCategories = {
  "Frontend Technologies": {
    icon: <WebIcon />,
    color: "#9c27b0",
    skills: [
      { name: "HTML", level: 95, color: "#e34c26" },
      { name: "CSS", level: 90, color: "#1572b6" },
      { name: "JavaScript", level: 88, color: "#f7df1e" },
      { name: "React", level: 85, color: "#61dafb" },
      { name: "Material UI", level: 80, color: "#0081cb" }
    ]
  },
  "Backend & Database": {
    icon: <StorageIcon />,
    color: "#673ab7",
    skills: [
      { name: "Node.js", level: 82, color: "#339933" },
      { name: "Express.js", level: 78, color: "#000000" },
      { name: "MongoDB", level: 75, color: "#47a248" },
      { name: "JSON Server", level: 85, color: "#ff6b6b" }
    ]
  },
  "        Tools": {
    icon: <BuildIcon />,
    color: "#3f51b5",
    skills: [
      { name: "Git & GitHub", level: 88, color: "#f05032" },
      {name:"VS Code",level: 100,color:"orange"}
    ]
  }
};

export default function Skills() {
  const [hoveredSkill, setHoveredSkill] = useState(null);

  return (
    <Box
      id="skills"
      sx={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #0c0c0c 0%, #1a0033 50%, #000000 100%)",
        py: 8,
        position: "relative",
        overflow: "hidden"
      }}
    >
      {/* Animated Background Elements */}
      <Box
        sx={{
          position: "absolute",
          top: "10%",
          right: "10%",
          width: "200px",
          height: "200px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(156, 39, 176, 0.1) 0%, transparent 70%)",
          animation: "float 6s ease-in-out infinite"
        }}
      />
      <Box
        sx={{
          position: "absolute",
          bottom: "15%",
          left: "5%",
          width: "150px",
          height: "150px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(103, 58, 183, 0.15) 0%, transparent 70%)",
          animation: "float 8s ease-in-out infinite reverse"
        }}
      />

      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
        <Fade in timeout={800}>
          <Box textAlign="center" mb={6}>
            <Typography
              variant="h2"
              sx={{
                fontWeight: 800,
                background: "linear-gradient(45deg, #e91e63, #9c27b0, #673ab7)",
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                mb: 2,
                fontSize: { xs: "2.5rem", sm: "3rem", md: "4rem" }
              }}
            >
              Technical Arsenal
            </Typography>
            <Box
              sx={{
                width: "100px",
                height: "4px",
                background: "linear-gradient(45deg, #e91e63, #9c27b0)",
                margin: "0 auto 24px",
                borderRadius: "2px"
              }}
            />
            <Typography
              variant="h6"
              sx={{
                color: "rgba(255, 255, 255, 0.8)",
                maxWidth: "600px",
                margin: "0 auto",
                lineHeight: 1.6,
                fontSize: { xs: "1rem", sm: "1.1rem", md: "1.25rem" }
              }}
            >
              Crafting digital experiences with cutting-edge technologies and creative solutions
            </Typography>
          </Box>
        </Fade>

        <Grid container spacing={4} sx={{display:"flex",justifyContent:"center"}}>
          {Object.entries(skillCategories).map(([category, data], categoryIndex) => (
            <Grid item xs={12} md={4} key={category}>
              <Zoom in timeout={1000 + categoryIndex * 200}>
                <Card
                  sx={{
                    background: "linear-gradient(135deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.02) 100%)",
                    backdropFilter: "blur(10px)",
                    border: "1px solid rgba(255, 255, 255, 0.1)",
                    borderRadius: "20px",
                    height: {xs:400,sm:450,lg:450},
                    width:{xs:250,sm:300,lg:350},
                    transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                    "&:hover": {
                      transform: "translateY(-8px)",
                      boxShadow: `0 20px 40px rgba(${data.color.slice(1).match(/.{2}/g).map(x => parseInt(x, 16)).join(", ")}, 0.3)`,
                      border: `1px solid ${data.color}40`
                    }
                  }}
                >
                  <CardContent sx={{ p: 4 }}>
                    <Box display="flex" alignItems="center" mb={3}>
                      <Box
                        sx={{
                          color: data.color,
                          backgroundColor: `${data.color}20`,
                          borderRadius: "12px",
                          p: 1.5,
                          mr: 2,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center"
                        }}
                      >
                        {data.icon}
                      </Box>
                      <Typography
                        variant="h6"
                        sx={{
                          color: "#ffffff",
                          fontWeight: 700,
                          fontSize: { xs: "1rem", sm: "1.1rem", md: "1.25rem" }
                        }}
                      >
                        {category}
                      </Typography>
                    </Box>

                    <Box>
                      {data.skills.map((skill, skillIndex) => (
                        <Box
                          key={skill.name}
                          sx={{ mb: 3 }}
                          onMouseEnter={() => setHoveredSkill(`${category}-${skill.name}`)}
                          onMouseLeave={() => setHoveredSkill(null)}
                        >
                          <Box display="flex" justifyContent="space-between" alignItems="center" mb={1}>
                            <Typography
                              variant="body1"
                              sx={{
                                color: "#ffffff",
                                fontWeight: 600,
                                fontSize: { xs: "0.9rem", sm: "1rem" }
                              }}
                            >
                              {skill.name}
                            </Typography>
                            <Chip
                              label={`${skill.level}%`}
                              size="small"
                              sx={{
                                backgroundColor: `${skill.color}20`,
                                color: skill.color,
                                fontWeight: 700,
                                fontSize: "0.75rem",
                                height: "24px"
                              }}
                            />
                          </Box>
                          <LinearProgress
                            variant="determinate"
                            value={hoveredSkill === `${category}-${skill.name}` ? skill.level : 0}
                            sx={{
                              height: 8,
                              borderRadius: 4,
                              backgroundColor: "rgba(255, 255, 255, 0.1)",
                              "& .MuiLinearProgress-bar": {
                                background: `linear-gradient(45deg, ${skill.color}, ${skill.color}CC)`,
                                borderRadius: 4,
                                transition: "transform 1s ease-in-out"
                              }
                            }}
                          />
                        </Box>
                      ))}
                    </Box>
                  </CardContent>
                </Card>
              </Zoom>
            </Grid>
          ))}
        </Grid>

        {/* Bottom Statistics */}
     
      </Container>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(5deg); }
        }
      `}</style>
    </Box>
  );
}