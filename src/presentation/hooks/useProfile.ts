import { useState, useEffect } from 'react';
import { ProfileService } from '../../application/services/ProfileService';
import { User } from '../../domain/models';

export const useProfile = () => {
  const [user, setUser] = useState<User | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchUserProfile = async () => {
      const profileService = new ProfileService();
      try {
        const profile = await profileService.getProfile();
        setUser(profile);
      } catch (err) {
        console.error(err);
        setError('Error al obtener el perfil del usuario.');
      }
    };

    fetchUserProfile().catch((error) => {
      console.error('Error fetching user profile:', error);
    });
  }, []);

  return { user, error };
};
