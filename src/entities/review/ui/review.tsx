import type { ReviewInfo } from '../../../Types';
import { Avatar, Rating } from '@mui/material';

export function Review({ reviewerName, date, rating, comment }: ReviewInfo) {
    const dateOf = new Date(Date.parse(date));
    const reviewDate = `${dateOf.getDay()} ${dateOf.toLocaleString('eng', {
        month: 'short',
    })} ${dateOf.getHours()}:${dateOf.getMinutes()}`;
    return (
        <>
            <>
                <div className="review">
                    <div className="review__head">
                        <p className="review-name">
                            <Avatar sx={{ width: '24px', height: '24px', fontSize: '14px' }}>
                                {reviewerName.split(' ')[0][0]}
                                {reviewerName.split(' ')[1][0]}
                            </Avatar>
                            <span>{reviewerName}</span>
                        </p>
                        <div className="review__meta">
                            <Rating
                                name="size-large"
                                defaultValue={rating}
                                size="large"
                                readOnly
                            ></Rating>
                            <span>{reviewDate}</span>
                        </div>
                    </div>
                    <p className="review__comment">{comment}</p>
                </div>
            </>
        </>
    );
}
