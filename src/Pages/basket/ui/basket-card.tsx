import { BasketItemBtn } from '@/entities/basket/ui/basketItemBtn';
import { DeleteSvg } from '../../../svg/deleteSvg';
import type { Counts, Product } from '@/Types';
import styles from './basketCard.module.css';

type BasketCardState = {
    product: Product;
    addTo: (product: Product) => void;
    removeFrom: (product: Product) => void;
    deleteFrom: (product: Product) => void;
    counts: Counts;
};

export function BasketCard({ product, addTo, removeFrom, deleteFrom, counts }: BasketCardState) {
    return (
        <>
            <div className={styles.card}>
                <div className={styles.imageWrap}>
                    <img src={product.thumbnail} alt={product.title} className={styles.image} />
                </div>

                <button
                    type="button"
                    className={styles.delete}
                    onClick={() => deleteFrom?.(product)}
                >
                    <DeleteSvg />
                </button>

                <p className={styles.price}>
                    ${(counts?.[product.title] || 1) * Math.round(product.price)}
                </p>

                <div className={styles.info}>
                    <div className={styles.infoWrap}>
                        <p className={styles.title}>
                            {product.title} - {product.brand}
                        </p>
                        <p className={styles.meta}>{product.minimumOrderQuantity} pcs</p>
                        <p className={styles.shipping}>{product.shippingInformation}</p>
                    </div>
                </div>

                <div className={styles.controls}>
                    <BasketItemBtn
                        children="+"
                        className={styles.btnAdd}
                        onClick={() => addTo(product)}
                    />
                    <input
                        type="text"
                        value={counts?.[product.title]}
                        className={styles.btnCount}
                        readOnly
                    />
                    <BasketItemBtn
                        children="-"
                        className={styles.btnAdd}
                        onClick={() => removeFrom(product)}
                    />
                </div>
            </div>
        </>
    );
}
