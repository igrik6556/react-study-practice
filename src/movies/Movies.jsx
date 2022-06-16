import Movie from "./Movie";

const Movies = ({movies, requestError}) => {
    if (requestError) {
        return <div className="mt-3 text-danger">{requestError}</div>
    }

    const result = movies ?
        movies.map(({Title, Year, Type, Poster, imdbID}) => {
            return <Movie key={imdbID}
                          title={Title}
                          year={Year}
                          type={Type}
                          img={Poster} />
        }) :
        <p className="text-info">Type your search request</p>

    return (
        <div className="movies mt-3">
            { result }
        </div>
    )
}

export default Movies