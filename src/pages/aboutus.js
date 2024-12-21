import React from "react";
import Footer from "../components/footer";
import "./aboutus.css";

const AboutUs = () => {
  const pcMembers = [
    { name: "Mr. N.G.R Christopher Selvaraj", role: "Secretary", image: "images/pc/ngr.jpg" },
    { name: "Mr C. Susikar Moses", role: "Treasurer", image: "images/pc/susikar.jpg" },
    { name: "Mr. K. Devaraj", role: "", image: "images/pc/devaraj.jpg" },
    { name: "Mr. Vinoth", role: "", image: "images/pc/vinoth.jpg" },
    { name: "Mr. Sathyaraj", role: "", image: "images/pc/sathyaraj.jpg" },
    { name: "Mr. Wesley John", role: "", image: "images/pc/wesley.jpg" },
    { name: "Mr. Alex Gladson", role: "", image: "images/pc/alex.jpg" },
    { name: "Mrs. Shirley Mathanraj", role: "", image: "images/pc/shirley.png" },
    { name: "Member 9", role: "Role 9", image: "images/members/member9.jpg" },
    { name: "Member 10", role: "Role 10", image: "images/members/member10.jpg" },
    { name: "Member 11", role: "Role 11", image: "images/members/member11.jpg" },
    { name: "Member 12", role: "Role 12", image: "images/members/member12.jpg" },
    { name: "Member 13", role: "Role 13", image: "images/members/member13.jpg" },
    { name: "Member 14", role: "Role 14", image: "images/members/member14.jpg" },
    { name: "Member 15", role: "Role 15", image: "images/members/member15.jpg" },
    { name: "Member 16", role: "Role 16", image: "images/members/member16.jpg" },
    { name: "Member 17", role: "Role 17", image: "images/members/member17.jpg" },
    { name: "Member 18", role: "Role 18", image: "images/members/member18.jpg" },
  ];

  return (
    <>
      <main className="about-main">
        <div className="head">
          <h1>About the Church</h1>
          <h2>Built on His Rock</h2>
        </div>

        <div className="section">
          <img src="images/media/c2.png" alt="St. Matthews Church" />
          <div className="write-up">
            <p>
              Protestant Christianity reached Chennai nearly 300 years ago and later spread to Tamil Nadu through the efforts of the Wesleyan Methodist Missionary Society (WMM) and the Church of Scotland Mission (CSM). Rev. John Anderson of CSM arrived in 1837, establishing schools and congregations, while James Lynch, the first Methodist missionary to India, arrived in 1817, preaching and building churches in Royapettai and Broadway. By the 1870s, Methodist missionaries extended their work to rural villages, preaching in Tamil and seeing growth among oppressed communities.
            </p>
            <p>
              Tambaram, once a small village, evolved significantly over time. The Beach-Tambaram electric railway terminal (1931), the relocation of Madras Christian College (1937), and the establishment of the Air Force Station (1942) contributed to its transformation into a thriving town. Christianity in Tambaram began with evangelistic efforts from Vandalur, culminating in Rev. William Gnanananda baptizing 11 members on December 21, 1929, forming the first congregation amid opposition.
            </p>
            <p>
              When the Church of South India (CSI) was formed in 1947, Tambaram's Christian presence strengthened. The foundation stone for the Church of Jesus the Lord was laid on January 16, 1954, by Rt. Rev. A. M. Hollis, with the motto "That they all may be one." Dedicated on April 13, 1954, the church became a beacon of worship and unity, embodying the mission to “Worship the Lord in the beauty of Holiness.”
            </p>
          </div>
        </div>

        <div className="pc-members">
          <h2>PC Members</h2>
          <div className="grid-container">
            {pcMembers.map((member, index) => (
              <div key={index} className="member">
                <img src={member.image} alt={member.name} />
                <h3>{member.name}</h3>
                <p>{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default AboutUs;
