'use client';

export default function Navbar() {
  return (
    <nav>
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
          <div className="logo">AFTERDARK</div>
          <div style={{ display: 'flex', gap: '24px', alignItems: 'center' }}>
            <button className="btn btn-primary" style={{ padding: '10px 20px' }}>Login with GitHub</button>
          </div>
      </div>
    </nav>
  );
}
