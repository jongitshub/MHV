import { SignedIn } from "@clerk/clerk-react";
import HomeDash from "../components/HomeDashCards";


function HomePage() {
  return (
    <SignedIn>
      <div className="bg-gray-100">
    <HomeDash />
    <div className="bg-gray-100">
    <h1 className="justify-self-center text-7xl font-serif p-10">
      Get the Right Care, Right Now!</h1>
    </div>
    </div>
    </SignedIn>
  )
}

export default HomePage;
