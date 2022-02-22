import { Text, View } from "react-native";
import * as eva from "@eva-design/eva";
import { ApplicationProvider, IconRegistry } from "@ui-kitten/components";
import { EvaIconsPack } from "@ui-kitten/eva-icons";
import Navigator from "./src/navigation/Navigator";
import { Provider } from "react-redux";
import { Store } from "./src/redux/store";




export default function App() {
  return (
    <>
   

  
    <IconRegistry icons={EvaIconsPack} />
    <ApplicationProvider {...eva} theme={eva.light}>
    <Provider store={Store}>
    <Navigator />
    </Provider>
    </ApplicationProvider>

   
  </>
  );
}
