import { Outlet } from "react-router-dom";

import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import useLanguage from "@/hooks/use-language";
import { useGetLayoutDataQuery } from "@/pages/map/api";
import { useSignals } from "@preact/signals-react/runtime";

const MainLayout = () => {
  useSignals();
  const { language } = useLanguage();
  useGetLayoutDataQuery(language.value);

  //   useEffect(() => {
  //     if (data) {
  //       translations.value[language.value] = {
  //         "footer.title": data.attributes.footer,
  //       };
  //     }
  //   }, [data]);

  return (
    <div className="h-[100dvh] max-h-[100dvh] flex flex-col transition-all duration-300 ease-in-out">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default MainLayout;
