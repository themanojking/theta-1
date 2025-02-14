import { Box, Button, Divider, Typography } from "@mui/material";
import React from "react";
import Navbar from ".././Component/Navbar";
import { Link } from "react-router-dom";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import Footer from ".././Component/Footer";

const Workshops = () => {
  const workshopData = [
    {
      title: "Interview Boot Camp For Three Days",
      date: "Date : 14th-Feb-2025",
      time: "Time : 02:00 p.m. - 05:00 p.m.",
      venue: "Venue : Auditorium",
      description: "Access",
      registrationLink:
        "https://docs.google.com/forms/d/1ot95aeKCJxycCAaxcvkUc7ymU4XHtIXGVFpblNlVDMM/edit?chromeless=1",
    },
    {
      title: "AI-Powered Tech Development",
      date: "Date : 22nd-Feb-2025",
      time: "Time : 09:00 a.m. - 05:00 p.m.",
      venue: "Venue : Auditorium",
      description: "Informatica",
      registrationLink: "https://forms.gle/d3eLwrQAurhRhYJz9",
    },
    {
      title: "Wonderlaw : Explore the Wonder",
      date: "Date : 24th-Feb-2025",
      time: "Time : 09:00 a.m. - 04:15 p.m.",
      venue: "Venue : Auditorium",
      description: "Optica",
      registrationLink: "",
    },
    {
      title: "Archery",
      date: "Date : 13th-Mar-2025",
      time: "Time : 10:00 a.m. - 01:00 p.m.",
      venue: "Venue : Basketball Court",
      description: "Sportiva",
      registrationLink: "",
    },
    {
      title: "Word and Excel",
      date: "Date : 26th-Feb-2025",
      time: "Time : 09:00 a.m. - 01:00 p.m.",
      venue: "Venue : Auditorium",
      description: "Strategia",
      registrationLink: "",
    },
    {
      title: "GST - Basics",
      date: "Date : 5th-Mar-2025",
      time: "Time : 09:00 a.m. - 01:00 p.m.",
      venue: "Venue : 201",
      description: "Strategia",
      registrationLink: "",
    },
    {
      title: "From Basic to Pro: Hands-on Networking with Cisco",
      date: "Date : 7th-Mar-2025",
      time: "Time : 09:00 a.m. - 05:00 p.m.",
      venue: "Venue : Auditorium",
      description: "Informatica",
      registrationLink: "",
    },
    {
      title: "Industrial IoT with Robotics Applications",
      date: "Date : 12th-Mar-2025",
      time: "Time : 09:00 a.m. - 05:00 p.m.",
      venue: "Venue : Auditorium",
      description: "Robotics",
      registrationLink: "",
    },

    {
      title: "Cutting Edge Techniques in Molecular Biology",
      date: "Date : 25th-Feb-2025",
      time: "Time : 09:00 a.m. - 04:30 p.m.",
      venue: "Venue : Auditorium",
      description: "Biogenesis",
      registrationLink: "",
    },

    {
      title: "Yoga",
      date: "Date : 2nd-Apr-2025",
      time: "Time : 10:00 a.m. - 01:00 p.m.",
      venue: "Venue : Drawing Hall",
      description: "Sportiva",
      registrationLink: "",
    },
    {
      title: "Voice of Doctor",
      date: "Date : 27th-Mar-2025",
      time: "Time : 11:00 a.m. - 01:00 p.m.",
      venue: "Venue : Auditorium",
      description: "Equilibria",
      registrationLink: "",
    },
    {
      title: "Rangasthalam",
      date: "Date : 1st-Apr-2025",
      time: "Time : 09:00 a.m. - 05:00 p.m.",
      venue: "Venue : Auditorium",
      description: "Vinodha Vaahini",
      registrationLink: "",
    },

    {
      title: "Application Containerization Using Docker",
      date: "Date : 4th-Apr-2025",
      time: "Time : 09:00 a.m. - 05:00 p.m.",
      venue: "Venue : Auditorium",
      description: "Informatica",
      registrationLink: "",
    },
    {
      title: "Breaking and Defending: A Hands-on Ethical Hacking Workshop",
      date: "Date : 18th-Mar-2025",
      time: "Time : 09:00 a.m. - 05:00 p.m.",
      venue: "Venue : Auditorium",
      description: "Informatica",
      registrationLink: "",
    },
  ];

  return (
    <>
      <Box
        sx={{
          position: "relative",
          backgroundImage: "url(Assets/Logo.png)",
          backgroundSize: "20%",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          color: "white",
          padding: { xs: "30px 1rem", md: "50px 10rem" },
          height: { xs: "50vh", md: "55vh" },
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          zIndex: 1,
          "&::before": {
            content: '""',
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "#0B1121",
            opacity: 0.85,
            zIndex: -1,
          },
        }}
      >
        <Navbar color="#fff" />
        <Box>
          <Typography
            sx={{
              color: "#fff",
              fontWeight: "bold",
              fontSize: ["20px", "22px", "36px"],
              my: 1,
              textAlign: "center",
            }}
          >
            Workshops
          </Typography>
          <Box
            sx={{
              display: "flex",
              gap: 1,
              alignItems: "center",
              justifyContent: "center",
              pb: 5,
            }}
          >
            <Link to="/" style={{ textDecoration: "none" }}>
              <Typography
                sx={{ color: "#9A9EA1", fontWeight: "bold", fontSize: "18px" }}
              >
                Home
              </Typography>
            </Link>
            <ArrowRightAltIcon
              sx={{ color: "#9A9EA1", fontWeight: "bold", fontSize: "36px" }}
            />
            <Typography
              sx={{ color: "#9A9EA1", fontWeight: "bold", fontSize: "18px" }}
            >
              Workshops
            </Typography>
          </Box>
        </Box>
      </Box>
      <Box sx={{ py: 5, bgcolor: "#000212" }}>
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: 3,
            padding: 4,
          }}
        >
          {workshopData.map((workshop, index) => (
            <Box
              key={index}
              sx={{
                width: { xs: "100%", sm: "90%", md: "30%" },
                bgcolor: "#E6F3FB",
                p: 3,
                border: "3px solid #EF3D4E",
                borderRadius: "10px",
                textAlign: "center",
                transition: "transform 0.3s ease, box-shadow 0.5s ease-in-out",
                "&:hover": {
                  transform: "scale(1.05)",
                  boxShadow: "0px 0px 103px -25px rgba(125,125,125,1)",
                },
              }}
            >
              <Typography
                sx={{
                  fontSize: "2rem",
                  fontWeight: "bold",
                  color: "#333",
                  mb: 1,
                }}
              >
                {workshop.title}
              </Typography>
              <Typography
                sx={{
                  fontSize: "1.2rem",
                  fontWeight: 600,
                  color: "#333",
                  mb: 1,
                }}
              >
                {workshop.date}
              </Typography>
              <Typography
                sx={{
                  fontSize: "1.2rem",
                  color: "#333",
                  fontWeight: 600,
                  mb: 2.5,
                }}
              >
                {workshop.time}
              </Typography>
              <Typography
                sx={{
                  fontSize: "1.2rem",
                  color: "#333",
                  fontWeight: 800,
                  mb: 2.5,
                }}
              >
                {workshop.venue}
              </Typography>
              <Typography
                sx={{
                  fontSize: "1.3rem",
                  color: "#9C79A1",
                  fontWeight: 700,
                  mb: 3,
                }}
              >
                {workshop.description}
              </Typography>
              <Button
                variant="contained"
                href={workshop.registrationLink || undefined}
                disabled={!workshop.registrationLink}
                sx={{
                  background:
                    "linear-gradient(91.83deg, rgb(255, 81, 47) 0%, rgb(221, 36, 118) 100%)",
                  width: "80%",
                  textTransform: "none",
                  borderRadius: "50px",
                  fontSize: "1rem",
                  bottom: 0,
                  px: [4],
                  color: "#fff",
                  border: "2px solid transparent",
                  "&:hover": {
                    background: "transparent",
                    border: "2px solid #EF3D4E",
                    color: "#EF3D4E",
                  },
                }}
              >
                Register Now
              </Button>
            </Box>
          ))}
        </Box>
      </Box>
      <Box sx={{ bgcolor: "#000212" }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignContent: "center",
            py: 5,
          }}
        >
          <Divider
            variant="middle"
            component="li"
            sx={{
              borderColor: "#282828",
              width: "92%",
              position: "relative",
              transition: "transform 0.3s ease",
              "&:hover": {
                transform: "scaleY(1.1)",
              },
              "&::before": {
                content: '""',
                position: "absolute",
                width: "30%",
                height: "2px",
                backgroundColor: "#FFD700",
                top: "50%",
                left: "0",
                transform: "translateY(-50%)",
                transition: "width 0.3s ease",
              },
              "&::after": {
                content: '""',
                position: "absolute",
                width: "30%",
                height: "2px",
                backgroundColor: "#FFD700",
                top: "50%",
                right: "0",
                transform: "translateY(-50%)",
                transition: "width 0.3s ease",
              },
              "&:hover::before, &:hover::after": {
                width: "40%",
              },
            }}
          />
        </Box>
      </Box>
      <Box>
        <Footer />
      </Box>
    </>
  );
};

export default Workshops;
