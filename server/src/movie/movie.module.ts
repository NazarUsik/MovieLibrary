import {Module} from '@nestjs/common'
import {ConfigModule} from '@nestjs/config'
import {MovieService} from './movie.service'

@Module({
    imports: [ConfigModule],
    providers: [MovieService],
    exports: [MovieService],
})
export class MovieModule {}
