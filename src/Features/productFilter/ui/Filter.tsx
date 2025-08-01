import { useSelector } from 'react-redux';
import { useAppDispatch } from '@/App/model/state';
import { toggleFilter } from '../model/productFilterSlice';
import { isFilterSelected } from '../model/selectors';
import { Category } from './Category';
import styles from './filter.module.css';

type Props = {
  categorys: string[];
  isFilterOpen: boolean;
};

export function Filter({ categorys, isFilterOpen }: Props) {
  const dispatch = useAppDispatch();
  const menCategory = categorys.filter((c) => c.startsWith('men'));
  const womenCategory = categorys.filter((c) => c.startsWith('women'));
  const otherCategory = categorys.filter((c) => !c.startsWith('men') && !c.startsWith('women'));

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(toggleFilter(e.target.value));
  };

  return (
    <div className={`${styles.filterMenu} ${isFilterOpen ? styles.open : ''}`}>
      <fieldset className={styles.fieldset}>
        <legend className={styles.legend}>All</legend>
        <div className={styles.categoryGroup}>
          {otherCategory.map((category) => (
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
          {menCategory.map((category) => (
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
          {womenCategory.map((category) => (
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
}
