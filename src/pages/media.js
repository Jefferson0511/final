import React from "react";
import Footer from "../components/footer";
import "./media.css";

const Media = () => {
  const galleryData = [
    {
      title: "Sunday School Christmas Program",
      description:
        "A joyful celebration where children share the Christmas story through songs and performances.",
      image: "/images/media_p/cp.jpg",
    },
    {
      title: "Children's Sunday",
      description:
        "A service dedicated to celebrating the faith and talents of the church’s children.",
      image: "/images/media_p/children.jpg",
    },
    {
      title: "NMSI Youth Fest ",
      description:
        "Runner up at Youth fest where upto 20 churches participated",
      image: "/images/media_p/yf_nmsi.jpg",
    },
    {
      title: "Youth Retreat on Leadership",
      description:
        "A meaningful retreat to inspire and guide young people in developing strong leadership skills rooted in faith.",
      image: "/images/media_p/youth_retreat.jpg",
    },
    {
      title: "Choir Sunday",
      description:
        "A special service featuring heartfelt worship and inspiring performances by the church choir.",
      image: "/images/media_P/CHOIR.jpg",
    },
    {
      title: "Vacation Bible School (VBS)",
      description:
        "A fun filled 10 days of learning about God through stories, crafts, and songs for children.",
      image: "/images/media_p/vbs.jpg",
    },
    {
      title: "Harvest Festival",
      description:
        " A time of gratitude and celebration with food and community fellowship.",
      image: "/images/media_p/harvest.jpg",
    },
    {
      title: "Palm Sunday",
      description:
        "A service marking Jesus’ triumphant entry into Jerusalem, celebrated with palms and praise.",
      image: "/images/media_p/palm.png",
    },
    {
      title: "Foundation Prayer",
      description:
        "A heartfelt gathering to seek God’s blessings for the church’s mission and future.",
      image: "/images/media_p/foundation.jpg",
    },
    {
      title: "Women's Sunday",
      description:
        "A special day to celebrate the strength, faith, and contributions of women in the church.",
      image: "/images/media_p/womens.jpg",
    },
    {
      title: "Women's Retreat at Lite",
      description:
        "A peaceful gathering for women to pray, share, and strengthen their spiritual bond.",
      image: "/images/media_p/womens_retreat.jpg",
    },
    {
      title: "Devotional Book Distribution",
      description:
        "Offering devotional books to help people connect with God in their daily lives.",
      image: "/images/media_p/devotional.jpg",
    },
    {
      title: "Children's Rally",
      description:
        "A vibrant event for kids to sing, play, and learn about God’s love.",
      image: "/images/media_p/c_rally.jpg",
    },
    {
      title: "Youth Monthly Bible Quiz",
      description:
        "A fun quiz for youth to dive deeper into the Bible and learn about God.",
      image: "/images/media_p/bible_quiz.jpg",
    },
    {
      title: "Outreach Ministry at Uyir Foundation",
      description:
        "A heartfelt effort by the youth to bring hope and kindness to those in need.",
      image: "/images/media_p/uyir.jpg",
    },
    {
      title: "Youth Rally at LITE",
      description:
        "A spirited gathering of young people to worship, celebrate, and share their faith.",
      image: "/images/media_p/y_rally.jpg",
    },
    {
      title: "Documentary Contest",
      description:
        "An exciting platform for young minds to showcase their creativity and values through film.",
      image: "/images/media_p/documentary.jpg",
    },
    {
      title: "Choir Lenten Songs",
      description:
        "Soulful hymns reflecting the love and sacrifice of Christ during the Lenten season.",
      image: "/images/media_p/choir_lent.jpg",
    },
  ];

  return (
    <>
      <main className="media-main">
        <div className="media-container">
          <div className="mediaHeader">
            <h1>Media Gallery</h1>
            <h2>I thank my God in all my <span id="highlight">remembrance</span> of you</h2>
          </div>
          <div className="gallery-grid">
            {galleryData.map((item, index) => (
              <div key={index} className="gallery-item">
                <img src={item.image} alt={item.title} className="gallery-image" />
                <div className="gallery-info">
                  <h3 className="gallery-title">{item.title}</h3>
                  <p className="gallery-description">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Media;
