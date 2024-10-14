import { useState } from 'react';
import { AuthService } from '../../application/services/AuthService';

export const useLogout = (
  onClose: () => void,
  navigate: (path: string) => void,
) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [logoutSuccess, setLogoutSuccess] = useState(false);
  const [loggingOut, setLoggingOut] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleLogoutConfirmed = () => {
    setIsModalOpen(true);
  };

  const handleLogout = async () => {
    setLoggingOut(true);
    const authService = new AuthService();
    try {
      await authService.logout();
      setLogoutSuccess(true);
      setTimeout(() => {
        navigate('/');
      }, 2000);
    } catch {
      setError('Error al cerrar sesión.');
    } finally {
      setLoggingOut(false);
    }
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
    onClose();
  };

  return {
    isModalOpen,
    logoutSuccess,
    handleLogoutConfirmed,
    handleLogout,
    handleModalClose,
    loggingOut,
    error,
  };
};
