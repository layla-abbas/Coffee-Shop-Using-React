import { Suspense, lazy } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import loading from './coffee-beens-loading.json'
import Lottie from 'lottie-react';
const Home = lazy(() => import('./pages/Home'));
const Favorite = lazy(() => import('./pages/Favorite'));

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={
        <div className='h-screen flex justify-center items-center '>

<Lottie animationData={loading} />
         
          
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

