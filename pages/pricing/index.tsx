import { MainLayout } from "../../components/layouts";
import Link from "next/link";

const Pricing = () => {
  return (
    <>
      <h1>Pricing</h1>
      <h1 className="title">
        Ir al{" "}
        <Link href={"/"}>
          <a>Otro Sitio</a>
        </Link>
      </h1>

      <p className="description">
        Get started by editing <code className="code">pricing/contact.tsx</code>
      </p>
    </>
  );
};

Pricing.getLayout = (page: JSX.Element) => {
  return <MainLayout>{page}</MainLayout>;
};

export default Pricing;
