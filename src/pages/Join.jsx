import "../styles/join.css";

export default function Join() {

  return (
    <section className="join-page">

      <h1>Contact & Join Us</h1>

      <div className="contact-info">
        <p>Email: club@email.com</p>
        <p>LinkedIn: Microsoft Club</p>
        <p>Location: Campus Tech Block</p>
      </div>

      <form className="join-form">

        <input placeholder="Name" required />
        <input placeholder="Email" required />
        <textarea placeholder="Message" required />

        <button type="submit">Submit</button>

      </form>

    </section>
  );
}