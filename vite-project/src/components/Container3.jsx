import { useState } from "react";

export default function Container3({ games = [], deleteGame, editGameStatus }) {
    const [editingIndex, setEditingIndex] = useState(null);

    return (
        <section className="container3">
            <h2 className="title3">All Games</h2>

            <article className="conField">
                {games.length === 0 ? (
                    <p className="text-black text-center">No games found.</p>
                ) : (
                    games.map((game, index) => (
                        <div key={index} className="cardCon">

                            <div>
                                <h3 className="gTitle">{game.title}</h3>

                                <p><strong>Status:</strong> {game.status}</p>

                                {/* If editing this game, show dropdown */}
                                {editingIndex === index && (
                                    <select className="dropBtn"
                                        onChange={(e) => editGameStatus(index, e.target.value)}
                                        defaultValue={game.status}>

                                        <option value="want-to-play">Want to play</option>

                                        <option value="playing">Playing</option>

                                        <option value="completed">Completed</option>

                                    </select>
                                )}
                            </div>

                            <div className="flex flex-col gap-2">
                                <button
                                    onClick={() =>
                                        setEditingIndex(
                                            editingIndex === index ? null : index
                                        )
                                    }
                                    className="cardBtn editBtn"
                                >
                                    {editingIndex === index ? "Close" : "Edit"}
                                </button>

                                <button
                                    onClick={() => deleteGame(index)}
                                    className="cardBtn deleteBtn"
                                >
                                    Delete
                                </button>

                                <button 
                                    onClick={() => window.open(game.link, "_blank")}
                                    className="cardBtn downloadBtn"
                                    >
                                    Download
                                </button>
                            </div>
                        </div>
                    ))
                )}
            </article>
        </section>
    );
}
