import { PrismaService } from 'src/prisma/prisma.service';
import { CreateTodoInput } from './dto/create-todo.input';
import { UpdateTodoInput } from './dto/update-todo.input';
export declare class TodoService {
    private prisma;
    constructor(prisma: PrismaService);
    create(createTodoInput: CreateTodoInput): Promise<import(".prisma/client").Todo>;
    findAll(): Promise<import(".prisma/client").Todo[]>;
    update(id: string, updateTodoInput: UpdateTodoInput): Promise<import(".prisma/client").Todo>;
    remove(id: string): Promise<import(".prisma/client").Todo>;
}
