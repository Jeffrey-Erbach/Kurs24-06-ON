import StandardBtn from "../../common/standard-btn/StandardBtn";
import CustomTextField from "../../common/custom/CustomTextField";
import styles from "./Navbar.module.css";

function Navbar({ lable, placeholder, value, onChange }) {
  return (
    <div className={styles.navbar}>
      <StandardBtn></StandardBtn>
      <CustomTextField
        label={lable}
        placeholder={placeholder}
        value={value}
        onChange={onChange}/>
    </div>
  );
}

export default Navbar;




