import { Link } from "react-router-dom";

const DevBtn = () => {
  const ScrollToTop = () => {
    window.scrollTo(0, 0);
  };
  return (
    <Link
      to="/Developers"
      onClick={ScrollToTop}
      style={{ textDecoration: "none" }}
    >
      <button className="dev-btn">Developers</button>
    </Link>
  );
};

export default DevBtn;
