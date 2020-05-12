import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { UserService } from './user.service';
import { UserEntity } from './user.entity';

@Controller('User')
export class UserController {

    constructor(
        private userService: UserService,
    ){}

    @Get("/")
    findAll(): Promise<UserEntity[]>{
        return this.userService.findAll();
    }

    @Post("/create")
    save(@Body()item: any): Promise<UserEntity>{
        return this.userService.save(item);
    }

    @Get("/userwithNotes/:id")
    findUserWithNotes(@Param("id") id: number): Promise<UserEntity>{
        return this.userService.findOne(id);
    }
}
