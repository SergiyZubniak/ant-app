
import type { NextPage } from 'next'
import Header from './components/Header'
import {

  QueryClient,
  QueryClientProvider,
} from 'react-query'

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
      <Header />
     </QueryClientProvider>
    </>
  )
}

export default Home
