import { Outlet } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import { ErrorBoundary } from 'react-error-boundary';
import SomethingWentWrong from './components/Errors/SomethingWentWrong';
import React, { Suspense } from 'react';
import Loading from './components/Loading';

function App() {
  return (
    <ErrorBoundary FallbackComponent={SomethingWentWrong}>
      <div id="bg"></div>
      <div className="relative">
        <Navbar />
        <main className="pt-20 min-h-screen">
          <Suspense fallback={<Loading />}>
            <Outlet />
          </Suspense>
        </main>
        <Footer />
      </div>
    </ErrorBoundary>
  );
}

export default App;
