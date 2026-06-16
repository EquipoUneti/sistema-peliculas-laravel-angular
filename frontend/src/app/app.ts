import { Component, OnInit, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

interface Movie {
  id: number;
  title: string;
  created_at: string;
  updated_at: string;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit {

  private http = inject(HttpClient);

  private readonly API_URL = 'http://localhost:8000/api/movies';

  movies: Movie[] = [];
  newTitle: string = '';
  loading = false;

  ngOnInit(): void {
    this.loadMovies();
  }

  loadMovies(): void {
    this.http.get<Movie[]>(this.API_URL)
      .subscribe({
        next: (data) => this.movies = data,
        error: (err) => console.error('Error al cargar peliculas:', err)
      });
  }

  addMovie(): void {
    const title = this.newTitle.trim();
    if (!title) return;

    this.loading = true;
    this.http.post<Movie>(this.API_URL, { title })
      .subscribe({
        next: () => {
          this.newTitle = '';
          this.loadMovies();
        },
        error: (err) => {
          console.error('Error al guardar:', err);
          this.loading = false;
        },
        complete: () => this.loading = false
      });
  }
}
