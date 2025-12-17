import { useState, useEffect } from "react";
import Container1 from "./Container1";
import Container2 from "./Container2";
import Container3 from "./Container3";

export default function GameManager() {
    const [games, setGames] = useState(() => {
        const stored = localStorage.getItem("myGameList");
        return stored ? JSON.parse(stored) : [];
    });
    const [filter, setFilter] = useState("all");

    useEffect(() => {
        localStorage.setItem("myGameList", JSON.stringify(games));
    }, [games]);

    const addGame = (game) => {
        setGames((prev) => [...prev, game]);
    };

    const deleteGame = (index) => {
        setGames((prev) => prev.filter((_, i) => i !== index));
    };

    const editGameStatus = (index, newStatus) => {
        setGames((prev) =>
            prev.map((game, i) =>
                i === index ? { ...game, status: newStatus } : game
            )
        );
    };

    const filteredGames =
        filter === "all"
            ? games
            : games.filter((game) => game.status === filter);

    return (
        <>
            <Container1 addGame={addGame} />
            <Container2 setFilter={setFilter} />
            <Container3
                games={filteredGames}
                deleteGame={deleteGame}
                editGameStatus={editGameStatus}
            />
        </>
    );
}
