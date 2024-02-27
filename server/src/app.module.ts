import {Module} from '@nestjs/common'
import {ImgModule} from './img/img.module'
import {MovieModule} from './movie/movie.module'
import {SeriesModule} from './series/series.module'
import {FilmsModule} from './films/films.module'
import {ConfigModule} from '@nestjs/config'

@Module({
    imports: [
        ConfigModule.forRoot(),
        MovieModule,
        ImgModule,
        SeriesModule,
        FilmsModule,
    ],
})
export class AppModule {}
