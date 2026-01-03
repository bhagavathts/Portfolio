import homes from "../assets/home.png";
import LanguageIcon from '@mui/icons-material/Language';

import product from "../assets/products.png";
import carts from "../assets/cart.png";
import check from "../assets/checkout.png";
import thanks from "../assets/tx.png";
import ahomes from "../assets/ahome.png";
import aproduct from "../assets/aproducts.png";
import adetails from "../assets/adetail.png";
import admins from "../assets/admin.png";
import users from "../assets/user.png";
import React, { useState } from "react";
import {
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardActions,
  Button,
  Box,
  Chip,
  IconButton,
  Fade,
  Zoom,
} from "@mui/material";
import {
  GitHub as GitHubIcon,
  Code as CodeIcon,
  ZoomIn as ZoomInIcon,
  ArrowBackIos as ArrowBackIcon,
  ArrowForwardIos as ArrowForwardIosIcon,
} from "@mui/icons-material";
import thome from "../assets/thome.png";
import tdashboard from "../assets/tdashboard.png";
import tstatus from "../assets/tstatus.png";
import tlogin from "../assets/tlogin.png";
import tcreate from "../assets/tcreate.png";
// Actual image imports
const home = homes;
const products = product;
const cart = carts;
const checkout = check;
const tx = thanks;
const ahome = ahomes;
const aproducts = aproduct;
const adetail = adetails;
const admin = admins;
const user = users;

const projectList = [
  {
    title: "Chocolate Store",
    description:
      "A full-stack eCommerce platform featuring modern UI/UX, secure authentication, dynamic cart management, and seamless checkout experience. Built with cutting-edge technologies for optimal performance.",
    technologies: ["React", "JSON Server", "Material-UI"],
    link: "https://github.com/bhagavathts/chocostore",
    screenshots: [home, products, cart, checkout, tx],
    gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
    accentColor: "#764ba2",
  },
  {
    title: "Aqua Shop",
    description:
      "Professional aquarium products marketplace with comprehensive admin dashboard, real-time inventory management, and enhanced user experience. Engineered for scalability and performance.",
    technologies: ["Express", "React", "MongoDB", "Material-UI"],
    link: "https://github.com/bhagavathts/Aquashop",
    screenshots: [ahome, adetail, aproducts, admin, user],
    gradient: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
    accentColor: "#f5576c",
  },
  {
    title: "Task Tracker",
    description:
      "A productivity-focused task management application with secure authentication, user-specific tasks, status-based categorization, and an intuitive dashboard. Designed to improve task organization and efficiency.",
    technologies: ["React", "Node.js", "Express", "MongoDB", "Material-UI"],
    link: "https://github.com/bhagavathts/Task_Dashboard",
    website: "https://tasktrackerdashboard.netlify.app", // 👈 add live site here
    screenshots: [thome, tlogin, tdashboard, tcreate, tstatus],
    gradient: "linear-gradient(135deg, #43cea2 0%, #185a9d 100%)",
    accentColor: "#185a9d",
  },
];

