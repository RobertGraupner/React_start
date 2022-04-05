import styles from "./Card.module.scss";
import clsx from 'clsx';
import { useDispatch } from "react-redux";
import { toggleFavoriteCart, removeCard } from "../../redux/cardsRedux";

const Card = props => {

	const dispatch = useDispatch();

	const toggleClass = (cardId) => {
		dispatch(toggleFavoriteCart(cardId))
	};

	const remove = cardId => {
		dispatch(removeCard(cardId))
	};

	return (
		<li className={styles.card}>
			{props.title}
			<button type="button" onClick={() => toggleClass(props.id, props.isFavorite)} className={clsx(styles.button, props.isFavorite && styles.active)}>
				<span className="fa fa-star-o" />
			</button>
			<button type="button" onClick={() => remove(props.id)} className={clsx(styles.button)}>
				<span className="fa fa-trash" />
			</button>
		</li>
	);
};

export default Card;
