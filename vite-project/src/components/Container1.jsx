import {useState} from "react";
import List from "./List.jsx";

const Container1 = () =>{
    const [name1, setName1] = useState('');
    const [listOfNames, setListOfNames] = useState('');

    const handleSubmit = (e) =>{
        e.preventDefault();

        setListOfNames([...listOfNames, name1]);

        console.log(listOfNames)
    }

    return(
        <>
        <section className="px-5 py-4 mx-50 my-8 bg-white border-2 border-solid rounded-xl">
            <h2>Add New Games</h2>

            <form onSubmit={handleSubmit}>
                <div>
                    <p>Game Title</p>
                    <input
                        className="border-2 border-solid rounded-lg"
                        type="text"
                        placeholder="Enter game title"
                        required
                        onChange={(e) => setName1(e.target.value)}
                    />
                </div>
                <List name={name1}/>

                <div>
                    <p>Game Link</p>
                    <input
                        className="border-2 border-solid rounded-lg"
                        type="text"
                        placeholder="Enter game link"
                        required
                    />
                </div>

                <div>
                    <p>Status</p>
                    <select>
                        <option value="">Select Status</option>
                        <option value="want-to-play">Want To Play</option>
                        <option value="playing">Playing</option>
                        <option value="completed">Completed</option>
                    </select>
                </div>

                <button type="submit" className="px-1 py-1 border-2 border-solid rounded-lg bg-[#4F46E5]">Add Game</button>

            </form>

        </section>
        
        </>
    );
}

export default Container1;