import "../App.css";

export default function Footer() {

  return (
    <footer className="footer">

      <div className="footer-grid">

        <div>
          <h3>Microsoft Club</h3>
          <p>
            A student driven tech community focused on innovation,
            collaboration and building impactful technology.
          </p>
        </div>

        <div>
          <h4>Quick Links</h4>
          <p>Home</p>
          <p>Team</p>
          <p>Projects</p>
          <p>Join</p>
        </div>

        <div>
          <h4>Activities</h4>
          <p>Hackathons</p>
          <p>Workshops</p>
          <p>Tech Talks</p>
          <p>Projects</p>
        </div>

        <div>
          <h4>Contact</h4>
          <p>Email: club@email.com</p>
          <p>LinkedIn: Microsoft Club</p>
          <p>Location: Campus Tech Block</p>
        </div>

      </div>

      <div className="footer-bottom">
        © 2026 Microsoft Student Club
      </div>

    </footer>
  );
}