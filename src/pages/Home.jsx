import { Navbar } from "../components/index";
import { Footer } from "../components/index";
import { JobListing } from "../components/index";
import { Helmet } from "react-helmet-async";
import { useTranslation } from "react-i18next";

function Home() {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col min-h-screen">
      <Helmet>
        <title>{t("jobsworknow")}</title>
        <meta name="description" content="Jobs | WorkNow" />
      </Helmet>
      <Navbar />
      <main className="flex-1">
        <JobListing />
      </main>
      <Footer />
    </div>
  );
}

export default Home;
