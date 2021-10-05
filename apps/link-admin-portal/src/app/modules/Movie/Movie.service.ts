import { Injectable, NotFoundException } from "@nestjs/common";
import { Movie } from "./Movie.model";


@Injectable()

export class MovieService {

    Movies: Movie[] = [];

    addMovie(id, title, rating, realiseDate) {

        const newMovie = new Movie(id, title, rating, realiseDate);
        this.Movies.push(newMovie);
        return newMovie.id;
    }


    getMovies() {
        return [...this.Movies];
    }

    getMovie(movieId: string) {
        const movie = this.Movies.find(movie => movie.id === movieId);
        if (!movie) throw new NotFoundException("no movie found");

        return { ...movie };
    }


    editMovie(id: string, title: string, rating, realiseDate) {
        const [movie, movieIndex] = this.findMovie(id);
        const updateMovie = { ...movie };

        if (title) updateMovie.title = title;
        if (rating) updateMovie.rating = rating;
        if (realiseDate) updateMovie.realiseDate = realiseDate;

        return this.Movies[movieIndex] = { ...updateMovie };
    }

    findMovie(movieId: string): [Movie, number] {
        const movieIndex = this.Movies.findIndex(movie => movie.id === movieId);
        const movie = this.Movies[movieIndex];
        if (!movie) throw new NotFoundException("no movie found");
        return [movie, movieIndex];
    }

    deleteMovie(movieId: string) {
        const [movie, index] = this.findMovie(movieId);
        this.Movies.splice(index, 1);
        return null;
    }

}