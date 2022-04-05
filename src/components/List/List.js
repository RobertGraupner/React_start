import styles from "./List.module.scss";
import Column from "./../Column/Column";
import ColumnForm from "./../ColumnForm/ColumnForm";
import { useSelector } from "react-redux";
import { getListById } from "../../redux/listsRedux";
import { getColumnsByList } from "../../redux/columnsRedux";
import { Navigate, useParams } from "react-router";
import SearchForm from "../SearchForm/SearchForm";


const List = () => {
	const { listId } = useParams();
// tu podajemy listId zamiast props.id jak w komponencie Column, bo mamy useParams()?
	const columns = useSelector(state => getColumnsByList(state, listId));
// czemu w columns wystarczyło wpisać getAllcolumns, a w listData trzeba wpisać (state => ...)?
	const listData = useSelector(state => getListById(state, listId));
	//Sprawdzamy czy listData istnieje. Jesli nie ma to wyświetlamy stronę główną, jesli jest renderujemy listę
	if (!listData) return <Navigate to="/" />;
	return (
		<div className={styles.list}>
			<header className={styles.header}>
				<h2 className={styles.title}>{listData.title}</h2>
			</header>
			<p className={styles.description}>{listData.description}</p>
			<SearchForm />
			<section className={styles.columns}>
				{columns.map((column) => (
					<Column key={column.id} {...column} />
				))}
			</section>
			<ColumnForm listId={listId} />
		</div>
	);
};

export default List;
