import { ITodo } from '../types/todo';

let i = 0
export const mockTodos: ITodo[] = []

  while (i < 1000) {
    mockTodos.push({id: i, name: "todo" , completed: false})
    i++;
  }
