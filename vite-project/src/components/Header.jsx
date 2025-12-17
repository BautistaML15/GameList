import logo from "../assets/ps5_logo.png"

const Header = () =>{
    

    return(
        <>
        <header className="header">
            <article className="flex justify-between items-center">
                <div className="flex items-center">
                    <img src={logo} alt="" className="logoImg"/>
                    <h1 className="title">MyGameList</h1>
                </div>
                <div>
                    <input className="search -px-1 py-1"
                    name="search" type="search" placeholder="Search games..."
                    /*onChange={(e) => onSearch(e.target.value)}*/
                    />
                </div>

            </article>
        </header>
        </>
    );
}

export default Header;