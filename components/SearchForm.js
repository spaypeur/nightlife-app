'use client';
import { useState } from 'react';

export default function SearchForm({ lastLocation }) {
  const [location, setLocation] = useState(lastLocation || '');

  return (
    <div className="search-section">
      <div className="container">
        <h1>Nightlife <span className="accent">Coordination</span></h1>
        <p>Find the best venues and see who is going tonight.</p>
        
        <form className="search-box">
          <input 
            type="text" 
            placeholder="Search city (e.g. London, NYC)..." 
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            required 
          />
          <button type="submit" className="btn btn-primary">Search Venues</button>
        </form>
      </div>
    </div>
  );
}
