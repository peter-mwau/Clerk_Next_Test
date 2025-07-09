const Dashboard = () => {
    return (
        <>
            <div className="bg-gray-50 min-h-screen flex items-center justify-center">
                <div className="bg-white shadow-lg rounded-lg p-8 max-w-md w-full">
                    <h1 className="text-2xl font-bold text-gray-900 mb-4">Dashboard</h1>
                    <p className="text-gray-600 mb-6">Welcome to your dashboard! Here you can manage your account settings, view analytics, and more.</p>
                    <div className="flex justify-center">
                        <button className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700 transition duration-200">
                            Go to Settings
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Dashboard;