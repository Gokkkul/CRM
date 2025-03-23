// import { getManager } from "typeorm";
import { AppDataSource } from "../config/data-source";
import { User } from "../entities/users.entity";
import { Profile } from "../entities/profile.entity";
import { profileRepository } from "./profile.repository";

export const userRepository = AppDataSource.getRepository(User);

// export const queryBuilder = userRepository.createQueryBuilder('user')

export class UserRepository {
  async createUser(name: string, email: string, profile: Profile) {
    await profileRepository
      .createQueryBuilder()
      .insert()
      .into(Profile)
      .values({
        bio: profile.bio,
      })
      .execute();
    
    await userRepository
      .createQueryBuilder()
      .insert()
      .into(User)
      .values({ name, email, pro })
      .execute();
  }

  async deleteUser(id: number) {
    await userRepository
      .createQueryBuilder()
      .delete()
      .from(User)
      .where({ id })
      .execute();
  }
}
