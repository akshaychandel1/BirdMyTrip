import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* COLUMN 1 */}
        <div className="footer-col">
          <h3>BirdMyTrip</h3>
          <p>
            BirdMyTrip is your trusted travel partner for hotels, flights,
            holiday packages, cabs and more.
          </p>
        </div>

        {/* COLUMN 2 */}
        <div className="footer-col">
          <h4>Explore</h4>
          <ul>
            <li>Hotels</li>
            <li>Flights</li>
            <li>Bus</li>
            <li>Cab</li>
            <li>Holiday Packages</li>
          </ul>
        </div>

        {/* COLUMN 3 */}
        <div className="footer-col">
          <h4>Support</h4>
          <ul>
            <li>Customer Support</li>
            <li>FAQ</li>
            <li>Cancellation</li>
            <li>Refund Policy</li>
          </ul>
        </div>

        {/* COLUMN 4 */}
        <div className="footer-col">
          <h4>Company</h4>
          <ul>
            <li>About Us</li>
            <li>Careers</li>
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
          </ul>
        </div>
      </div>

      {/* BOTTOM BAR */}
      <div className="footer-bottom">
        © {new Date().getFullYear()} BirdMyTrip. All rights reserved.
      </div>
    </footer>
  );
}
