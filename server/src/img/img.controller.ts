import {Controller, Get, Query, StreamableFile} from '@nestjs/common'
import {ImgService} from './img.service'

@Controller('img')
export class ImgController {
    constructor(private readonly imgService: ImgService) {}

    @Get()
    async getImage(@Query('path') path: string) {
        const image = await this.imgService.getImage(path)
        return new StreamableFile(Buffer.from(image))
    }
}
