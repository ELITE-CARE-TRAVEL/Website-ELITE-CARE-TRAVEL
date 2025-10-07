import ComponentCard from '../common/ComponentCard';
import { Link } from 'react-router';

export default function QuickActions() {
  return (
    <ComponentCard title="Quick Actions">
      <div className="flex flex-col gap-3">
        <Link to="/tables/basic" className="text-sm text-blue-600 hover:underline">View All Inquiries</Link>
        <a href="#" className="text-sm text-blue-600 hover:underline">Export CSV (coming soon)</a>
      </div>
    </ComponentCard>
  );
}


