import SearchForm from '@/components/SearchForm';
import BarCard from '@/components/BarCard';
import { supabase } from '@/lib/supabase';

export default async function Home({ searchParams }) {
  const location = searchParams.location || '';
  
  // In a real app, this would call Yelp Fusion API. 
  // I'll provide mock data with a high-fidelity "Nightlife" feel.
  const mockBars = [
    { id: '1', name: 'The Neon Lion', rating: 4.5, image_url: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=2070&auto=format&fit=crop', going: 12 },
    { id: '2', name: 'Midnight Lounge', rating: 4.2, image_url: 'https://images.unsplash.com/photo-1543007630-9710e4a00a20?q=80&w=1935&auto=format&fit=crop', going: 8 },
    { id: '3', name: 'Velvet Sky Bar', rating: 4.8, image_url: 'https://images.unsplash.com/photo-1534073828943-f801091bb18c?q=80&w=1887&auto=format&fit=crop', going: 25 },
    { id: '4', name: 'The Underground', rating: 4.0, image_url: 'https://images.unsplash.com/photo-1566417713940-fe7c737a9ef2?q=80&w=2029&auto=format&fit=crop', going: 5 },
  ];

  return (
    <div>
      <SearchForm lastLocation={location} />
      
      {location && (
        <div className="venue-grid">
          {mockBars.map((bar) => (
            <BarCard key={bar.id} bar={bar} />
          ))}
        </div>
      )}
      
      {!location && (
          <div style={{ textAlign: 'center', opacity: 0.5, padding: '40px' }}>
            <p>Enter a city above to see where the night takes you.</p>
          </div>
      )}
    </div>
  );
}
