import './App.css';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { AskChatGPT } from './routes/AskChatGPT';

const queryClient = new QueryClient();

export const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <div className='app'>
        <AskChatGPT />
      </div>
    </QueryClientProvider>
  );
};
