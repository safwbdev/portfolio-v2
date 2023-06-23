import { PROFILE_LOADING } from "../../constants/lang";
import style from "./LoadScreen.module.scss";

const LoadScreen = ({value}) => {
  const percentage = `${Math.round(value)}%`;
  return(
    <div className={style.loadScreen}>
      <h1>{percentage}</h1>
      <h2>{PROFILE_LOADING}</h2>
    </div>)
}
export default LoadScreen;
