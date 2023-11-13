import AboutMeCarousel from "../../components/main/AboutMeCarousel";
import Landing from "../../components/main/Landing";
import MyProjects from "../../components/main/MyProjects";

export default function Home() {
  return (
    <main>
      <Landing />
      <AboutMeCarousel />
      <MyProjects />
    </main>
  )
}
