const hostname = 'https://wsprod.hc360.com';
module.exports = {
    app: {
        weixin: `https://madata.hc360.com/mobileapp/transfer/proLogin`
    },
    index_page: {
        prodbytime: `${hostname}/get/prodbytime?pageSize=10&pageNo=`,
    },
    classy: {
        // prodcategory: `${hostname}/get/prodcategory`
        prodcategory: `${hostname}/get/prodcategorynew`
    },
    search_listPath: {
        prodbycat: `${hostname}/get/prodbycat?pageSize=6`,
        prodbytitle: `${hostname}/search?pageSize=6`,
        prodbysupid: `${hostname}/get/prodbysupid?pageSize=10`,
        byCatid: `${hostname}/findProdsByCatid?pageSize=6`
    },
    detail: {
        prodinfo: `${hostname}/get/prodinfo`,
        distribut: `${hostname}/distribut/save`,
        addCompared: `${hostname}/addCompared`,  // 添加商品到对比库,
        prodsNum: `${hostname}/findComparedProdsNum`,
        deleteCompared: `${hostname}/deleteComparedProd`,
        ssohelper: 'http://mlogin.hc360.com/get/prod/ssohelper'
    },
    distribution: {
        getByOpenid: `${hostname}/distribut/getByOpenid`
    },
    pro_contrast: {
        comparedProds: `${hostname}/findComparedProds`      // 对比页面列表
    },
    contrast2: {
        productWithAtts: `${hostname}/findProductWithAttsnew`
    },
    manage: {
        addUser: `${hostname}/addUseridentity`,
        getUser: `${hostname}/getUseridentity`
    },
    news: {
        getinfoCMS: `${hostname}/getinfoCMS?prodid=`,
        getinfo: `${hostname}/getinfo/?pagesize=30`
    },
    errImg: 'https://style.org.hc360.com/images/cpk/pc/nImg.png'

}
