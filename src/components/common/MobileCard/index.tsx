import React from 'react';
import { ChevronDown } from '@/components/icon/ChevronDown';
import { ChevronUp } from '@/components/icon/ChevronUp';
import styles from './MobileCard.module.css';
import {
  MobileCardProps,
  MobileCardHeaderProps,
  MobileCardItemProps,
  MobileCardMainProps,
  MobileCardDetailsProps,
  MobileCardDetailRowProps,
} from './types';
import {
  MobileCardProvider,
  useMobileCard,
} from '@/store/context/MobileCardContext/MobileCardContext';

// Root Component with Provider
const MobileCardRoot = ({ children, className }: MobileCardProps) => {
  return (
    <MobileCardProvider>
      <div className={`${styles.mobileCardList} ${className || ''}`}>
        {children}
      </div>
    </MobileCardProvider>
  );
};

// Header Component
const MobileCardHeader = ({ children, className }: MobileCardHeaderProps) => {
  return (
    <div className={`${styles.mobileHeader} ${className || ''}`}>
      {children}
    </div>
  );
};

// Item Component
const MobileCardItem = ({ id, children, className }: MobileCardItemProps) => {
  const { expandedId, toggleExpanded } = useMobileCard();
  const isExpanded = expandedId === id;

  return (
    <div
      className={`${styles.mobileCard} ${className || ''}`}
      onClick={() => toggleExpanded(id)}
    >
      {React.Children.map(children, child => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child as React.ReactElement<any>, {
            isExpanded,
          });
        }
        return child;
      })}
    </div>
  );
};

// Main Content Component
const MobileCardMain = ({
  children,
  className,
}: MobileCardMainProps & { isExpanded?: boolean }) => {
  return (
    <div className={`${styles.mobileCardHeader} ${className || ''}`}>
      {children}
    </div>
  );
};

// Details Component
const MobileCardDetails = ({
  children,
  className,
  isExpanded,
}: MobileCardDetailsProps & { isExpanded?: boolean }) => {
  return (
    <div
      className={`${styles.expandedContent} ${isExpanded ? styles.open : ''} ${className || ''}`}
    >
      {children}
    </div>
  );
};

// Detail Row Component
const MobileCardDetailRow = ({
  label,
  value,
  className,
}: MobileCardDetailRowProps) => {
  return (
    <div className={`${styles.detailRow} ${className || ''}`}>
      <span className={styles.detailRowDescription}>{label}</span>
      <span>{value}</span>
    </div>
  );
};

// Chevron Icon Component
const MobileCardChevron = ({ isExpanded }: { isExpanded?: boolean }) => {
  return isExpanded ? <ChevronUp /> : <ChevronDown />;
};

// Export compound components
export const MobileCard = {
  Root: MobileCardRoot,
  Header: MobileCardHeader,
  Item: MobileCardItem,
  Main: MobileCardMain,
  Details: MobileCardDetails,
  DetailRow: MobileCardDetailRow,
  Chevron: MobileCardChevron,
};
