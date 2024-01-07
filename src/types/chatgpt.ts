export type ChatGTPChoice = {
    index: number;
    message: {
        role: string;
        content: string;
    }
    finish_reason: string
};

export type ChatGPTUsage = {
    prompt_tokens: number;
    completion_tokens: number;
    total_tokens: number;
};

export type ChatGPTCompletionResponse = {
    id: string;
    created: number;
    object: 'chat.completion';
    model: string;
    system_fingerprint: string;
    choices: ChatGTPChoice[];
    usage: ChatGPTUsage;
};
  