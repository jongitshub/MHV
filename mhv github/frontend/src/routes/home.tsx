import HomeDash from "../components/HomeDashCards";
import ThemeController from "../components/ThemeController";


function HomePage() {
  return (
    <div className="bg-gray-100">
    <ThemeController/>
    <HomeDash />
    <div className="bg-gray-100">
    <h1 className="justify-self-center text-7xl font-serif p-10">
      Get the Right Care, Right Now!</h1>
    </div>
    </div>
  )
}

export default HomePage;
