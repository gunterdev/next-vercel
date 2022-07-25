import { MainLayout } from "../components/layouts";
import Link from "next/link";

const Contact = () => {
  return (
    <>
      <MainLayout>
        <h1 className="title">
          Ir al{" "}
          <Link href={"/"}>
            <a>Otro Sitio</a>
          </Link>
        </h1>

        <p className="description">
          Get started by editing <code className="code">pages/contact.tsx</code>
        </p>
      </MainLayout>
    </>
  );
};
export default Contact;
