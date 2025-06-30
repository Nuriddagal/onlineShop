import { RateStars } from "./rateStars";
import type { ReviewInfo } from "./Types";

export function Review({reviewerName, date, rating, comment}: ReviewInfo) {
  const dateOf = new Date(Date.parse(date))
  const reviewDate = `${dateOf.getDay()} ${dateOf.toLocaleString("eng",{month: "short"})} ${dateOf.getHours()}:${dateOf.getMinutes()}`
  return (
    <>
          <>
              <div className="review">
                  <div className="review__head">
                      <p className="review-name">{reviewerName}</p>
                      <div className="review__meta">
                          <span><RateStars rating={rating}/></span>
                          <span>{reviewDate}</span></div>
                  </div>
                  <p className="review__comment">{comment}</p>
              </div>
          </>
    </>
  )
}