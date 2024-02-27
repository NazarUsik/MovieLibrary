import {MovieSections, MovieDetail} from '@src/types/movie.types'

interface SelectionFilterProps {
    series: MovieDetail[]
    films: MovieDetail[]
}

export function selectionFilter({series, films}: SelectionFilterProps): MovieSections {
    return {
        series: [
            {title: 'Comedy', data: filterMovieDetailByGenre(series, 'Comedy')},
            {title: 'Animation', data: filterMovieDetailByGenre(series, 'Animation')},
            {title: 'Crime', data: filterMovieDetailByGenre(series, 'Crime')},
            {title: 'Family', data: filterMovieDetailByGenre(series, 'Family')},
            {title: 'Sci-Fi & Fantasy', data: filterMovieDetailByGenre(series, 'Sci-Fi & Fantasy')},
            {title: 'Action & Adventure', data: filterMovieDetailByGenre(series, 'Action & Adventure')},
        ],
        films: [
            {title: 'Comedy', data: filterMovieDetailByGenre(films, 'Comedy')},
            {title: 'History', data: filterMovieDetailByGenre(films, 'History')},
            {title: 'Drama', data: filterMovieDetailByGenre(films, 'Drama')},
            {title: 'Crime', data: filterMovieDetailByGenre(films, 'Crime')},
            {title: 'Fantasy', data: filterMovieDetailByGenre(films, 'Fantasy')},
            {title: 'Thriller', data: filterMovieDetailByGenre(films, 'Thriller')},
            {title: 'Family', data: filterMovieDetailByGenre(films, 'Family')},
            {title: 'Romance', data: filterMovieDetailByGenre(films, 'Romance')},
        ],
    }
}

function filterMovieDetailByGenre(movieDetails: MovieDetail[], genre: string) {
    return movieDetails
        ?.filter((item) => item.genres.includes(genre))
}
