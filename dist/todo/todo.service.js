"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TodoService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let TodoService = class TodoService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(createTodoInput) {
        try {
            return await this.prisma.todo.create({
                data: {
                    todoText: createTodoInput.todoText,
                    completed: createTodoInput.completed
                }
            });
        }
        catch (e) {
            throw new common_1.BadRequestException(e.message);
        }
    }
    async findAll() {
        try {
            return this.prisma.todo.findMany();
        }
        catch (e) {
            throw new common_1.BadRequestException(e.message);
        }
    }
    async update(id, updateTodoInput) {
        try {
            return await this.prisma.todo.update({ where: { id }, data: { completed: updateTodoInput.completed } });
        }
        catch (e) {
            throw new common_1.BadRequestException(e.message);
        }
    }
    async remove(id) {
        try {
            return await this.prisma.todo.delete({ where: { id } });
        }
        catch (e) {
            throw new common_1.BadRequestException(e.message);
        }
    }
};
TodoService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], TodoService);
exports.TodoService = TodoService;
//# sourceMappingURL=todo.service.js.map