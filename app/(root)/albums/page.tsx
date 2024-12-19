const Albums = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/albums")
    if(!response.ok)
    {
        throw new Error("Failed to fetch data");
    }

    const albums = await response.json()

    console.log(albums)

    return(
        <div>
            {albums.map((album: {id: number, title: string}) => (
                <div key={album.id}>{album.title}</div>
            ))}
        </div>
    )
}

export default Albums;