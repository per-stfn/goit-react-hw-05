import ClipLoader from "react-spinners/ClipLoader";
import s from "./Loader.module.css";

const Loader = () => {
  return (
    <div className={s.loaderWrapper}>
      <ClipLoader color="#36d7b7" size={60} />
    </div>
  );
};

export default Loader;
