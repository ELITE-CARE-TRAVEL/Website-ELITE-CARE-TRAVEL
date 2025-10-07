import { useEffect, useState } from 'react';
import PageBreadcrumb from '../../components/common/PageBreadCrumb';
import ComponentCard from '../../components/common/ComponentCard';
import PageMeta from '../../components/common/PageMeta';

interface ContactUser {
  id: number;
  name: string;
  email: string;
  phone?: string;
  subject: string;
  message: string;
  createdAt: string;
}

export default function BasicTables() {
  const [users, setUsers] = useState<ContactUser[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const token = localStorage.getItem('adminToken');
        const res = await fetch(`${import.meta.env.VITE_API_BASE_URL || 'http://localhost:3000'}/api/users`, {
          headers: {
            'Content-Type': 'application/json',
          },
        });
        if (!res.ok) {
          const text = await res.text();
          throw new Error(text || 'Failed to fetch users');
        }
        const data = await res.json();
        setUsers(data);
      } catch (e: any) {
        setError(e.message || 'Failed to load');
      } finally {
        setLoading(false);
      }
    };
    fetchUsers();
  }, []);

  return (
    <>
      <PageMeta title="Contact Management | Elite Care Travel" description="Manage customer contact inquiries and medical tourism requests" />
      <PageBreadcrumb pageTitle="Contact Management" />
      <div className="space-y-6">
        <ComponentCard title="Customer Contact Inquiries">
          {loading && <div className="py-6">Loading...</div>}
          {error && <div className="py-6 text-red-500">{error}</div>}
          {!loading && !error && (
            <div className="overflow-x-auto">
              <table className="min-w-full text-sm">
                <thead>
                  <tr className="text-left border-b">
                    <th className="p-3">Name</th>
                    <th className="p-3">Email</th>
                    <th className="p-3">Phone</th>
                    <th className="p-3">Subject</th>
                    <th className="p-3">Message</th>
                    <th className="p-3">Created</th>
                  </tr>
                </thead>
                <tbody>
                  {users.map((u) => (
                    <tr key={u.id} className="border-b">
                      <td className="p-3">{u.name}</td>
                      <td className="p-3">{u.email}</td>
                      <td className="p-3">{u.phone || '-'}</td>
                      <td className="p-3">{u.subject}</td>
                      <td className="p-3 max-w-xs truncate" title={u.message}>{u.message}</td>
                      <td className="p-3">{new Date(u.createdAt).toLocaleString()}</td>
                    </tr>
                  ))}
                  {users.length === 0 && (
                    <tr>
                      <td className="p-3" colSpan={6}>No inquiries yet.</td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          )}
        </ComponentCard>
      </div>
    </>
  );
}


