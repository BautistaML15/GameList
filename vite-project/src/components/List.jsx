const List = ({name1}) =>{
    return(
        <>
            <ul>
                {name1 && name1.map((name1, index) =>(
                    <li key={index}>{name1}</li>
                ))}
            </ul>
        </>
    )
}

export default List;