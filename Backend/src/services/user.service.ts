// import { Profile } from "../entities/profile.entity";
// // import { profileRepository} from "../repositories/profile.repository";
// import { UserRepository } from "../repositories/users.repository";

// const userRepo = new UserRepository();
// export class UserService {
//   // async createUser(name: string, email: string, bio: string) {
//   //   try {
//   //     const profile = profileRepository.create({ bio });
//   //     const user = userRepository.create({ name, email, profile });
//   //     return await userRepository.save(user);
      
//   //   } catch (error) {
//   //     console.log(`Error: ${error}`);
//   //   }
   
//   // }

//   async createUser(name: string, email: string, bio: Profile){
//     userRepo.createUser(
//       name,
//       email,
//       bio
//     )
//     return 'User created...!'
//   }
  
//   // async deleteUser(id: number) {
//   //   try {
//   //     return await userRepository.delete(id);
//   //   } catch (error) {
//   //     console.log(`Error: ${error}`);
//   //   }
    
//   // }

//   async deleteUser(id: number){
//     userRepo.deleteUser(id);
//   }
// }
