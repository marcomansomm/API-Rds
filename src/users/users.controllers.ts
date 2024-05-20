import { Controller, Get } from '@nestjs/common';
import { User } from './user.entity';
import { UsersService } from './users.services';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  async findAll(): Promise<User[]> {
    return this.usersService.findAll();
  }
}
