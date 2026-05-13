import { Card } from "../../../components/Card";
import { UserProfile } from "../../profile/components/UserProfile";

export function Playground() {
    return (
        <div className="p-8 flex gap-8 flex-wrap">
            <UserProfile
                avatarUrl="https://github.com/atapas.png"
                name="Tapas Adhikary"
                role="Senior Architect"
                isAdmin
            />
            <UserProfile
                avatarUrl="https://ui-avatars.com/api/?name=AI&background=random"
                name="AI Assistant"
                role="Junior Developer"
            />
            <Card
                title="System Status"
                className="text-center">
                <p className="text-gray-600">All systems oparational.</p>
                <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded">
                    Run Diagnostics
                </button>
            </Card>
        </div>
    );
}
