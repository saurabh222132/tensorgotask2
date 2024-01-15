import styles from "./styles.module.css";
import { selectLoggedInUser } from "../../features/auth/authSlice";
import { useSelector } from "react-redux";
import NavBarComponent from "../../features/navbar/components/navbarcom";
import { Homepage } from "../../features/linkPages/homepage";

function Home() {
  return (
    <div className="">
      <NavBarComponent children={<Homepage></Homepage>}></NavBarComponent>
    </div>
  );
}

export default Home;
