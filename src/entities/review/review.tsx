import type { ReviewInfo } from '../../Types';
import { Avatar, Rating } from '@mui/material';
import style from './review.module.css';
import type { FC } from 'react';

export const Review: FC<ReviewInfo> = ({ reviewerName, date, rating, comment }) => {
    const dateOf = new Date(Date.parse(date));
    const reviewDate = `${dateOf.getDay()} ${dateOf.toLocaleString('eng', {
        month: 'short',
    })} ${dateOf.getHours()}:${dateOf.getMinutes()}`;
    return (
        <>
            <>
                <div className={style.review}>
                    <div className={style.head}>
                        <p className={style.name}>
                            <Avatar sx={{ width: '24px', height: '24px', fontSize: '14px' }}>
                                {reviewerName.split(' ')[0][0]}
                                {reviewerName.split(' ')[1][0]}
                            </Avatar>
                            <span>{reviewerName}</span>
                        </p>
                        <div className={style.meta}>
                            <Rating
                                name="size-large"
                                defaultValue={rating}
                                size="large"
                                readOnly
                            ></Rating>
                            <span>{reviewDate}</span>
                        </div>
                    </div>
                    <p className={style.comment}>{comment}</p>
                </div>
            </>
        </>
    );
};
