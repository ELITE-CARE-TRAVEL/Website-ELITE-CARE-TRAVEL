import ComponentCard from '../common/ComponentCard';

export default function InterventionStats() {
  return (
    <ComponentCard title="Intervention Stats">
      <div className="grid grid-cols-2 gap-4">
        <div>
          <p className="text-sm text-gray-600 dark:text-gray-400">Total Inquiries</p>
          <p className="text-2xl font-semibold">--</p>
        </div>
        <div>
          <p className="text-sm text-gray-600 dark:text-gray-400">This Week</p>
          <p className="text-2xl font-semibold">--</p>
        </div>
      </div>
    </ComponentCard>
  );
}


