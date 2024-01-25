import Image from "next/image";
const UserReviews = () => {
  const rate: number = 2;
  return (
    <>
      <div className="user_rev">
        <div className="userimage">
          <div className="image">
            <Image
              src={"/images/user3.png"}
              alt="user_rev"
              width={30}
              height={30}
            />
          </div>
          <div className="starts">
            {rate === 5 ? (
              <>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
              </>
            ) : rate === 4 ? (
              <>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-regular fa-star"></i>
              </>
            ) : rate === 3 ? (
              <>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-regular fa-star"></i>
                <i className="fa-regular fa-star"></i>
              </>
            ) : rate === 2 ? (
              <>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-regular fa-star"></i>
                <i className="fa-regular fa-star"></i>
                <i className="fa-regular fa-star"></i>
              </>
            ) : rate === 1 ? (
              <>
                <i className="fa-solid fa-star"></i>
                <i className="fa-regular fa-star"></i>
                <i className="fa-regular fa-star"></i>
                <i className="fa-regular fa-star"></i>
                <i className="fa-regular fa-star"></i>
              </>
            ) : (
              <></>
            )}
          </div>
        </div>
        <div className="name_comments">
          <h3>User Qarsoon</h3>
          <p>
            Mashalaah Sahbakada Waa Shabakada Runtii Wax ...{" "}
            <button type="button">Sii Akhri</button>
          </p>
        </div>
      </div>
    </>
  );
};

export default UserReviews;
