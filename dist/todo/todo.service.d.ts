import { Todo } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateTodoInput } from './dto/create-todo.input';
import { UpdateTodoInput } from './dto/update-todo.input';
export declare class TodoService {
    private prisma;
    constructor(prisma: PrismaService);
    create(createTodoInput: CreateTodoInput): Promise<Todo>;
    findAll(): Promise<Todo[]>;
    update(id: string, updateTodoInput: UpdateTodoInput): Promise<Todo>;
    remove(id: string): Promise<Todo>;
}
