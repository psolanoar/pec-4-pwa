import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Country } from '../models/country.interface';

@Injectable({
  providedIn: 'root',
})
export class CountriesService {
  private api =
    'https://restcountries.com/v3.1/all?fields=name,flags,region,cca3 ';

  constructor(private http: HttpClient) {}

  getCountry(): Observable<Country[]> {
    return this.http.get<Country[]>(this.api);
  }

  getCountryById(id: string): Observable<Country[]> {
    return this.http.get<Country[]>(
      `https://restcountries.com/v3.1/alpha/${id}`,
    );
  }
}
