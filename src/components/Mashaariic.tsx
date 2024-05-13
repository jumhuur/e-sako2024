"use client";
import Image from "next/image";
import {
  CalendarDaysIcon,
  GiftIcon,
  CheckBadgeIcon,
  HeartIcon,
} from "@heroicons/react/24/solid";
import { Usedata } from "@/context/XisaabContex";
import Link from "next/link";

const Mashaariic = () => {
  const { ModelProjectactive } = Usedata();
  return (
    <>
      <div className="mashariic">
        <div className="mashruuc">
          <div className="image_mashruuc">
            <div className="over_image">
              <span>
                {" "}
                <CalendarDaysIcon className="i" />
                10 Months ago
              </span>

              <button type="button" onClick={ModelProjectactive}>
                <HeartIcon className="i" /> Donte Now
              </button>
            </div>
            {/* <span className="time">
             10 seconds ago
            </span> */}
            <Image src="/images/image.jpg" alt="image" fill={true} />
          </div>
          <div className="title_desc">
            <h2>Mashruuc name</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Neque
              repellat veniam tempore unde . ...
            </p>
          </div>
          <div className="price_progress">
            <div className="progress">
              <span>
                <span>20%</span>
              </span>
            </div>
            <div className="lacagta">
              <span className="la_rabo">
                {" "}
                <GiftIcon className="i" /> 32,000
              </span>
              <span className="la_hayo">
                <CheckBadgeIcon className="i" /> 10,000
              </span>
            </div>
          </div>
        </div>
        <div className="mashruuc">
          <div className="image_mashruuc">
            <div className="over_image">
              <span>
                {" "}
                <CalendarDaysIcon className="i" />
                10 Months ago
              </span>
              <button type="button">
                <HeartIcon className="i" /> Donte Now
              </button>
            </div>
            {/* <span className="time">
             10 seconds ago
            </span> */}
            <Image src="/images/image2.jpg" alt="image" fill={true} />
          </div>
          <div className="title_desc">
            <h2>Mashruuc name</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Neque
              repellat veniam tempore unde . ...
            </p>
          </div>
          <div className="price_progress">
            <div className="progress">
              <span>
                <span>20%</span>
              </span>
            </div>
            <div className="lacagta">
              <span className="la_rabo">
                {" "}
                <GiftIcon className="i" /> 32,000
              </span>
              <span className="la_hayo">
                <CheckBadgeIcon className="i" /> 10,000
              </span>
            </div>
          </div>
        </div>
        <div className="mashruuc">
          <div className="image_mashruuc">
            <div className="over_image">
              <span>
                {" "}
                <CalendarDaysIcon className="i" />
                10 Months ago
              </span>
              <button type="button">
                <HeartIcon className="i" /> Donte Now
              </button>
            </div>
            {/* <span className="time">
             10 seconds ago
            </span> */}
            <Image src="/images/image3.jpg" alt="image" fill={true} />
          </div>
          <div className="title_desc">
            <h2>Mashruuc name</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Neque
              repellat veniam tempore unde . ...
            </p>
          </div>
          <div className="price_progress">
            <div className="progress">
              <span>
                <span>20%</span>
              </span>
            </div>
            <div className="lacagta">
              <span className="la_rabo">
                {" "}
                <GiftIcon className="i" /> 32,000
              </span>
              <span className="la_hayo">
                <CheckBadgeIcon className="i" /> 10,000
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Mashaariic;
