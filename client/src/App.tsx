import { Show, SignInButton, SignUpButton, UserButton } from "@clerk/react";

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 text-white">
      {/* Navbar */}
      <nav className="flex items-center justify-between px-6 py-4 border-b border-white/10">
        <h1 className="text-2xl font-bold tracking-tight">JustInChat</h1>

        <Show when="signed-out">
          <div className="flex gap-3">
            <SignInButton mode="modal">
              <button className="px-5 py-2 rounded-lg border border-slate-600 hover:bg-slate-800 transition">
                Sign In
              </button>
            </SignInButton>

            <SignUpButton mode="modal">
              <button className="px-5 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 transition font-medium">
                Get Started
              </button>
            </SignUpButton>
          </div>
        </Show>

        <Show when="signed-in">
          <UserButton />
        </Show>
      </nav>

      {/* Hero Section */}
      <main className="flex flex-col items-center justify-center px-6 text-center min-h-[85vh]">
        <div className="max-w-4xl">
          <span className="inline-block px-4 py-2 mb-6 text-sm rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20">
            🚀 Best way to connect with your closest one
          </span>

          <h1 className="text-5xl md:text-7xl font-extrabold leading-tight">
            Secure With
            <span className="block text-blue-500">End to end encryption</span>
          </h1>

          <p className="mt-6 text-lg text-slate-300 max-w-2xl mx-auto">
            Better than Whatsapp and telegram
          </p>

          <Show when="signed-out">
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <SignUpButton mode="modal">
                <button className="px-8 py-4 rounded-xl bg-blue-600 hover:bg-blue-700 transition font-semibold">
                  Start Building
                </button>
              </SignUpButton>

              <SignInButton mode="modal">
                <button className="px-8 py-4 rounded-xl border border-slate-600 hover:bg-slate-800 transition">
                  Sign In
                </button>
              </SignInButton>
            </div>
          </Show>

          <Show when="signed-in">
            <div className="mt-10">
              <h2 className="text-2xl font-semibold text-green-400">
                🎉 Welcome back!
              </h2>
              <p className="mt-2 text-slate-300">
                You are successfully authenticated.
              </p>
            </div>
          </Show>
        </div>
      </main>
    </div>
  );
}

export default App;
