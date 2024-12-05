import {Component, effect, signal} from '@angular/core';
import {FormControl, FormsModule} from '@angular/forms';
import {debounceTime, distinctUntilChanged} from 'rxjs';

@Component({
  selector: 'app-first',
  imports: [
    FormsModule
  ],
  templateUrl: './first.component.html',
  standalone: true,
  styleUrl: './first.component.scss'
})
export class FirstComponent {
accountName : string = '';
  searchTerm = new FormControl('t');
  searchTerme = signal<string>('x');
  episode: number=170;


  constructor() {
    this.searchTerm.valueChanges
      .pipe(
        debounceTime(2000),
        distinctUntilChanged()
      )
      .subscribe(term => {
        if (term !== '') {
          this.search();
        }
      });
    effect(() => {
      if (this.searchTerme() !== '') {
        // You can add debounce logic here if needed
        debounceTime(1000)
        this.searche();
      }
    });

  }

  search() {
    // Implement your search functionality here
    console.log('Searching for:', this.searchTerm.value);
  }
  createAccount() {
console.log(this.accountName)
  }

  searche() {
    // Implement your search functionality here
    console.log('Searching for:', this.searchTerme());
  }


  open(episode: number) {
    window.open("https://v3.cima4p.com/video/farid-mudblj-ep-"+episode+"/?do=watch")
  }

  pre(episode: number) {
    this.episode=episode-1;
  }

  next(episode: number) {
    this.episode=episode+1;
  }
}
