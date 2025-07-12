import type { MobileCardContextType } from '@/components/common/MobileCard/types';
import React, { createContext, useContext, useState } from 'react';

const MobileCardContext = createContext<MobileCardContextType | undefined>(
  undefined
);

export const MobileCardProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const toggleExpanded = (id: string) => {
    setExpandedId(prevId => (prevId === id ? null : id));
  };

  return (
    <MobileCardContext.Provider value={{ expandedId, toggleExpanded }}>
      {children}
    </MobileCardContext.Provider>
  );
};

export const useMobileCard = () => {
  const context = useContext(MobileCardContext);
  if (!context) {
    throw new Error('useMobileCard must be used within MobileCardProvider');
  }
  return context;
};
