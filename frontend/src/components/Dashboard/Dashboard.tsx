interface DashboardProps {}

const Dashboard: React.FC<DashboardProps> = () => {
  return (
    <div className="w-screen absolute inset-x-0 top-0">
      <div className="text-left font-semibold">
        <p>AlgoArena</p>
      </div>
    </div>
  );
};

export default Dashboard;
