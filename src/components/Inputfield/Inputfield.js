import React from "react";
import { TouchableWithoutFeedback, StyleSheet, View,Keyboard } from "react-native";
import { Icon, Input, Text } from "@ui-kitten/components";
import * as feedActions from '../../redux/actions/feedActions'
import { useSelector, useDispatch } from 'react-redux';

export const Inputfield = (props) => {
  // state
  const [value, setValue] = React.useState("");
  const zoomIconRef = React.useRef();
  const dispatch = useDispatch();

  // onclick event listener
  const search =() => {
    zoomIconRef.current.startAnimation()
    props.parentCallback(value)
    dispatch(feedActions.fetchFeed(value,1));
    Keyboard.dismiss();
  }

  const renderIcon = (props) => (
    <TouchableWithoutFeedback
      onPress={search}
    >
      <Icon
        {...props}
        name="search-outline"
        ref={zoomIconRef}
        animation="zoom"
      />
    </TouchableWithoutFeedback>
  );

  return (
    <Input
      value={value}
      placeholder="Search"
      accessoryRight={renderIcon}
      onChangeText={(nextValue) => setValue(nextValue)}
      onSubmitEditing ={search}
    />
  );
};

export default Inputfield;
