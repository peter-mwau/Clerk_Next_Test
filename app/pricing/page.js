import { PricingTable } from '@clerk/nextjs'

export default function Page() {
    return (
        <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 py-12 px-4 sm:px-6 lg:px-8 pt-[140px]">
            <div className="max-w-4xl mx-auto">
                <div className="text-center mb-10">
                    <h1 className="text-4xl font-bold text-gray-900 mb-4">Pricing Plans</h1>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Choose the perfect plan for your needs. Unlock premium features to get the most out of our platform.
                    </p>
                </div>

                <div className="bg-white rounded-lg shadow-xl p-6 md:p-8">
                    <PricingTable />
                </div>

                <div className="mt-8 text-center text-sm text-gray-500">
                    <p>All plans include a 14-day free trial. No credit card required.</p>
                    <p className="mt-2">Need help choosing the right plan? <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">Contact our sales team</a>.</p>
                </div>
            </div>
        </div>
    )
}