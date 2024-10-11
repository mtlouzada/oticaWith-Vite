import './style.css';
import React from "react";

const App: React.FC = () => {
  return (
    <main className='min-h-screen flex flex-col bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 text-center justify-center items-center w-full h-full'>
      <div className='flex-grow'>

        <div className=''>
          <p className='text-4x1 font-mono'>Hello, world!!!</p>
          <p className='text-4x1 font-mono'>Em breve um site de uma ótica ;)</p>
        </div>

        <div className="border border-gray-300 shadow rounded-md p-4 max-w-sm w-full mx-auto">
          <div className="animate-pulse flex space-x-4">
            <div className="rounded-full bg-black h-12 w-12"></div>
            <div className="flex-1 space-y-4 py-1">
              <div className="h-4 bg-black rounded w-3/4"></div>
              <div className="space-y-2">
                <div className="h-4 bg-black rounded"></div>
                <div className="h-4 bg-black rounded w-5/6"></div>
              </div>
            </div>
          </div>
        </div>

        <div className="border border-gray-300 shadow rounded-md p-4 max-w-sm w-full mx-auto">
          <div className="animate-pulse flex space-x-4">
            <div className="rounded-full bg-black h-12 w-12"></div>
            <div className="flex-1 space-y-4 py-1">
              <div className="h-4 bg-black rounded w-3/4"></div>
              <div className="space-y-2">
                <div className="h-4 bg-black rounded"></div>
                <div className="h-4 bg-black rounded w-5/6"></div>
              </div>
            </div>
          </div>
        </div>

        <div className="border border-gray-300 shadow rounded-md p-4 max-w-sm w-full mx-auto">
          <div className="animate-pulse flex space-x-4">
            <div className="rounded-full bg-black h-12 w-12"></div>
            <div className="flex-1 space-y-4 py-1">
              <div className="h-4 bg-black rounded w-3/4"></div>
              <div className="space-y-2">
                <div className="h-4 bg-black rounded"></div>
                <div className="h-4 bg-black rounded w-5/6"></div>
              </div>
            </div>
          </div>
        </div>

        <div className="border border-gray-300 shadow rounded-md p-4 max-w-sm w-full mx-auto">
          <div className="animate-pulse flex space-x-4">
            <div className="rounded-full bg-black h-12 w-12"></div>
            <div className="flex-1 space-y-4 py-1">
              <div className="h-4 bg-black rounded w-3/4"></div>
              <div className="space-y-2">
                <div className="h-4 bg-black rounded"></div>
                <div className="h-4 bg-black rounded w-5/6"></div>
              </div>
            </div>
          </div>
        </div>

        <div className="border border-gray-300 shadow rounded-md p-4 max-w-sm w-full mx-auto">
          <div className="animate-pulse flex space-x-4">
            <div className="rounded-full bg-black h-12 w-12"></div>
            <div className="flex-1 space-y-4 py-1">
              <div className="h-4 bg-black rounded w-3/4"></div>
              <div className="space-y-2">
                <div className="h-4 bg-black rounded"></div>
                <div className="h-4 bg-black rounded w-5/6"></div>
              </div>
            </div>
          </div>
        </div>

      </div>

        

    </main>
  );
}

export default App;