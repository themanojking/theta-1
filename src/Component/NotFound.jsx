import React, { useState, useEffect } from "react";

const NotFound = () => {
  const styles = {
    body: {
      backgroundColor: "#0414a7",
      height: "100vh",
      margin: "0",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      fontFamily: "'VT323', monospace",
      color: "#e0e2f4",
      textAlign: "center",
    },
    container: {
      width: "90%",
      maxWidth: "640px",
      animation: "fadeIn 1.5s ease-in-out",
    },
    title: {
      marginBottom: "20px",
      fontSize: "2.75rem",
      lineHeight: "1.05em",
      display: "inline-block",
      position: "relative",
    },
    neg: {
      color: "#0414a7",
      backgroundColor: "#aaaaaa",
      padding: "0 15px 2px 13px",
      display: "inline-block",
    },
    cursor: {
      display: "inline-block",
      backgroundColor: "#aaaaaa",
      width: "10px",
      height: "1.5rem",
      marginLeft: "5px",
      animation: "blink 1s infinite",
    },
    nav: {
      marginTop: "30px",
      display: "flex",
      justifyContent: "center",
      gap: "15px",
    },
    link: {
      textDecoration: "none",
      padding: "8px 12px",
      color: "#e0e2f4",
      borderRadius: "5px",
      transition: "background 0.3s, color 0.3s",
    },
    linkHover: {
      backgroundColor: "#aaaaaa",
      color: "#0414a7",
    },
  };

  const [title, setTitle] = useState("");
  const fullTitle = "Error - 404";
  const [hoveredLink, setHoveredLink] = useState(null);

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      if (i < fullTitle.length) {
        setTitle((prev) => prev + fullTitle[i]);
        i++;
      } else {
        clearInterval(interval);
      }
    }, 150);
    return () => clearInterval(interval);
  }, []);

  return (
    <div style={styles.body}>
      <main style={styles.container}>
        <h1 style={styles.title}>
          <span style={styles.neg}>{title}</span>
          <span style={styles.cursor}></span>
        </h1>
        <p>An error has occurred, to continue:</p>
        <p>
          * Return to our homepage.
          <br />* Send us an e-mail about this error and try later.
        </p>
        <nav style={styles.nav}>
          <a
            href="/"
            style={
              hoveredLink === "index"
                ? { ...styles.link, ...styles.linkHover }
                : styles.link
            }
            onMouseEnter={() => setHoveredLink("index")}
            onMouseLeave={() => setHoveredLink(null)}
          >
            index
          </a>
          <a
            href="mailto:theta@src.sastra.ac.in,webtek.innovators@gmail.com"
            style={
              hoveredLink === "webmaster"
                ? { ...styles.link, ...styles.linkHover }
                : styles.link
            }
            onMouseEnter={() => setHoveredLink("webmaster")}
            onMouseLeave={() => setHoveredLink(null)}
          >
            webmaster
          </a>
        </nav>
      </main>
      <style>
        {`
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(-10px); }
            to { opacity: 1; transform: translateY(0); }
          }
          @keyframes blink {
            0%, 100% { opacity: 1; }
            50% { opacity: 0; }
          }
        `}
      </style>
    </div>
  );
};

export default NotFound;
