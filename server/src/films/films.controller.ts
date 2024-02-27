import {Body, Controller, Post} from '@nestjs/common'
import {SearchMovieRequest} from 'moviedb-promise'
import {FilmsService} from './films.service'

@Controller('films')
export class FilmsController {
    constructor(private readonly filmsService: FilmsService) {}

    @Post('search')
    search(@Body() params: SearchMovieRequest) {
        return this.filmsService.search(params)
    }
}
