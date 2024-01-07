
export type AskButtonProps = {
    onClick: () => void;
};

export const AskButton = ({
    onClick,
}: AskButtonProps) => (
    <button onClick={onClick} className="ask-button">Ask</button>
);
