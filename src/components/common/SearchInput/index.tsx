import { useState, type SetStateAction } from 'react';
import styles from './SearchInput.module.css';
import SearchIcon from '@/components/icon/SearchIcon';

const SearchInput = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (e: { target: { value: SetStateAction<string> } }) => {
    setSearchTerm(e.target.value);
    console.log('Pesquisando por:', e.target.value);
  };

  return (
    <div className={styles.inputWrapper}>
      <input
        type="text"
        placeholder="Pesquisar"
        value={searchTerm}
        onChange={handleSearch}
        className={styles.searchInput}
      />
      <div className={styles.iconWrapper}>
        <SearchIcon />
      </div>
    </div>
  );
};

export default SearchInput;
