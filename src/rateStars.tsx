import { StarSvg } from "./svg/starSvg";
import type { ReviewInfo } from "./Types";

export function RateStars({rating}: Pick<ReviewInfo, "rating">) {
  return(
    <>
      {Array.from({length: rating})
      .map((_, id) => (
                <StarSvg  key={id}/>
      ))}
      {rating < 5 && Array.from({length: 5 - rating}).map((_, id) => (
        <StarSvg fill="lightgray" key={id}/>
      ))}
    </>
  )
}