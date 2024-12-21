import React, { useState } from "react";
import Footer from "../components/footer";
import "./the-fellowship.css"; // Separate CSS for Home

const Fellowship = () => {
  // State to track which card is flipped
  const [flippedCard, setFlippedCard] = useState(null);

  const cardData = [
    {
      title: "Women's Fellowship", // New title property
      front: "Front Content 1",
      back: "Incharges",
      frontImage: "/images/wf.jpg",
      backImage: "/images/1.jpg",
      president: "President- Mrs. Sheeba Salomon",
      seceretary: "Secretary: Mrs.G.Angel Nesan",
      treasurer: "Treasruer: Mrs.A.Angel Mary Ashok",
      people: [
        { name: "Incharge: Mrs. Sheeba Solomon", image: "/images/w4.jpg" },
        { name: "Secretary : Mrs. Chandra Samson", image: "/images/w2.jpeg" },
        { name: "Treasurer: Mrs. Hilda Devaraj", image: "/images/w3.jpg" },
        { name: "Convenor: Mrs. Ruth Gnana Deepa", image: "/images/w1.jpg" },
      ],
    },
    {
      title: "Men's Fellowship",
      front: "Front Content 2",
      back: "Incharges",
      frontImage: "/images/mf.jpg",
      backImage: "/images/1.jpg",
      president: "Chairman- Rev.S.Salomon Soundara Dass",
      seceretary: "In charges- Mr.P.Asvinkumar and Mr.D.Rajkumar Davidson",
      people: [
        { name: "Secretary: Mr. J.Samson Kirubakaran", image: "/images/m1.jpg" },
        {
          name: "Treasurer: Mr. A.B. Johnson Thiruvengadam",
          image: "/images/m2.jpg",
        },
      ],
    },
    {
      title: "Sunday School",
      front: "Front Content 3",

      frontImage: "/images/sc.jpg",
      backImage: "/images/1.jpg",
      people: [
        {
          name: "Mr.Sundar ",
          image: "/images/sunday_school/sundar_singh.jpg",
        },
        {
          name: "Mrs. Shiny",
          image: "/images/sunday_school/uk.jpg",
        },
        {
          name: "Mrs. Preetha",
          image: "/images/sunday_school/Preetha.jpg",
        },
        {
          name: "Mr. Praveen",
          image: "/images/sunday_school/Praveen.jpg",
        },
        {
          name: "Mrs. Edwina",
          image: "/images/sunday_school/Edwina.jpg",
        },
        {
          name: "Mrs. Annie",
          image: "/images/sunday_school/Annie.jpg",
        },
      ],
    },
    {
      title: "Youth Fellowship",
      front: "Front Content 4",
      back: "Incharges",
      frontImage: "/images/yf.jpg",
      backImage: "/images/1.jpg",
      president: "Chairman - Rev.S.Salomon Soundara Dass",
      seceretary: "Boys : Presbyter In-charge",
      treasurer: "Girls : Iyyar Amma",
      people: [
        {
          name: "Youth Leader: Dr. Devasitham",
          image: "/images/deva_anna.jpg",
        },
        { name: "Secretary: Mr. Jeya Rueben", image: "/images/y2.jpg" },
        { name: "Treasurer: Ms. Daphne", image: "/images/y3.jpg" },
      ],
    },
    {
      title: "Tamil Choir",
      front: "Front Content 5",
      back: "Incharges",
      frontImage: "/images/tc.jpg",
      backImage: "/images/1.jpg",
      president: "Chairman - Rev.S.Salomon Soundara Dass",
      seceretary: "Mr.A.Wesley John - Tamil Choir Admin",
      people: [{ name: "" }, { name: "Mr. Wesley John", image: "/images/t1.jpg" }],
    },
    {
      title: "English Choir",
      front: "Front Content 6",
      back: "Incharges",
      frontImage: "/images/ec.jpg",
      backImage: "/images/1.jpg",
      president: "Chairman - Rev.S.Salomon Soundara Dass",
      seceretary: "In Charge - Dr.J.Reeves Wesley",
      people: [
        { name: "", image: "" },
        { name: "Mr. Reeves Wesley", image: "/images/ec1.png" },
      ],
    },

    // {
    //   title: "Evangelism",
    //   front: "Front Content 6",
    //   back: "Incharges",
    //   frontImage: "/images/1.jpg",
    //   backImage: "/images/1.jpg",
    //   president: "Chairman - Rev.S.Salomon Soundara Dass",
    //   seceretary: "In Charge - Dr.J.Reeves Wesley",
    // },
    {
      title: "Elder's Fellowship",
      front: "Front Content 6",
      back: "Incharges",
      frontImage: "/images/ef.jpg",
      backImage: "/images/1.jpg",
      president: "Chairman - Rev.S.Salomon Soundara Dass",
      seceretary: "In Charge - Dr.J.Reeves Wesley",
      people: [
        { name: "Secretary: Mr. D. Rajkumar Davidson", image: "/images/e1.jpg" },
        { name: "Treasurer: Mr. S. Stephen Nicholas", image: "/images/e2.jpg" },
      ],
    },
  ];

  return (
    <div className="fellowship-container">
      <main className="fellowship-main">
        {/* <div className="fellowship-overlay"></div> */}
        <div className="fellowship-welcome-message">
          <h1>Fellowship</h1>
          <h2>
            who has called you into <span id="highlight">fellowship</span> with
            his Son
          </h2>
          <p>
            Church fellowships are vibrant communities within the congregation,
            each catering to specific groups such as men, women, youth, children,
            and seniors. They provide opportunities for spiritual growth, support,
            and service through activities like Bible studies, prayer meetings,
            and outreach programs. Fellowships foster unity, deepen faith, and
            encourage discipleship, helping members connect with one another and
            serve God collectively.
          </p>
        </div>
        <div className="flip-card-container">
          {cardData.map((card, index) => (
            <div key={index} className="flip-card">
              <h4 className="flip-card-title">{card.title}</h4>{" "}
              <div
                className={`flip-card-inner ${
                  flippedCard === index ? "flipped" : ""
                }`}
                onClick={() => setFlippedCard(flippedCard === index ? null : index)}
              >
                <div
                  className="flip-card-front"
                  style={{ backgroundImage: `url(${card.frontImage})` }}
                >
                  {/* <h3>{card.front}</h3> */}
                  {/* <p>Click to Flip</p> */}
                </div>
                <div
                  className="flip-card-back"
                  style={{ backgroundColor: "#F5EFFF" }}
                >
                  <h3>{card.back}</h3>
                  <div
                    className={`people-grid ${
                      card.title === "Women's Fellowship"
                        ? "womens-fellowship-grid"
                        : card.title === "Sunday School"
                        ? "sunday-school-grid"
                        : ""
                    }`}
                  >
                    {card.people &&
                      card.people.map((person, i) => (
                        <div key={i} className="person-card">
                          {person.image && (
                            <img src={person.image} alt={person.name} />
                          )}
                          <p>
                            <b className="p-head">{person.name.split(": ")[0]}</b>
                          </p>
                          <p>{person.name.split(": ")[1]}</p>
                        </div>
                      ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Fellowship;
