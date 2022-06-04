import { Component } from '@angular/core';
import { Task } from './task';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
}) 

export class AppComponent {
  editMode = false;
  taskName = 'Sugerowane zadanie codzienne: odkurzanie';
  taskDate = '';
  config?: Foo;
  tasks: Task[] = [
    {
      name: 'Siłownia',
      deadline: '2020-01-02',
      done: false,
    },
    {
      name: 'Nauka Angulara',
      deadline: '2020-01-03',
      done: false,
    },
    {
      name: 'Sprzątanie kuwety',
      deadline: '2020-01-04',
      done: false,
    },
  ];

  constructor() {
    setTimeout( () => {
      this.config = {
        title: 'Lista zadań',
        footer: '© Lista zadań zbudowana w Angularze.',
        date: '2022',
      };
    }, 500);
  }

  clearTasks() {
    this.tasks = [];
  }

  createTask() {
    const task: Task = {
      name: this.taskName,
      deadline: this.taskDate,
      done: false,
    };
    this.tasks.push(task);
    this.taskName = '';
    this.taskDate = '';
  }

  switchEditMode(){
    this.editMode = !this.editMode;
  }

  markTaskAsDone(task: Task) {
    task.done = true;
    this.sortTasks();
  }

  deleteTask(task: Task) {
    this.tasks = this.tasks.filter(e => e !== task);
    this.sortTasks();
  }

  private sortTasks() {
    this.tasks = this.tasks.sort((a: Task, b: Task) =>
      a.done === b.done ? 0 : a.done ? 1 : -1
    );
  }
}

interface Foo {
  title?: string;
  footer?: string;
  date?: string;
}




