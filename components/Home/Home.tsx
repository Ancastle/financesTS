import * as React from "react";
import { Center } from "native-base";

// Components
import { TabsHeader } from "../Shared";

// Contexts
import { PreferencesContext } from "../Contexts";

// Types
import { Tab } from "../types";

// Utils
import { LANGUAGES } from "../statics";

const Home: React.FC = () => {
  const { appLanguage } = React.useContext(PreferencesContext);

  const tabs: Tab[] = [
    { key: "first", title: LANGUAGES.home.tabs.home[appLanguage] },
    { key: "second", title: LANGUAGES.home.tabs.history[appLanguage] },
  ];
  return (
    <TabsHeader
      tabs={tabs}
      firstRoute={<Center flex={1}>1</Center>}
      secondRoute={<Center flex={1}>2</Center>}
    />
  );
};

export default Home;
