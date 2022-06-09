import { Injectable } from '@angular/core';
import { DataBaseService, Person } from './data-base.service';
import { BehaviorSubject, Observer, PartialObserver, Subject } from 'rxjs';
import { __values } from 'tslib';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  behaviorSubject = new BehaviorSubject<Person[]>([]);
  subject = new Subject<Person[]>();

  constructor(private dataBaseService: DataBaseService) {
    this.init();
  }

  addPerson(peron: Person) {
    this.dataBaseService.addPerson(peron).subscribe(this.observer())
  }

  private init(): void{
    this.dataBaseService.fetchPersons().subscribe(
      (persons: Person[]) => {
        this.behaviorSubject.next(persons);
        this.behaviorSubject.next(persons);
      },
      error => console.error(error),
      () => console.log('Complete!')
    )
  }

  private observer(): Observer<Person[]>{
    return { 
      next: (persons: Person[]) => {
        this.behaviorSubject.next(persons);
        this.subject.next(persons);
      },
      error: error => console.error(error),
      complete: () => console.log('Complete!')
    }
  }

}
