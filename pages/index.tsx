import Link from "next/link";
import { MainLayout } from "../components/layouts";

const Home = () => {
  return (
    <MainLayout>
      <h1 className="title2">
        Ir al{" "}
        <Link href="/about">
          <a>about</a>
        </Link>
      </h1>

      <p className="description">
        Get started by editing <code className="code">pages/index.tsx</code>
      </p>
    </MainLayout>
  );
};

export default Home;
