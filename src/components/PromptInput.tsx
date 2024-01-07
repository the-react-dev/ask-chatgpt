export type PromptInputProps = {
    value: string;
    onChange: (input: string) => void;
};

export const PromptInput = ({
    value,
    onChange,
}: PromptInputProps) => (
    <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Ask Chat GPT a question"
        className="ask-prompt" />
);
