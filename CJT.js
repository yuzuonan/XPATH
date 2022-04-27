{
  "ua": "",
  "homeUrl": "https://cjt521.com",
  "dcVipFlag": "true",
  "dcPlayUrl": "true",
  "dcShow2Vip": {},
  "cateManual": {
    "电影": "SCCCCS", 
    "剧集": "qCCCCS",
    "综艺": "xCCCCS",
    "动漫": "ICCCCS"
  },

// Home Summary ================================================  
  "homeVodNode": "//div[contains(@class,'lists-content')]/ul/li/a",
  "homeVodName": "/@title",
  "homeVodId": "/@href",
  "homeVodIdR": "/index.php/vod/detail/id/(\\w+).html",
  "homeVodImg": "/@data-original",
  "homeVodMark": "/span/text()",

// Category Summary ================================================  
  "cateUrl": "https://cjt521.com/index.php/vod/show{area}/id/{cateId}/page/{catePg}{year}.html",
  "cateVodNode": "//div[contains(@class,'lists-content')]/ul/li/a",
  "cateVodName": "/@title",
  "cateVodId": "/@href",
  "cateVodIdR": "/index.php/vod/detail/id/(\\w+).html",
  "cateVodImg": "/@data-original",
  "cateVodMark": "/div/span/text()",

// Category Details ================================================    
  "dtUrl": "https://cjt521.com/index.php/vod/detail/id/{vid}.html",
  "dtNode": "//header[@class='product-header']",
  "dtName": "//img[contains(@referrerpolicy,'no-referrer')]/@alt",
  "dtImg": "//img[contains(@referrerpolicy,'no-referrer')]/@src",
  "dtCate": "",
  "dtArea": "",
  "dtYear": "",
  "dtActor": "",
  "dtDirector": "",
  "dtDesc": "",

// Playlist =====================================================     
  "dtFromNode": "//div[contains(@class, 'playlists')]/header/dl/dt",
  "dtFromName": "/text()",
  "dtUrlNode": "//div[contains(@class, 'playlist clearfix')]/ul",
  "dtUrlSubNode": "/li/a",
  "dtUrlId": "@href",
  "dtUrlIdR": "/index.php/vod/play/id/(\\S+).html",
  "dtUrlName": "/text()",
  "dtUrlNameR": "",
  "playUrl": "https://cjt521.com/index.php/vod/play/id/{playUrl}.html",
  "playUa": "",

// Search Results ================================================         
  "searchUrl": "https://cjt521.com/index.php/ajax/suggest?mid=1&wd={wd}&limit=10",
  "scVodNode": "json:list",
  "scVodName": "name",
  "scVodId": "id",
  "scVodIdR": "",
  "scVodImg": "pic",
  "scVodMark": "",

// Filters =======================================================    
    "filter": {
      "SCCCCS": [
        {
          "key": "area",
          "name": "地区",
          "value": [
            {"n": "全部","v": ""},
            {"n": "中国","v": "/area/大陆"},
            {"n": "香港","v": "/area/香港"},
            {"n": "台湾","v": "/area/台湾"},
            {"n": "美国","v": "/area/美国"},
            {"n": "英国","v": "/area/英国"},
            {"n": "日本","v": "/area/日本"},
            {"n": "韩国","v": "/area/韩国"},
            {"n": "泰国","v": "/area/泰国"},
            {"n": "其他","v": "/area/其它"}
          ]
        },
        {
          "key": "year",
          "name": "年份",
          "value": [
            {"n": "全部","v": ""},
            {"n": "2022","v": "/year/2022"},
            {"n": "2021","v": "/year/2021"},
            {"n": "2020","v": "/year/2020"},
            {"n": "2019","v": "/year/2019"},
            {"n": "2018","v": "/year/2018"},
            {"n": "2017","v": "/year/2017"},
            {"n": "2016","v": "/year/2016"},
            {"n": "2015","v": "/year/2015"},
            {"n": "2014","v": "/year/2014"},
            {"n": "2013","v": "/year/2013"},
            {"n": "2012","v": "/year/2012"},
            {"n": "2011","v": "/year/2011"},
            {"n": "2010","v": "/year/2010"},
            {"n": "2009","v": "/year/2009"},
            {"n": "2008","v": "/year/2008"}
          ]
        }
      ],
      "qCCCCS": [
        {
          "key": "area",
          "name": "地区",
          "value": [
            {"n": "全部","v": ""},
            {"n": "中国","v": "/area/大陆"},
            {"n": "香港","v": "/area/香港"},
            {"n": "台湾","v": "/area/台湾"},
            {"n": "美国","v": "/area/美国"},
            {"n": "英国","v": "/area/英国"},
            {"n": "日本","v": "/area/日本"},
            {"n": "韩国","v": "/area/韩国"},
            {"n": "泰国","v": "/area/泰国"},
            {"n": "其他","v": "/area/其他"}
          ]
        },
        {
          "key": "year",
          "name": "年份",
          "value": [
            {"n": "全部","v": ""},
            {"n": "2022","v": "/year/2022"},
            {"n": "2021","v": "/year/2021"},
            {"n": "2020","v": "/year/2020"},
            {"n": "2019","v": "/year/2019"},
            {"n": "2018","v": "/year/2018"},
            {"n": "2017","v": "/year/2017"},
            {"n": "2016","v": "/year/2016"},
            {"n": "2015","v": "/year/2015"},
            {"n": "2014","v": "/year/2014"},
            {"n": "2013","v": "/year/2013"},
            {"n": "2012","v": "/year/2012"},
            {"n": "2011","v": "/year/2011"},
            {"n": "2010","v": "/year/2010"},
            {"n": "2009","v": "/year/2009"},
            {"n": "2008","v": "/year/2008"}
          ]
        }
      ],
      "ICCCCS": [
        {
          "key": "area",
          "name": "地区",
          "value": [
            {"n": "全部","v": ""},
            {"n": "日本","v": "/area/日本"},
            {"n": "中国","v": "/area/大陆"},
            {"n": "欧美","v": "/area/欧美"},
            {"n": "其他","v": "/area/其他"}
          ]
        },
        {
          "key": "year",
          "name": "年份",
          "value": [
            {"n": "全部","v": ""},
            {"n": "2022","v": "/year/2022"},
            {"n": "2021","v": "/year/2021"},
            {"n": "2020","v": "/year/2020"},
            {"n": "2019","v": "/year/2019"},
            {"n": "2018","v": "/year/2018"},
            {"n": "2017","v": "/year/2017"},
            {"n": "2016","v": "/year/2016"},
            {"n": "2015","v": "/year/2015"},
            {"n": "2014","v": "/year/2014"},
            {"n": "2013","v": "/year/2013"},
            {"n": "2012","v": "/year/2012"},
            {"n": "2011","v": "/year/2011"},
            {"n": "2010","v": "/year/2010"},
            {"n": "2009","v": "/year/2009"},
            {"n": "2008","v": "/year/2008"}
          ]
        }
      ],
      "xCCCCS": [
        {
          "key": "area",
          "name": "地区",
          "value": [
            {"n": "全部","v": ""},
            {"n": "中国","v": "/area/大陆"},
            {"n": "香港","v": "/area/香港"},
            {"n": "台湾","v": "/area/台湾"},
            {"n": "美国","v": "/area/美国"},
            {"n": "韩国","v": "/area/韩国"},
            {"n": "其他","v": "/area/其他"}
          ]
        },
        {
          "key": "year",
          "name": "年份",
          "value": [
            {"n": "全部","v": ""},
            {"n": "2022","v": "/year/2022"},
            {"n": "2021","v": "/year/2021"},
            {"n": "2020","v": "/year/2020"},
            {"n": "2019","v": "/year/2019"},
            {"n": "2018","v": "/year/2018"},
            {"n": "2017","v": "/year/2017"},
            {"n": "2016","v": "/year/2016"},
            {"n": "2015","v": "/year/2015"},
            {"n": "2014","v": "/year/2014"},
            {"n": "2013","v": "/year/2013"},
            {"n": "2012","v": "/year/2012"},
            {"n": "2011","v": "/year/2011"},
            {"n": "2010","v": "/year/2010"},
            {"n": "2009","v": "/year/2009"},
            {"n": "2008","v": "/year/2008"}
          ]
        }
      ]
    }
  }