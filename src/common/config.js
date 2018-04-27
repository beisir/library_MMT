module.exports = {
    app: {
        weixin: `https://testwx.hc360.com/mobileapp/transfer/proLogin`
        //
    },
    index_page: {
      // prodbytime: `http://wsprod.hc360.com/get/prodbytime?pageSize=10&pageNo=`,
      // prodbytime: `../manager/index?pageSize=10&pageNo=`
      prodbytime: 'http://localhost:8088/static/json/index.json'
        // prodbytime: `../manager/index`,
    },
    search: {
        historical: 'https://www.easy-mock.com/mock/5add78830f34ce6a67b6b97b/search'
    },
    classy: {
        prodcategory: `http://wsprod.hc360.com/get/prodcategory`
    },
    search_listPath: {
        prodbycat: 'http://wsprod.hc360.com/get/prodbycat?pageSize=6',
        prodbytitle: `http://wsprod.hc360.com/get/prodbytitle?pageSize=6`,
        prodbysupid: `http://wsprod.hc360.com/get/prodbysupid?pageSize=10`
    },
    detail: {
        prodinfo: `http://wsprod.hc360.com/get/prodinfo`,
        distribut: `http://10.158.33.232/distribut/save`
    },
    distribution: {
        getByOpenid: `http://10.158.33.232/distribut/getByOpenid`
    },
    errImg: 'https://style.org.hc360.com/images/microMall/program/proGimg.png'

}
