import { BadRequestException, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateTodoInput } from './dto/create-todo.input';
import { UpdateTodoInput } from './dto/update-todo.input';

@Injectable()
export class TodoService {
  constructor(private prisma: PrismaService) { }

  async create(createTodoInput: CreateTodoInput) {
    try {

      await this.prisma.todo.create({
        data: {
          todoText: createTodoInput.todoText,
          completed: createTodoInput.completed
        }
      })

      return this.findAll()


    } catch (e) {
      throw new BadRequestException(e.message)
    }

  }

  async findAll() {
    try {
      return this.prisma.todo.findMany()
    } catch (e) {
      throw new BadRequestException(e.message)
    }
  }

  async update(id: string, updateTodoInput: UpdateTodoInput) {
    try {
      return await this.prisma.todo.update({ where: { id }, data: { completed: updateTodoInput.completed } })

    } catch (e) {

      throw new BadRequestException(e.message)
    }

  }

  async remove(id: string) {

    try {
      return await this.prisma.todo.delete({ where: { id } })


    } catch (e) {
      throw new BadRequestException(e.message)
    }
  }
}
