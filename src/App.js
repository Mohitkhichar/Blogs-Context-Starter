import React, { useContext, useEffect } from 'react'
import Header from './Components/Header';
import Blogs from './Components/Blogs'
import Pagination from './Components/Pagination';
import { AppContext } from './Context/AppContext';


export const App = () => {

  const {fetchBlogPosts} = useContext(AppContext);

  useEffect(() => {
    fetchBlogPosts();
  }, []);

  return (
    <div className='w-full h-full flex flex-col gap-y-1 justify-center items-center'>
      <Header />
      <Blogs />
      <Pagination />
    </div>
  );
}

export default App