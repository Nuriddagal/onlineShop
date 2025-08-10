import type { CardState } from '@/Types';
import { Favorite, ShoppingCart, StarOutline } from '@mui/icons-material';
import styles from '@/Pages/product/ProductPage.module.css';

export function ProductCard({ product }: CardState) {
    return (
        <>
            <div className={`${styles.card} card`} id={product.id.toString()}>
                <div className={styles.imgWrapper}>
                    <img src={product.thumbnail} alt={product.title} className={styles.image} />
                    <button className={`${styles.favoriteIcon} favorite-icon`}>
                        <Favorite sx={{ fill: 'lightgreen' }} />
                    </button>
                </div>
                <p className={styles.price}>${product.price}</p>
                <p className={styles.title}>{product.title}</p>
                <p className={styles.rating}>
                    <StarOutline />
                    {product.rating}
                </p>
                <button className={`${styles.toBasket} basket-button`}>
                    <p>{product.shippingInformation.replace('Ships', '')}</p>
                    <ShoppingCart className={styles.basketIcon} />
                </button>
            </div>
        </>
    );
}
