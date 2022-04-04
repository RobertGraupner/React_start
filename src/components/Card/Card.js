import styles from "./Card.module.scss";
import clsx from 'clsx';
import { useDispatch } from "react-redux";
import { toggleFavoriteCart } from "../../redux/store";

const Card = props => {

	const dispatch = useDispatch();

	const toggleClass = (cardId) => {
		dispatch(toggleFavoriteCart(cardId))
	};

	return (
		<li className={styles.card}>{props.title}
			<button type="button" onClick={() => toggleClass(props.id, props.isFavorite)} className={clsx(styles.button, props.isFavorite && styles.active)}>
				<span className="fa fa-star-o" />
			</button>
		</li>
	);
};

export default Card;
