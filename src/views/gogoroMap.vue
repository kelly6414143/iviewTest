<template>
  <div class="gmap">
    <Input
      style="width:50%; position:relative"
      search
      enter-button
      placeholder="Enter something..."
      @on-search="searchKeyword"
      @on-change="keyword"
      v-model="searchLocName"
    />
    <div
      v-if="searchLocName"
      style="width:49%; background-color: steelblue;position:absolute;z-index:60"
    >
      <div
        v-for="data in keywordDatas"
        @click="selectLocName(data)"
        style="border-bottom: 1px solid grey; line-height: 30px; color: white;"
      >{{data.LocName}}</div>
    </div>
    <div style="margin-top: 50px">
      <Card v-if="currentLocName" :bordered="false" class="card">
        <p slot="title">{{currentLocName}}</p>
        <p>{{currentAddress}}</p>
        <img
          v-for="(photos,index) in cuurentPhoto"
          :src="photos"
          style="width:200px;display: block"
          alt="storephoto"
        >
      </Card>
      <GmapMap
        :center="currentLoc"
        :zoom="zoomIn"
        ref="gmap"
        map-type-id="terrain"
        style="min-width: 1000px; min-height: 800px"
      >
        <GmapMarker
          :key="index"
          v-for="(area, index) in listArr"
          :position="area.position"
          :clickable="true"
          :draggable="true"
          @click="selectLocation(area)"
        />
      </GmapMap>
    </div>
  </div>
</template>
<script>
import { load, Map, Marker } from "vue2-google-maps";
// load('YOUR_API_TOKEN','OPTIONAL VERSION NUMBER')
export default {
  data() {
    return {
      currentLoc: { lat: 24, lng: 120 },
      zoomIn: 7,
      data: [],
      listArr: [],
      count: 0,
      currentLocName: "",
      currentAddress: "",
      cuurentPhoto: "",
      locnameArr: [],
      addressArr: [],
      LatitudeArr: [],
      LongitudeArr: [],
      photoArr: [],
      searchLocName: "",
      keywordDatas: []
    };
  },
  created() {
    this.initDatas();
  },
  methods: {
    // initDatas() {
    //   this.axios
    //     .get("https://webapi.gogoro.com/api/vm/list")
    //     .then(response => {
    //       for (var i in response.data) {
    //         this.data = response.data;
    //         this.jsonArr(this.data[i]);
    //       }
    //     })
    //     .catch(response => {});
    // },
    jsonArr(location) {
      // console.log(location)
      let { LocName, Address, Latitude, Longitude, StorePhoto } = location;

      let locnameCN = JSON.parse(LocName).List.filter(
        x => x.Lang === "zh-TW"
      )[0]["Value"];
      let addressCN = JSON.parse(Address).List.filter(
        x => x.Lang === "zh-TW"
      )[0].Value;
      // console.log(addressCN)

      this.locnameArr.push(locnameCN);
      this.addressArr.push(addressCN);
      this.LatitudeArr.push(Latitude);
      this.LongitudeArr.push(Longitude);
      this.photoArr.push(StorePhoto);

      this.count += 1;

      while (this.count === this.data.length) {
        this.restructureListArr(StorePhoto);
        count += 1;
      }
    },
    restructureListArr() {
      //   console.log({ LocName: this.addressArr[1] }, { Address: this.cityArr[1] });
      for (var i = 0; i < this.data.length; i++) {
        this.listArr.push({
          LocName: this.locnameArr[i],
          Address: this.addressArr[i],
          position: {
            lat: this.LatitudeArr[i],
            lng: this.LongitudeArr[i]
          },
          StorePhoto: this.photoArr[i]
        });
      }
      console.log(this.listArr);
      this.data = this.listArr;
      this.count = 0;
    },
    async selectLocation(dataList) {
      console.log(dataList);
      //set Googlemap
      this.currentLoc.lat = dataList.position.lat;
      this.currentLoc.lng = dataList.position.lng;
      this.currentLocName = dataList.LocName;
      this.currentAddress = dataList.Address;
      this.cuurentPhoto = dataList.StorePhoto;
      this.zoomIn = 12;
      // this.$refs.gmap.panTo(this.currentLoc);
      // console.log(this.currentLoc);
      try {
        // let data = await this.getPosition();
        // console.log("--success", data);
        // console.log("typeof", typeof data);
        // let data2 = {};
        // data2.lat = data.coords.latitude;
        // data2.lng = data.coords.longitude;
        // data2.alt = data.coords.altitude;
        // data2.accLatlng = data.coords.accuracy;
        // data2.accAlt = data.coords.altitudeAccuracy;
        // data2.heading = data.coords.heading; //0=北,90=東,180=南,270=西
        // data2.speed = data.coords.speed;
        // Object.assign(data2,data.coords); // not work
        // this.$set(this.currentLoc,"data2",data.coords);//not work
        // console.log("data2", data2);
        // this.$set(this.currentLoc, "coords", data2);
        //set Googlemap
        // this.currentLoc.lat = data2.lat;
        // this.currentLoc.lng = data2.lng;
        // this.zoomIn = 15
        // console.log(this.currentLoc)
        // this.$refs.gmap.panTo(this.currentLoc);
      } catch (e) {
        // console.log("--error", e);
      }
    },
    searchKeyword() {
      this.data = this.listArr.filter(
        x => x.LocName.indexOf(this.searchLocName) !== -1
      );
      // console.log
    },
    keyword() {
      // console.log("ok");
      // console.log(this.listArr)
      this.keywordDatas = this.listArr.filter(
        x => x.LocName.indexOf(this.searchLocName) != -1
      );
      // this.initDatas()
      // console.log(this.keywordDatas);
    },
    selectLocName(param) {
      console.log(param);
      this.searchLocName = param.LocNam;
      this.selectLocation(param);
      this.searchKeyword();
      this.keywordDatas = [];
      // this.keyword()
    }
  }
};
</script>
<style scoped>
.gmap {
  position: relative;
}
.card {
  position: absolute;
  z-index: 50;
  top: 100px;
  left: 100px;
}
</style>