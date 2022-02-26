import React from "react";
import Avatar, { UserName } from "../../components/Avatar";
import Button from "../../components/Button";
import Icon from "../../components/Icon";
import TypoGraphy from "../../components/TypoGraphy";
import { RiLogoutBoxLine } from "react-icons/ri";
import styles from "./PageHeader.module.css";
import LoggedInContent from "../../components/LoggedInContent";
import LoggedOutContent from "../../components/LoggedOutContent";

export default function PageHeader({ user }) {
  return (
    <header className={styles.pageheader}>
      <TypoGraphy.Heading>🤫 Elite Developer Secrets</TypoGraphy.Heading>
      <div className={styles.pageheader__right}>
        <LoggedInContent user={user}>
          <UserName user={user} />
          <Avatar user={user} />
          <Button>
            <Icon color={"white"}>
              <RiLogoutBoxLine />
            </Icon>
            Logout
          </Button>
        </LoggedInContent>
        <LoggedOutContent user={user}>
          <TypoGraphy.Heading size="h4">
            login to share your secrets
          </TypoGraphy.Heading>
        </LoggedOutContent>
      </div>
    </header>
  );
}
