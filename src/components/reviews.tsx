"use client";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import UserReviews from "./UserReview";
const Reviews = () => {
  const rate: number = 2;
  const Data: number[] = [1, 2, 3, 4];
  return (
    <>
      <div className="Reviews" id="rate">
        <div className="ciwaan">
          <h2>Maxay Ka Yidhaahdeen Dadku E-zako ?</h2>
          <p>fal celinta isticmalayaasha iyo qiimaytooda</p>
        </div>
        <div className="reviews_users">
          {Data.map((Data, x) => (
            <UserReviews key={x} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Reviews;
