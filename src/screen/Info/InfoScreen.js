import { View, Text} from "react-native";
import { useRoute } from "@react-navigation/native";
import { WebView } from "react-native-webview";
import { Card } from "@ui-kitten/components";
import InfoScreenStyle from "./InfoScreenStyle"



const InfoScreen = () => {
  const route = useRoute();


  return (
    <View style={InfoScreenStyle.mainHolder}>
      <View style={InfoScreenStyle.videoHolder}>
      {route.params.Embed_url  ?(
        <WebView
         style={{borderRadius:10}}
          source={{ uri: route.params.Embed_url }}
          originWhitelist={["https://*"]}
          startInLoadingState={true}
          renderLoading={() => <View style={InfoScreenStyle.loddingHolder}>
               <Text style={InfoScreenStyle.loddingText}>...Lodding</Text>
          </View> }
        />

      ):(

        <View style={InfoScreenStyle.noOutput}>
          <Text style={InfoScreenStyle.noOutputText}>No video output </Text>
        </View>
      )}
    
      </View>

      <View style={InfoScreenStyle.mainHolder}>
      <Card style={InfoScreenStyle.Card}>
        <Text>Title: {route.params.title}</Text>
        {route.params.Description ? (
          <Text>Description: {route.params.Description}</Text>
        ) : (
          <Text style={InfoScreenStyle.descriptionText}>Description: No Description</Text>
        )}
      
       </Card>
         

      </View>
    </View>
  );
};


export default InfoScreen;