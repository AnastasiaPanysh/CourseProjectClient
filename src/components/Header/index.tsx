import style from "./style.module.css";
import { Link } from "react-router-dom";
import { Text, Button } from "@mantine/core";
import useTheme from "../../hooks/useTheme";
import { IconSun, IconMoonStars } from '@tabler/icons-react';

function Header() {
  const { isDark, setIsDark } = useTheme();

  return (
    <div className={style.wrapper}>
      <div className='btn-link' onClick={() => setIsDark(!isDark)}>
        {isDark ? <IconSun size="1.1rem" /> : <IconMoonStars size="1.1rem" />}
      </div>
      <Text size="lg" weight={500}>
        WHAT SHOULD U WATCH/READ/PLAY
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
