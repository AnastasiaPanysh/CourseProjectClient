import style from "./style.module.css";
import { Link } from "react-router-dom";
import { Text, Button } from "@mantine/core";

function Header() {
  return (
    <div className={style.wrapper}>
      <Text size="lg" weight={500}>
        WHAT SHOULD U WATCH
      </Text>
      <div className={style.containerBtns}>
        <Link to="/login">
          <Button>Sign in</Button>
        </Link>
        <Link to="/reg">
          <Button variant="outline">Sign up</Button>
        </Link>
      </div>
    </div>
  );
}

export default Header;
