import {Module} from '@nestjs/common'
import {SeriesController} from './series.controller'
import {SeriesService} from './series.service'
import {MovieModule} from '../movie/movie.module'

@Module({
    imports: [MovieModule],
    controllers: [SeriesController],
    providers: [SeriesService],
})
export class SeriesModule {}
