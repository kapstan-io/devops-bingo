export default function Stats({ personality, struggle }) {
  return (
    <section className="mobile-column stats-section">
      <article>
        <div style={{ height: '337px', width: '100%', background: '#FFFFFF' }} />

        <div style={{ display: 'flex', gap: '20px' }}>
          <div className="count">1</div>
          <div>
            <span>Most common persona</span><br />
            <span style={{ fontWeight: 'bold' }}>{personality}</span>
          </div>
        </div>
      </article>

      <article>
        <div style={{ height: '337px', width: '100%', background: '#FFFFFF' }} />

        <div style={{ display: 'flex', gap: '20px' }}>
          <div className="count">2</div>
          <div>
            <span>Most common struggle</span><br />
            <span style={{ fontWeight: 'bold' }}>{struggle}</span>
          </div>
        </div>
      </article>
    </section>
  );
}