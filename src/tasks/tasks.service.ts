import { Injectable } from '@nestjs/common';

@Injectable()
export class TasksService {
  private tasks = ['task 1', 'task 2'];

  getAllTasks() {
    return this.tasks;
  }
}
