import { Module } from "@nestjs/common";
import { MovieController } from "./Movie.controller";
import { MovieService } from "./Movie.service";



@Module({
    controllers:[MovieController],
    providers:[MovieService]
})

export class MovieModule {}