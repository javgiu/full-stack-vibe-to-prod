interface AvatarProps {
    imgUrl: string;
    altText: string;
    size?: "sm" | "md" | "lg";
}

export function Avatar({ imgUrl, altText, size = "md" }: AvatarProps) {
    const sizeClasses = {
        sm: "w-8 h-8",
        md: "w-12 h-12",
        lg: "w-20 h-20",
    };

    return (
        <img
            src={imgUrl}
            alt={altText}
            className={`rounded-full object-cover border-2 border-gray-200  ${sizeClasses[size]}`}
        />
    );
}
