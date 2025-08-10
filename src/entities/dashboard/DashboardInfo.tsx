import { Star } from '@mui/icons-material';
import type { CardState } from '@/Types';
import styles from '@/pages/dashboard/Dashboard.module.css';
import type { FC } from 'react';

export const DashboardInfo: FC<Pick<CardState, 'product'>> = ({ product }) => {
    return (
        <>
            <div className={styles.info}>
                <h1 className={styles.title}>
                    {product.title} {product.brand}
                </h1>
                <p className={styles.infoItem}>
                    <span className={styles.infoName}>article</span>
                    <span>{product.sku}</span>
                </p>
                <p className={styles.infoItem}>
                    <span className={styles.infoName}>rating</span>
                    <span>
                        <Star />
                        {product.rating}
                    </span>
                </p>
                <p className={styles.infoItem}>
                    <span className={styles.infoName}>available</span>
                    <span>{product.availabilityStatus}</span>
                </p>
                <p className={styles.infoItem}>
                    <span className={styles.infoName}>category</span>
                    <span>{product.category}</span>
                </p>
                <p className={styles.infoItem}>
                    <span className={styles.infoName}>width</span>
                    <span>{product.dimensions.width}</span>
                </p>
                <p className={styles.infoItem}>
                    <span className={styles.infoName}>height</span>
                    <span>{product.dimensions.height}</span>
                </p>
                <p className={styles.infoItem}>
                    <span className={styles.infoName}>depth</span>
                    <span>{product.dimensions.depth}</span>
                </p>
                <p className={styles.infoItem}>
                    <span className={styles.infoName}>retrurn policy</span>
                    <span>{product.returnPolicy}</span>
                </p>
                <p className={styles.infoItem}>
                    <span className={styles.infoName}>warranty</span>
                    <span>{product.warrantyInformation}</span>
                </p>
                <p className={styles.infoItem}>
                    <span className={styles.infoName}>tags</span>
                    <span>{product.tags}</span>
                </p>
                <p className={styles.infoItem}>
                    <span className={styles.infoName}>weight</span>
                    <span>{product.weight}</span>
                </p>
                <p className={styles.infoItem}>{product.description}</p>
            </div>
        </>
    );
};
