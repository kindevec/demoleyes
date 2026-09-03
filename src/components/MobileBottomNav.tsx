import React from 'react';
import { Home, Scale, Building2, User, CalendarCheck } from 'lucide-react';
import { TubelightNavBar, TubelightNavItem } from './ui/tubelight-navbar';

interface MobileBottomNavProps {
  activeSection: string;
  onNavigateToSection: (sectionId: string) => void;
}

export const MobileBottomNav: React.FC<MobileBottomNavProps> = ({
  activeSection,
  onNavigateToSection,
}) => {
  const navItems: TubelightNavItem[] = [
    {
      name: 'Inicio',
      id: 'inicio',
      icon: Home,
      onClick: () => onNavigateToSection('inicio'),
    },
    {
      name: 'La Firma',
      id: 'quienes-somos',
      icon: Building2,
      onClick: () => onNavigateToSection('quienes-somos'),
    },
    {
      name: 'Sobre Mí',
      id: 'sobre-mi',
      icon: User,
      onClick: () => onNavigateToSection('sobre-mi'),
    },
    {
      name: 'Áreas',
      id: 'especialidades',
      icon: Scale,
      onClick: () => onNavigateToSection('especialidades'),
    },
    {
      name: 'Agendar',
      id: 'agendar',
      icon: CalendarCheck,
      onClick: () => onNavigateToSection('agendar'),
    },
  ];

  // Map activeSection to tab name
  const getActiveTabName = () => {
    switch (activeSection) {
      case 'inicio':
        return 'Inicio';
      case 'quienes-somos':
      case 'abogados':
        return 'La Firma';
      case 'sobre-mi':
        return 'Sobre Mí';
      case 'especialidades':
      case 'diagnostico':
      case 'casos':
        return 'Áreas';
      case 'agendar':
      case 'faq':
        return 'Agendar';
      default:
        return 'Inicio';
    }
  };

  return (
    <div className="md:hidden">
      <TubelightNavBar
        items={navItems}
        activeTab={getActiveTabName()}
      />
    </div>
  );
};
