import { BasketItemBtn } from '@/entities/basket/ui/basketItemBtn';
import { DeleteSvg } from '../svg/deleteSvg';
import type { Counts, Product } from '@/Types';

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
      <div className="basket__card card">
        <div className="card__image-wrapper">
          <img src={product.thumbnail} alt={product.title} className="card__image" />
        </div>
        <button type="button" className="delete_button" onClick={() => deleteFrom?.(product)}>
          <DeleteSvg />
        </button>
        <p className="card__price">${(counts?.[product.title] || 1) * Math.round(product.price)}</p>

        <div className="card__info">
          <div className="wrap">
            <p className="card__title">
              {product.title} - {product.brand}
            </p>
            <p className="card__minimumOrderQuantity">{product.minimumOrderQuantity} pcs</p>
            <p className="card__shippingInfo">{product.shippingInformation}</p>
          </div>
        </div>

        <div className="controller">
          <BasketItemBtn children="+" className="card__add-button" onClick={() => addTo(product)} />
          <input
            type="text"
            value={counts?.[product.title]}
            className="card__product-count"
            readOnly
          />
          <BasketItemBtn
            children="-"
            className="card__add-button"
            onClick={() => removeFrom(product)}
          />
        </div>
      </div>
    </>
  );
}
