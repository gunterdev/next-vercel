import Link from "next/link";
import { MainLayout, DarkLayout } from "../components/layouts";

const About = () => {
  return (
    <>
      <h1 className="title">
        Ir al{" "}
        <Link href={"/"}>
          <a>Home</a>
        </Link>
      </h1>

      <p className="description">
        Get started by editing <code className="code">pages/about.tsx</code>
      </p>
    </>
  );
};

About.getLayout = function getLayout(page: JSX.Element) {
  return (
    <MainLayout>
      <DarkLayout>{page}</DarkLayout>
    </MainLayout>
  );
};

export default About;
