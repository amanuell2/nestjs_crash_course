import { Body, Controller, Delete, Get, Param, Patch, Post } from "@nestjs/common";
import { MovieService } from "./Movie.service";


@Controller('movie')

export class MovieController {
    constructor(private readonly movieService: MovieService) {
    }

    @Post()
    addMovie(@Body('title') movieTitle: string, @Body('rating') movieRating: number, @Body('realiseDate') movieRealiseDate: string) {

        const id = Math.random().toString();
        const generatedId = this.movieService.addMovie(id, movieTitle, movieRating, movieRealiseDate);
        return { id: generatedId }
    }

    @Get()
    getMovies() {
        return this.movieService.getMovies();
    }

    @Get(':id')
    getMovie(@Param('id') movieId: string) {
        return this.movieService.getMovie(movieId);
    }

    @Patch(":id")
    editMovie(@Param('id') movieId: string, @Body('title') movieTitle: string, @Body('rating') movieRating: number, @Body('realiseDate') movieRealiseDate: string) {
        return this.movieService.editMovie(movieId, movieTitle, movieRating, movieRealiseDate);
    }

    @Delete(":id")
    deleteMovie(@Param('id') movieId: string) {
        this.movieService.deleteMovie(movieId)
    }
}


