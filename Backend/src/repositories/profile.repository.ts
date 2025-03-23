import { AppDataSource } from "../config/data-source";
import { Profile } from "../entities/profile.entity";


export const profileRepository = AppDataSource.getRepository(Profile)

// export const queryBuilder = profileRepository.createQueryBuilder('profile');