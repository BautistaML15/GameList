import { useState, useEffect } from "react";
import Header from "./Header";
import Container1 from "./Container1";
import Container2 from "./Container2";
import Container3 from "./Container3";

export default function GameManager() {
    const [games, setGames] = useState(() => {
        const stored = localStorage.getItem("myGameList");
        return stored ? JSON.parse(stored) : [];
    });

    const [filter, setFilter] = useState("all");
    const [search, setSearch] = useState("");

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

    const filteredGames = games
        .filter((game) =>
            filter === "all" ? true : game.status === filter
        )
        .filter((game) =>
            game.title.toLowerCase().includes(search.toLowerCase())
        );

    return (
        <>
            <Header onSearch={setSearch} />
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
