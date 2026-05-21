import { useState } from "react";

interface UserProfile {
    firstName: string;
    lastName: string;
    role: string;
}

export function StatePlayground() {
    const [isDarkMode, setIsDarkMode] = useState<boolean>(false);
    const [user, setUser] = useState<UserProfile>({
        firstName: "Javier",
        lastName: "Picallo",
        role: "Architect",
    });

    function handleClick() {
        setIsDarkMode(!isDarkMode);
    }

    function handleFirstNameChange(firstName: string) {
        setUser({ ...user, firstName });
    }

    return (
        <div
            className={`min-h-screen p-8 transition-colors ${isDarkMode ? "bg-gray-900 text-white" : "bg-gray-50 text-gray-900"}`}>
            <h1 className="text-3xl font-bold mb-6">
                State Architect's Playground
            </h1>

            <button
                onClick={handleClick}
                className="px-4 py-2 bg-blue-600 text-white rounded-md font-semibold cursor-pointer hover:bg-blue-700">
                Toggle {isDarkMode ? "Light" : "Dark"} Mode
            </button>

            <div className="mt-8 p-6 border rounded-lg max-w-md">
                <h2 className="text-xl mb-4">
                    Profile {user.firstName} {user.lastName}
                </h2>

                <p className="text-sm text-gray-500 mb-4">Role: {user.role}</p>

                <input
                    type="text"
                    className="w-full p-2 border rounnded text-gray-900"
                    placeholder="First Name"
                    onChange={(e) => handleFirstNameChange(e.target.value)}
                    value={user.firstName}
                />
            </div>
        </div>
    );
}
