import PageMeta from "../../components/common/PageMeta";
import RecentInquiries from "../../components/medical/RecentInquiries";
import InterventionStats from "../../components/medical/InterventionStats";
import QuickActions from "../../components/medical/QuickActions";
import InquiryChart from "../../components/medical/InquiryChart";

export default function Home() {
  return (
    <>
      <PageMeta
        title="Medical Tourism Dashboard | Elite Care Travel"
        description="Admin dashboard for managing medical tourism inquiries and statistics"
      />
      
      {/* Dashboard Header */}
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
          Medical Tourism Dashboard
        </h1>
        <p className="text-gray-600 dark:text-gray-400 mt-2">
          Medical Tourism Management Dashboard
        </p>
      </div>

      {/* Main Dashboard Grid */}
      <div className="space-y-6">
        {/* Metrics Cards Row */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <div className="col-span-full">
          </div>
        </div>

        {/* Main Content Row */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          {/* Left Column - Recent Inquiries */}
          <div className="lg:col-span-2">
            <RecentInquiries />
          </div>

          {/* Right Column - Quick Actions & Stats */}
          <div className="space-y-6">
            <QuickActions />
            <InterventionStats />
          </div>
        </div>

        {/* Charts Row */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          <InquiryChart />
          <div className="bg-white rounded-xl border border-gray-200 p-6 dark:border-gray-800 dark:bg-white/[0.03]">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              System Status
            </h3>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600 dark:text-gray-400">Database</span>
                <span className="text-sm font-medium text-green-600">Connected</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600 dark:text-gray-400">API Server</span>
                <span className="text-sm font-medium text-green-600">Online</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600 dark:text-gray-400">Last Sync</span>
                <span className="text-sm font-medium text-gray-900 dark:text-white">
                  {new Date().toLocaleTimeString()}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}