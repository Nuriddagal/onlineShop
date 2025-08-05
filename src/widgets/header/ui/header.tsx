import { useLocation } from 'react-router';
import type { HeaderProps } from '../../../Types';
import { useEffect, useState } from 'react';
import Typography from '@mui/material/Typography';
import { SearchFC } from '@/Features/search/ui/search';
import { FilterListAlt, ShoppingCart } from '@mui/icons-material';
export function Header({ navigate, counts, setIsFilterOpen }: HeaderProps) {
    const location = useLocation();
    const [isBasket, setIsBasket] = useState<boolean>(false);
    useEffect(() => {
        if (location.pathname === '/basket' || location.pathname === '/dashboard') {
            setIsBasket(true);
            setIsFilterOpen(false);
        } else {
            setIsBasket(false);
        }
    }, [location]);
    return (
        <>
            <header className="header">
                <div>
                    <Typography
                        sx={{
                            width: 'fit-content',
                            fontSize: '45px',
                            color: 'white',
                            margin: '0',
                            fontFamily: 'Arial, Helvetica, sans-serif',
                        }}
                        className="shopName"
                    >
                        blueberries
                    </Typography>
                    <SearchFC></SearchFC>
                    <button className="toBasket-btn" onClick={() => navigate('/basket')}>
                        <ShoppingCart
                            sx={{
                                color: 'white',
                                '&:hover': { color: 'silver' },
                                fontSize: '35px',
                                cursor: 'pointer',
                            }}
                        />
                        {counts.totalCount !== 0 && (
                            <p className="header__basket-count">{counts.totalCount}</p>
                        )}
                    </button>
                    {!isBasket && (
                        <button
                            type="button"
                            className="filter"
                            onClick={() => setIsFilterOpen(prevState => !prevState)}
                        >
                            <FilterListAlt sx={{ width: '40px', height: '40px' }}></FilterListAlt>
                        </button>
                    )}
                </div>
            </header>
        </>
    );
}
