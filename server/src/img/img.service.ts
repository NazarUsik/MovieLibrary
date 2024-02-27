import {Injectable} from '@nestjs/common'
import {MovieService} from '../movie/movie.service'

@Injectable()
export class ImgService {
    constructor(private readonly movieService: MovieService) {}

    async getImage(path: string) {
        const response = await fetch(
            `${this.movieService.getConfig().images.secure_base_url}original${path}`,
        )
        return response.ok && (await response.blob()).arrayBuffer()
    }
}
