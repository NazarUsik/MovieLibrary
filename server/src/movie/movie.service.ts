import {Injectable} from '@nestjs/common'
import {
    ConfigurationResponse,
    SearchMovieRequest,
    SearchTvRequest,
    MovieDb,
} from 'moviedb-promise'
import {ConfigService} from '@nestjs/config'

@Injectable()
export class MovieService {
    private readonly movieDbService: MovieDb
    private config: ConfigurationResponse

    constructor(private readonly configService: ConfigService) {
        this.movieDbService = new MovieDb(
            configService.get<string>('MOVIE_DB_API_KEY'),
        )
        this.initConfig()
    }

    initConfig() {
        if (!this.config) {
            this.movieDbService
                .configuration()
                .then((config) => (this.config = config))
        }
    }

    getConfig() {
        return this.config
    }

    async searchFilms(params: SearchMovieRequest) {
        const response = await this.movieDbService.searchMovie(params)
        return response.results
    }

    async topFilms() {
        const response = await this.movieDbService.movieTopRated()
        return response.results
    }

    async searchSeries(params: SearchTvRequest) {
        const response = await this.movieDbService.searchTv(params)
        return response.results
    }

    async topSeries() {
        const response = await this.movieDbService.tvTopRated()
        return response.results
    }

    async genresByFilmId(filmId: number) {
        const filmInfo = await this.movieDbService.movieInfo(filmId)
        return filmInfo.genres?.map((genre) => `${genre.name}`) || []
    }

    async genresBySeriesId(seriesId: number) {
        const seriesInfo = await this.movieDbService.tvInfo(seriesId)
        return seriesInfo.genres?.map((genre) => `${genre.name}`) || []
    }
}
