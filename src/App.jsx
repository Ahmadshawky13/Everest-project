import React from 'react'
import { createBrowserRouter , RouterProvider } from 'react-router-dom'
import Home from './home/Home'
import About from './about/About'
import Contact from './contact/Contact'
import Layout from './layout/Layout'
import Gallery from './gallery/Gallery'
import GalleryItem from './gallery/GalleryItem'
import Loader from './loader/Loader' 

export default function App() {
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  let Routes = createBrowserRouter([
    {
      path: "",
      element: <Layout />,
      children: [
        { index: true, element: <Home /> },
        {
          path: "gallery",
          element: <Gallery />,
          children: [
            { path: ":id", element: <GalleryItem /> }
          ]
        },
        { path: "about", element: <About /> },
        { path: "contact", element: <Contact /> },
      ]
    }
  ],
  {
    basename: "/Everest-project/",
  }
);

  return (
    <div>
      {loading ? <Loader /> : <RouterProvider router={Routes} />}
    </div>
  )
}
