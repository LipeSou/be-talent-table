import { ReactNode } from 'react';

export interface MobileCardContextType {
  expandedId: string | null;
  toggleExpanded: (id: string) => void;
}

export interface MobileCardProps {
  children: ReactNode;
  className?: string;
}

export interface MobileCardHeaderProps {
  children: ReactNode;
  className?: string;
}

export interface MobileCardItemProps {
  id: string;
  children: ReactNode;
  className?: string;
}

export interface MobileCardMainProps {
  children: ReactNode;
  className?: string;
}

export interface MobileCardDetailsProps {
  children: ReactNode;
  className?: string;
}

export interface MobileCardDetailRowProps {
  label: string;
  value: ReactNode;
  className?: string;
}
