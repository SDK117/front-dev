import { ProfileService } from '../services/ProfileService';
import { User } from '../../domain/models';

export class ProfileUseCases {
  private profileService: ProfileService;

  constructor(profileService: ProfileService) {
    this.profileService = profileService;
  }

  async getProfile(): Promise<User> {
    return this.profileService.getProfile();
  }
}
