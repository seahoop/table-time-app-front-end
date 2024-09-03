
import './AboutUs.css';

const teamMembers = [
  {
    name: 'Ismael Perez',
    bio: 'Ismael holds a masters degree and has a rich background in education, having spent several years as a dedicated math teacher. His passion for problem-solving and logical thinking has led him to pivot into the tech world. He is currently sharpening his skills in a software engineering bootcamp, where he is excited to merge his teaching experience with his new expertise in coding.',
    photo: '/src/assets/Images/Ismael.png',
  },
  {
    name: 'Rodney Amadi',
    bio: 'Rodney is one class away from earning his bachelors degree and is proud to serve as a United States Marine. His commitment to discipline and leadership has driven him to pursue new challenges, including his current endeavor in a software engineering bootcamp. Rodney is excited to combine his military experience with his growing expertise in technology to make a meaningful impact in the tech industry.',
    photo: '/src/assets/Images/rodney.png',
  },
  {
    name: 'Eric Du',
    bio: 'Eric is a recent high school graduate with a strong passion for technology. He is set to study computer science in college, where he plans to deepen his understanding of the field. Currently, Eric is honing his skills in a software engineering bootcamp, eager to gain practical experience and jumpstart his career in tech.',
    photo: '/src/assets/Images/Eric.png',
  }
 
];

const AboutUs = () => {
  return (
    <div className="about-container">
      <h1>Meet Our Team</h1>
      {teamMembers.map((member, index) => (
        <div className="team-member" key={index}>
          <img src={member.photo} alt={`${member.name} Photo`} className="team-photo" />
          <h2>{member.name}</h2>
          <p>{member.bio}</p>
        </div>
      ))}
    </div>
  );
};

export default AboutUs;
