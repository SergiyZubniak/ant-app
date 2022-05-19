
import type { NextPage } from 'next'

import {

  QueryClient,
  QueryClientProvider,
} from 'react-query'
import About from './components/About';
import Availeble from './components/Availeble';
import Carousel from './components/Carousel';
import Colection from './components/Colection';
import Header from './components/Header';
import Upheader from './components/Upheader';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      refetchOnReconnect: false,
      retry: false,
      staleTime: 5*60*1000,
    },
  },
});

const Home: NextPage = () => {
  return (
    <>
    <QueryClientProvider client={queryClient}>
     <Upheader />
     <Header />
     <About />
     <Colection />
     </QueryClientProvider>
     <Availeble />
    
    </>
  )
}

export default Home
