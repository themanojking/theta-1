import { useNavigate } from "react-router-dom";

const DevBtn = () => {
  const navigate = useNavigate();

  return (
    <button className="dev-btn" onClick={() => navigate("/developers")}>
      Developers
    </button>
  );
};

export default DevBtn;
