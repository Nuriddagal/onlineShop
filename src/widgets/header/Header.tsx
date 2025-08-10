import { useLocation } from 'react-router';
import type { HeaderProps } from '@/Types';
import { useEffect, useState, type FC } from 'react';
import Typography from '@mui/material/Typography';
import { SearchFC } from '../../features/searchFC/SearchFC';
import { FilterListAlt, ShoppingCart } from '@mui/icons-material';
import styles from '@/widgets/header/header.module.css';

export const Header: FC<HeaderProps> = ({ navigate, counts, setIsFilterOpen }) => {
    const location = useLocation();
    const [isBasket, setIsBasket] = useState<boolean>(false);
    const [isDashboard, setIsDashboard] = useState<boolean>(false);
    useEffect(() => {
        if (location.pathname === '/basket') {
            setIsBasket(true);
            setIsFilterOpen(false);
        } else if (location.pathname === '/dashboard') {
            setIsDashboard(true);
            setIsFilterOpen(false);
        } else {
            setIsBasket(false);
            setIsDashboard(false);
        }
    }, [location]);
    return (
        <>
            <header className={styles.header}>
                <div>
                    <Typography
                        sx={{
                            width: 'fit-content',
                            fontSize: '45px',
                            color: 'white',
                            margin: '0',
                            fontFamily: 'Arial, Helvetica, sans-serif',
                        }}
                        className={styles.shopName}
                    >
                        blueberries
                    </Typography>
                    <SearchFC></SearchFC>
                    <button className={styles.toBasketBtn} onClick={() => navigate('/basket')}>
                        <ShoppingCart
                            sx={{
                                color: 'white',
                                '&:hover': { color: 'silver' },
                                fontSize: '35px',
                                cursor: 'pointer',
                            }}
                        />
                        {counts.totalCount !== 0 && (
                            <p className={styles.basketCount}>{counts.totalCount}</p>
                        )}
                    </button>
                    {(!isBasket || isDashboard) && (
                        <button
                            type="button"
                            className={styles.filter}
                            onClick={() => setIsFilterOpen(prevState => !prevState)}
                        >
                            <FilterListAlt sx={{ width: '40px', height: '40px' }}></FilterListAlt>
                        </button>
                    )}
                </div>
            </header>
        </>
    );
};
