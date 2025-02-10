import React, { useState, useEffect, useRef } from "react";
import { Box, Typography } from "@mui/material";
import { keyframes } from "@emotion/react";
import { slides } from "../utility/data";

const AUTO_PLAY_INTERVAL = 7000;
const TRANSITION_DURATION = 3000;

const progressAnimation = keyframes`
    from {
      width: 0%;
    }
    to {
      width: 100%;
    }
  `;

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const timeoutRef = useRef(null);

  const resetTimeout = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  };

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === slides.length - 1 ? 0 : prevIndex + 1
      );
    }, AUTO_PLAY_INTERVAL);

    return () => {
      resetTimeout();
    };
  }, [currentIndex]);

  return (
    <Box
      sx={{
        backgroundColor: "#000",
        color: "#eee",
        fontFamily: "Poppins, sans-serif",
        fontSize: "12px",
        margin: 0,
        position: "relative",
      }}
    >
      <Box
        sx={{
          overflow: "hidden",
          width: "100%",
          height: "100vh",
          position: "relative",
        }}
      >
        <Box
          sx={{
            display: "flex",
            transition: "transform 0.5s ease-in-out",
            height: "100%",
            transform: `translateX(-${currentIndex * 100}%)`,
          }}
        >
          {slides.map((slide, index) => (
            <Box
              key={index}
              sx={{
                minWidth: "100%",
                height: "100%",
                position: "relative",
              }}
            >
              <Box
                component="img"
                src={slide.img}
                alt={`Slide ${index + 1}`}
                sx={{
                  width: "100%",
                  objectFit: "cover",
                }}
              />
              <Box
                sx={{
                  position: "absolute",
                  top: "20%",
                  left: "50%",
                  transform: "translateX(-50%)",
                  width: { xs: "90%", md: "80%" },
                  paddingRight: { xs: 0, md: "30%" },
                  boxSizing: "border-box",
                  color: "#fff",
                  textShadow: "0 5px 10px rgba(0, 0, 0, 0.25)",
                }}
              >
                <Typography
                  variant="h2"
                  sx={{
                    fontWeight: "bold",
                    lineHeight: "1.3em",
                    letterSpacing: 2.5,
                  }}
                >
                  {slide.title}
                </Typography>
                <Typography
                  variant="h2"
                  sx={{
                    fontWeight: "bold",
                    lineHeight: "1.3em",
                    color: "#DBD3D3",
                  }}
                >
                  {slide.topic}
                </Typography>
                <Typography
                  variant="h6"
                  sx={{ marginTop: "20px", lineHeight: "1.5em" }}
                >
                  {slide.des}
                </Typography>
              </Box>
            </Box>
          ))}
        </Box>

        <Box
          sx={{
            position: "absolute",
            bottom: ["10px", "30px"],
            left: "50%",
            transform: "translateX(-50%)",
            display: "flex",
            gap: "10px",
            zIndex: 100,
            overflowX: "auto",
            scrollSnapType: "x mandatory",
            "&::-webkit-scrollbar": {
              display: "none",
            },
          }}
        >
          {slides.map((slide, index) => (
            <Box
              key={index}
              onClick={() => setCurrentIndex(index)}
              sx={{
                width: { xs: "70px", sm: "100px" },
                height: { xs: "100px", sm: "150px" },
                flexShrink: 0,
                position: "relative",
                cursor: "pointer",
                borderRadius: "10px",
                overflow: "hidden",
                border:
                  index === currentIndex
                    ? "3px solid #6249CE"
                    : "3px solid transparent",
                transition: "transform 0.3s",
                scrollSnapAlign: "start",
                "&:hover img": {
                  transform: "scale(1.05)",
                },
              }}
            >
              <Box
                component="img"
                src={slide.img}
                alt={`Thumbnail ${index + 1}`}
                sx={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  transition: "transform 0.3s",
                }}
              />
            </Box>
          ))}
        </Box>

        <Box
          sx={{
            position: "absolute",
            zIndex: 1000,
            width: "100%",
            height: "3px",
            backgroundColor: "#333",
          }}
        >
          <Box
            sx={{
              width: "100%",
              height: "100%",
              backgroundColor: "#f1683a",
              animation: `${progressAnimation} ${TRANSITION_DURATION}ms linear forwards`,
            }}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default Carousel;
