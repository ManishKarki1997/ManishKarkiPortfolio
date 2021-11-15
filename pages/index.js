import Head from "next/head";

import Header from "../components/Header";

export default function Home() {
  return (
    <>
      <Head>
        <title>Manish Karki</title>
      </Head>
      <Header />
      <div className="dark">
        <h1>Heading1</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis
          consectetur cumque aut quaerat consequatur eum commodi!
        </p>
      </div>
      <div style={{ marginTop: "2rem" }}>
        <h2>Heading2</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis
          consectetur cumque aut quaerat consequatur eum commodi!
        </p>
      </div>

      <div style={{ marginTop: "2rem" }}>
        <h3>Heading 3</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis
          consectetur cumque aut quaerat consequatur eum commodi!
        </p>
      </div>

      <div style={{ marginTop: "2rem" }}>
        <h4>Heading4</h4>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis
          consectetur cumque aut quaerat consequatur eum commodi!
        </p>
      </div>

      <div style={{ marginTop: "2rem" }}>
        <h5>Heading5</h5>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis
          consectetur cumque aut quaerat consequatur eum commodi!
        </p>
      </div>

      <div style={{ marginTop: "2rem" }}>
        <h6>Heading6</h6>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis
          consectetur cumque aut quaerat consequatur eum commodi!
        </p>
      </div>
    </>
  );
}
