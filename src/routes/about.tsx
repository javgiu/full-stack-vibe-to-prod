import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/about")({
    component: AboutComponent,
});

function AboutComponent() {
    return (
        <div className="flex flex-col items-center justify-center bg-slate-700 text-gray-50 rounded-md p-6 text-lg ">
            <h1 className="text-5xl font-extrabold mb-8 bg-linear-to-r from-yellow-300 to-yellow-500 bg-clip-text text-transparent">
                About
            </h1>
            <div className="flex flex-col gap-8 items-center">
                <p className="">
                    This is the about page for my project{" "}
                    <span className="text-2xl bg-yellow-400 p-2 rounded-lg font-bold">
                        <a
                            href="https://github.com/javgiu/full-stack-vibe-to-prod"
                            className="bg-linear-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent font-extrabold hover:underline">
                            Full Stack Vibe Coding to Production
                        </a>
                    </span>{" "}
                    course
                </p>
                <p>You wanna see more? ... Follow Me</p>
                <p>
                    <a
                        href="https://github.com/javgiu"
                        className="hover:underline text-amber-400">
                        @javgiu
                    </a>
                </p>
            </div>
        </div>
    );
}
