import { Suspense, lazy } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
const Home = lazy(() => import('./pages/Home'));
const Favorite = lazy(() => import('./pages/Favorite'));

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={
        <div className='h-screen flex justify-center items-center '>
          <h1 className='text-amber-800 font-bold text-4xl'>

          Loading...

          </h1>
        </div>}

        >
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/favorite' element={<Favorite />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;

