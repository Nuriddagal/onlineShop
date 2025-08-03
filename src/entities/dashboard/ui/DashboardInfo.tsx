import { StarSvg } from '../../../svg/starSvg';
import type { CardState } from '../../../Types';

export function DashboardInfo({ product }: Pick<CardState, 'product'>) {
    return (
        <>
            <div className="dashboard_info">
                <h1 className="dashboard__title">
                    {product.title} {product.brand}
                </h1>
                <p className="dashboard__article dashboard__info-item info-item">
                    <span className="info-item__name">article</span>
                    <span>{product.sku}</span>
                </p>
                <p className="dashboard__rating dashboard__info-item info-item">
                    <span className="info-item__name">rating</span>
                    <span>
                        <StarSvg />
                        {product.rating}
                    </span>
                </p>
                <p className="dashboard__status dashboard__info-item info-item">
                    <span className="info-item__name">available</span>
                    <span>{product.availabilityStatus}</span>
                </p>
                <p className="dashboard__category dashboard__info-item info-item">
                    <span className="info-item__name">category</span>
                    <span>{product.category}</span>
                </p>
                <p className="dashboard__width dashboard__info-item info-item">
                    <span className="info-item__name">width</span>
                    <span>{product.dimensions.width}</span>
                </p>
                <p className="dashboard__height dashboard__info-item info-item">
                    <span className="info-item__name">height</span>
                    <span>{product.dimensions.height}</span>
                </p>
                <p className="dashboard__depth dashboard__info-item info-item">
                    <span className="info-item__name">depth</span>
                    <span>{product.dimensions.depth}</span>
                </p>
                <p className="dashboard__returnPolice dashboard__info-item info-item">
                    <span className="info-item__name">retrurn policy</span>
                    <span>{product.returnPolicy}</span>
                </p>
                <p className="dashboard__warranty dashboard__info-item info-item">
                    <span className="info-item__name">warranty</span>
                    <span>{product.warrantyInformation}</span>
                </p>
                <p className="dashboard__tags dashboard__info-item info-item">
                    <span className="info-item__name">tags</span>
                    <span>{product.tags}</span>
                </p>
                <p className="dashboard__weight dashboard__info-item info-item">
                    <span className="info-item__name">weight</span>
                    <span>{product.weight}</span>
                </p>
                <p className="dashboard__description dashboard__info-item info-item">
                    {product.description}
                </p>
            </div>
        </>
    );
}
