import React from "react";
import { parse } from 'rss-to-json';
import { useEffect, useState } from 'react';

import { stripHtml, stripImgHtml } from "../../../functions";

import news1 from "../../../assets/img/news/news_1.jpg";
import news2 from "../../../assets/img/news/news_2.jpg";
import news3 from "../../../assets/img/news/news_3.jpg";
import news4 from "../../../assets/img/news/news_4.jpg";
import useWindowDimensions from "../../../hooks/useWindowDimensions";
import { NewsBox } from "./NewsBox";

export const NewsContainer = ({categorry, rssLINK}) => {
  const { height, width } = useWindowDimensions();
  
  const [items, setItems] = useState([]);
  const getData = async () => {
    let rss = await parse(rssLINK);
    setItems(prevStat => {
      return rss.items.map((element => {
        const desObject = {
          img: stripImgHtml(element?.description),
          text: stripHtml(element?.description)
        }
        return {
          ...element,
          description: desObject
        }
      }))
    })
  }
  useEffect(() => {
    getData();
  }, [])

  const renderList = items.filter((element, index)=>{
    return index >= 3 && index <10;
  })
  console.log(renderList, "---------------------")
  return (
    <div>
      <div className="row m-3 m-md-5 newsTop">
        <div className="col-12 col-md-7 p-2 col-lg-9 newsTopLeft">
          <a href={items[0]?.link}>
            <div
              className="h-100"
              style={{
                backgroundImage: `url(${items[0]?.media.thumbnail.url})`,
                backgroundSize: "cover",
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'
                // background: `url(${items[0]?.media.thumbnail.url}) center center`,
              }}
            >
              <p>{categorry}</p>
              <span>{items[0]?.title}</span>
            </div>
          </a>
        </div>
        <div className="col-12 col-md-5 col-lg-3 p-0 newsTopRight">
          <div className="col-12 h-50 p-2 ">
            <a href={items[1]?.link}>
              <div
                className="h-100"
                style={{
                  // background: `url(${items[1]?.media.thumbnail.url}) center center no-repeat`,
                  backgroundImage: `url(${items[1]?.media.thumbnail.url})`,
                  backgroundSize: "cover",
                  backgroundPosition: 'center',
                  backgroundRepeat: 'no-repeat'
                }}
              >
                <p>{categorry}</p>
                <span style={{ fontSize: "16px" }}>
                  {items[1]?.title}
                </span>
              </div>
            </a>
          </div>
          <div className="col-12 h-50 p-2 ">
            <a href={items[2]?.link}>
              <div
                className="h-100"
                style={{
                  // background: `url(${items[1]?.media.thumbnail.url}) center center no-repeat`,
                  backgroundImage: `url(${items[2]?.media.thumbnail.url})`,
                  backgroundSize: "cover",
                  backgroundPosition: 'center',
                  backgroundRepeat: 'no-repeat'
                }}
              >
                <p>{categorry}</p>
                <span style={{ fontSize: "16px" }}>
                  {items[2]?.title}
                </span>
              </div>
            </a>
          </div>
        </div>
      </div>
      <div
        className=" mx-3 mx-md-5 p-2"
        style={{ display: "flex", flexWrap: "wrap" }}
      >
        {
          renderList.map((element, index)=> {
            return <NewsBox width={width > 998 && index <= 3 ? "50%" : "100%"}
              background={element.media.thumbnail.url}
              title={element.title}
              date={element.published}
              categorry={categorry}
              description={element.description.text}
              sourceLink = {element.link}
            />
          })
        }
        {/* <NewsBox
          width={width > 998 ? "50%" : "100%"}
          background={news4}
          title="Fantasy Football Rankings vs. ECR: Week 12"
          date="11/25/2022"
          categorry={categorry}
          description="Pittsburgh Steelers (3-7) vs Indianapolis Colts (4-6-1) Spread: Colts
          -2.5 Over/ Under: 39.5 Breakdown The Steelers visit the Colts in this
          Monday Night Football matchup. We could be in for a low-scoring
          matchup in this game with the over/under line only set at 39. The
          Steelers have weapons on offense,chup. We could be in for a
          low-scoring matchup in this game with the over/under line only set at
          39. The Steelers have weapons on offense, ."
        /> */}
        <button className="btn" style={{margin: "auto"}}>View More</button>
      </div>
    </div>
  );
};
