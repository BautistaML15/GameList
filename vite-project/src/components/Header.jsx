import logo from "../assets/ps5_logo.png"

const Header = ({name}) =>{

    return(
        <>
        <header className="py-9 px-15 bg-[#4F46E5]">
            <article className="flex justify-between items-center">
                <div className="flex items-center">
                    <img src={logo} alt="" className="w-16 mx-2"/>
                    <h1 className="text-3xl font-bold">GameList</h1>
                </div>
                <div>
                    <input className="border-2 border-solid rounded-xl bg-white py-1 px-1" class="search" type="search" placeholder="Search games..." />
                    <h3>test {name}</h3>
                </div>
            </article>
        </header>
        </>
    );
}

export default Header;