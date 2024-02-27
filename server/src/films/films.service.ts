import {Injectable} from '@nestjs/common'
import {MovieService} from '../movie/movie.service'
import {SearchMovieRequest, MovieResponse} from 'moviedb-promise'
import {MovieDetail} from '../types/movie.types'

@Injectable()
export class FilmsService {
    constructor(private readonly movieService: MovieService) {}

    async search(params: SearchMovieRequest) {
        const results = await (params && params.query
            ? this.movieService.searchFilms(params)
            : this.movieService.topFilms())
        return this.mapTvResultTo(results)
    }

    private async mapTvResultTo(result: MovieResponse[]) {
        return await Promise.all(
            result?.map(
                async (result) =>
                    ({
                        ...result,
                        id: `${result.id}`,
                        description: result.overview,
                        genres: await this.movieService.genresByFilmId(
                            result.id,
                        ),
                    }) as MovieDetail,
            ),
        )
    }
}
