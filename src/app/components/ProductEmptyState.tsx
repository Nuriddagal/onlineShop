import type { FC } from 'react';

export const ProductEmptyState: FC = () => {
    return (
        <div className="empty-state">
            <img src="#" alt="No products" />
            <p>No products available</p>
        </div>
    );
};
