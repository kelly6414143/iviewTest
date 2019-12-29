<template>
  <div class="map">
   <selecte-list></selecte-list>
    <!-- <div style="margin-bottom: 20px">
      <Input
        style="width:50%; position:relative"
        search
        enter-button
        placeholder="Enter something..."
        @on-change="keyword"
        v-model="searchLocName" -->
      <!-- /> -->
      <!-- <div
        v-if="searchLocName"
        style="width:49%; background-color: steelblue;position:absolute;z-index:10"
      >-->
      <!-- <div
          v-for="data in keywordDatas"
          @click="selectLocName(data.LocName)"
          style="border-bottom: 1px solid grey; line-height: 30px; color: white;"
        >{{data.LocName}}</div>
      </div>-->
    <!-- </div>
    <Table :columns="columns1" :data="data | searchKeyword"></Table> -->
  </div>
</template>
<script>
import selecteList from '../components/list'

export default {
  components:{
    'selecte-list':selecteList
  },
  data() {
    return {
      // columns1: [
      //   {
      //     title: "LocName",
      //     key: "LocName"
      //   },
      //   {
      //     title: "Address",
      //     key: "Address"
      //   },
      //   {
      //     title: "District",
      //     key: "District"
      //   },
      //   {
      //     title: "City",
      //     key: "City"
      //   }
      // ],
      // data: [],
      // listArr: [],
      // addressArr: [],
      // cityArr: [],
      // districtArr: [],
      // locnameArr: [],
      // count: 0,
      // searchLocName: "",
      // keywordDatas: []
    };
  },
  created() {
    // this.initDatas();
  },
  filters: {
    // searchKeyword() {
    //   if(this.searchLocName){
    //   this.data = this.listArr.filter(
    //     x => x.LocName.indexOf(this.searchLocName) !== -1
    //   );
    //   return this.data;
    //   }
    // }
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
    jsonArr(locname) {
      // console.log(locname)
      let { LocName, Address, District, City } = locname;
      // console.log(JSON.parse(LocName).List);
      let locnameCN = JSON.parse(LocName).List.filter(
        x => x.Lang === "zh-TW"
      )[0]["Value"];
      // console.log(JSON.parse(LocName).List.filter(
      //   x => x.Lang === "zh-TW"
      // ))
      let addressCN = JSON.parse(Address).List.filter(
        x => x.Lang === "zh-TW"
      )[0]["Value"];
      let cityCN = JSON.parse(City).List.filter(x => x.Lang === "zh-TW")[0][
        "Value"
      ];

      // let data = [
      //   {Value: "Carrefour TC ZZ Store", Lang: "en-US"},{Value: "家樂福中正店站", Lang: "zh-TW"}
      // ]
      // console.log(data.Lang)

      let districtCN = JSON.parse(District).List.filter(
        x => x.Lang === "zh-TW"
      )[0]["Value"];

      this.count += 1;
      this.locnameArr.push(locnameCN);
      this.addressArr.push(addressCN);
      this.cityArr.push(cityCN);
      this.districtArr.push(districtCN);
      // this.listArr= []

      while (this.count === this.data.length) {
        // console.log(this.addressArr);
        this.restructureListArr();
        count += 1;
      }
    },
    restructureListArr() {
      //   console.log({ LocName: this.addressArr[1] }, { Address: this.cityArr[1] });
      for (var i = 0; i < this.data.length; i++) {
        this.listArr.push({
          LocName: this.locnameArr[i],
          Address: this.addressArr[i],
          District: this.districtArr[i],
          City: this.cityArr[i]
        });
        // this.listArr.push({Address:this.cityArr[i]});
      }
      // console.log(this.listArr);
      if (this.searchLocName) {
        this.data = this.listArr.filter(
          x => x.LocName.indexOf(this.searchLocName) !== -1
        );
      }
      this.data = this.listArr;
      this.count = 0;
    },
    // searchKeyword() {
    //   this.data = this.listArr.filter(
    //     x => x.LocName.indexOf(this.searchLocName) !== -1
    //   );
    //   // console.log
    // },
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
      this.searchLocName = param;
      this.searchKeyword();
      this.keywordDatas = [];
      // this.keyword()
    }
  }
};
</script>
