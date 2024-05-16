import css from "./SearchBox.module.css"
import toast, { Toaster } from 'react-hot-toast';
import {FC,FormEvent} from "react"

interface SearchBarProps {
  handleSubmit: (query: string) => void;
}

const SearchBar:FC<SearchBarProps> = ({ handleSubmit }) => {
  const onSubmit = (evt:FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

     const form = evt.currentTarget;
     const query = form.elements.namedItem('input') as HTMLInputElement;
    if (query.value.trim() === '') {
      toast.error('write something...');
      return;
    }
    handleSubmit(query.value);
    form.reset();
  };
  return (
    <header className={css['search-heder']}>
      <Toaster position="top-right" reverseOrder={false} />
      <form className={css['search-form']} onSubmit={onSubmit}>
        <input
          type="text"
          name="input"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          className={css['search-input']}
        />
        <button type="submit" className={css['search-btn']}>
          Search
        </button>
      </form>
    </header>
  );
};
export default SearchBar;
