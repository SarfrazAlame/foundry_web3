import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { WagmiProvider } from 'wagmi'
import './App.css'
import { config } from './config'

const client = new QueryClient()

function App() {

  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={client}>
        Hi there
      </QueryClientProvider>
    </WagmiProvider>
  )
}

export default App
