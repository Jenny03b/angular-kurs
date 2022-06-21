import { Component, OnInit } from '@angular/core';
import { NgModel } from '@angular/forms';
import { Movie } from 'src/app/models/movie';
import { HttpService } from 'src/app/services/http.service';
import { HttpMoviesService } from '../../services/http-movies.service';

@Component({
  selector: 'app-add-movie',
  templateUrl: './add-movie.component.html',
  styleUrls: ['./add-movie.component.css']
})
export class AddMovieComponent implements OnInit {

  model: Partial<Movie> = {};
  categories: string[] = [];
  years: string[] = [];
  httpMovieService: any;

  constructor( public http: HttpService, private httpMoviesService: HttpMoviesService) { }

  ngOnInit(): void {
    this.http.getCategories().subscribe(categories => this.categories = categories);
    this.http.getYears().subscribe(years => this.years = years);
  }

  send() {
    console.log(this.model);
    this.httpMovieService.postMovie(this.model as Movie).subscribe(
      (      result: any) => console.log(result),
      (      error: any) => console.log(error)
      
    );
  }

  printModel(title: NgModel) {
    console.log(title)
  }

}
