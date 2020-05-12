import { Injectable, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import { UserEntity } from './user.entity';

@Injectable()
export class UserService {

    constructor(
        @Inject('USER_REPOSITORY')
        readonly userRepository: Repository<UserEntity>,
    ){}

    async findAll(): Promise<UserEntity[]>{
        return await this.userRepository.find();
    }
    save(User:UserEntity) : Promise<UserEntity>{
        const result = this.userRepository.save(User);
        if(result){
            return result;
        }else
            return result;
    }

    async findOne(id: number): Promise<UserEntity>{
        return await this.userRepository.findOne({
            where:{
                id:id
            },
            // relations:['owner']
        });
    }

}
