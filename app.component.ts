import { Component } from '@angular/core'
import {
  AsyncSubject,
  BehaviorSubject,
  ReplaySubject,
  Subject,
} from 'rxjs'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
})
export class AppComponent {
  subjectBehaviorSubject$ = new BehaviorSubject(5)
  asincSubject$ = new AsyncSubject()
  subject$ = new Subject()
  replaySubject$ = new ReplaySubject(2)

  ngOnInit() {
    this.run('subjectBehaviorSubject', this.subjectBehaviorSubject$)
    this.run('replaySubject', this.replaySubject$)
    this.run('asincSubject', this.asincSubject$)
    this.run('subject', this.subject$)
  }

  run(subjectType, subject$) {
    console.log('\n' + subjectType)

    subject$.next(1)
    subject$.subscribe((data) => {
      console.log('First  : ' + data)
    })
    subject$.next(2)
    subject$.subscribe((data) => {
      console.log('Second  : ' + data)
    })
    subject$.next(3)
    subject$.complete()
    subject$.subscribe((data) => {
      console.log('Third  : ' + data)
    })
  }
}
