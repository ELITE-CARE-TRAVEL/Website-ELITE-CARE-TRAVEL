import { useEffect, useState } from 'react';
import ComponentCard from '../common/ComponentCard';

interface Inquiry {
  id: number;
  name: string;
  email: string;
  subject: string;
  message: string;
  createdAt: string;
}

export default function RecentInquiries() {
  const [items, setItems] = useState<Inquiry[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem('adminToken');
        const res = await fetch(`${import.meta.env.VITE_API_BASE_URL || 'http://localhost:3000'}/api/users`, {
          headers: {
            'Content-Type': 'application/json',
          },
        });
        if (!res.ok) throw new Error('Failed to load');
        const data = await res.json();
        setItems(data.slice(0, 5));
      } catch (e: any) {
        setError(e.message || 'Error');
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  return (
    <ComponentCard title="Recent Inquiries">
      {loading && <div className="py-4">Loading...</div>}
      {error && <div className="py-4 text-red-500">{error}</div>}
      {!loading && !error && (
        <ul className="divide-y divide-gray-200 dark:divide-gray-800">
          {items.map((i) => (
            <li key={i.id} className="py-3">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-900 dark:text-white">{i.name} • {i.email}</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{i.subject}</p>
                  <p className="text-sm text-gray-500 dark:text-gray-500 truncate max-w-xl" title={i.message}>{i.message}</p>
                </div>
                <div className="text-xs text-gray-500">{new Date(i.createdAt).toLocaleString()}</div>
              </div>
            </li>
          ))}
          {items.length === 0 && <li className="py-3 text-sm text-gray-500">No recent inquiries.</li>}
        </ul>
      )}
    </ComponentCard>
  );
}


