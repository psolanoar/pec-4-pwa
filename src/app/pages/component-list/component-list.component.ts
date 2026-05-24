import { CommonModule } from '@angular/common';
import { Component, Input, signal } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatTableModule } from '@angular/material/table';
import { Country } from '../../models/country.interface';
import { CountriesService } from '../../services/countries.service';
import { CardComponent } from '../card/card.component';
import { GridComponent } from '../grid/grid.component';

@Component({
  selector: 'app-component-list',
  imports: [
    CommonModule,
    MatTableModule,
    MatIconModule,
    MatCardModule,
    MatProgressSpinnerModule,
    CardComponent,
    GridComponent,
  ],
  templateUrl: './component-list.component.html',
  styleUrl: './component-list.component.scss',
})
export class ComponentListComponent {
  columns = [];
  view: 'table' | 'cards' = 'cards';
  isLoading = true;
  @Input()
  country!: Country;
  @Input()
  countries = signal<Country[]>([]);
  constructor(private countriesService: CountriesService) {}

  ngOnInit(): void {
    this.countriesService.getCountry().subscribe((res) => {
      console.log(res.slice(0, 20));
      this.countries.set(res);
      this.isLoading = false;
    });
  }
}
