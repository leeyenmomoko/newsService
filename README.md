# newsService

## 三立

### 查詢三立新聞列表(類別)

- endpoint : `https://appv2.settv-it.com/api/v1/webServices/getSetnNews.php`

- X-ES-Request
  - `熱門`：baN45I5VFWJREuIdkl68YPK8hEBp1/Ndq9bQri4QMoNY9BR6LfRMbu6LmEL+6Q9C5KEdfBMAW3heJSV7Wus49YJZbbcQu1vFzsWcX2F67Cc=
  - `娛樂`：baN45I5VFWJREuIdkl68YPK8hEBp1/Ndq9bQri4QMoNY9BR6LfRMbu6LmEL+6Q9CsWiVCExMeNq6iY2UkXM17OLMWFAmHrUBnSl/gRuojbs=
  - `生活`：baN45I5VFWJREuIdkl68YACsOKFZTvJKhCTzGMhZL66GICtZjwu73LfFWAjhKaF+eEfSRWA7jsswU2G2IzEhE2eVQ0HUf1PTewHcFYtJlUI=
  - `社會`：baN45I5VFWJREuIdkl68YPK8hEBp1/Ndq9bQri4QMoNY9BR6LfRMbu6LmEL+6Q9CsWiVCExMeNq6iY2UkXM17OLMWFAmHrUBnSl/gRuojbs=
  - `政治`：baN45I5VFWJREuIdkl68YACsOKFZTvJKhCTzGMhZL66GICtZjwu73LfFWAjhKaF+IYu4EUtRp0KDzkVHf/tCP2Q94Pfr93zUDRPt/46VlIo=
  - `國際`：baN45I5VFWJREuIdkl68YPK8hEBp1/Ndq9bQri4QMoNY9BR6LfRMbu6LmEL+6Q9C+Fho07nP5ZFGa/3C4v3PIrMxHU5dOmZlr1qa6llFdck=
  - `玩樂`：baN45I5VFWJREuIdkl68YPK8hEBp1/Ndq9bQri4QMoNY9BR6LfRMbu6LmEL+6Q9CWeKcfx6TfTnduvzlVP8O4lroJfI13mfqCo4NHx1HWVo=
  - `財經`：baN45I5VFWJREuIdkl68YPK8hEBp1/Ndq9bQri4QMoNY9BR6LfRMbu6LmEL+6Q9CQlDWBob8aPac02QY8VEXAPCICgBWg+MfX22xZpGgehs=
  - `科技`：baN45I5VFWJREuIdkl68YACsOKFZTvJKhCTzGMhZL66GICtZjwu73LfFWAjhKaF+NnwB/V8j76h11CzvEbg4IWTz7/cwaMRCq8KjMgAv+G8=

### 新聞詳細內容

- endpoint : `https://webapi.setn.com/api/ContentPage/Index2/{{newsID}}`

- Response

