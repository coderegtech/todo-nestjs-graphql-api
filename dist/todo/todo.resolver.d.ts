import { CreateTodoInput } from './dto/create-todo.input';
import { UpdateTodoInput } from './dto/update-todo.input';
import { TodoService } from './todo.service';
export declare class TodoResolver {
    private readonly todoService;
    constructor(todoService: TodoService);
    createTodo(createTodoInput: CreateTodoInput): Promise<import(".prisma/client").Todo>;
    findAll(): Promise<import(".prisma/client").Todo[]>;
    updateTodo(updateTodoInput: UpdateTodoInput): Promise<import(".prisma/client").Todo>;
    removeTodo(id: string): Promise<import(".prisma/client").Todo>;
}
