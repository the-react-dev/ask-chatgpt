import type { ChatGTPChoice } from '../types/chatgpt';

export type PromptResponseDisplayProps = {
    choice: ChatGTPChoice;
};

export const PromptResponseDisplay = ({
    choice,
}: PromptResponseDisplayProps) => {
    const response = choice.message.content.split('\n');

    return (
        <div className="prompt-response">
            {response.map((line, idx) => <div key={idx}>{line}</div>)}
        </div>
    );
};
