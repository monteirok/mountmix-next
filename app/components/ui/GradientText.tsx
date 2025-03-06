export default function GradientText({ text, size, weight }: GradientTextProps) {
    return (
        <span className={`text-${size} font-${weight} bg-gradient-to-r from-purple-500 to-yellow-500 bg-clip-text text-transparent`}>
            {text}
        </span>
    );
}
