import {Body, Controller, Post} from '@nestjs/common'
import {SearchTvRequest} from 'moviedb-promise'
import {SeriesService} from './series.service'

@Controller('series')
export class SeriesController {
    constructor(private readonly seriesService: SeriesService) {}

    @Post('search')
    search(@Body() params: SearchTvRequest) {
        return this.seriesService.search(params)
    }
}