export default function Projects() {
  const [hoveredCard, setHoveredCard] = useState(null);
  const [activeScreenshot, setActiveScreenshot] = useState({});
  const [expandedImage, setExpandedImage] = useState(null);

  const handleScreenshotChange = (projectIndex, screenshotIndex) => {
    setActiveScreenshot((prev) => ({
      ...prev,
      [projectIndex]: screenshotIndex,
    }));
  };

  // New navigation functions
  const handleNextImage = (projectIndex, e) => {
    e.stopPropagation(); // Prevent triggering hover effects
    const currentIndex = activeScreenshot[projectIndex] || 0;
    const nextIndex =
      (currentIndex + 1) % projectList[projectIndex].screenshots.length;
    handleScreenshotChange(projectIndex, nextIndex);
  };

  const handlePrevImage = (projectIndex, e) => {
    e.stopPropagation(); // Prevent triggering hover effects
    const currentIndex = activeScreenshot[projectIndex] || 0;
    const prevIndex =
      currentIndex === 0
        ? projectList[projectIndex].screenshots.length - 1
        : currentIndex - 1;
    handleScreenshotChange(projectIndex, prevIndex);
  };

  const handleImageExpand = (projectIndex, screenshotIndex) => {
    setExpandedImage({
      projectIndex,
      screenshotIndex,
      src: projectList[projectIndex].screenshots[screenshotIndex],
    });
  };

  const closeExpandedImage = () => {
    setExpandedImage(null);
  };

  // Navigation for expanded image
  const handleExpandedNext = (e) => {
    e.stopPropagation();
    if (expandedImage) {
      const { projectIndex } = expandedImage;
      const currentIndex = expandedImage.screenshotIndex;
      const nextIndex =
        (currentIndex + 1) % projectList[projectIndex].screenshots.length;
      setExpandedImage({
        ...expandedImage,
        screenshotIndex: nextIndex,
        src: projectList[projectIndex].screenshots[nextIndex],
      });
    }
  };

  const handleExpandedPrev = (e) => {
    e.stopPropagation();
    if (expandedImage) {
      const { projectIndex } = expandedImage;
      const currentIndex = expandedImage.screenshotIndex;
      const prevIndex =
        currentIndex === 0
          ? projectList[projectIndex].screenshots.length - 1
          : currentIndex - 1;
      setExpandedImage({
        ...expandedImage,
        screenshotIndex: prevIndex,
        src: projectList[projectIndex].screenshots[prevIndex],
      });
    }
  };

  return (
    <Box
      sx={{
        background:
          "linear-gradient(135deg, #0c0c0c 0%, #1a1a2e 50%, #16213e 100%)",
        minHeight: "100vh",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Animated Background Elements */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: `
            radial-gradient(circle at 20% 80%, rgba(120, 9, 183, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 80% 20%, rgba(255, 107, 107, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 40% 40%, rgba(72, 9, 183, 0.1) 0%, transparent 50%)
          `,
          animation: "float 20s ease-in-out infinite",
        }}
      />

      <Container
        id="projects"
        maxWidth="lg"
        sx={{
          py: { xs: 6, md: 10 },
          position: "relative",
          zIndex: 1,
        }}
      >
        {/* Section Header */}
        <Fade in timeout={1000}>
          <Box sx={{ textAlign: "center", mb: { xs: 6, md: 8 } }}>
            <Typography
              variant="h2"
              sx={{
                fontWeight: 800,
                fontSize: { xs: "2.5rem", sm: "3.5rem", md: "4rem" },
                background:
                  "linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                mb: 2,
                letterSpacing: "-0.02em",
              }}
            >
              Featured Projects
            </Typography>
            <Typography
              variant="h6"
              sx={{
                color: "rgba(255,255,255,0.7)",
                maxWidth: "600px",
                mx: "auto",
                fontSize: { xs: "1rem", md: "1.25rem" },
                fontWeight: 300,
                lineHeight: 1.6,
              }}
            >
              Showcasing innovative solutions and cutting-edge development
            </Typography>
          </Box>
        </Fade>

        {/* Projects Grid */}
        <Grid container spacing={{ xs: 3, md: 4 }}>
          {projectList.map((project, index) => (
            <Grid item xs={12} md={6} key={index}>
              <Zoom in timeout={1000 + index * 200}>
                <Card
                  onMouseEnter={() => setHoveredCard(index)}
                  onMouseLeave={() => setHoveredCard(null)}
                  sx={{
                    height: "100%",
                    background: "rgba(255,255,255,0.05)",
                    backdropFilter: "blur(20px)",
                    border: "1px solid rgba(255,255,255,0.1)",
                    borderRadius: 4,
                    overflow: "hidden",
                    transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                    position: "relative",
                    transform:
                      hoveredCard === index
                        ? "translateY(-12px) scale(1.02)"
                        : "none",
                    boxShadow:
                      hoveredCard === index
                        ? `0 20px 40px rgba(0,0,0,0.4), 0 0 0 1px ${project.accentColor}50`
                        : "0 8px 32px rgba(0,0,0,0.2)",
                    "&::before": {
                      content: '""',
                      position: "absolute",
                      top: 0,
                      left: 0,
                      right: 0,
                      height: "4px",
                      background: project.gradient,
                      opacity: hoveredCard === index ? 1 : 0.7,
                      transition: "opacity 0.3s ease",
                    },
                  }}
                >
                  {/* Screenshot Showcase - Enhanced for better visibility */}
                  <Box
                    sx={{
                      position: "relative",
                      height: { xs: 300, md: 350 },
                      overflow: "hidden",
                    }}
                  >
                    <Box
                      component="img"
                      src={project.screenshots[activeScreenshot[index] || 0]}
                      alt={`${project.title} preview`}
                      onClick={() =>
                        handleImageExpand(index, activeScreenshot[index] || 0)
                      }
                      sx={{
                        width: "100%",
                        height: "100%",
                        objectFit: "contain",
                        objectPosition: "center",
                        transition: "all 0.6s ease",
                        transform:
                          hoveredCard === index ? "scale(1.05)" : "scale(0.95)",
                        filter:
                          hoveredCard === index
                            ? "brightness(1.1) contrast(1.1)"
                            : "brightness(1)",
                        cursor: "pointer",
                        padding: "10px",
                        backgroundColor: "rgba(255,255,255,0.02)",
                        borderRadius: "8px",
                      }}
                    />

                    {/* Navigation Arrow Buttons */}
                    <IconButton
                      onClick={(e) => handlePrevImage(index, e)}
                      sx={{
                        position: "absolute",
                        left: 16,
                        top: "50%",
                        transform: "translateY(-50%)",
                        background: "rgba(0,0,0,0.7)",
                        color: "#fff",
                        backdropFilter: "blur(10px)",
                        transition: "all 0.3s ease",
                        opacity: hoveredCard === index ? 1 : 0,
                        "&:hover": {
                          background: project.accentColor,
                          transform: "translateY(-50%) scale(1.1)",
                        },
                        width: 40,
                        height: 40,
                      }}
                    >
                      <ArrowBackIcon />
                    </IconButton>

                    <IconButton
                      onClick={(e) => handleNextImage(index, e)}
                      sx={{
                        position: "absolute",
                        right: 16,
                        top: "50%",
                        transform: "translateY(-50%)",
                        background: "rgba(0,0,0,0.7)",
                        color: "#fff",
                        backdropFilter: "blur(10px)",
                        transition: "all 0.3s ease",
                        opacity: hoveredCard === index ? 1 : 0,
                        "&:hover": {
                          background: project.accentColor,
                          transform: "translateY(-50%) scale(1.1)",
                        },
                        width: 40,
                        height: 40,
                      }}
                    >
                      <ArrowForwardIosIcon />
                    </IconButton>

                    {/* Zoom Overlay Button */}
                    <IconButton
                      onClick={() =>
                        handleImageExpand(index, activeScreenshot[index] || 0)
                      }
                      sx={{
                        position: "absolute",
                        top: 16,
                        right: 16,
                        background: "rgba(0,0,0,0.7)",
                        color: "#fff",
                        backdropFilter: "blur(10px)",
                        transition: "all 0.3s ease",
                        opacity: hoveredCard === index ? 1 : 0,
                        transform:
                          hoveredCard === index ? "scale(1)" : "scale(0.8)",
                        "&:hover": {
                          background: project.accentColor,
                          transform: "scale(1.1)",
                        },
                      }}
                    >
                      <ZoomInIcon />
                    </IconButton>

                    {/* Screenshot Navigation Dots */}
                    <Box
                      sx={{
                        position: "absolute",
                        bottom: 16,
                        left: "50%",
                        transform: "translateX(-50%)",
                        display: "flex",
                        gap: 1,
                        background: "rgba(0,0,0,0.7)",
                        borderRadius: 3,
                        p: 1.5,
                        backdropFilter: "blur(15px)",
                        border: "1px solid rgba(255,255,255,0.1)",
                      }}
                    >
                      {project.screenshots.map((_, idx) => (
                        <Box
                          key={idx}
                          onClick={() => handleScreenshotChange(index, idx)}
                          sx={{
                            width: 12,
                            height: 12,
                            borderRadius: "50%",
                            background:
                              (activeScreenshot[index] || 0) === idx
                                ? project.accentColor
                                : "rgba(255,255,255,0.4)",
                            cursor: "pointer",
                            transition: "all 0.3s ease",
                            border:
                              (activeScreenshot[index] || 0) === idx
                                ? `2px solid ${project.accentColor}`
                                : "2px solid transparent",
                            "&:hover": {
                              background: project.accentColor,
                              transform: "scale(1.3)",
                              boxShadow: `0 0 10px ${project.accentColor}50`,
                            },
                          }}
                        />
                      ))}
                    </Box>

                    {/* Screenshot Counter */}
                    <Box
                      sx={{
                        position: "absolute",
                        top: 16,
                        left: 16,
                        background: "rgba(0,0,0,0.7)",
                        color: "#fff",
                        px: 2,
                        py: 0.5,
                        borderRadius: 2,
                        fontSize: "0.8rem",
                        fontWeight: 600,
                        backdropFilter: "blur(10px)",
                        border: "1px solid rgba(255,255,255,0.1)",
                      }}
                    >
                      {(activeScreenshot[index] || 0) + 1} /{" "}
                      {project.screenshots.length}
                    </Box>
                  </Box>

                  <CardContent sx={{ p: { xs: 2.5, md: 3 } }}>
                    {/* Project Title */}
                    <Typography
                      variant="h5"
                      sx={{
                        fontWeight: 700,
                        color: "#fff",
                        mb: 1.5,
                        fontSize: { xs: "1.3rem", md: "1.5rem" },
                        display: "flex",
                        alignItems: "center",
                        gap: 1,
                      }}
                    >
                      <CodeIcon sx={{ color: project.accentColor }} />
                      {project.title}
                    </Typography>

                    {/* Description */}
                    <Typography
                      variant="body1"
                      sx={{
                        color: "rgba(255,255,255,0.8)",
                        mb: 2.5,
                        lineHeight: 1.6,
                        fontSize: { xs: "0.9rem", md: "1rem" },
                      }}
                    >
                      {project.description}
                    </Typography>

                    {/* Technology Stack */}
                    <Box sx={{ mb: 2.5 }}>
                      <Typography
                        variant="subtitle2"
                        sx={{
                          color: "rgba(255,255,255,0.9)",
                          mb: 1,
                          fontWeight: 600,
                          fontSize: "0.8rem",
                          textTransform: "uppercase",
                          letterSpacing: "0.5px",
                        }}
                      >
                        Tech Stack
                      </Typography>
                      <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
                        {project.technologies.map((tech, idx) => (
                          <Chip
                            key={idx}
                            label={tech}
                            size="small"
                            sx={{
                              background: `${project.accentColor}20`,
                              color: project.accentColor,
                              border: `1px solid ${project.accentColor}40`,
                              fontWeight: 600,
                              fontSize: "0.75rem",
                              "&:hover": {
                                background: `${project.accentColor}30`,
                                transform: "scale(1.05)",
                              },
                              transition: "all 0.3s ease",
                            }}
                          />
                        ))}
                      </Box>
                    </Box>
                  </CardContent>

                  {/* Action Buttons */}
                  <CardActions
                    sx={{
                      p: { xs: 2.5, md: 3 },
                      pt: 0,
                      gap: 1.5,
                      justifyContent: "space-between",
                    }}
                  >
                    <Button
                      variant="outlined"
                      startIcon={<GitHubIcon />}
                      href={project.link}
                      target="_blank"
                      sx={{
                        flex: 1,
                        borderColor: "rgba(255,255,255,0.3)",
                        color: "#fff",
                        fontWeight: 600,
                        textTransform: "none",
                        py: 1.2,
                        transition: "all 0.3s ease",
                        "&:hover": {
                          borderColor: project.accentColor,
                          color: project.accentColor,
                          background: `${project.accentColor}10`,
                          transform: "translateY(-2px)",
                        },
                      }}
                    >
                      View Code
                    </Button>
                    {project.website && (
                      <Button
                        variant="contained"
                        startIcon={<LanguageIcon />}
                        href={project.website}
                        target="_blank"
                        sx={{
                          flex: 1,
                          background: project.gradient,
                          color: "#fff",
                          fontWeight: 600,
                          textTransform: "none",
                          py: 1.2,
                          transition: "all 0.3s ease",
                          "&:hover": {
                            transform: "translateY(-2px) scale(1.02)",
                            boxShadow: `0 10px 30px ${project.accentColor}60`,
                          },
                        }}
                      >
                        Live Website
                      </Button>
                    )}
                  </CardActions>
                </Card>
              </Zoom>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Full Screen Image Modal with Navigation */}
      {expandedImage && (
        <Box
          onClick={closeExpandedImage}
          sx={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: "rgba(0,0,0,0.9)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 9999,
            backdropFilter: "blur(10px)",
            cursor: "pointer",
            p: 4,
          }}
        >
          {/* Expanded Image Navigation Arrows */}
          <IconButton
            onClick={handleExpandedPrev}
            sx={{
              position: "absolute",
              left: 40,
              top: "50%",
              transform: "translateY(-50%)",
              background: "rgba(255,255,255,0.1)",
              color: "#fff",
              width: 60,
              height: 60,
              "&:hover": {
                background: "rgba(255,255,255,0.2)",
                transform: "translateY(-50%) scale(1.1)",
              },
              transition: "all 0.3s ease",
            }}
          >
            <ArrowBackIcon fontSize="large" />
          </IconButton>

          <IconButton
            onClick={handleExpandedNext}
            sx={{
              position: "absolute",
              right: 40,
              top: "50%",
              transform: "translateY(-50%)",
              background: "rgba(255,255,255,0.1)",
              color: "#fff",
              width: 60,
              height: 60,
              "&:hover": {
                background: "rgba(255,255,255,0.2)",
                transform: "translateY(-50%) scale(1.1)",
              },
              transition: "all 0.3s ease",
            }}
          >
            <ArrowForwardIosIcon fontSize="large" />
          </IconButton>

          {/* Expanded Image Counter */}
          <Box
            sx={{
              position: "absolute",
              bottom: 40,
              left: "50%",
              transform: "translateX(-50%)",
              background: "rgba(0,0,0,0.8)",
              color: "#fff",
              px: 3,
              py: 1,
              borderRadius: 3,
              fontSize: "1rem",
              fontWeight: 600,
              backdropFilter: "blur(10px)",
              border: "1px solid rgba(255,255,255,0.1)",
            }}
          >
            {expandedImage.screenshotIndex + 1} /{" "}
            {projectList[expandedImage.projectIndex].screenshots.length}
          </Box>

          <Box
            component="img"
            src={expandedImage.src}
            alt="Expanded view"
            sx={{
              maxWidth: "80%",
              maxHeight: "80%",
              objectFit: "contain",
              borderRadius: 2,
              boxShadow: "0 20px 60px rgba(0,0,0,0.5)",
              border: "2px solid rgba(255,255,255,0.1)",
            }}
          />

          <IconButton
            onClick={closeExpandedImage}
            sx={{
              position: "absolute",
              top: 20,
              right: 20,
              background: "rgba(0,0,0,0.8)",
              color: "#fff",
              width: 50,
              height: 50,
              fontSize: "1.5rem",
              "&:hover": {
                background: "rgba(255,255,255,0.1)",
              },
            }}
          >
            ✕
          </IconButton>
        </Box>
      )}

      <style>
        {`
          @keyframes float {
            0%, 100% { transform: translateY(0px) rotate(0deg); }
            33% { transform: translateY(-10px) rotate(1deg); }
            66% { transform: translateY(5px) rotate(-1deg); }
          }
        `}
      </style>
    </Box>
  );
}
