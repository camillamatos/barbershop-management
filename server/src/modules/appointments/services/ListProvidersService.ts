import { injectable, inject } from 'tsyringe';

import ICacheProvider from '@shared/container/providers/CacheProvider/models/ICacheProvider';
import User from '@modules/users/infra/typeorm/entities/User';
import IUsersRepository from '@modules/users/repositories/IUsersRepository';
import { classToClass } from 'class-transformer';

interface Request {
  user_id: string;
}

@injectable()
export default class ListProvidersService {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository,

    @inject('CacheProvider')
    private cacheProvider: ICacheProvider,
  ) {}

  public async execute({ user_id }: Request): Promise<User[]> {
    let users = await this.cacheProvider.recover<User[]>(
      `providers-list:${user_id}`,
    );

    if (!users) {
      users = await this.usersRepository.findAllProviders({
        except_user_id: user_id,
      });

      await this.cacheProvider.save(
        `providers-list:${user_id}`,
        classToClass(users),
      );
    }

    return users;
  }
}
