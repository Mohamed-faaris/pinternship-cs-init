import { useState, Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import ErrorBoundary from "./ErrorBoundary";

const ProfileSettings = lazy(() => import("./ProfileSettings"));
const AdminPanel = lazy(() => import("./AdminPanel"));

function LoadingSpinner() {
  return (
    <div>
      <div>Loading...</div>
    </div>
  );
}

function Home() {
  const [showSettings, setShowSettings] = useState(false);

  return (
    <div>
      <h1>Welcome to the Dashboard</h1>

      <button onClick={() => setShowSettings(!showSettings)}>
        {showSettings ? "Hide Settings" : "Settings"}
      </button>

      {showSettings && (
        <ErrorBoundary fallback={<div>Failed to load settings</div>}>
          <Suspense fallback={<LoadingSpinner />}>
            <ProfileSettings />
          </Suspense>
        </ErrorBoundary>
      )}

      <nav>
        <Link to="/admin">Go to Admin Panel</Link>
      </nav>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <div>
        <header>
          <Link to="/">MyApp</Link>
        </header>

        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/admin"
              element={
                <ErrorBoundary>
                  <Suspense fallback={<LoadingSpinner />}>
                    <AdminPanel />
                  </Suspense>
                </ErrorBoundary>
              }
            />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
