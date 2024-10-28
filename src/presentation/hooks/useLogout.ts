import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthService } from '../../application/services/AuthService';

export const useLogout = (onClose: () => void) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [loggingOut, setLoggingOut] = useState(false);
  const [logoutSuccess, setLogoutSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleLogoutConfirmed = () => {
    setIsModalOpen(true);
  };

  const handleLogout = async () => {
    setLoggingOut(true);
    const authService = new AuthService();
    try {
      await authService.logout();
      setLogoutSuccess(true);
      navigate('/');
    } catch {
      setError('Error al cerrar sesión.');
    } finally {
      setLoggingOut(false);
      onClose();
    }
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
    setLogoutSuccess(false);
    setError(null);
    onClose();
  };

  return {
    isModalOpen,
    handleLogoutConfirmed,
    handleLogout,
    handleModalClose,
    loggingOut,
    error,
    logoutSuccess,
  };
};
