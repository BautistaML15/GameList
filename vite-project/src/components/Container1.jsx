import { useState } from "react";

export default function Container1({ addGame }) {
  const [title, setTitle] = useState("");
  const [link, setLink] = useState("");
  const [status, setStatus] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    addGame({ title, link, status });

    setTitle("");
    setLink("");
    setStatus("");
  };

  return (
    <section className="container1">
      <h2 className="title1">Add New Games</h2>

      <form onSubmit={handleSubmit}>
        <div>
          <p className="gameTitle text-md">Game Title</p>
          <input
            className="inputField"
            type="text"
            placeholder="Enter game title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>

        <div>
          <p className="gameTitle text-md">Game Link</p>
          <input
            className="inputField"
            type="url"
            placeholder="Enter game link"
            value={link}
            onChange={(e) => setLink(e.target.value)}
            required
          />
        </div>

        <div>
          <p className="gameTitle text-md">Status</p>
          <select
            className="statusField"
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            required
          >
            <option value="">Select status</option>
            <option value="want-to-play">Want To Play</option>
            <option value="playing">Playing</option>
            <option value="completed">Completed</option>
          </select>
        </div>

        <button
          type="submit"
          className="addGameBtn"
        >
          Add Game
        </button>
      </form>
    </section>
  );
}
