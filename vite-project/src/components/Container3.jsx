import { useState } from "react";

export default function Container3({ games = [], deleteGame, editGameStatus }) {
    const [editingIndex, setEditingIndex] = useState(null);

    return (
        <section className="container3">
            <h2 className="title3">All Games</h2>

            <article className="conField">
                {games.length === 0 ? (
                    <div className="col-span-full flex items-center justify-center text-center">
                        <p className="text-black">No games found.</p>
                    </div>
                ) : (
                    games.map((game, index) => (
                        <div key={game.id} className="cardCon">
                            {game.image && (
                                <img src={game.image} alt={game.title} className="gameImg" />
                            )}

                            <article>
                                <h3 className="gTitle">{game.title}</h3>
                                <p><strong>Status:</strong> {game.status}</p>

                                {/* Edit Status Drop Down */}
                                <div>
                                    <select className={`dropBtn ${
                                        editingIndex === index ? "opacity-100" : "opacity-0 pointer-events-none"
                                    }`}
                                        onChange={(e) => editGameStatus(index, e.target.value)}
                                        defaultValue={game.status}>
                                        <option value="want-to-play">Want to play</option>
                                        <option value="playing">Playing</option>
                                        <option value="completed">Completed</option>
                                    </select>
                                </div>
                            </article>

                            <div className="btnCon">
                                <button
                                    onClick={() =>
                                        setEditingIndex(editingIndex === index ? null : index)
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
