import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CharacterService } from '../../services/character.service';
import { Character } from '../../models/character.model';

// Extendemos la interfaz localmente para añadir la propiedad 'muerto'
interface CharacterUI extends Character {
  muerto?: boolean;
}

@Component({
  selector: 'app-character-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.css']
})
export class CharacterListComponent implements OnInit {
  private readonly characterService = inject(CharacterService);

  characters: CharacterUI[] = [];
  loading: boolean = true;
  errorMessage: string | null = null;

  ngOnInit(): void {
    this.fetchCharacters();
  }

  fetchCharacters(page: number = 1): void {
    this.loading = true;
    this.errorMessage = null;

    this.characterService.getCharacters(page).subscribe({
      next: (response) => {
        // Inicializamos todos los personajes con muerto = false
        this.characters = response.results.map((char: Character) => ({
          ...char,
          muerto: false
        }));
        this.loading = false;
      },
      error: (err) => {
        console.error('Error al obtener personajes:', err);
        this.errorMessage = 'Hubo un error al cargar los personajes. Intente de nuevo.';
        this.loading = false;
      }
    });
  }

  matarPersonaje(personaje: CharacterUI): void {
    personaje.muerto = true;
  }
}