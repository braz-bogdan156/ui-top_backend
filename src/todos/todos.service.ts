import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Todo } from './todo.entity';
import { CategoriesService } from 'src/categories/categories.service';

@Injectable()
export class TodosService {
  constructor(
    @InjectRepository(Todo)
    private readonly todoRepo: Repository<Todo>,
    private readonly categoriesService: CategoriesService,
  ) {}

  async findAll(categoryId?: number): Promise<Todo[]> {
    const query = this.todoRepo
      .createQueryBuilder('todo')
      .leftJoinAndSelect('todo.category', 'category');

    if (categoryId) {
      query.where('category.id = :categoryId', { categoryId });
    }

    return query.getMany();
  }

  async create(text: string, categoryId: number): Promise<Todo> {
    const category = await this.categoriesService.findById(categoryId);
    if (!category) throw new NotFoundException('Category not found');

    if (category.todos.length >= 5) {
      throw new BadRequestException('Maximum 5 tasks per category');
    }

    const todo = this.todoRepo.create({ text, category });
    return this.todoRepo.save(todo);
  }

  async toggleStatus(id: number): Promise<Todo> {
    const todo = await this.todoRepo.findOne({ where: { id } });
    if (!todo) throw new NotFoundException('Todo not found');

    todo.completed = !todo.completed;
    return this.todoRepo.save(todo);
  }

  async delete(id: number): Promise<void> {
    const result = await this.todoRepo.delete(id);
    if (result.affected === 0) throw new NotFoundException('Todo not found');
  }
}
