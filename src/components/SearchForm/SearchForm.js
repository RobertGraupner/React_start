import styles from './SearchForm.module.scss';
import TextInput from '../TextInput/TextInput.js';
import Button from "../Button/Button.js";
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { updateSearchString } from '../../redux/store';

const SearchForm = () => {
	const [searchString, setSearchString] = useState('');
	const dispatch = useDispatch();
	
	const handleSubmit = e => {
		e.preventDefault();
		dispatch(updateSearchString({ searchString }));
		setSearchString('');
	};

	return (
		<form className={styles.searchForm} onSubmit = {handleSubmit}>
			<TextInput value={searchString} onChange = {e => setSearchString(e.target.value)} placeholder="Search..." />
			<Button>
				<span className="fa fa-search" />
			</Button>
		</form>
	);
};

export default SearchForm;
