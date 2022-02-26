import React from "react";
import Avatar, { UserName } from "../../components/Avatar";
import Button from "../../components/Button";
import Icon from "../../components/Icon";
import TypoGraphy from "../../components/TypoGraphy";
import { RiLogoutBoxLine } from "react-icons/ri";
import styles from "./PageHeader.module.css";

export default function PageHeader() {
  const user = { name: "Harm de Kluiver", hexColor: "#f1c232" };
  return (
    <header className={styles.pageheader}>
      <TypoGraphy.Heading>🤫 Elite Developer Secrets</TypoGraphy.Heading>
      <div className={styles.pageheader__right}>
        <UserName user={user} />
        <Avatar user={user} />
        <Button>
          <Icon color={"white"}>
            <RiLogoutBoxLine />
          </Icon>
          Logout
        </Button>
      </div>
    </header>
  );
}
