import { useState, useRef } from "react";

export default function Container1({ addGame }) {
  const [title, setTitle] = useState("");
  const [link, setLink] = useState("");
  const [status, setStatus] = useState("");
  const [image, setImage] = useState(null);

  const fileInputRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!image) {
      alert("Please select an image");
      return;
    }

    const newGame = {
      id: Date.now(), // unique key
      title,
      link,
      status,
      image
    };

    addGame(newGame);

    // Reset form
    setTitle("");
    setLink("");
    setStatus("");
    setImage(null);

    if (fileInputRef.current) fileInputRef.current.value = null;
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onloadend = () => setImage(reader.result);
    reader.readAsDataURL(file);

    // Reset input so the same image can be uploaded again
    e.target.value = null;
  };

  return (
    <section className="container1">
      <h2 className="title1">Add New Games</h2>

      <form onSubmit={handleSubmit} className="flex flex-col">
        <div>
          <p className="gameTitle">Game Title</p>
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
          <p className="gameTitle">Game Link</p>
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
          <p className="gameTitle">Status</p>
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

        <div>
          <label className="imgBtn">
            Choose Image
            <input
              ref={fileInputRef}
              type="file"
              accept="image/*"
              className="hidden"
              onChange={handleImageUpload}
            />
          </label>
        </div>

        <button type="submit" className="addGameBtn">
          Add Game
        </button>
      </form>
    </section>
  );
}