```json
{
    "currentContent": {
        "newsData": {
            "pageID": 153,
            "newsID": 294953,
            "shortSlug": "網路溫度計／租都沒人要？分析新北市低度用電看空屋潮！",
            "newsTitle": "租都沒人要？從低度用電看淡水空屋潮",
            "onlineTime": "2017/09/16 21:14",
            "comment": "",
            "contentPages": [
                "&lt;p&gt;文／網路溫度計&lt;/p&gt;\r\n\r\n&lt;p&gt;&lt;span style=&quot;color:#0000CD&quot;&gt;&lt;strong&gt;淡江大學教書的日子&lt;/strong&gt;&lt;/span&gt;&lt;/p&gt;\r\n\r\n&lt;p&gt;靠著朋友的引薦，有機會到擁有最美夕陽的淡江大學兼課，每次下了課，坐在面向夕陽的樓梯口，吃著巷口內店家買來的滷味，說真格的，如果讓我轉任大學，淡江大學絕對是首選。&lt;/p&gt;\r\n\r\n&lt;p&gt;當時正值房地產熱絡期間，看著眼前的學生，突然覺得買間學生出租套房，應該是不錯的投資標的。經過一番打探，除了3,000元至5,000元一般價格外，還有高檔套房，每個月租金7,000元以上，相對地還有一個便宜等級，價位在2,000元左右。為什麼有這麼便宜的套房呢，簡單來說，有些較為窮困的學生會集體租下整層的公寓，如果10,000元的租金由5個人分擔，每個人只要2,000元。&lt;/p&gt;\r\n\r\n&lt;p&gt;筆者到最後還是放棄投資學生套房，原因在於附近愈蓋愈多，學生卻因為少子化，未來將是愈來愈少；供需失衡，租金收益只會愈來愈差。實地在學校附近走一遭，會發現到了學期中，還有很多出租的廣告，顯而易見地純粹以學生為客群的當地出租套房市場，搭配上為了賺錢拼命蓋房子的浪潮，卻忘記少子化的問題，投資下去只會悽慘收場。&lt;/p&gt;\r\n\r\n&lt;p&gt;&amp;nbsp;&lt;/p&gt;\r\n\r\n&lt;p&gt;&lt;span style=&quot;color:#0000CD&quot;&gt;&lt;strong&gt;從出生人數觀察大學招生困境&lt;/strong&gt;&amp;nbsp;&lt;/span&gt;&lt;/p&gt;\r\n\r\n&lt;p style=&quot;text-align: center;&quot;&gt;&lt;img alt=&quot;【大數聚】連租都沒人要？分析新北市「低度用電」看淡水空屋潮！\r\n&quot; src=&quot;http://attach.setn.com/newsimages/2017/09/15/1056087-XXL.jpg&quot; /&gt;&lt;br /&gt;\r\n&amp;nbsp;&lt;/p&gt;\r\n\r\n&lt;p&gt;如上圖，以各年度的出生人口來看，即可抓住未來大學新生的趨勢。&lt;/p&gt;\r\n\r\n&lt;p&gt;民國(下同)105年入學的是87年小老虎年出生的學生，所以人數比較少，今(106)年與明(107)年入學的學生將會增加，尤其是107年是龍年出生(89年)要成為大學新鮮人，人數呈現反彈暴增。&lt;/p&gt;\r\n\r\n&lt;p&gt;但即使因為生肖因素導致出生人口增加，還是短期現象，整體趨勢還是向下，目前則是維持在20萬左右的出生人口。對於大一新生入學人數降低的問題，應該是從108年開始，一直到112年，屬於「快速崩跌期」 (90年至94年出生人口降至20萬人)，而這也將影響學校附近的學生套房市場。&lt;/p&gt;\r\n\r\n&lt;p&gt;&amp;nbsp;&lt;/p&gt;\r\n\r\n&lt;p&gt;&lt;span style=&quot;color:#0000CD&quot;&gt;&lt;strong&gt;新北市低度用電比例&lt;/strong&gt;&lt;/span&gt;&lt;/p&gt;\r\n\r\n&lt;p&gt;根據內政部營建署於106年8月25日發布的｢105年度低度使用住宅及新建餘屋資訊統計分析｣研究成果，顯示全國低度使用（用電）住宅宅數為86萬2,965宅，其中以新北市最多，也意味著新北市的空屋率較高&lt;/p&gt;\r\n\r\n&lt;p&gt;所謂「低度用電」就是如果用電量低於一定度數，可以推定可能沒有實際使用，也就是空屋的概念。攤開105年度新北市各區的低度用電比例，最高是萬里區，接著依序是三芝區、石門區、烏來區、坪林區，淡水排名第13名。&lt;/p&gt;\r\n\r\n&lt;p style=&quot;text-align: center;&quot;&gt;&lt;img alt=&quot;【大數聚】連租都沒人要？分析新北市「低度用電」看淡水空屋潮！\r\n&quot; src=&quot;http://attach.setn.com/newsimages/2017/09/15/1056088-XXL.jpg&quot; /&gt;&lt;br /&gt;\r\n&amp;nbsp;&lt;/p&gt;\r\n\r\n&lt;p&gt;經檢視排名淡水前面的區域，多為偏遠鄉鎮，有可能因為外移人口嚴重、老人較為省電，或者是當地居民比較早睡等因素，比較沒有大量興建住宅的情況，所以應該排除之&amp;hellip;&lt;/p&gt;\r\n\r\n&lt;p&gt;低度使用住宅比例持平，新北市空屋最多。&lt;/p&gt;\r\n\r\n&lt;p&gt;&amp;nbsp;&lt;/p&gt;\r\n\r\n&lt;p&gt;&lt;strong&gt;為了更精準瞭解空屋情形，進一步排除偏鄉後又是哪一行政區空屋比例最高呢？ (作者：Dr.J)&lt;br /&gt;\r\n原文未完，全文詳見&lt;a href=&quot;http://group.dailyview.tw/2017/09/15/%e9%80%a3%e7%a7%9f%e9%83%bd%e6%b2%92%e4%ba%ba%e8%a6%81%ef%bc%9f%e5%88%86%e6%9e%90%e6%96%b0%e5%8c%97%e5%b8%82%e3%80%8c%e4%bd%8e%e5%ba%a6%e7%94%a8%e9%9b%bb%e3%80%8d%e7%9c%8b%e6%b7%a1%e6%b0%b4%e7%a9%ba/&quot;&gt;連租都沒人要？分析新北市「低度用電」看淡水空屋潮！&lt;/a&gt;&lt;/strong&gt;&lt;/p&gt;\r\n",
                null,
                null,
                null,
                null
            ],
            "youtubeURN": null,
            "youtubeURL": null,
            "url": null,
            "isAdult": false,
            "contentData": [{
                "sort": 0,
                "type": "Text",
                "content": "文／網路溫度計",
                "videoImage": ""
            }, {
                "sort": 1,
                "type": "Text",
                "content": "淡江大學教書的日子",
                "videoImage": ""
            }, {
                "sort": 2,
                "type": "Text",
                "content": "靠著朋友的引薦，有機會到擁有最美夕陽的淡江大學兼課，每次下了課，坐在面向夕陽的樓梯口，吃著巷口內店家買來的滷味，說真格的，如果讓我轉任大學，淡江大學絕對是首選。",
                "videoImage": ""
            }, {
                "sort": 3,
                "type": "Text",
                "content": "當時正值房地產熱絡期間，看著眼前的學生，突然覺得買間學生出租套房，應該是不錯的投資標的。經過一番打探，除了3,000元至5,000元一般價格外，還有高檔套房，每個月租金7,000元以上，相對地還有一個便宜等級，價位在2,000元左右。為什麼有這麼便宜的套房呢，簡單來說，有些較為窮困的學生會集體租下整層的公寓，如果10,000元的租金由5個人分擔，每個人只要2,000元。",
                "videoImage": ""
            }, {
                "sort": 4,
                "type": "Text",
                "content": "筆者到最後還是放棄投資學生套房，原因在於附近愈蓋愈多，學生卻因為少子化，未來將是愈來愈少；供需失衡，租金收益只會愈來愈差。實地在學校附近走一遭，會發現到了學期中，還有很多出租的廣告，顯而易見地純粹以學生為客群的當地出租套房市場，搭配上為了賺錢拼命蓋房子的浪潮，卻忘記少子化的問題，投資下去只會悽慘收場。",
                "videoImage": ""
            }, {
                "sort": 5,
                "type": "Text",
                "content": "從出生人數觀察大學招生困境",
                "videoImage": ""
            }, {
                "sort": 6,
                "type": "Image",
                "content": "http://attach.setn.com/newsimages/2017/09/15/1056087-XXL.jpg",
                "videoImage": ""
            }, {
                "sort": 7,
                "type": "Text",
                "content": "如上圖，以各年度的出生人口來看，即可抓住未來大學新生的趨勢。",
                "videoImage": ""
            }, {
                "sort": 8,
                "type": "Text",
                "content": "民國(下同)105年入學的是87年小老虎年出生的學生，所以人數比較少，今(106)年與明(107)年入學的學生將會增加，尤其是107年是龍年出生(89年)要成為大學新鮮人，人數呈現反彈暴增。",
                "videoImage": ""
            }, {
                "sort": 9,
                "type": "Text",
                "content": "但即使因為生肖因素導致出生人口增加，還是短期現象，整體趨勢還是向下，目前則是維持在20萬左右的出生人口。對於大一新生入學人數降低的問題，應該是從108年開始，一直到112年，屬於「快速崩跌期」 (90年至94年出生人口降至20萬人)，而這也將影響學校附近的學生套房市場。",
                "videoImage": ""
            }, {
                "sort": 10,
                "type": "Text",
                "content": "新北市低度用電比例",
                "videoImage": ""
            }, {
                "sort": 11,
                "type": "Text",
                "content": "根據內政部營建署於106年8月25日發布的｢105年度低度使用住宅及新建餘屋資訊統計分析｣研究成果，顯示全國低度使用（用電）住宅宅數為86萬2,965宅，其中以新北市最多，也意味著新北市的空屋率較高",
                "videoImage": ""
            }, {
                "sort": 12,
                "type": "Text",
                "content": "所謂「低度用電」就是如果用電量低於一定度數，可以推定可能沒有實際使用，也就是空屋的概念。攤開105年度新北市各區的低度用電比例，最高是萬里區，接著依序是三芝區、石門區、烏來區、坪林區，淡水排名第13名。",
                "videoImage": ""
            }, {
                "sort": 13,
                "type": "Image",
                "content": "http://attach.setn.com/newsimages/2017/09/15/1056088-XXL.jpg",
                "videoImage": ""
            }, {
                "sort": 14,
                "type": "Text",
                "content": "經檢視排名淡水前面的區域，多為偏遠鄉鎮，有可能因為外移人口嚴重、老人較為省電，或者是當地居民比較早睡等因素，比較沒有大量興建住宅的情況，所以應該排除之…",
                "videoImage": ""
            }, {
                "sort": 15,
                "type": "Text",
                "content": "低度使用住宅比例持平，新北市空屋最多。",
                "videoImage": ""
            }, {
                "sort": 16,
                "type": "Text",
                "content": "為了更精準瞭解空屋情形，進一步排除偏鄉後又是哪一行政區空屋比例最高呢？ (作者：Dr.J)原文未完，全文詳見連租都沒人要？分析新北市「低度用電」看淡水空屋潮！",
                "videoImage": ""
            }, {
                "sort": 17,
                "type": "Text",
                "content": " ",
                "videoImage": ""
            }, {
                "sort": 18,
                "type": "Text",
                "content": "✤本文為「名家專欄」投稿文章，言論與圖片皆不代表本站立場",
                "videoImage": ""
            }],
            "sourceID": 7,
            "sourceName": ""
        },
        "relateVote": null,
        "author": {
            "famousID": 73,
            "expertName": "網路溫度計",
            "position1": "時事網路大數據分析",
            "position2": "很熱很熱哦！",
            "expertDesc": "觀察網路新聞頻道、FB、PTT、各大部落格及討論區.....等近萬個國內網站。透過網路爬文技術取得巨量資料，並利用語意情緒分析，分析最熱門網路議題，一天一時事，產出專業網路大數據。有正經事、不正經事，就是要讓你長知識！",
            "picUrl": "http://attach.setn.com/famous/195937_dailyview_logo_%E4%B8%AD%E6%96%87final.png",
            "shareUrl": "http://www.setn.com/Catalog_Column.aspx?PageGroupID=9&PageID=153"
        },
        "links": [{
            "linkName": "DailyView官網",
            "link": "http://dailyview.tw"
        }, {
            "linkName": "DailyView 網路溫度計粉絲團",
            "link": "www.facebook.com/DailyView.tw"
        }, {
            "linkName": "LINE官方帳號",
            "link": "line.me/R/ti/p/%40say0841n"
        }],
        "relateNews": [],
        "extendNews": [],
        "bigDataNews": [],
        "shareURL": "http://www.setn.com/News.aspx?NewsID=294953",
        "expertName": "網路溫度計",
        "priorNewsID": "294938",
        "nextNewsID": "294966",
        "fbURL": "http://www.setn.com/m/FBBoard.aspx?NewsID=294953",
        "imageID": 1057473,
        "imageFile": "http://attach.setn.com/newsimages/2017/09/16/",
        "imageSlug": null
    },
    "priorContent": {},
    "nextContent": {}
}
```

