import { SignIn } from '@clerk/nextjs'

export default function Page() {
    return (
        <div className="min-h-screen w-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 relative">
            {/* Background decorative elements */}
            <div className="absolute inset-0 z-0 overflow-hidden">
                <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500 rounded-full opacity-20 blur-3xl"></div>
                <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-indigo-500 rounded-full opacity-20 blur-3xl"></div>
            </div>

            {/* Sign In Container */}
            <div className="z-10 w-full max-w-md">
                <div className="backdrop-blur-lg bg-white/10 rounded-2xl shadow-xl border border-white/20 p-8">
                    <div className="text-center mb-6">
                        <h1 className="text-2xl font-bold text-white">Welcome Back</h1>
                        <p className="mt-2 text-white/70">Sign in to access your account</p>
                    </div>

                    <SignIn
                        appearance={{
                            elements: {
                                formButtonPrimary: "bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white",
                                card: "bg-transparent shadow-none",
                                headerTitle: "text-white",
                                headerSubtitle: "text-white/70",
                                socialButtonsBlockButton: "border-white/20 text-white hover:bg-white/10",
                                socialButtonsBlockButtonText: "text-white",
                                formFieldLabel: "text-white/70",
                                formFieldInput: "bg-white/10 border-white/10 text-white placeholder:text-white/50",
                                footerActionText: "text-white/70",
                                footerActionLink: "text-white hover:text-indigo-300"
                            }
                        }}
                        routing="path"
                        path="/sign-in"
                    />
                </div>

                <div className="mt-6 text-center">
                    <p className="text-sm text-white/60">
                        Protected by Clerk • <a href="#" className="hover:text-white">Terms of Service</a> • <a href="#" className="hover:text-white">Privacy Policy</a>
                    </p>
                </div>
            </div>
        </div>
    )
}