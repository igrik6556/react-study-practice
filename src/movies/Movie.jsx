const Movie = ({title, year, type, img}) => {
    const noPosterImg = 'https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg'
    return (
        <div className="card border p-3">
            <img src={img === 'N/A' ? noPosterImg : img} alt={title} className="flex-grow-1 movie-poster" />
            <p className="h5 text-info pt-3">{title} ({year})</p>
            <p className="text-right mt-auto mb-0">{type}</p>
        </div>
    )
}

export default Movie