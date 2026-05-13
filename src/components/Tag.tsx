type TagProps = {
    text: string;
};

export function Tag({ text }: TagProps) {
    return (
        <p className="p-4 bg-linear-to-r from-blue-700 to-purple-600 rounded-full w-full">
            {text}
        </p>
    );
}
