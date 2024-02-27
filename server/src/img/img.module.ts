import {Module} from '@nestjs/common'
import {ImgController} from './img.controller'
import {ImgService} from './img.service'
import {MovieModule} from '../movie/movie.module'

@Module({
    imports: [MovieModule],
    controllers: [ImgController],
    providers: [ImgService],
})
export class ImgModule {}
