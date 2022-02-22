import {
  Text,
  View,
  SafeAreaView,
  StyleSheet,
  Button,
  FlatList,
} from "react-native";
import React, { useState, useEffect, useCallback } from "react";
import InfoCard from "../../components/Card/InfoCard";
import FeedScreenStyle from "./FeedScreenStyle";
import Inputfield from "../../components/Inputfield/Inputfield";
import { useDispatch } from "react-redux";
import * as feedActions from "../../redux/actions/feedActions";
import { connect } from "react-redux";
import { useNavigation, useRoute } from "@react-navigation/native";

const FeedScreen = (props) => {
  //state
  const [input, setinput] = useState();
  const [page, setpage] = useState(2);
  const dispatch = useDispatch();
  const navigation = useNavigation();
 
  // passing propps to info screen base on the click even 
  const selectItemHandler = (id, title, description, embed_url) => {
    navigation.navigate("InfoScreen", {
      title: title,
      Id: id,
      Description: description,
      Embed_url: embed_url,
    });
  };

  // this function is worked as to gain data from child component, this function gain "text" from input field component
  const handleCallback = (a) => {
    console.log("Awais>>>>>>>>>>>>....", a);
    setpage(2);
    setinput(a);
  };
  // below funtion call api  
  const load_more = () => {
    // page is used for inncrement the page that give to api
    setpage(page + 1);
    console.log("pa>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>", page);
    dispatch(feedActions.fetchFeed_2(input, page));
  };

  // the API sometimes does not contain an image here we check if there is any image or else display a default image.
  const ViewRender = ({ item }) => {
    console.log(item);
    if (item.title && item.thumbnail_480_url) {
      return (
        <InfoCard
          title={item.title}
          image={item.thumbnail_480_url}
          onSelect={() => {
            selectItemHandler(
              item.id,
              item.title,
              item.description,
              item.embed_url
            );
          }}
        />
      );
    }
    else if(!item.thumbnail_480_url) {
      return (
        <InfoCard
          title={item.title}
          image={'https://thedietologist.com.au/wp-content/plugins/ninja-forms/assets/img/no-image-available-icon-6.jpg'}
          onSelect={() => {
            selectItemHandler(
              item.id,
              item.title,
              item.description,
              item.embed_url
            );
          }}
        />
      );
    }
  };


    

  return (
    <SafeAreaView style={FeedScreenStyle.container}>
      <View style={FeedScreenStyle.topContainer}>
        <View style={FeedScreenStyle.inputLayout}>
          <Inputfield parentCallback={handleCallback} />
        </View>
      </View>

      <View style={FeedScreenStyle.midContainer}>
        {props.pictures_arr != "undefined" &&  props.pictures_arr!= null && props.pictures_arr.length != null && props.pictures_arr.length > 0  ? (
          <View style={FeedScreenStyle.ListHolder}>
            <FlatList
              data={props.pictures_arr}
              keyExtractor={(item, index) => 'key'+index}
              renderItem={ViewRender}
              onEndReached={() => {
                load_more();
              }}
              onEndReachedThreshold={0}
            />
          </View>
        ) : (
          <View style={FeedScreenStyle.noData}>
            <Text style={{fontSize:30}}> Empty </Text>
          </View>
        )}
      </View>
    </SafeAreaView>
  );
};

// get data from redux 
const mapStateToProps = (state) => {
  return {
    pictures_arr: state.feedReducer.availableFeed,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(FeedScreen);
