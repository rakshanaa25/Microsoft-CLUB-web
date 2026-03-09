import { useNavigate } from "react-router-dom";
import "../styles/home.css";

export default function Hero() {

  const navigate = useNavigate();

  return (
    <section className="hero">

      <h1>Empowering Future Innovators</h1>

      <p>
        The Microsoft Student Club is a hub for passionate developers,
        designers and innovators collaborating to build impactful tech
        solutions and real-world projects.
      </p>

      <button
        className="primary-btn"
        onClick={() => navigate("/join")}
      >
        Join Us
      </button>

    </section>
  );
}