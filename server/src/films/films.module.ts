import {Module} from '@nestjs/common'
import {FilmsController} from './films.controller'
import {FilmsService} from './films.service'
import {MovieModule} from '../movie/movie.module'

@Module({
    imports: [MovieModule],
    controllers: [FilmsController],
    providers: [FilmsService],
})
export class FilmsModule {}
