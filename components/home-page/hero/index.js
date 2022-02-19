import Image from "next/image";

import classes from "./hero.module.css";

const Hero = () => {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image
          src="/images/site/meme.jpg"
          alt="Image that shows something"
          width={300}
          height={300}
        />
      </div>
      <h1>Hi I'm me</h1>
      <p>I blog about stuff - Coding, gaming, reading.</p>
    </section>
  );
};

export default Hero;
