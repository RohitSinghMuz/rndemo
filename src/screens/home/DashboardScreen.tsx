import React, { useEffect } from 'react';
import { View, FlatList, Text } from 'react-native';
import dashboardData from 'src/assets/json/dashboardData';
import DashboardCard from 'src/commoncomponents/DashboardCard';
import { ProfileServices } from 'src/service/ProfileServices/ProfileServices';
import {ProfileHomeResponse } from 'src/service/ProfileServices/types';


const DashboardScreen = () => {

  useEffect(()=>{
    handleHomeAPICall()
  },[])

let handleHomeAPICall=()=>{

  let nameData={
    userId:'123',
    userName:'test',
  }
  ProfileServices.homeData(nameData)
  .then((response:ProfileHomeResponse.ProfileResponse)=>{
    console.log("ProfileResponse---",response);
    if(response){
      console.log("responmseData----response",response)
    }
  }
 )

}


  return (
    <View style={{ padding:12 }}>
      <FlatList
        data={dashboardData}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <DashboardCard item={item} />}
        // horizontal
        showsHorizontalScrollIndicator={false}
        numColumns={2}
      />
    </View>
  );
};

export default DashboardScreen;
