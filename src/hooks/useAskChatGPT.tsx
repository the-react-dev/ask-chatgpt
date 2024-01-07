import { useMutation } from '@tanstack/react-query';
import { useMemo } from 'react';
import { ChatGPTCompletionResponse } from '../types/chatgpt';

export type UseAskChatGPTArgs = {
    prompt: string;
};

async function fetchChatCompletionReponse(prompt: string): Promise<ChatGPTCompletionResponse> {
    const response = await fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: {
            'Authorization': `Bearer ${import.meta.env.VITE_OPENAI_SECRET}`,
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            model: 'gpt-4',
            messages: [
                { role: 'system', content: 'You are a helpful assistant.' },
                { role: 'user', content: prompt },
            ],
        }),
    });

    if (!response.ok) {
        throw new Error('Failed to fetch response from OpenAI');
    }

    return await response.json() as ChatGPTCompletionResponse;
}

export const useAskChatGPT = ({
    prompt,
}: UseAskChatGPTArgs) => {
     const askReponse = useMemo(() => {
        return () => fetchChatCompletionReponse(prompt);
     }, [prompt]);

    const { data, mutate: askChatGPT, isPending, error } = useMutation<ChatGPTCompletionResponse>({
        mutationFn: askReponse,
    });

    return {
        data,
        askChatGPT,
        isPending,
        error,
    };
};
