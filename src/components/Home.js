import React from 'react';
import { Signin } from './Signin';

const Home = () => {
    let auth = false;
  return (
    <div>
      {auth?<h1 className='text-xl'>Welcome Home</h1>:<Signin/>}
    </div>
  )
}

export default Home;
