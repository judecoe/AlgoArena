interface DashboardProps {}

const Dashboard: React.FC<DashboardProps> = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black shadow-2xl border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center space-x-4 group">
            <a href="/home" className="relative">
              <img
                src="/file.svg"
                alt="AlgoArena Logo"
                className="w-10 h-10 transition-all duration-300 group-hover:scale-110 group-hover:rotate-12 filter brightness-0 invert"
              />
              <div className="absolute -inset-1 bg-white rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur-sm"></div>
            </a>
            <a
              href="/home"
              className="text-3xl font-semibold text-white visited:text-white tracking-tight hover:text-white transition-all duration-300"
            >
              AlgoArena
            </a>
          </div>

          {/* Navigation area */}
          <div className="flex items-center space-x-6">
            <nav className="hidden md:flex items-center space-x-6">
              <a
                href="/problems"
                className="text-white visited:text-white hover:text-white transition-colors duration-300 font-medium relative group"
              >
                <span className="relative z-10">Problems</span>
                <div className="absolute inset-x-0 bottom-0 h-0.5 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
              </a>
              <a
                href="/leaderboard"
                className="text-white visited:text-white hover:text-white transition-colors duration-300 font-medium relative group"
              >
                <span className="relative z-10">Leaderboard</span>
                <div className="absolute inset-x-0 bottom-0 h-0.5 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
              </a>
              <a
                href="/discussions"
                className="text-white visited:text-white hover:text-white transition-colors duration-300 font-medium relative group"
              >
                <span className="relative z-10">Discussions</span>
                <div className="absolute inset-x-0 bottom-0 h-0.5 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
              </a>
            </nav>

            {/* User Profile & Auth */}
            <div className="flex items-center space-x-4">
              <div className="hidden sm:flex items-center space-x-2 bg-gray-800/50 rounded-full px-3 py-1 border border-gray-700">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-sm text-white">1,250 XP</span>
              </div>

              <a
                href="/login"
                className="relative bg-black hover:bg-gray-900 text-white visited:text-white px-8 py-2.5 rounded-full font-medium overflow-hidden group transition-all duration-500 ease-out transform hover:scale-110 active:scale-95 inline-block border border-gray-700"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-out"></div>
                <span className="relative z-10">Sign In</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom border */}
      <div className="border-b border-gray-800"></div>
    </header>
  );
};

export default Dashboard;
