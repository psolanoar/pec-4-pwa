import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { ActivatedRoute, Router } from '@angular/router';
import { Country } from '../../models/country.interface';
import { CountriesService } from '../../services/countries.service';

@Component({
  selector: 'app-component-detail',
  imports: [
    CommonModule,
    MatCardModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatExpansionModule,
  ],
  templateUrl: './component-detail.component.html',
  styleUrl: './component-detail.component.scss',
})
export class ComponentDetailComponent {
  country = signal<Country | null>(null);
  showDetails = true;

  constructor(
    private countriesService: CountriesService,
    private acctivatedRoute: ActivatedRoute,
    private router: Router,
  ) {}

  ngOnInit(): void {
    const identifier = this.acctivatedRoute.snapshot.paramMap.get('id');

    if (identifier) {
      this.countriesService.getCountryById(identifier).subscribe((res) => {
        this.country.set(res[0]);
      });
    }
  }

  back() {
    this.router.navigate(['/country']);
  }
}
