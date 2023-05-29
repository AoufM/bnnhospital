import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import styled from "styled-components";

const articles = () => {
  return (
    <>
      <Navbar />
      <Announcement>
        <HeroSection
          category="Announcement"
          description="Free eye checkup for bsc.it students on 24/4/2023"
          url="#"
        />
        <HeroSection
          category="3 SIMPLE HABITS FOR STUDENTS TO MAINTAIN GOOD HEALTH"
          description="As a student, it can be easy to get caught up in the hustle and bustle of everyday life. Between attending classes, studying for exams, and socializing with friends, it can be hard to find time to prioritize your health. However, taking care of your physical and mental well-being is crucial for your academic success and overall happiness. Here are five simple habits you can incorporate into your daily routine to maintain good health.
          1.Get Enough Sleep: Aim for seven to eight hours of sleep per night to feel well-rested and alert throughout the day.
          2.Eat a Balanced Diet: Eating a balanced diet is important for maintaining good health. Make sure you are getting a variety of fruits, vegetables, whole grains, lean proteins, and healthy fats in your diet.
          3.Exercise Regularly: Regular exercise is not only good for your physical health but also your mental health. Aim for at least 30 minutes of physical activity per day, whether that's a brisk walk, yoga class, or strength training session."
          url="#"
        />
        <HeroSection
          category="HOW TO PERFROM BEST DURING EXAM SEASON"
          description="1.Take Breaks and Move Your Body: Sitting for long periods of time can be harmful to your physical health and may cause fatigue and decreased concentration. Take regular breaks to move your body, stretch, or go for a short walk. This can help improve your focus and energy levels.
          2.Stay Hydrated: Drinking enough water is important for maintaining good health and energy levels. Aim to drink at least eight glasses of water per day. If you struggle to drink enough water, consider adding fruit or herbs to your water for flavor, or carrying a water bottle with you throughout the day to remind you to drink.
          3.Practice Stress-Relieving Activities: Stress is common during exam season, but it's important to manage it effectively. Incorporate stress-relieving activities into your routine, such as meditation, deep breathing, or yoga. Taking breaks to engage in activities you enjoy, such as listening to music, reading a book, or spending time with friends, can also help you manage stress.
          By incorporating these habits into your routine, you can help manage stress and perform your best on exams."
          
          url="#"
        />
      </Announcement>
      <Footer />
    </>
  );
};

export default articles;

const Announcement = styled.div`
  .heroCard {
    :nth-child(1) {
      background-color: #fb5353;
      color: #fff;
    }
  }
`;
