import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/projects/Projects';
import Hobbies from './pages/Hobbies';
import NotFoundPage from './pages/NotFoundPage';
import NavBar from './components/NavBar';
import PhotoEditor from './pages/projects/PhotoEditor';
import Notes from './pages/projects/Notes';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    errorElement: <NotFoundPage />
  },
  {
    path: '/about',
    element: <About />
  },
  {
    path: '/projects',
    element: <Projects />
  },
  {
    path: '/projects/photoeditor',
    element: <PhotoEditor />
  },
  {
    path: '/projects/notes',
    element: <Notes />
  },
  {
    path: '/hobbies',
    element: <Hobbies />
  },
])


function App() {
  return (
    <div className='body'>
      <NavBar />
      <div className='flex flex-col sm:flex-row sm:justify-around items-center sm:items-start h-screen w-screen px-10 py-20'>
        <RouterProvider router={router} />
      </div>
    </div>
  );
}

export default App;
