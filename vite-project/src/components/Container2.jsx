import { useState } from "react";

export default function Container2({ setFilter }) {
    const [activeFilter, setActiveFilter] = useState("all");

    const handleClick = (value) => {
        setActiveFilter(value);
        setFilter(value);
    };

    const baseClasses ="filterBtn";

    const activeClasses = "activeBtn";
    const inactiveClasses = "inactiveBtn";

    return (
        <section className="container2">
            <h2 className="title2">Filter Games</h2>

            <article>
                <button
                    className={`${baseClasses} ${
                        activeFilter === "all" ? activeClasses : inactiveClasses
                    }`}
                    onClick={() => handleClick("all")}
                >
                    All Games
                </button>

                <button
                    className={`${baseClasses} ${
                        activeFilter === "want-to-play" ? activeClasses : inactiveClasses
                    }`}
                    onClick={() => handleClick("want-to-play")}
                >
                    Want to play
                </button>

                <button
                    className={`${baseClasses} ${
                        activeFilter === "playing" ? activeClasses : inactiveClasses
                    }`}
                    onClick={() => handleClick("playing")}
                >
                    Playing
                </button>

                <button
                    className={`${baseClasses} ${
                        activeFilter === "completed" ? activeClasses : inactiveClasses
                    }`}
                    onClick={() => handleClick("completed")}
                >
                    Completed
                </button>
            </article>
        </section>
    );
}
