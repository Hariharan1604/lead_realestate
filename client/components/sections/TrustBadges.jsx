export default function TrustBadges() {
  const logos = [
    '99acres', 'MagicBricks', 'Housing.com', 'NoBroker',
    'Square Yards', 'CommonFloor', 'PropTiger'
  ];

  return (
    <section className="trust-section">
      <div className="container">
        <p className="trust-label">Trusted by leading builders &amp; developers</p>
        <div className="trust-logos">
          {logos.map((name) => (
            <span key={name} className="trust-logo">{name}</span>
          ))}
        </div>
      </div>
    </section>
  );
}
