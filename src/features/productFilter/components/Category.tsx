import type { FC } from 'react';

type Props = {
    category: string;
    checked: boolean;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    className?: string;
};

export const Category: FC<Props> = ({ category, checked, onChange, className }) => {
    return (
        <label className={className}>
            <input type="checkbox" value={category} checked={checked} onChange={onChange} />
            {category}
        </label>
    );
};
