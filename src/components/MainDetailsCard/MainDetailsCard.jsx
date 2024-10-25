import React from "react";
import styles from "./MainDetailsCard.module.scss";
import Card from "../Card/Card";
import Title from "../Title/Title";
import MAIN_DETAILS_HEADINGS from "../../enums/mainDetailsHeadings";

export default function MainDetailsCard({ mainDetails }) {
  function formatTechStack(values) {
    return values.join(", ");
  }

  return (
    <Card>
      <section>
        {Object.entries(mainDetails).map(([key, val]) => {
          if (key === "techStack") {
            val = formatTechStack(val);
          }

          return (
            <div className={styles.single_item} key={key}>
              <Title variant={3}>{MAIN_DETAILS_HEADINGS[key]}: </Title>
              <p>{val}</p>
            </div>
          );
        })}
      </section>
    </Card>
  );
}
