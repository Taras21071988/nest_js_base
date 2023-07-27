import { Controller, Get } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}
  @Get('get-all-users')
  getUsers(): any {
    return this.userService.getUsers();
  }
}
