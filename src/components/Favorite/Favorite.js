import styles from "./Favorite.module.scss";
import PageTitle from "../PageTitle/PageTitle";
import Card from "../Card/Card";
import { useSelector } from "react-redux";
import { getFavoriteCards } from "../../redux/store";

const Favorite = () => {

	const favoriteCard = useSelector(getFavoriteCards);

	if(favoriteCard.length === 0)
	return (
		<div className={styles.favorite}>
			<PageTitle>Favorite</PageTitle>
			<p className={styles.subtitle}>You don't have favorite cards</p>
		</div>
	);

	return (
		<div className={styles.favorite}>
			<PageTitle>Favorite</PageTitle>
			<article className={styles.column}>
				<ul className={styles.cards}>
					{favoriteCard.map(card => <Card key={card.id} id={card.id} title={card.title} isFavorite={card.isFavorite} />)}
				</ul>
			</article>
		</div>
	);
};

export default Favorite;
