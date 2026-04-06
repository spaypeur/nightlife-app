'use client';

export default function BarCard({ bar }) {
  return (
    <div className="venue-card glass">
      <img src={bar.image_url} alt={bar.name} className="venue-img" />
      <div className="venue-header">
        <div>
          <h3>{bar.name}</h3>
          <div style={{ color: '#f59e0b', fontSize: '0.9rem', marginTop: '4px' }}>★ {bar.rating} Yelp Rating</div>
        </div>
        <div className="going-badge">{bar.going} GOING</div>
      </div>
      
      <button className="btn btn-primary" style={{ width: '100%', marginTop: 'auto' }}>
        COUNT ME IN
      </button>
    </div>
  );
}
