import React from 'react';
import { Home, Scale, Building2, Calculator, CalendarCheck } from 'lucide-react';
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
      name: 'Áreas',
      id: 'especialidades',
      icon: Scale,
      onClick: () => onNavigateToSection('especialidades'),
    },
    {
      name: 'La Firma',
      id: 'quienes-somos',
      icon: Building2,
      onClick: () => onNavigateToSection('quienes-somos'),
    },
    {
      name: 'Honorarios',
      id: 'honorarios',
      icon: Calculator,
      onClick: () => onNavigateToSection('honorarios'),
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
      case 'especialidades':
      case 'diagnostico':
        return 'Áreas';
      case 'quienes-somos':
      case 'abogados':
        return 'La Firma';
      case 'honorarios':
      case 'casos':
        return 'Honorarios';
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

export default MobileBottomNav;
