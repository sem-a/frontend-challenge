import React from "react";
import { Container, FlexContainer } from "../container";
import styles from "./index.module.css";
import { Link, useLocation } from "react-router-dom";
import { PATHS } from "../../paths";

export const Header = () => {
  const location = useLocation();

  return (
    <div className={styles.header}>
      <Container>
        <div className={styles.header__menu}>
          <FlexContainer alignItems="center" justifyContent="flex-start">
            <Link
              to={PATHS.home}
              className={`${styles.menu__item} ${
                location.pathname === PATHS.home ? styles.__active : ""
              }`}
            >
              <p>Все котики</p>
            </Link>
            <Link to={PATHS.likes} className={`${styles.menu__item} ${
                location.pathname === PATHS.likes ? styles.__active : ""
              }`}>
              <p>Любимые котики</p>
            </Link>
          </FlexContainer>
        </div>
      </Container>
    </div>
  );
};
