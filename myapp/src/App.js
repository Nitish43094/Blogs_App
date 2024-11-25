import logo from './logo.svg';
import './App.css';
import Home from './Page/Home';
import TagPage from './Page/TagPage';
import BlogsPage from './Page/BlogsPage';
import CategoryPage from './Page/CategoryPage';
import { useContext, useEffect } from 'react';
import { AppContext } from './Context/AppContext';
import { Route, Routes, useLocation, useSearchParams } from 'react-router-dom';

function App() {

  const { fetchBlogePosts } = useContext(AppContext);
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();

  useEffect(() => {
    const page = searchParams.get("page") ?? 1;

    if (location.pathname.includes("tags")) {
      const tag = location.pathname.split("/").at(-1).replaceAll("-", " ");
      fetchBlogePosts(Number(page), tag);
    } 
    else if (location.pathname.includes("categories")) {
      const category = location.pathname.split("/").at(-1).replaceAll("-", " ");
      fetchBlogePosts(Number(page), null, category)
    } 
    else {
      fetchBlogePosts(Number(page));
    }
    
  }, [location.pathname, location.search]);
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/blog/:blogId" element={<BlogsPage />}></Route>
      <Route path="/tags/:tag" element={<TagPage />}></Route>
      <Route path="/categories/:category" element={<CategoryPage />}></Route>
    </Routes>
  );
}

export default App;
