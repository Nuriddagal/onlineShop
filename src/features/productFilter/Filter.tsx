import { useSelector } from 'react-redux';
import { useAppDispatch } from '../../app/model/state';
import type { FC } from 'react';

import styles from './filter.module.css';
import { toggleFilter } from '@/features/productFilter/model/productFilterSlice';
import { Category } from '@/features/productFilter/components/Category';
import { isFilterSelected } from '@/features/productFilter/model/selectors';

type Props = {
    categorys: string[];
    isFilterOpen: boolean;
};

export const Filter: FC<Props> = ({ categorys, isFilterOpen }) => {
    const dispatch = useAppDispatch();
    const menCategory = categorys.filter(c => c.startsWith('men'));
    const womenCategory = categorys.filter(c => c.startsWith('women'));
    const otherCategory = categorys.filter(c => !c.startsWith('men') && !c.startsWith('women'));

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(toggleFilter(e.target.value));
    };

    return (
        <div className={`${styles.filterMenu} ${isFilterOpen ? styles.open : ''}`}>
            <fieldset className={styles.fieldset}>
                <legend className={styles.legend}>All</legend>
                <div className={styles.categoryGroup}>
                    {otherCategory.map(category => (
                        <Category
                            key={category}
                            category={category}
                            checked={useSelector(isFilterSelected(category))}
                            onChange={handleChange}
                            className={styles.categoryItem}
                        />
                    ))}
                </div>
            </fieldset>

            <fieldset className={styles.fieldset}>
                <legend className={styles.legend}>For Men</legend>
                <div className={styles.categoryGroup}>
                    {menCategory.map(category => (
                        <Category
                            key={category}
                            category={category}
                            checked={useSelector(isFilterSelected(category))}
                            onChange={handleChange}
                            className={styles.categoryItem}
                        />
                    ))}
                </div>
            </fieldset>

            <fieldset className={styles.fieldset}>
                <legend className={styles.legend}>For Women</legend>
                <div className={styles.categoryGroup}>
                    {womenCategory.map(category => (
                        <Category
                            key={category}
                            category={category}
                            checked={useSelector(isFilterSelected(category))}
                            onChange={handleChange}
                            className={styles.categoryItem}
                        />
                    ))}
                </div>
            </fieldset>
        </div>
    );
};
