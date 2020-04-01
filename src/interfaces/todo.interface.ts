import { Task } from './task.interface';

export interface Todo {
    id: string;
    title: string;
    subTasks?: Task[];
    isDone: boolean;
    dueWhen?: Date;
}