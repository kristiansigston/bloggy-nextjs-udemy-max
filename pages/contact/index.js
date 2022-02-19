import ContactForm from "../../components/contact/contact-form/index.js";
import Head from "next/head";
import { Fragment } from "react/cjs/react.production.min";
const ContactPage = () => {
  return (
    <Fragment>
      <Head>
        <title>Contact me</title>
        <meta name="description" content="a form to contact me" />
      </Head>
      <ContactForm />;
    </Fragment>
  );
};

export default ContactPage;
