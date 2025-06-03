import { Link } from "react-router-dom";
import { AlertTriangle, Home } from "lucide-react";

const NotFound404 = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white flex items-center justify-center px-6 py-12">
      <div className="max-w-4xl w-full text-center">
        <div className="flex justify-center mb-10">
          <div className="bg-gradient-to-tr from-yellow-200 via-pink-100 to-blue-100 text-yellow-600 p-8 rounded-full shadow-2xl animate-bounce-slow">
            <AlertTriangle className="h-20 w-20 animate-pulse" />
          </div>
        </div>

        <h1 className="text-7xl md:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-purple-600 to-pink-500 mb-6 tracking-tight drop-shadow-lg animate-gradient-x">
          404
        </h1>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 animate-fade-in">
          Lost in Space?
        </h2>
        <p className="text-lg md:text-xl text-gray-700 mb-2 animate-fade-in delay-100">
          We couldn’t find the page you’re looking for.
        </p>
        <p className="text-md md:text-lg text-gray-500 mb-8 animate-fade-in delay-200">
          It might have been moved, deleted, or maybe it never existed.
          <br />
          Double-check the URL or try searching for what you need.
        </p>

        <div className="flex flex-col md:flex-row gap-4 justify-center mb-8 animate-fade-in delay-300">
          <Link
            to="/"
            className="inline-flex items-center justify-center bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white text-lg font-bold py-3 px-8 rounded-2xl shadow-xl transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-blue-300"
          >
            <Home className="w-6 h-6 mr-3" />
            Go Home
          </Link>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center border-2 border-blue-400 hover:border-blue-600 text-blue-700 hover:text-white bg-white hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-500 text-lg font-bold py-3 px-8 rounded-2xl shadow-xl transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-blue-200"
          >
            <svg
              className="w-6 h-6 mr-3"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 10.5a8.38 8.38 0 01-.9 3.8c-.6 1.2-1.5 2.3-2.6 3.1-1.1.8-2.4 1.3-3.8 1.3s-2.7-.5-3.8-1.3c-1.1-.8-2-1.9-2.6-3.1A8.38 8.38 0 013 10.5C3 6.4 6.4 3 10.5 3S18 6.4 18 10.5z"
              />
            </svg>
            Contact Support
          </Link>
        </div>

        <div className="flex justify-center mb-8 animate-fade-in delay-350">
          <form className="flex w-full max-w-md mx-auto">
            <input
              type="text"
              placeholder="Search for products, articles, help..."
              className="flex-1 px-4 py-3 rounded-l-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-300 text-gray-700 bg-white shadow"
            />
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-600 text-white font-bold px-6 py-3 rounded-r-xl shadow transition-all duration-200"
            >
              Search
            </button>
          </form>
        </div>

        <div className="mt-16 flex flex-col md:flex-row gap-8 justify-center items-center animate-fade-in delay-400">
          <div className="bg-white/90 rounded-2xl shadow-lg p-8 max-w-md w-full border-t-4 border-blue-400">
            <h3 className="text-xl font-semibold text-blue-700 mb-2">
              Why did this happen?
            </h3>
            <ul className="text-gray-600 text-left list-disc list-inside space-y-1">
              <li>The link you followed is broken or outdated.</li>
              <li>The page was moved or removed.</li>
              <li>You may have mistyped the address.</li>
            </ul>
          </div>
          <div className="bg-white/90 rounded-2xl shadow-lg p-8 max-w-md w-full border-t-4 border-pink-400">
            <h3 className="text-xl font-semibold text-pink-700 mb-2">
              What can you do?
            </h3>
            <ul className="text-gray-600 text-left list-disc list-inside space-y-1">
              <li>
                Return to the{" "}
                <span className="text-blue-600 font-bold">homepage</span>.
              </li>
              <li>
                Contact our{" "}
                <span className="text-pink-600 font-bold">support team</span> if
                you need help.
              </li>
              <li>Use the search bar above to find what you need.</li>
            </ul>
          </div>
        </div>

        <div className="mt-20 flex flex-col items-center animate-fade-in delay-500">
          <span className="text-xs text-gray-400 mb-2">
            Error code:{" "}
            <span className="font-mono text-red-500">404_NOT_FOUND</span>
          </span>
          <span className="inline-block bg-gradient-to-r from-blue-100 to-pink-100 text-blue-700 px-4 py-2 rounded-full shadow-sm text-xs font-semibold tracking-wide">
            We’re here to help you get back on track!
          </span>
        </div>

        <p className="mt-12 text-sm text-gray-400 animate-fade-in delay-600">
          © {new Date().getFullYear()}{" "}
          <span className="font-bold text-blue-500">xApi</span>. All rights
          reserved.
        </p>
      </div>
    </div>
  );
};

export default NotFound404;
