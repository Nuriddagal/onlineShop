import { ProductCard } from "./pages/product-card";
import type { CardState } from "./Types";

export function Dashboard({product, addTo}: CardState) {
    return (
        <div className="dashboard">
            <ProductCard product={product} addTo={addTo}/>
        </div>
    )
}