## 東森

### 查詢東森新聞列表(類別)

- endpoint : `http://api.news.ebc.net.tw/api/get_news/{{index}}/merge`

- index
  - `熱門`：99
  - `娛樂`：3
  - `生活`：8
  - `社會`：5
  - `政治`：1
  - `國際`：7
  - `玩樂`：
  - `財經`：2
  - `科技`：

### 東森新聞詳細內容

- endpoint : `http://api.news.ebc.net.tw/api/get_news_data/{{sid}}`

``` json
{
    "status": true,
    "rows": {
        "releate_keyword_id": "{78683}{78632}{78626}{78599}{78595}{78580}{78564}{78544}{78469}",
        "embedded_code": "",
        "cname": "社會",
        "summary": "14日早上約9點，一名網友在華山文創園區後的停車場，目擊暴力事件，並將影片PO到「爆料公社」，「老實說不知道怎麼定義這件事，驚悚片，喜劇，搞笑片，動作片…大家自己決定吧」，引起網友熱烈迴響。原PO表示，一名穿著雨衣、戴全罩式安全帽的男子本來坐在機車上吃早餐，卻突然對一位路過的正妹大譙髒話，「XXX，臭婊子還躲，信不信我砍你」，女子大聲尖叫，原PO這時趕緊拿出手機錄影。",
        "sid": "78721",
        "subject": "【影片】現世報！男揮拳正妹頭部 下一秒 「掰咖+手殘」下場超慘",
        "title_img": "https://ebcnews.s3.amazonaws.com/images/2017/09/17/15056186871293FnANIEUb41.jpg",
        "video_news": "",
        "youtube_url": "",
        "views": "49",
        "clicks": "0",
        "releate_id": "{78683}{78632}{78626}{78599}{78595}{78580}{78564}{78544}{78469}",
        "surveryid": 0,
        "style": 0,
        "new_type": "imagetext",
        "news_url": "http://m.news.ebc.net.tw/news_app.php?nid=78721"
    }
}
```

## 搜尋東森關鍵字新聞

- endpoint : `http://api.news.ebc.net.tw/api//get_search/{{關鍵字}}/1/merge`