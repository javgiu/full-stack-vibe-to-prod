import { Avatar } from "../../../components/Avatar";
import { Badge } from "../../../components/Badge";
import { Card } from "../../../components/Card";

interface UserProfileProps {
    name: string;
    avatarUrl: string;
    role: string;
    isAdmin?: boolean;
}

export function UserProfile({
    name,
    avatarUrl,
    role,
    isAdmin,
}: UserProfileProps) {
    return (
        <Card className="flex items-center gap-4 max-w-sm ">
            <Avatar
                imgUrl={avatarUrl}
                altText={`${name}'s avatar'`}
                size="lg"
            />
            <div className="">
                <h2 className="text-xl font-extrabold text-gray-900">{name}</h2>
                <div className="mt-2">
                    <Badge
                        role={role}
                        isAdmin={isAdmin}
                    />
                </div>
            </div>
        </Card>
    );
}
