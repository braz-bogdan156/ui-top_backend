import {
  Controller,
  Get,
  Post,
  Patch,
  Delete,
  Param,
  Body,
  Query,
} from '@nestjs/common';
import { TodosService } from './todos.service';
import { Todo } from './todo.entity';

@Controller('todos')
export class TodosController {
  constructor(private readonly todosService: TodosService) {}

  @Get()
  async getAll(@Query('category') categoryId?: number): Promise<Todo[]> {
    return this.todosService.findAll(categoryId);
  }

  @Post()
  async create(
    @Body() body: { text: string; categoryId: number },
  ): Promise<Todo> {
    return this.todosService.create(body.text, body.categoryId);
  }

  @Patch(':id')
  async toggle(@Param('id') id: number): Promise<Todo> {
    return this.todosService.toggleStatus(id);
  }

  @Delete(':id')
  async delete(@Param('id') id: number): Promise<{ message: string }> {
    await this.todosService.delete(id);
    return { message: 'Todo deleted' };
  }
}
