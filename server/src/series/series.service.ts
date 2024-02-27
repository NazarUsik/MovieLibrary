import {Injectable} from '@nestjs/common'
import {MovieService} from '../movie/movie.service'
import {SearchTvRequest, TvResult} from 'moviedb-promise'
import {MovieDetail} from '../types/movie.types'

@Injectable()
export class SeriesService {
    constructor(private readonly movieService: MovieService) {}

    async search(params: SearchTvRequest) {
        const results = await (params && params.query
            ? this.movieService.searchSeries(params)
            : this.movieService.topSeries())
        return this.mapTvResultTo(results)
    }

    private async mapTvResultTo(result: TvResult[]) {
        return await Promise.all(
            result?.map(
                async (result) =>
                    ({
                        ...result,
                        id: `${result.id}`,
                        description: result.overview,
                        title: result.name,
                        genres: await this.movieService.genresBySeriesId(
                            result.id,
                        ),
                    }) as MovieDetail,
            ),
        )
    }
}
