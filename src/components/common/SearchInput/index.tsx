import styles from './SearchInput.module.css';
import SearchIcon from '@/components/icon/SearchIcon';

interface SearchInputProps {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
}

const SearchInput = ({ searchTerm, setSearchTerm }: SearchInputProps) => {
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
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
