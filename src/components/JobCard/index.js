import React from "react";
import "./styles.scss";

import numberWithCommas from "../../utils/numberWithCommas";

export default function JobCard({ job }) {
  return (
    <div className="JobCard">
      <h2>
        {job.title} | {job.company}
      </h2>
      <h3>${job.salary}</h3>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
        officiis nisi quos eaque corporis itaque fugiat repellendus quod!
        Adipisci corrupti, eligendi dignissimos omnis in sint doloremque
        repellendus delectus dolorum blanditiis possimus hic nulla, sequi
        perferendis? Officiis dolore ullam quod voluptatibus, nobis, at quia
        culpa neque dolorem voluptas sunt, reiciendis excepturi?
      </p>
      <a href="#">{job.contact_email}</a>
    </div>
  );
}
