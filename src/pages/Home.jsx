import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast';
import Spinner from '../components/Spinner'
import Product from '../components/Product'

const Home = () => {
  const API_URL = "https://fakestoreapi.com/products"

  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState([]);
  async function fetchUrl() {


    setLoading(true);
    try {
      const res = await fetch(API_URL);
      const data = await res.json();

      setPosts(data);
      toast.success("Done");

      setLoading(false);
    }catch (error) {
      toast.error("Something went Wrong");
      setPosts([]);
    }
    
  } 
  useEffect(() => {
    fetchUrl();
    console.log(posts);
  }, [])
  return (
    <div className='flex flex-col items-center'>
      {
        loading ? (<Spinner />) : 
        posts.length > 0 ? (
        <div>
          {
            posts.map((post)=>(
              <div className='flex flex-row gap-4 max-w-[450px]'>
                <Product title={post.title} image={post.image} description={post.description} price={post.price}/>
              </div>
            ))
          }
        </div>) :
        <div>
          <p>No Posts Found</p>
        </div>
      }
    </div>
  );
}

export default Home
