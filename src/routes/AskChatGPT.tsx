import { useState } from 'react';

import { PromptInput } from '../components/PromptInput';
import { AskButton } from '../components/AskButton';
import { PromptResponseDisplay } from '../components/PromptResponseDisplay';
import { useAskChatGPT } from '../hooks/useAskChatGPT';

export const AskChatGPT = () => {
    const [prompt, setPrompt] = useState<string>('');
  
    const { data, askChatGPT } = useAskChatGPT({ prompt });

    const onChange = (updatedPrompt: string) => setPrompt(updatedPrompt);

    const onAsk = () => {
        askChatGPT();
    };

    return (
        <div className="ask-chat-gpt-wrapper">
            <div className='prompt-input-container'>
                <PromptInput value={prompt} onChange={onChange} />
                <AskButton onClick={onAsk} />
            </div>
            {data && <PromptResponseDisplay choice={data.choices[0]} />}
        </div>
    );
};
