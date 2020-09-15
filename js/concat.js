Tonyu.klass.define({
  fullName: 'user.Lines',
  shortName: 'Lines',
  namespace: 'user',
  superclass: Tonyu.classes.kernel.Actor,
  includes: [],
  methods: function (__superClass) {
    return {
      main :function _trc_Lines_main() {
        "use strict";
        var _this=this;
        
        //$LASTPOS=1000000;//user.Lines:0
        Tonyu.globals.$lines={"総武本線": {},"外房線": {},"内房線": {},"久留里線": {},"東金線": {},"成田線": {},"鹿島線": {},"常磐線": {},"京葉線": {},"武蔵野線": {}};
        //$LASTPOS=1000156;//user.Lines:156
        Tonyu.globals.$stations={"銚子": {lines: ["総武本線"],nexts: ["松岸"]},"松岸": {lines: ["総武本線","成田線"],nexts: ["猿田","椎柴","銚子"]},"猿田": {lines: ["総武本線"],nexts: ["倉橋","松岸"]},"倉橋": {lines: ["総武本線"],nexts: ["飯岡","猿田"]},"飯岡": {lines: ["総武本線"],nexts: ["旭","倉橋"]},"旭": {lines: ["総武本線"],nexts: ["干潟","飯岡"]},"干潟": {lines: ["総武本線"],nexts: ["八日市場","旭"]},"八日市場": {lines: ["総武本線"],nexts: ["飯倉","干潟"]},"飯倉": {lines: ["総武本線"],nexts: ["横芝","八日市場"]},"横芝": {lines: ["総武本線"],nexts: ["松尾","飯倉"]},"松尾": {lines: ["総武本線"],nexts: ["成東","横芝"]},"成東": {lines: ["総武本線","東金線"],nexts: ["日向","松尾","求名"]},"日向": {lines: ["総武本線"],nexts: ["八街","成東"]},"八街": {lines: ["総武本線"],nexts: ["榎戸","日向"]},"榎戸": {lines: ["総武本線"],nexts: ["南酒々井","八街"]},"南酒々井": {lines: ["総武本線"],nexts: ["佐倉","榎戸"]},"佐倉": {lines: ["総武本線","成田線"],nexts: ["物井","南酒々井","酒々井"]},"物井": {lines: ["総武本線"],nexts: ["四街道","佐倉"]},"四街道": {lines: ["総武本線"],nexts: ["都賀","物井"]},"都賀": {lines: ["総武本線"],nexts: ["東千葉","四街道"]},"東千葉": {lines: ["総武本線"],nexts: ["千葉","都賀"]},"千葉": {lines: ["総武本線","外房線"],nexts: ["西千葉","東千葉","本千葉"]},"西千葉": {lines: ["総武本線"],nexts: ["稲毛","千葉"]},"稲毛": {lines: ["総武本線"],nexts: ["新検見川","西千葉"]},"新検見川": {lines: ["総武本線"],nexts: ["幕張","稲毛"]},"幕張": {lines: ["総武本線"],nexts: ["幕張本郷","新検見川"]},"幕張本郷": {lines: ["総武本線"],nexts: ["津田沼","幕張"]},"津田沼": {lines: ["総武本線"],nexts: ["東船橋","幕張本郷"]},"東船橋": {lines: ["総武本線"],nexts: ["船橋","津田沼"]},"船橋": {lines: ["総武本線"],nexts: ["西船橋","東船橋"]},"西船橋": {lines: ["総武本線","武蔵野線","京葉線"],nexts: ["下総中山","船橋","船橋法典","市川塩浜","南船橋"]},"下総中山": {lines: ["総武本線"],nexts: ["本八幡","西船橋"]},"本八幡": {lines: ["総武本線"],nexts: ["市川","下総中山"]},"市川": {lines: ["総武本線"],nexts: ["小岩","本八幡"]},"小岩": {lines: ["総武本線"],nexts: ["新小岩","市川"]},"新小岩": {lines: ["総武本線"],nexts: ["平井","小岩"]},"平井": {lines: ["総武本線"],nexts: ["亀戸","新小岩"]},"亀戸": {lines: ["総武本線"],nexts: ["錦糸町","平井"]},"錦糸町": {lines: ["総武本線"],nexts: ["馬喰町","亀戸","両国"]},"馬喰町": {lines: ["総武本線"],nexts: ["新日本橋","錦糸町"]},"新日本橋": {lines: ["総武本線"],nexts: ["東京","馬喰町"]},"東京": {lines: ["総武本線","京葉線"],nexts: ["新日本橋","八丁堀"]},"両国": {lines: ["総武本線"],nexts: ["浅草橋","錦糸町"]},"浅草橋": {lines: ["総武本線"],nexts: ["秋葉原","両国"]},"秋葉原": {lines: ["総武本線"],nexts: ["御茶ノ水","浅草橋"]},"御茶ノ水": {lines: ["総武本線"],nexts: ["秋葉原"]},"椎柴": {lines: ["成田線"],nexts: ["下総豊里","松岸"]},"下総豊里": {lines: ["成田線"],nexts: ["下総橘","椎柴"]},"下総橘": {lines: ["成田線"],nexts: ["笹川","下総豊里"]},"笹川": {lines: ["成田線"],nexts: ["小見川","下総橘"]},"小見川": {lines: ["成田線"],nexts: ["水郷","笹川"]},"水郷": {lines: ["成田線"],nexts: ["香取","小見川"]},"香取": {lines: ["成田線","鹿島線"],nexts: ["佐原","水郷","十二橋"]},"佐原": {lines: ["成田線"],nexts: ["大戸","香取"]},"大戸": {lines: ["成田線"],nexts: ["下総神崎","佐原"]},"下総神崎": {lines: ["成田線"],nexts: ["滑河","大戸"]},"滑河": {lines: ["成田線"],nexts: ["久住","下総神崎"]},"久住": {lines: ["成田線"],nexts: ["成田","滑河"]},"成田": {lines: ["成田線"],nexts: ["酒々井","久住","空港第２ビル","下総松崎"]},"酒々井": {lines: ["成田線"],nexts: ["佐倉","成田"]},"空港第２ビル": {lines: ["成田線"],nexts: ["成田空港","成田"]},"成田空港": {lines: ["成田線"],nexts: ["空港第２ビル"]},"下総松崎": {lines: ["成田線"],nexts: ["安食","成田"]},"安食": {lines: ["成田線"],nexts: ["小林","下総松崎"]},"小林": {lines: ["成田線"],nexts: ["木下","安食"]},"木下": {lines: ["成田線"],nexts: ["布佐","小林"]},"布佐": {lines: ["成田線"],nexts: ["新木","木下"]},"新木": {lines: ["成田線"],nexts: ["湖北","布佐"]},"湖北": {lines: ["成田線"],nexts: ["東我孫子","新木"]},"東我孫子": {lines: ["成田線"],nexts: ["我孫子","湖北"]},"安房鴨川": {lines: ["外房線","内房線"],nexts: ["安房天津","太海"]},"安房天津": {lines: ["外房線"],nexts: ["安房小湊","安房鴨川"]},"安房小湊": {lines: ["外房線"],nexts: ["行川アイランド","安房天津"]},"行川アイランド": {lines: ["外房線"],nexts: ["上総興津","安房小湊"]},"上総興津": {lines: ["外房線"],nexts: ["鵜原","行川アイランド"]},"鵜原": {lines: ["外房線"],nexts: ["勝浦","上総興津"]},"勝浦": {lines: ["外房線"],nexts: ["御宿","鵜原"]},"御宿": {lines: ["外房線"],nexts: ["浪花","勝浦"]},"浪花": {lines: ["外房線"],nexts: ["大原","御宿"]},"大原": {lines: ["外房線"],nexts: ["三門","浪花"]},"三門": {lines: ["外房線"],nexts: ["長者町","大原"]},"長者町": {lines: ["外房線"],nexts: ["太東","三門"]},"太東": {lines: ["外房線"],nexts: ["東浪見","長者町"]},"東浪見": {lines: ["外房線"],nexts: ["上総一ノ宮","太東"]},"上総一ノ宮": {lines: ["外房線"],nexts: ["八積","東浪見"]},"八積": {lines: ["外房線"],nexts: ["茂原","上総一ノ宮"]},"茂原": {lines: ["外房線"],nexts: ["新茂原","八積"]},"新茂原": {lines: ["外房線"],nexts: ["本納","茂原"]},"本納": {lines: ["外房線"],nexts: ["永田","新茂原"]},"永田": {lines: ["外房線"],nexts: ["大網","本納"]},"大網": {lines: ["外房線","東金線"],nexts: ["土気","永田","福俵"]},"土気": {lines: ["外房線"],nexts: ["誉田","大網"]},"誉田": {lines: ["外房線"],nexts: ["鎌取","土気"]},"鎌取": {lines: ["外房線"],nexts: ["蘇我","誉田"]},"蘇我": {lines: ["外房線","京葉線"],nexts: ["本千葉","鎌取","浜野","千葉みなと"]},"本千葉": {lines: ["外房線"],nexts: ["千葉","蘇我"]},"求名": {lines: ["東金線"],nexts: ["東金","成東"]},"東金": {lines: ["東金線"],nexts: ["福俵","求名"]},"福俵": {lines: ["東金線"],nexts: ["大網","東金"]},"太海": {lines: ["内房線"],nexts: ["江見","安房鴨川"]},"江見": {lines: ["内房線"],nexts: ["和田浦","太海"]},"和田浦": {lines: ["内房線"],nexts: ["南三原","江見"]},"南三原": {lines: ["内房線"],nexts: ["千歳","和田浦"]},"千歳": {lines: ["内房線"],nexts: ["千倉","南三原"]},"千倉": {lines: ["内房線"],nexts: ["九重","千歳"]},"九重": {lines: ["内房線"],nexts: ["館山","千倉"]},"館山": {lines: ["内房線"],nexts: ["那古船形","九重"]},"那古船形": {lines: ["内房線"],nexts: ["富浦","館山"]},"富浦": {lines: ["内房線"],nexts: ["岩井","那古船形"]},"岩井": {lines: ["内房線"],nexts: ["安房勝山","富浦"]},"安房勝山": {lines: ["内房線"],nexts: ["保田","岩井"]},"保田": {lines: ["内房線"],nexts: ["浜金谷","安房勝山"]},"浜金谷": {lines: ["内房線"],nexts: ["竹岡","保田"]},"竹岡": {lines: ["内房線"],nexts: ["上総湊","浜金谷"]},"上総湊": {lines: ["内房線"],nexts: ["佐貫町","竹岡"]},"佐貫町": {lines: ["内房線"],nexts: ["大貫","上総湊"]},"大貫": {lines: ["内房線"],nexts: ["青堀","佐貫町"]},"青堀": {lines: ["内房線"],nexts: ["君津","大貫"]},"君津": {lines: ["内房線"],nexts: ["木更津","青堀"]},"木更津": {lines: ["内房線","久留里線"],nexts: ["巌根","君津","祇園"]},"巌根": {lines: ["内房線"],nexts: ["袖ヶ浦","木更津"]},"袖ヶ浦": {lines: ["内房線"],nexts: ["長浦","巌根"]},"長浦": {lines: ["内房線"],nexts: ["姉ヶ崎","袖ヶ浦"]},"姉ヶ崎": {lines: ["内房線"],nexts: ["五井","長浦"]},"五井": {lines: ["内房線"],nexts: ["八幡宿","姉ヶ崎"]},"八幡宿": {lines: ["内房線"],nexts: ["浜野","五井"]},"浜野": {lines: ["内房線"],nexts: ["蘇我","八幡宿"]},"上総亀山": {lines: ["久留里線"],nexts: ["上総松丘"]},"上総松丘": {lines: ["久留里線"],nexts: ["平山","上総亀山"]},"平山": {lines: ["久留里線"],nexts: ["久留里","上総松丘"]},"久留里": {lines: ["久留里線"],nexts: ["俵田","平山"]},"俵田": {lines: ["久留里線"],nexts: ["小櫃","久留里"]},"小櫃": {lines: ["久留里線"],nexts: ["下郡","俵田"]},"下郡": {lines: ["久留里線"],nexts: ["馬来田","小櫃"]},"馬来田": {lines: ["久留里線"],nexts: ["東横田","下郡"]},"東横田": {lines: ["久留里線"],nexts: ["横田","馬来田"]},"横田": {lines: ["久留里線"],nexts: ["東清川","東横田"]},"東清川": {lines: ["久留里線"],nexts: ["上総清川","横田"]},"上総清川": {lines: ["久留里線"],nexts: ["祇園","東清川"]},"祇園": {lines: ["久留里線"],nexts: ["木更津","上総清川"]},"鹿島サッカースタジアム": {lines: ["鹿島線"],nexts: ["鹿島神宮"]},"鹿島神宮": {lines: ["鹿島線"],nexts: ["延方","鹿島サッカースタジアム"]},"延方": {lines: ["鹿島線"],nexts: ["潮来","鹿島神宮"]},"潮来": {lines: ["鹿島線"],nexts: ["十二橋","延方"]},"十二橋": {lines: ["鹿島線"],nexts: ["香取","潮来"]},"千葉みなと": {lines: ["京葉線"],nexts: ["稲毛海岸","蘇我"]},"稲毛海岸": {lines: ["京葉線"],nexts: ["検見川浜","千葉みなと"]},"検見川浜": {lines: ["京葉線"],nexts: ["海浜幕張","稲毛海岸"]},"海浜幕張": {lines: ["京葉線"],nexts: ["新習志野","検見川浜"]},"新習志野": {lines: ["京葉線"],nexts: ["南船橋","海浜幕張"]},"南船橋": {lines: ["京葉線"],nexts: ["二俣新町","新習志野","西船橋"]},"二俣新町": {lines: ["京葉線"],nexts: ["市川塩浜","南船橋"]},"市川塩浜": {lines: ["京葉線"],nexts: ["新浦安","二俣新町","西船橋"]},"新浦安": {lines: ["京葉線"],nexts: ["舞浜","市川塩浜"]},"舞浜": {lines: ["京葉線"],nexts: ["葛西臨海公園","新浦安"]},"葛西臨海公園": {lines: ["京葉線"],nexts: ["新木場","舞浜"]},"新木場": {lines: ["京葉線"],nexts: ["潮見","葛西臨海公園"]},"潮見": {lines: ["京葉線"],nexts: ["越中島","新木場"]},"越中島": {lines: ["京葉線"],nexts: ["八丁堀","潮見"]},"八丁堀": {lines: ["京葉線"],nexts: ["東京","越中島"]},"逢隈": {lines: ["常磐線"],nexts: ["亘理"]},"亘理": {lines: ["常磐線"],nexts: ["浜吉田","逢隈"]},"浜吉田": {lines: ["常磐線"],nexts: ["山下","亘理"]},"山下": {lines: ["常磐線"],nexts: ["坂元","浜吉田"]},"坂元": {lines: ["常磐線"],nexts: ["新地","山下"]},"新地": {lines: ["常磐線"],nexts: ["駒ヶ嶺","坂元"]},"駒ヶ嶺": {lines: ["常磐線"],nexts: ["相馬","新地"]},"相馬": {lines: ["常磐線"],nexts: ["日立木","駒ヶ嶺"]},"日立木": {lines: ["常磐線"],nexts: ["鹿島","相馬"]},"鹿島": {lines: ["常磐線"],nexts: ["原ノ町","日立木"]},"原ノ町": {lines: ["常磐線"],nexts: ["磐城太田","鹿島"]},"磐城太田": {lines: ["常磐線"],nexts: ["小高","原ノ町"]},"小高": {lines: ["常磐線"],nexts: ["桃内","磐城太田"]},"桃内": {lines: ["常磐線"],nexts: ["浪江","小高"]},"浪江": {lines: ["常磐線"],nexts: ["双葉","桃内"]},"双葉": {lines: ["常磐線"],nexts: ["大野","浪江"]},"大野": {lines: ["常磐線"],nexts: ["夜ノ森","双葉"]},"夜ノ森": {lines: ["常磐線"],nexts: ["富岡","大野"]},"富岡": {lines: ["常磐線"],nexts: ["竜田","夜ノ森"]},"竜田": {lines: ["常磐線"],nexts: ["木戸","富岡"]},"木戸": {lines: ["常磐線"],nexts: ["Jヴィレッジ","竜田"]},"Jヴィレッジ": {lines: ["常磐線"],nexts: ["広野","木戸"]},"広野": {lines: ["常磐線"],nexts: ["末続","Jヴィレッジ"]},"末続": {lines: ["常磐線"],nexts: ["久ノ浜","広野"]},"久ノ浜": {lines: ["常磐線"],nexts: ["四ツ倉","末続"]},"四ツ倉": {lines: ["常磐線"],nexts: ["草野","久ノ浜"]},"草野": {lines: ["常磐線"],nexts: ["いわき","四ツ倉"]},"いわき": {lines: ["常磐線"],nexts: ["内郷","草野"]},"内郷": {lines: ["常磐線"],nexts: ["湯本","いわき"]},"湯本": {lines: ["常磐線"],nexts: ["泉","内郷"]},"泉": {lines: ["常磐線"],nexts: ["植田","湯本"]},"植田": {lines: ["常磐線"],nexts: ["勿来","泉"]},"勿来": {lines: ["常磐線"],nexts: ["大津港","植田"]},"大津港": {lines: ["常磐線"],nexts: ["磯原","勿来"]},"磯原": {lines: ["常磐線"],nexts: ["南中郷","大津港"]},"南中郷": {lines: ["常磐線"],nexts: ["高萩","磯原"]},"高萩": {lines: ["常磐線"],nexts: ["十王","南中郷"]},"十王": {lines: ["常磐線"],nexts: ["小木津","高萩"]},"小木津": {lines: ["常磐線"],nexts: ["日立","十王"]},"日立": {lines: ["常磐線"],nexts: ["常陸多賀","小木津"]},"常陸多賀": {lines: ["常磐線"],nexts: ["大甕","日立"]},"大甕": {lines: ["常磐線"],nexts: ["東海","常陸多賀"]},"東海": {lines: ["常磐線"],nexts: ["佐和","大甕"]},"佐和": {lines: ["常磐線"],nexts: ["勝田","東海"]},"勝田": {lines: ["常磐線"],nexts: ["水戸","佐和"]},"水戸": {lines: ["常磐線"],nexts: ["偕楽園","勝田"]},"偕楽園": {lines: ["常磐線"],nexts: ["赤塚","水戸"]},"赤塚": {lines: ["常磐線"],nexts: ["内原","偕楽園"]},"内原": {lines: ["常磐線"],nexts: ["友部","赤塚"]},"友部": {lines: ["常磐線"],nexts: ["岩間","内原"],end: true},"岩間": {lines: ["常磐線"],nexts: ["羽鳥","友部"]},"羽鳥": {lines: ["常磐線"],nexts: ["石岡","岩間"]},"石岡": {lines: ["常磐線"],nexts: ["高浜","羽鳥"]},"高浜": {lines: ["常磐線"],nexts: ["神立","石岡"]},"神立": {lines: ["常磐線"],nexts: ["土浦","高浜"]},"土浦": {lines: ["常磐線"],nexts: ["荒川沖","神立"]},"荒川沖": {lines: ["常磐線"],nexts: ["ひたち野うしく","土浦"]},"ひたち野うしく": {lines: ["常磐線"],nexts: ["牛久","荒川沖"]},"牛久": {lines: ["常磐線"],nexts: ["龍ケ崎市","ひたち野うしく"]},"龍ケ崎市": {lines: ["常磐線"],nexts: ["藤代","牛久"]},"藤代": {lines: ["常磐線"],nexts: ["取手","龍ケ崎市"]},"取手": {lines: ["常磐線"],nexts: ["天王台","藤代"]},"天王台": {lines: ["常磐線"],nexts: ["我孫子","取手"]},"我孫子": {lines: ["常磐線","成田線"],nexts: ["北柏","天王台","東我孫子"]},"北柏": {lines: ["常磐線"],nexts: ["柏","我孫子"]},"柏": {lines: ["常磐線"],nexts: ["南柏","北柏"]},"南柏": {lines: ["常磐線"],nexts: ["北小金","柏"]},"北小金": {lines: ["常磐線"],nexts: ["新松戸","南柏"]},"新松戸": {lines: ["常磐線","武蔵野線"],nexts: ["馬橋","北小金","南流山","新八柱"]},"馬橋": {lines: ["常磐線"],nexts: ["北松戸","新松戸"]},"北松戸": {lines: ["常磐線"],nexts: ["松戸","馬橋"]},"松戸": {lines: ["常磐線"],nexts: ["金町","北松戸"]},"金町": {lines: ["常磐線"],nexts: ["亀有","松戸"]},"亀有": {lines: ["常磐線"],nexts: ["綾瀬","金町"]},"綾瀬": {lines: ["常磐線"],nexts: ["北千住","亀有"]},"北千住": {lines: ["常磐線"],nexts: ["南千住","綾瀬"]},"南千住": {lines: ["常磐線"],nexts: ["三河島","北千住"]},"三河島": {lines: ["常磐線"],nexts: ["南千住"]},"船橋法典": {lines: ["武蔵野線"],nexts: ["市川大野","西船橋"]},"市川大野": {lines: ["武蔵野線"],nexts: ["東松戸","船橋法典"]},"東松戸": {lines: ["武蔵野線"],nexts: ["新八柱","市川大野"]},"新八柱": {lines: ["武蔵野線"],nexts: ["新松戸","東松戸"]},"南流山": {lines: ["武蔵野線"],nexts: ["新松戸"]}};
      },
      fiber$main :function _trc_Lines_f_main(_thread) {
        "use strict";
        var _this=this;
        //var _arguments=Tonyu.A(arguments);
        var __pc=0;
        
        //$LASTPOS=1000000;//user.Lines:0
        Tonyu.globals.$lines={"総武本線": {},"外房線": {},"内房線": {},"久留里線": {},"東金線": {},"成田線": {},"鹿島線": {},"常磐線": {},"京葉線": {},"武蔵野線": {}};
        //$LASTPOS=1000156;//user.Lines:156
        Tonyu.globals.$stations={"銚子": {lines: ["総武本線"],nexts: ["松岸"]},"松岸": {lines: ["総武本線","成田線"],nexts: ["猿田","椎柴","銚子"]},"猿田": {lines: ["総武本線"],nexts: ["倉橋","松岸"]},"倉橋": {lines: ["総武本線"],nexts: ["飯岡","猿田"]},"飯岡": {lines: ["総武本線"],nexts: ["旭","倉橋"]},"旭": {lines: ["総武本線"],nexts: ["干潟","飯岡"]},"干潟": {lines: ["総武本線"],nexts: ["八日市場","旭"]},"八日市場": {lines: ["総武本線"],nexts: ["飯倉","干潟"]},"飯倉": {lines: ["総武本線"],nexts: ["横芝","八日市場"]},"横芝": {lines: ["総武本線"],nexts: ["松尾","飯倉"]},"松尾": {lines: ["総武本線"],nexts: ["成東","横芝"]},"成東": {lines: ["総武本線","東金線"],nexts: ["日向","松尾","求名"]},"日向": {lines: ["総武本線"],nexts: ["八街","成東"]},"八街": {lines: ["総武本線"],nexts: ["榎戸","日向"]},"榎戸": {lines: ["総武本線"],nexts: ["南酒々井","八街"]},"南酒々井": {lines: ["総武本線"],nexts: ["佐倉","榎戸"]},"佐倉": {lines: ["総武本線","成田線"],nexts: ["物井","南酒々井","酒々井"]},"物井": {lines: ["総武本線"],nexts: ["四街道","佐倉"]},"四街道": {lines: ["総武本線"],nexts: ["都賀","物井"]},"都賀": {lines: ["総武本線"],nexts: ["東千葉","四街道"]},"東千葉": {lines: ["総武本線"],nexts: ["千葉","都賀"]},"千葉": {lines: ["総武本線","外房線"],nexts: ["西千葉","東千葉","本千葉"]},"西千葉": {lines: ["総武本線"],nexts: ["稲毛","千葉"]},"稲毛": {lines: ["総武本線"],nexts: ["新検見川","西千葉"]},"新検見川": {lines: ["総武本線"],nexts: ["幕張","稲毛"]},"幕張": {lines: ["総武本線"],nexts: ["幕張本郷","新検見川"]},"幕張本郷": {lines: ["総武本線"],nexts: ["津田沼","幕張"]},"津田沼": {lines: ["総武本線"],nexts: ["東船橋","幕張本郷"]},"東船橋": {lines: ["総武本線"],nexts: ["船橋","津田沼"]},"船橋": {lines: ["総武本線"],nexts: ["西船橋","東船橋"]},"西船橋": {lines: ["総武本線","武蔵野線","京葉線"],nexts: ["下総中山","船橋","船橋法典","市川塩浜","南船橋"]},"下総中山": {lines: ["総武本線"],nexts: ["本八幡","西船橋"]},"本八幡": {lines: ["総武本線"],nexts: ["市川","下総中山"]},"市川": {lines: ["総武本線"],nexts: ["小岩","本八幡"]},"小岩": {lines: ["総武本線"],nexts: ["新小岩","市川"]},"新小岩": {lines: ["総武本線"],nexts: ["平井","小岩"]},"平井": {lines: ["総武本線"],nexts: ["亀戸","新小岩"]},"亀戸": {lines: ["総武本線"],nexts: ["錦糸町","平井"]},"錦糸町": {lines: ["総武本線"],nexts: ["馬喰町","亀戸","両国"]},"馬喰町": {lines: ["総武本線"],nexts: ["新日本橋","錦糸町"]},"新日本橋": {lines: ["総武本線"],nexts: ["東京","馬喰町"]},"東京": {lines: ["総武本線","京葉線"],nexts: ["新日本橋","八丁堀"]},"両国": {lines: ["総武本線"],nexts: ["浅草橋","錦糸町"]},"浅草橋": {lines: ["総武本線"],nexts: ["秋葉原","両国"]},"秋葉原": {lines: ["総武本線"],nexts: ["御茶ノ水","浅草橋"]},"御茶ノ水": {lines: ["総武本線"],nexts: ["秋葉原"]},"椎柴": {lines: ["成田線"],nexts: ["下総豊里","松岸"]},"下総豊里": {lines: ["成田線"],nexts: ["下総橘","椎柴"]},"下総橘": {lines: ["成田線"],nexts: ["笹川","下総豊里"]},"笹川": {lines: ["成田線"],nexts: ["小見川","下総橘"]},"小見川": {lines: ["成田線"],nexts: ["水郷","笹川"]},"水郷": {lines: ["成田線"],nexts: ["香取","小見川"]},"香取": {lines: ["成田線","鹿島線"],nexts: ["佐原","水郷","十二橋"]},"佐原": {lines: ["成田線"],nexts: ["大戸","香取"]},"大戸": {lines: ["成田線"],nexts: ["下総神崎","佐原"]},"下総神崎": {lines: ["成田線"],nexts: ["滑河","大戸"]},"滑河": {lines: ["成田線"],nexts: ["久住","下総神崎"]},"久住": {lines: ["成田線"],nexts: ["成田","滑河"]},"成田": {lines: ["成田線"],nexts: ["酒々井","久住","空港第２ビル","下総松崎"]},"酒々井": {lines: ["成田線"],nexts: ["佐倉","成田"]},"空港第２ビル": {lines: ["成田線"],nexts: ["成田空港","成田"]},"成田空港": {lines: ["成田線"],nexts: ["空港第２ビル"]},"下総松崎": {lines: ["成田線"],nexts: ["安食","成田"]},"安食": {lines: ["成田線"],nexts: ["小林","下総松崎"]},"小林": {lines: ["成田線"],nexts: ["木下","安食"]},"木下": {lines: ["成田線"],nexts: ["布佐","小林"]},"布佐": {lines: ["成田線"],nexts: ["新木","木下"]},"新木": {lines: ["成田線"],nexts: ["湖北","布佐"]},"湖北": {lines: ["成田線"],nexts: ["東我孫子","新木"]},"東我孫子": {lines: ["成田線"],nexts: ["我孫子","湖北"]},"安房鴨川": {lines: ["外房線","内房線"],nexts: ["安房天津","太海"]},"安房天津": {lines: ["外房線"],nexts: ["安房小湊","安房鴨川"]},"安房小湊": {lines: ["外房線"],nexts: ["行川アイランド","安房天津"]},"行川アイランド": {lines: ["外房線"],nexts: ["上総興津","安房小湊"]},"上総興津": {lines: ["外房線"],nexts: ["鵜原","行川アイランド"]},"鵜原": {lines: ["外房線"],nexts: ["勝浦","上総興津"]},"勝浦": {lines: ["外房線"],nexts: ["御宿","鵜原"]},"御宿": {lines: ["外房線"],nexts: ["浪花","勝浦"]},"浪花": {lines: ["外房線"],nexts: ["大原","御宿"]},"大原": {lines: ["外房線"],nexts: ["三門","浪花"]},"三門": {lines: ["外房線"],nexts: ["長者町","大原"]},"長者町": {lines: ["外房線"],nexts: ["太東","三門"]},"太東": {lines: ["外房線"],nexts: ["東浪見","長者町"]},"東浪見": {lines: ["外房線"],nexts: ["上総一ノ宮","太東"]},"上総一ノ宮": {lines: ["外房線"],nexts: ["八積","東浪見"]},"八積": {lines: ["外房線"],nexts: ["茂原","上総一ノ宮"]},"茂原": {lines: ["外房線"],nexts: ["新茂原","八積"]},"新茂原": {lines: ["外房線"],nexts: ["本納","茂原"]},"本納": {lines: ["外房線"],nexts: ["永田","新茂原"]},"永田": {lines: ["外房線"],nexts: ["大網","本納"]},"大網": {lines: ["外房線","東金線"],nexts: ["土気","永田","福俵"]},"土気": {lines: ["外房線"],nexts: ["誉田","大網"]},"誉田": {lines: ["外房線"],nexts: ["鎌取","土気"]},"鎌取": {lines: ["外房線"],nexts: ["蘇我","誉田"]},"蘇我": {lines: ["外房線","京葉線"],nexts: ["本千葉","鎌取","浜野","千葉みなと"]},"本千葉": {lines: ["外房線"],nexts: ["千葉","蘇我"]},"求名": {lines: ["東金線"],nexts: ["東金","成東"]},"東金": {lines: ["東金線"],nexts: ["福俵","求名"]},"福俵": {lines: ["東金線"],nexts: ["大網","東金"]},"太海": {lines: ["内房線"],nexts: ["江見","安房鴨川"]},"江見": {lines: ["内房線"],nexts: ["和田浦","太海"]},"和田浦": {lines: ["内房線"],nexts: ["南三原","江見"]},"南三原": {lines: ["内房線"],nexts: ["千歳","和田浦"]},"千歳": {lines: ["内房線"],nexts: ["千倉","南三原"]},"千倉": {lines: ["内房線"],nexts: ["九重","千歳"]},"九重": {lines: ["内房線"],nexts: ["館山","千倉"]},"館山": {lines: ["内房線"],nexts: ["那古船形","九重"]},"那古船形": {lines: ["内房線"],nexts: ["富浦","館山"]},"富浦": {lines: ["内房線"],nexts: ["岩井","那古船形"]},"岩井": {lines: ["内房線"],nexts: ["安房勝山","富浦"]},"安房勝山": {lines: ["内房線"],nexts: ["保田","岩井"]},"保田": {lines: ["内房線"],nexts: ["浜金谷","安房勝山"]},"浜金谷": {lines: ["内房線"],nexts: ["竹岡","保田"]},"竹岡": {lines: ["内房線"],nexts: ["上総湊","浜金谷"]},"上総湊": {lines: ["内房線"],nexts: ["佐貫町","竹岡"]},"佐貫町": {lines: ["内房線"],nexts: ["大貫","上総湊"]},"大貫": {lines: ["内房線"],nexts: ["青堀","佐貫町"]},"青堀": {lines: ["内房線"],nexts: ["君津","大貫"]},"君津": {lines: ["内房線"],nexts: ["木更津","青堀"]},"木更津": {lines: ["内房線","久留里線"],nexts: ["巌根","君津","祇園"]},"巌根": {lines: ["内房線"],nexts: ["袖ヶ浦","木更津"]},"袖ヶ浦": {lines: ["内房線"],nexts: ["長浦","巌根"]},"長浦": {lines: ["内房線"],nexts: ["姉ヶ崎","袖ヶ浦"]},"姉ヶ崎": {lines: ["内房線"],nexts: ["五井","長浦"]},"五井": {lines: ["内房線"],nexts: ["八幡宿","姉ヶ崎"]},"八幡宿": {lines: ["内房線"],nexts: ["浜野","五井"]},"浜野": {lines: ["内房線"],nexts: ["蘇我","八幡宿"]},"上総亀山": {lines: ["久留里線"],nexts: ["上総松丘"]},"上総松丘": {lines: ["久留里線"],nexts: ["平山","上総亀山"]},"平山": {lines: ["久留里線"],nexts: ["久留里","上総松丘"]},"久留里": {lines: ["久留里線"],nexts: ["俵田","平山"]},"俵田": {lines: ["久留里線"],nexts: ["小櫃","久留里"]},"小櫃": {lines: ["久留里線"],nexts: ["下郡","俵田"]},"下郡": {lines: ["久留里線"],nexts: ["馬来田","小櫃"]},"馬来田": {lines: ["久留里線"],nexts: ["東横田","下郡"]},"東横田": {lines: ["久留里線"],nexts: ["横田","馬来田"]},"横田": {lines: ["久留里線"],nexts: ["東清川","東横田"]},"東清川": {lines: ["久留里線"],nexts: ["上総清川","横田"]},"上総清川": {lines: ["久留里線"],nexts: ["祇園","東清川"]},"祇園": {lines: ["久留里線"],nexts: ["木更津","上総清川"]},"鹿島サッカースタジアム": {lines: ["鹿島線"],nexts: ["鹿島神宮"]},"鹿島神宮": {lines: ["鹿島線"],nexts: ["延方","鹿島サッカースタジアム"]},"延方": {lines: ["鹿島線"],nexts: ["潮来","鹿島神宮"]},"潮来": {lines: ["鹿島線"],nexts: ["十二橋","延方"]},"十二橋": {lines: ["鹿島線"],nexts: ["香取","潮来"]},"千葉みなと": {lines: ["京葉線"],nexts: ["稲毛海岸","蘇我"]},"稲毛海岸": {lines: ["京葉線"],nexts: ["検見川浜","千葉みなと"]},"検見川浜": {lines: ["京葉線"],nexts: ["海浜幕張","稲毛海岸"]},"海浜幕張": {lines: ["京葉線"],nexts: ["新習志野","検見川浜"]},"新習志野": {lines: ["京葉線"],nexts: ["南船橋","海浜幕張"]},"南船橋": {lines: ["京葉線"],nexts: ["二俣新町","新習志野","西船橋"]},"二俣新町": {lines: ["京葉線"],nexts: ["市川塩浜","南船橋"]},"市川塩浜": {lines: ["京葉線"],nexts: ["新浦安","二俣新町","西船橋"]},"新浦安": {lines: ["京葉線"],nexts: ["舞浜","市川塩浜"]},"舞浜": {lines: ["京葉線"],nexts: ["葛西臨海公園","新浦安"]},"葛西臨海公園": {lines: ["京葉線"],nexts: ["新木場","舞浜"]},"新木場": {lines: ["京葉線"],nexts: ["潮見","葛西臨海公園"]},"潮見": {lines: ["京葉線"],nexts: ["越中島","新木場"]},"越中島": {lines: ["京葉線"],nexts: ["八丁堀","潮見"]},"八丁堀": {lines: ["京葉線"],nexts: ["東京","越中島"]},"逢隈": {lines: ["常磐線"],nexts: ["亘理"]},"亘理": {lines: ["常磐線"],nexts: ["浜吉田","逢隈"]},"浜吉田": {lines: ["常磐線"],nexts: ["山下","亘理"]},"山下": {lines: ["常磐線"],nexts: ["坂元","浜吉田"]},"坂元": {lines: ["常磐線"],nexts: ["新地","山下"]},"新地": {lines: ["常磐線"],nexts: ["駒ヶ嶺","坂元"]},"駒ヶ嶺": {lines: ["常磐線"],nexts: ["相馬","新地"]},"相馬": {lines: ["常磐線"],nexts: ["日立木","駒ヶ嶺"]},"日立木": {lines: ["常磐線"],nexts: ["鹿島","相馬"]},"鹿島": {lines: ["常磐線"],nexts: ["原ノ町","日立木"]},"原ノ町": {lines: ["常磐線"],nexts: ["磐城太田","鹿島"]},"磐城太田": {lines: ["常磐線"],nexts: ["小高","原ノ町"]},"小高": {lines: ["常磐線"],nexts: ["桃内","磐城太田"]},"桃内": {lines: ["常磐線"],nexts: ["浪江","小高"]},"浪江": {lines: ["常磐線"],nexts: ["双葉","桃内"]},"双葉": {lines: ["常磐線"],nexts: ["大野","浪江"]},"大野": {lines: ["常磐線"],nexts: ["夜ノ森","双葉"]},"夜ノ森": {lines: ["常磐線"],nexts: ["富岡","大野"]},"富岡": {lines: ["常磐線"],nexts: ["竜田","夜ノ森"]},"竜田": {lines: ["常磐線"],nexts: ["木戸","富岡"]},"木戸": {lines: ["常磐線"],nexts: ["Jヴィレッジ","竜田"]},"Jヴィレッジ": {lines: ["常磐線"],nexts: ["広野","木戸"]},"広野": {lines: ["常磐線"],nexts: ["末続","Jヴィレッジ"]},"末続": {lines: ["常磐線"],nexts: ["久ノ浜","広野"]},"久ノ浜": {lines: ["常磐線"],nexts: ["四ツ倉","末続"]},"四ツ倉": {lines: ["常磐線"],nexts: ["草野","久ノ浜"]},"草野": {lines: ["常磐線"],nexts: ["いわき","四ツ倉"]},"いわき": {lines: ["常磐線"],nexts: ["内郷","草野"]},"内郷": {lines: ["常磐線"],nexts: ["湯本","いわき"]},"湯本": {lines: ["常磐線"],nexts: ["泉","内郷"]},"泉": {lines: ["常磐線"],nexts: ["植田","湯本"]},"植田": {lines: ["常磐線"],nexts: ["勿来","泉"]},"勿来": {lines: ["常磐線"],nexts: ["大津港","植田"]},"大津港": {lines: ["常磐線"],nexts: ["磯原","勿来"]},"磯原": {lines: ["常磐線"],nexts: ["南中郷","大津港"]},"南中郷": {lines: ["常磐線"],nexts: ["高萩","磯原"]},"高萩": {lines: ["常磐線"],nexts: ["十王","南中郷"]},"十王": {lines: ["常磐線"],nexts: ["小木津","高萩"]},"小木津": {lines: ["常磐線"],nexts: ["日立","十王"]},"日立": {lines: ["常磐線"],nexts: ["常陸多賀","小木津"]},"常陸多賀": {lines: ["常磐線"],nexts: ["大甕","日立"]},"大甕": {lines: ["常磐線"],nexts: ["東海","常陸多賀"]},"東海": {lines: ["常磐線"],nexts: ["佐和","大甕"]},"佐和": {lines: ["常磐線"],nexts: ["勝田","東海"]},"勝田": {lines: ["常磐線"],nexts: ["水戸","佐和"]},"水戸": {lines: ["常磐線"],nexts: ["偕楽園","勝田"]},"偕楽園": {lines: ["常磐線"],nexts: ["赤塚","水戸"]},"赤塚": {lines: ["常磐線"],nexts: ["内原","偕楽園"]},"内原": {lines: ["常磐線"],nexts: ["友部","赤塚"]},"友部": {lines: ["常磐線"],nexts: ["岩間","内原"],end: true},"岩間": {lines: ["常磐線"],nexts: ["羽鳥","友部"]},"羽鳥": {lines: ["常磐線"],nexts: ["石岡","岩間"]},"石岡": {lines: ["常磐線"],nexts: ["高浜","羽鳥"]},"高浜": {lines: ["常磐線"],nexts: ["神立","石岡"]},"神立": {lines: ["常磐線"],nexts: ["土浦","高浜"]},"土浦": {lines: ["常磐線"],nexts: ["荒川沖","神立"]},"荒川沖": {lines: ["常磐線"],nexts: ["ひたち野うしく","土浦"]},"ひたち野うしく": {lines: ["常磐線"],nexts: ["牛久","荒川沖"]},"牛久": {lines: ["常磐線"],nexts: ["龍ケ崎市","ひたち野うしく"]},"龍ケ崎市": {lines: ["常磐線"],nexts: ["藤代","牛久"]},"藤代": {lines: ["常磐線"],nexts: ["取手","龍ケ崎市"]},"取手": {lines: ["常磐線"],nexts: ["天王台","藤代"]},"天王台": {lines: ["常磐線"],nexts: ["我孫子","取手"]},"我孫子": {lines: ["常磐線","成田線"],nexts: ["北柏","天王台","東我孫子"]},"北柏": {lines: ["常磐線"],nexts: ["柏","我孫子"]},"柏": {lines: ["常磐線"],nexts: ["南柏","北柏"]},"南柏": {lines: ["常磐線"],nexts: ["北小金","柏"]},"北小金": {lines: ["常磐線"],nexts: ["新松戸","南柏"]},"新松戸": {lines: ["常磐線","武蔵野線"],nexts: ["馬橋","北小金","南流山","新八柱"]},"馬橋": {lines: ["常磐線"],nexts: ["北松戸","新松戸"]},"北松戸": {lines: ["常磐線"],nexts: ["松戸","馬橋"]},"松戸": {lines: ["常磐線"],nexts: ["金町","北松戸"]},"金町": {lines: ["常磐線"],nexts: ["亀有","松戸"]},"亀有": {lines: ["常磐線"],nexts: ["綾瀬","金町"]},"綾瀬": {lines: ["常磐線"],nexts: ["北千住","亀有"]},"北千住": {lines: ["常磐線"],nexts: ["南千住","綾瀬"]},"南千住": {lines: ["常磐線"],nexts: ["三河島","北千住"]},"三河島": {lines: ["常磐線"],nexts: ["南千住"]},"船橋法典": {lines: ["武蔵野線"],nexts: ["市川大野","西船橋"]},"市川大野": {lines: ["武蔵野線"],nexts: ["東松戸","船橋法典"]},"東松戸": {lines: ["武蔵野線"],nexts: ["新八柱","市川大野"]},"新八柱": {lines: ["武蔵野線"],nexts: ["新松戸","東松戸"]},"南流山": {lines: ["武蔵野線"],nexts: ["新松戸"]}};
        
        _thread.retVal=_this;return;
      },
      __dummy: false
    };
  },
  decls: {"methods":{"main":{"nowait":false}},"fields":{}}
});
Tonyu.klass.define({
  fullName: 'user.Main',
  shortName: 'Main',
  namespace: 'user',
  superclass: Tonyu.classes.kernel.Actor,
  includes: [],
  methods: function (__superClass) {
    return {
      main :function _trc_Main_main() {
        "use strict";
        var _this=this;
        
        //$LASTPOS=2000029;//user.Main:29
        new Tonyu.classes.user.Lines;
        //$LASTPOS=2000050;//user.Main:50
        _this.update();
        //$LASTPOS=2000060;//user.Main:60
        new Tonyu.classes.user.StationPlace;
        //$LASTPOS=2000089;//user.Main:89
        _this.update();
        //$LASTPOS=2000099;//user.Main:99
        new Tonyu.classes.user.MapScroll;
        //$LASTPOS=2000115;//user.Main:115
        Tonyu.globals.$search=new Tonyu.classes.kernel.Button({top: 10,left: 300,width: 150,height: 30,text: "路線の検索"});
        //$LASTPOS=2000188;//user.Main:188
        Tonyu.globals.$owner={};
        //$LASTPOS=2000199;//user.Main:199
        Tonyu.globals.$turn=1;
        //$LASTPOS=2000210;//user.Main:210
        Tonyu.globals.$red=0;
        //$LASTPOS=2000218;//user.Main:218
        Tonyu.globals.$blue=0;
        //$LASTPOS=2000228;//user.Main:228
        new Tonyu.classes.kernel.Label({x: 150,y: 70,template: "赤:$red"});
        //$LASTPOS=2000269;//user.Main:269
        new Tonyu.classes.kernel.Label({x: 200,y: 70,template: "青:$blue"});
        //$LASTPOS=2000374;//user.Main:374
        //$LASTPOS=2000378;//user.Main:378
        _this.i=0;for (; _this.i<Tonyu.globals.$stationPlace.length ; _this.i++) {
          Tonyu.checkLoop();
          {
            //$LASTPOS=2000424;//user.Main:424
            _this.bx=Tonyu.globals.$stationPlace[_this.i].x-50;
            //$LASTPOS=2000454;//user.Main:454
            _this.by=Tonyu.globals.$stationPlace[_this.i].y-30;
            //$LASTPOS=2000484;//user.Main:484
            Tonyu.globals.$sta=new Tonyu.classes.kernel.Button({left: _this.bx,top: _this.by,width: 40,height: 30,text: Tonyu.globals.$stationPlace[_this.i].name,layer: Tonyu.globals.$mainLayer,onClick: Tonyu.bindFunc(_this,_this.clicked)});
          }
        }
        //$LASTPOS=2002396;//user.Main:2396
        if (Tonyu.globals.$search&&Tonyu.globals.$search.clicked==1) {
          //$LASTPOS=2002435;//user.Main:2435
          Tonyu.globals.$InputBox.open("路線名の入力");
          
        }
      },
      fiber$main :function _trc_Main_f_main(_thread) {
        "use strict";
        var _this=this;
        //var _arguments=Tonyu.A(arguments);
        var __pc=0;
        
        //$LASTPOS=2000029;//user.Main:29
        new Tonyu.classes.user.Lines;
        
        _thread.enter(function _trc_Main_ent_main(_thread) {
          if (_thread.lastEx) __pc=_thread.catchPC;
          for(var __cnt=100 ; __cnt--;) {
            switch (__pc) {
            case 0:
              //$LASTPOS=2000050;//user.Main:50
              _this.fiber$update(_thread);
              __pc=1;return;
            case 1:
              
              //$LASTPOS=2000060;//user.Main:60
              new Tonyu.classes.user.StationPlace;
              //$LASTPOS=2000089;//user.Main:89
              _this.fiber$update(_thread);
              __pc=2;return;
            case 2:
              
              //$LASTPOS=2000099;//user.Main:99
              new Tonyu.classes.user.MapScroll;
              //$LASTPOS=2000115;//user.Main:115
              Tonyu.globals.$search=new Tonyu.classes.kernel.Button({top: 10,left: 300,width: 150,height: 30,text: "路線の検索"});
              //$LASTPOS=2000188;//user.Main:188
              Tonyu.globals.$owner={};
              //$LASTPOS=2000199;//user.Main:199
              Tonyu.globals.$turn=1;
              //$LASTPOS=2000210;//user.Main:210
              Tonyu.globals.$red=0;
              //$LASTPOS=2000218;//user.Main:218
              Tonyu.globals.$blue=0;
              //$LASTPOS=2000228;//user.Main:228
              new Tonyu.classes.kernel.Label({x: 150,y: 70,template: "赤:$red"});
              //$LASTPOS=2000269;//user.Main:269
              new Tonyu.classes.kernel.Label({x: 200,y: 70,template: "青:$blue"});
              //$LASTPOS=2000374;//user.Main:374
              //$LASTPOS=2000378;//user.Main:378
              _this.i=0;for (; _this.i<Tonyu.globals.$stationPlace.length ; _this.i++) {
                Tonyu.checkLoop();
                {
                  //$LASTPOS=2000424;//user.Main:424
                  _this.bx=Tonyu.globals.$stationPlace[_this.i].x-50;
                  //$LASTPOS=2000454;//user.Main:454
                  _this.by=Tonyu.globals.$stationPlace[_this.i].y-30;
                  //$LASTPOS=2000484;//user.Main:484
                  Tonyu.globals.$sta=new Tonyu.classes.kernel.Button({left: _this.bx,top: _this.by,width: 40,height: 30,text: Tonyu.globals.$stationPlace[_this.i].name,layer: Tonyu.globals.$mainLayer,onClick: Tonyu.bindFunc(_this,_this.clicked)});
                }
              }
              //$LASTPOS=2002396;//user.Main:2396
              if (Tonyu.globals.$search&&Tonyu.globals.$search.clicked==1) {
                //$LASTPOS=2002435;//user.Main:2435
                Tonyu.globals.$InputBox.open("路線名の入力");
                
              }
              _thread.exit(_this);return;
            }
          }
        });
      },
      clicked :function _trc_Main_clicked(b) {
        "use strict";
        var _this=this;
        var _it_1;
        
        //$LASTPOS=2000631;//user.Main:631
        if (! Tonyu.globals.$owner[b.text]) {
          //$LASTPOS=2000681;//user.Main:681
          Tonyu.globals.$owner[b.text]={name: b.text,owner: Tonyu.globals.$turn};
          //$LASTPOS=2000811;//user.Main:811
          if (Tonyu.globals.$turn==1) {
            //$LASTPOS=2000837;//user.Main:837
            b.fillStyle=new Tonyu.classes.kernel.Color(255,0,0);
            
          } else {
            //$LASTPOS=2000896;//user.Main:896
            b.fillStyle=new Tonyu.classes.kernel.Color(0,0,255);
            
          }
          //$LASTPOS=2000955;//user.Main:955
          _this.lines=Tonyu.globals.$stations[b.text].lines;
          //$LASTPOS=2000996;//user.Main:996
          _this.count=_this.lines.length;
          //$LASTPOS=2001026;//user.Main:1026
          _it_1=Tonyu.iterator(_this.lines,1);
          while(_it_1.next()) {
            _this.line=_it_1[0];
            
            //$LASTPOS=2001059;//user.Main:1059
            Tonyu.globals.$s=new Tonyu.classes.user.Search({lineName: _this.line,stationName: b.text});
            //$LASTPOS=2001139;//user.Main:1139
            Tonyu.globals.$s.on("complete",(function anonymous_1157() {
              var b2;
              var _it_3;
              
              //$LASTPOS=2001176;//user.Main:1176
              _this.print("complete");
              //$LASTPOS=2001254;//user.Main:1254
              _it_3=Tonyu.iterator(_this.all(Tonyu.classes.kernel.Button),1);
              while(_it_3.next()) {
                b2=_it_3[0];
                
                //$LASTPOS=2001304;//user.Main:1304
                if (Tonyu.globals.$owner[b2.text]) {
                  //$LASTPOS=2001349;//user.Main:1349
                  if (Tonyu.globals.$owner[b2.text].owner==1) {
                    //$LASTPOS=2001407;//user.Main:1407
                    b2.fillStyle=new Tonyu.classes.kernel.Color(255,0,0);
                    
                  } else {
                    //$LASTPOS=2001470;//user.Main:1470
                    if (Tonyu.globals.$owner[b2.text].owner==2) {
                      //$LASTPOS=2001528;//user.Main:1528
                      b2.fillStyle=new Tonyu.classes.kernel.Color(0,0,255);
                      
                    } else {
                      //$LASTPOS=2001620;//user.Main:1620
                      _this.print("????");
                      
                    }
                  }
                  
                }
                
              }
              //$LASTPOS=2001734;//user.Main:1734
              _this.count--;
              //$LASTPOS=2001759;//user.Main:1759
              if (_this.count==0) {
                //$LASTPOS=2001856;//user.Main:1856
                if (Tonyu.globals.$turn==1) {
                  //$LASTPOS=2001894;//user.Main:1894
                  Tonyu.globals.$turn=2;
                  
                } else {
                  //$LASTPOS=2001931;//user.Main:1931
                  if (Tonyu.globals.$turn==2) {
                    //$LASTPOS=2001969;//user.Main:1969
                    Tonyu.globals.$turn=1;
                    
                  } else {
                    
                    
                  }
                }
                
              }
            }));
            
          }
          
        }
      },
      fiber$clicked :function _trc_Main_f_clicked(_thread,b) {
        "use strict";
        var _this=this;
        //var _arguments=Tonyu.A(arguments);
        var __pc=0;
        var _it_1;
        
        //$LASTPOS=2000631;//user.Main:631
        if (! Tonyu.globals.$owner[b.text]) {
          //$LASTPOS=2000681;//user.Main:681
          Tonyu.globals.$owner[b.text]={name: b.text,owner: Tonyu.globals.$turn};
          //$LASTPOS=2000811;//user.Main:811
          if (Tonyu.globals.$turn==1) {
            //$LASTPOS=2000837;//user.Main:837
            b.fillStyle=new Tonyu.classes.kernel.Color(255,0,0);
            
          } else {
            //$LASTPOS=2000896;//user.Main:896
            b.fillStyle=new Tonyu.classes.kernel.Color(0,0,255);
            
          }
          //$LASTPOS=2000955;//user.Main:955
          _this.lines=Tonyu.globals.$stations[b.text].lines;
          //$LASTPOS=2000996;//user.Main:996
          _this.count=_this.lines.length;
          //$LASTPOS=2001026;//user.Main:1026
          _it_1=Tonyu.iterator(_this.lines,1);
          while(_it_1.next()) {
            _this.line=_it_1[0];
            
            //$LASTPOS=2001059;//user.Main:1059
            Tonyu.globals.$s=new Tonyu.classes.user.Search({lineName: _this.line,stationName: b.text});
            //$LASTPOS=2001139;//user.Main:1139
            Tonyu.globals.$s.on("complete",(function anonymous_1157() {
              var b2;
              var _it_3;
              
              //$LASTPOS=2001176;//user.Main:1176
              _this.print("complete");
              //$LASTPOS=2001254;//user.Main:1254
              _it_3=Tonyu.iterator(_this.all(Tonyu.classes.kernel.Button),1);
              while(_it_3.next()) {
                b2=_it_3[0];
                
                //$LASTPOS=2001304;//user.Main:1304
                if (Tonyu.globals.$owner[b2.text]) {
                  //$LASTPOS=2001349;//user.Main:1349
                  if (Tonyu.globals.$owner[b2.text].owner==1) {
                    //$LASTPOS=2001407;//user.Main:1407
                    b2.fillStyle=new Tonyu.classes.kernel.Color(255,0,0);
                    
                  } else {
                    //$LASTPOS=2001470;//user.Main:1470
                    if (Tonyu.globals.$owner[b2.text].owner==2) {
                      //$LASTPOS=2001528;//user.Main:1528
                      b2.fillStyle=new Tonyu.classes.kernel.Color(0,0,255);
                      
                    } else {
                      //$LASTPOS=2001620;//user.Main:1620
                      _this.print("????");
                      
                    }
                  }
                  
                }
                
              }
              //$LASTPOS=2001734;//user.Main:1734
              _this.count--;
              //$LASTPOS=2001759;//user.Main:1759
              if (_this.count==0) {
                //$LASTPOS=2001856;//user.Main:1856
                if (Tonyu.globals.$turn==1) {
                  //$LASTPOS=2001894;//user.Main:1894
                  Tonyu.globals.$turn=2;
                  
                } else {
                  //$LASTPOS=2001931;//user.Main:1931
                  if (Tonyu.globals.$turn==2) {
                    //$LASTPOS=2001969;//user.Main:1969
                    Tonyu.globals.$turn=1;
                    
                  } else {
                    
                    
                  }
                }
                
              }
            }));
            
          }
          
        }
        
        _thread.retVal=_this;return;
      },
      colorCount :function _trc_Main_colorCount(s) {
        "use strict";
        var _this=this;
        var s;
        var _it_6;
        
        //$LASTPOS=2002242;//user.Main:2242
        Tonyu.globals.$red=0;
        //$LASTPOS=2002254;//user.Main:2254
        Tonyu.globals.$blue=0;
        //$LASTPOS=2002267;//user.Main:2267
        _it_6=Tonyu.iterator(Tonyu.globals.$owner,1);
        while(_it_6.next()) {
          s=_it_6[0];
          
          //$LASTPOS=2002297;//user.Main:2297
          if (Tonyu.globals.$owner[s].owner==1) {
            //$LASTPOS=2002333;//user.Main:2333
            Tonyu.globals.$red++;
            
          } else {
            //$LASTPOS=2002368;//user.Main:2368
            Tonyu.globals.$blue++;
            
          }
          
        }
      },
      fiber$colorCount :function _trc_Main_f_colorCount(_thread,s) {
        "use strict";
        var _this=this;
        //var _arguments=Tonyu.A(arguments);
        var __pc=0;
        var s;
        var _it_6;
        
        //$LASTPOS=2002242;//user.Main:2242
        Tonyu.globals.$red=0;
        //$LASTPOS=2002254;//user.Main:2254
        Tonyu.globals.$blue=0;
        //$LASTPOS=2002267;//user.Main:2267
        _it_6=Tonyu.iterator(Tonyu.globals.$owner,1);
        while(_it_6.next()) {
          s=_it_6[0];
          
          //$LASTPOS=2002297;//user.Main:2297
          if (Tonyu.globals.$owner[s].owner==1) {
            //$LASTPOS=2002333;//user.Main:2333
            Tonyu.globals.$red++;
            
          } else {
            //$LASTPOS=2002368;//user.Main:2368
            Tonyu.globals.$blue++;
            
          }
          
        }
        
        _thread.retVal=_this;return;
      },
      __dummy: false
    };
  },
  decls: {"methods":{"main":{"nowait":false},"clicked":{"nowait":false},"colorCount":{"nowait":false}},"fields":{"i":{},"bx":{},"by":{},"lines":{},"count":{},"line":{}}}
});
Tonyu.klass.define({
  fullName: 'user.MapScroll',
  shortName: 'MapScroll',
  namespace: 'user',
  superclass: Tonyu.classes.kernel.Actor,
  includes: [],
  methods: function (__superClass) {
    return {
      main :function _trc_MapScroll_main() {
        "use strict";
        var _this=this;
        
        //$LASTPOS=3000000;//user.MapScroll:0
        _this.x=0;
        //$LASTPOS=3000005;//user.MapScroll:5
        _this.y=250;
        //$LASTPOS=3000012;//user.MapScroll:12
        _this.alpha=0;
        //$LASTPOS=3000021;//user.MapScroll:21
        Tonyu.globals.$Screen.setPivot(Tonyu.globals.$screenWidth/2,Tonyu.globals.$screenHeight/2);
        //$LASTPOS=3000071;//user.MapScroll:71
        while (true) {
          Tonyu.checkLoop();
          //$LASTPOS=3000088;//user.MapScroll:88
          Tonyu.globals.$Screen.scrollTo(_this.x,_this.y);
          //$LASTPOS=3000115;//user.MapScroll:115
          if (_this.getkey("right")>0) {
            //$LASTPOS=3000146;//user.MapScroll:146
            _this.x+=3;
            
          }
          //$LASTPOS=3000162;//user.MapScroll:162
          if (_this.getkey("left")>0) {
            //$LASTPOS=3000192;//user.MapScroll:192
            _this.x-=3;
            
          }
          //$LASTPOS=3000208;//user.MapScroll:208
          if (_this.getkey("down")>0) {
            //$LASTPOS=3000238;//user.MapScroll:238
            _this.y+=3;
            
          }
          //$LASTPOS=3000254;//user.MapScroll:254
          if (_this.getkey("up")>0) {
            //$LASTPOS=3000282;//user.MapScroll:282
            _this.y-=3;
            
          }
          //$LASTPOS=3000298;//user.MapScroll:298
          _this.update();
          
        }
      },
      fiber$main :function _trc_MapScroll_f_main(_thread) {
        "use strict";
        var _this=this;
        //var _arguments=Tonyu.A(arguments);
        var __pc=0;
        
        //$LASTPOS=3000000;//user.MapScroll:0
        _this.x=0;
        //$LASTPOS=3000005;//user.MapScroll:5
        _this.y=250;
        //$LASTPOS=3000012;//user.MapScroll:12
        _this.alpha=0;
        //$LASTPOS=3000021;//user.MapScroll:21
        Tonyu.globals.$Screen.setPivot(Tonyu.globals.$screenWidth/2,Tonyu.globals.$screenHeight/2);
        
        _thread.enter(function _trc_MapScroll_ent_main(_thread) {
          if (_thread.lastEx) __pc=_thread.catchPC;
          for(var __cnt=100 ; __cnt--;) {
            switch (__pc) {
            case 0:
              //$LASTPOS=3000071;//user.MapScroll:71
            case 1:
              //$LASTPOS=3000088;//user.MapScroll:88
              Tonyu.globals.$Screen.scrollTo(_this.x,_this.y);
              //$LASTPOS=3000115;//user.MapScroll:115
              if (_this.getkey("right")>0) {
                //$LASTPOS=3000146;//user.MapScroll:146
                _this.x+=3;
                
              }
              //$LASTPOS=3000162;//user.MapScroll:162
              if (_this.getkey("left")>0) {
                //$LASTPOS=3000192;//user.MapScroll:192
                _this.x-=3;
                
              }
              //$LASTPOS=3000208;//user.MapScroll:208
              if (_this.getkey("down")>0) {
                //$LASTPOS=3000238;//user.MapScroll:238
                _this.y+=3;
                
              }
              //$LASTPOS=3000254;//user.MapScroll:254
              if (_this.getkey("up")>0) {
                //$LASTPOS=3000282;//user.MapScroll:282
                _this.y-=3;
                
              }
              //$LASTPOS=3000298;//user.MapScroll:298
              _this.fiber$update(_thread);
              __pc=2;return;
            case 2:
              
              __pc=1;break;
            case 3     :
              
              _thread.exit(_this);return;
            }
          }
        });
      },
      __dummy: false
    };
  },
  decls: {"methods":{"main":{"nowait":false}},"fields":{}}
});
Tonyu.klass.define({
  fullName: 'user.Search',
  shortName: 'Search',
  namespace: 'user',
  superclass: Tonyu.classes.kernel.Actor,
  includes: [],
  methods: function (__superClass) {
    return {
      main :function _trc_Search_main() {
        "use strict";
        var _this=this;
        
        //$LASTPOS=4003051;//user.Search:3051
        Tonyu.globals.$p=0;
        //$LASTPOS=4003990;//user.Search:3990
        _this.s=_this.stationName;
        //$LASTPOS=4004021;//user.Search:4021
        _this.so=(_this.searchOwner(_this.stationName));
        //$LASTPOS=4004072;//user.Search:4072
        Tonyu.globals.$point=0;
        //$LASTPOS=4004104;//user.Search:4104
        _this.print("");
        //$LASTPOS=4004116;//user.Search:4116
        //$LASTPOS=4004120;//user.Search:4120
        _this.i=0;for (; _this.i<50 ; _this.i++) {
          Tonyu.checkLoop();
          {
            //$LASTPOS=4004172;//user.Search:4172
            _this.end=(_this.isTerminal(_this.stationName));
            //$LASTPOS=4004209;//user.Search:4209
            if (_this.end==1) {
              //$LASTPOS=4004239;//user.Search:4239
              if (Tonyu.globals.$point!=0&&_this.savestation.length!=Tonyu.globals.$point) {
                //$LASTPOS=4004300;//user.Search:4300
                _this.stationName=_this.savestation[Tonyu.globals.$point];
                //$LASTPOS=4004347;//user.Search:4347
                Tonyu.globals.$point++;
                continue;
                
                
              }
              break;
              
              
            }
            //$LASTPOS=4004467;//user.Search:4467
            _this.sta=(_this.searchNextStation(_this.stationName,0));
            //$LASTPOS=4004513;//user.Search:4513
            _this.array = Array.isArray(_this.sta);
            
            //$LASTPOS=4004549;//user.Search:4549
            if (_this.array==false) {
              //$LASTPOS=4004577;//user.Search:4577
              _this.a=(_this.searchOwner(_this.sta));
              //$LASTPOS=4004609;//user.Search:4609
              if (_this.a==_this.so) {
                //$LASTPOS=4004634;//user.Search:4634
                _this.o=(_this.updateOwner(_this.s,_this.sta,0));
                break;
                
                
              }
              //$LASTPOS=4004699;//user.Search:4699
              _this.stationName=_this.sta;
              
            } else {
              //$LASTPOS=4004737;//user.Search:4737
              _this.savestation=_this.sta;
              //$LASTPOS=4004781;//user.Search:4781
              _this.stationName=_this.savestation[Tonyu.globals.$point];
              //$LASTPOS=4004824;//user.Search:4824
              Tonyu.globals.$point++;
              
            }
          }
        }
        //$LASTPOS=4004861;//user.Search:4861
        _this.print("");
        //$LASTPOS=4004872;//user.Search:4872
        _this.stationName=_this.s;
        //$LASTPOS=4004923;//user.Search:4923
        //$LASTPOS=4004927;//user.Search:4927
        _this.i=0;for (; _this.i<5 ; _this.i++) {
          Tonyu.checkLoop();
          {
            //$LASTPOS=4004952;//user.Search:4952
            _this.end=(_this.isTerminal(_this.stationName));
            //$LASTPOS=4004989;//user.Search:4989
            if (_this.end==2) {
              //$LASTPOS=4005019;//user.Search:5019
              if (Tonyu.globals.$point!=0&&_this.savestation.length!=Tonyu.globals.$point) {
                //$LASTPOS=4005080;//user.Search:5080
                _this.stationName=_this.savestation[Tonyu.globals.$point];
                //$LASTPOS=4005127;//user.Search:5127
                Tonyu.globals.$point++;
                continue;
                
                
              }
              break;
              
              
            }
            //$LASTPOS=4005242;//user.Search:5242
            _this.sta=(_this.searchNextStation(_this.stationName,1));
            //$LASTPOS=4005288;//user.Search:5288
            _this.array = Array.isArray(_this.sta);
            
            //$LASTPOS=4005324;//user.Search:5324
            if (_this.array==false) {
              //$LASTPOS=4005361;//user.Search:5361
              _this.a=(_this.searchOwner(_this.sta));
              //$LASTPOS=4005393;//user.Search:5393
              if (_this.a==_this.so) {
                //$LASTPOS=4005418;//user.Search:5418
                _this.o=(_this.updateOwner(_this.s,_this.sta,1));
                break;
                
                
              }
              //$LASTPOS=4005483;//user.Search:5483
              _this.stationName=_this.sta;
              
            } else {
              //$LASTPOS=4005521;//user.Search:5521
              _this.savestation=_this.sta;
              //$LASTPOS=4005565;//user.Search:5565
              _this.stationName=_this.savestation[Tonyu.globals.$point];
              //$LASTPOS=4005608;//user.Search:5608
              Tonyu.globals.$point++;
              
            }
          }
        }
        //$LASTPOS=4005629;//user.Search:5629
        _this.fireEvent("complete");
      },
      fiber$main :function _trc_Search_f_main(_thread) {
        "use strict";
        var _this=this;
        //var _arguments=Tonyu.A(arguments);
        var __pc=0;
        
        //$LASTPOS=4003051;//user.Search:3051
        Tonyu.globals.$p=0;
        //$LASTPOS=4003990;//user.Search:3990
        _this.s=_this.stationName;
        //$LASTPOS=4004021;//user.Search:4021
        _this.so=(_this.searchOwner(_this.stationName));
        //$LASTPOS=4004072;//user.Search:4072
        Tonyu.globals.$point=0;
        //$LASTPOS=4004104;//user.Search:4104
        _this.print("");
        //$LASTPOS=4004116;//user.Search:4116
        //$LASTPOS=4004120;//user.Search:4120
        _this.i=0;for (; _this.i<50 ; _this.i++) {
          Tonyu.checkLoop();
          {
            //$LASTPOS=4004172;//user.Search:4172
            _this.end=(_this.isTerminal(_this.stationName));
            //$LASTPOS=4004209;//user.Search:4209
            if (_this.end==1) {
              //$LASTPOS=4004239;//user.Search:4239
              if (Tonyu.globals.$point!=0&&_this.savestation.length!=Tonyu.globals.$point) {
                //$LASTPOS=4004300;//user.Search:4300
                _this.stationName=_this.savestation[Tonyu.globals.$point];
                //$LASTPOS=4004347;//user.Search:4347
                Tonyu.globals.$point++;
                continue;
                
                
              }
              break;
              
              
            }
            //$LASTPOS=4004467;//user.Search:4467
            _this.sta=(_this.searchNextStation(_this.stationName,0));
            //$LASTPOS=4004513;//user.Search:4513
            _this.array = Array.isArray(_this.sta);
            
            //$LASTPOS=4004549;//user.Search:4549
            if (_this.array==false) {
              //$LASTPOS=4004577;//user.Search:4577
              _this.a=(_this.searchOwner(_this.sta));
              //$LASTPOS=4004609;//user.Search:4609
              if (_this.a==_this.so) {
                //$LASTPOS=4004634;//user.Search:4634
                _this.o=(_this.updateOwner(_this.s,_this.sta,0));
                break;
                
                
              }
              //$LASTPOS=4004699;//user.Search:4699
              _this.stationName=_this.sta;
              
            } else {
              //$LASTPOS=4004737;//user.Search:4737
              _this.savestation=_this.sta;
              //$LASTPOS=4004781;//user.Search:4781
              _this.stationName=_this.savestation[Tonyu.globals.$point];
              //$LASTPOS=4004824;//user.Search:4824
              Tonyu.globals.$point++;
              
            }
          }
        }
        //$LASTPOS=4004861;//user.Search:4861
        _this.print("");
        //$LASTPOS=4004872;//user.Search:4872
        _this.stationName=_this.s;
        //$LASTPOS=4004923;//user.Search:4923
        //$LASTPOS=4004927;//user.Search:4927
        _this.i=0;for (; _this.i<5 ; _this.i++) {
          Tonyu.checkLoop();
          {
            //$LASTPOS=4004952;//user.Search:4952
            _this.end=(_this.isTerminal(_this.stationName));
            //$LASTPOS=4004989;//user.Search:4989
            if (_this.end==2) {
              //$LASTPOS=4005019;//user.Search:5019
              if (Tonyu.globals.$point!=0&&_this.savestation.length!=Tonyu.globals.$point) {
                //$LASTPOS=4005080;//user.Search:5080
                _this.stationName=_this.savestation[Tonyu.globals.$point];
                //$LASTPOS=4005127;//user.Search:5127
                Tonyu.globals.$point++;
                continue;
                
                
              }
              break;
              
              
            }
            //$LASTPOS=4005242;//user.Search:5242
            _this.sta=(_this.searchNextStation(_this.stationName,1));
            //$LASTPOS=4005288;//user.Search:5288
            _this.array = Array.isArray(_this.sta);
            
            //$LASTPOS=4005324;//user.Search:5324
            if (_this.array==false) {
              //$LASTPOS=4005361;//user.Search:5361
              _this.a=(_this.searchOwner(_this.sta));
              //$LASTPOS=4005393;//user.Search:5393
              if (_this.a==_this.so) {
                //$LASTPOS=4005418;//user.Search:5418
                _this.o=(_this.updateOwner(_this.s,_this.sta,1));
                break;
                
                
              }
              //$LASTPOS=4005483;//user.Search:5483
              _this.stationName=_this.sta;
              
            } else {
              //$LASTPOS=4005521;//user.Search:5521
              _this.savestation=_this.sta;
              //$LASTPOS=4005565;//user.Search:5565
              _this.stationName=_this.savestation[Tonyu.globals.$point];
              //$LASTPOS=4005608;//user.Search:5608
              Tonyu.globals.$point++;
              
            }
          }
        }
        //$LASTPOS=4005629;//user.Search:5629
        _this.fireEvent("complete");
        
        _thread.retVal=_this;return;
      },
      searchNextStation :function _trc_Search_searchNextStation(stationName,direction) {
        "use strict";
        var _this=this;
        var station;
        var nextst;
        var z;
        var i;
        
        //$LASTPOS=4000098;//user.Search:98
        station = Tonyu.globals.$stations[stationName];
        
        //$LASTPOS=4000152;//user.Search:152
        nextst = station.nexts;
        
        //$LASTPOS=4000190;//user.Search:190
        _this.f=nextst.filter(Tonyu.bindFunc(_this,_this.isLineOf));
        //$LASTPOS=4000278;//user.Search:278
        if (_this.f.length>2) {
          //$LASTPOS=4000373;//user.Search:373
          z = [];
          
          //$LASTPOS=4000391;//user.Search:391
          //$LASTPOS=4000395;//user.Search:395
          i = 0;
          for (; i<_this.f.length ; i++) {
            Tonyu.checkLoop();
            {
              //$LASTPOS=4000432;//user.Search:432
              _this.nextDirection=(_this.searchDirection(_this.f[i],stationName));
              //$LASTPOS=4000510;//user.Search:510
              station = Tonyu.globals.$stations[stationName];
              
              //$LASTPOS=4000572;//user.Search:572
              nextst = station.nexts;
              
              //$LASTPOS=4000618;//user.Search:618
              _this.f=nextst.filter(Tonyu.bindFunc(_this,_this.isLineOf));
              //$LASTPOS=4000690;//user.Search:690
              if (_this.nextDirection==direction) {
                //$LASTPOS=4000738;//user.Search:738
                z.push(_this.f[i]);
                
              }
            }
          }
          return z;
          
        } else {
          //$LASTPOS=4000915;//user.Search:915
          _this.a=_this.isTerminal(stationName);
          //$LASTPOS=4000952;//user.Search:952
          if (_this.a==0) {
            return _this.f[direction];
            
          } else {
            //$LASTPOS=4001019;//user.Search:1019
            if (_this.a==1&&direction==1) {
              return _this.f[0];
              
            } else {
              //$LASTPOS=4001110;//user.Search:1110
              if (_this.a==1&&direction==0) {
                return null;
                
              } else {
                //$LASTPOS=4001193;//user.Search:1193
                if (_this.a==2&&direction==1) {
                  return null;
                  
                } else {
                  return _this.f[0];
                  
                }
              }
            }
          }
          
        }
      },
      fiber$searchNextStation :function _trc_Search_f_searchNextStation(_thread,stationName,direction) {
        "use strict";
        var _this=this;
        //var _arguments=Tonyu.A(arguments);
        var __pc=0;
        var station;
        var nextst;
        var z;
        var i;
        
        //$LASTPOS=4000098;//user.Search:98
        station = Tonyu.globals.$stations[stationName];
        
        //$LASTPOS=4000152;//user.Search:152
        nextst = station.nexts;
        
        //$LASTPOS=4000190;//user.Search:190
        _this.f=nextst.filter(Tonyu.bindFunc(_this,_this.isLineOf));
        
        _thread.enter(function _trc_Search_ent_searchNextStation(_thread) {
          if (_thread.lastEx) __pc=_thread.catchPC;
          for(var __cnt=100 ; __cnt--;) {
            switch (__pc) {
            case 0:
              //$LASTPOS=4000278;//user.Search:278
              if (!(_this.f.length>2)) { __pc=1     ; break; }
              //$LASTPOS=4000373;//user.Search:373
              z = [];
              
              //$LASTPOS=4000391;//user.Search:391
              //$LASTPOS=4000395;//user.Search:395
              i = 0;
              for (; i<_this.f.length ; i++) {
                Tonyu.checkLoop();
                {
                  //$LASTPOS=4000432;//user.Search:432
                  _this.nextDirection=(_this.searchDirection(_this.f[i],stationName));
                  //$LASTPOS=4000510;//user.Search:510
                  station = Tonyu.globals.$stations[stationName];
                  
                  //$LASTPOS=4000572;//user.Search:572
                  nextst = station.nexts;
                  
                  //$LASTPOS=4000618;//user.Search:618
                  _this.f=nextst.filter(Tonyu.bindFunc(_this,_this.isLineOf));
                  //$LASTPOS=4000690;//user.Search:690
                  if (_this.nextDirection==direction) {
                    //$LASTPOS=4000738;//user.Search:738
                    z.push(_this.f[i]);
                    
                  }
                }
              }
              _thread.exit(z);return;
              __pc=11    ;break;
            case 1     :
              //$LASTPOS=4000915;//user.Search:915
              _this.fiber$isTerminal(_thread, stationName);
              __pc=2;return;
            case 2:
              _this.a=_thread.retVal;
              
              //$LASTPOS=4000952;//user.Search:952
              if (!(_this.a==0)) { __pc=3     ; break; }
              _thread.exit(_this.f[direction]);return;
              __pc=10    ;break;
            case 3     :
              //$LASTPOS=4001019;//user.Search:1019
              if (!(_this.a==1&&direction==1)) { __pc=4     ; break; }
              _thread.exit(_this.f[0]);return;
              __pc=9     ;break;
            case 4     :
              //$LASTPOS=4001110;//user.Search:1110
              if (!(_this.a==1&&direction==0)) { __pc=5     ; break; }
              _thread.exit(null);return;
              __pc=8     ;break;
            case 5     :
              //$LASTPOS=4001193;//user.Search:1193
              if (!(_this.a==2&&direction==1)) { __pc=6     ; break; }
              _thread.exit(null);return;
              __pc=7     ;break;
            case 6     :
              _thread.exit(_this.f[0]);return;
            case 7     :
              
            case 8     :
              
            case 9     :
              
            case 10    :
              
            case 11    :
              
              _thread.exit(_this);return;
            }
          }
        });
      },
      searchDirection :function _trc_Search_searchDirection(stationName1,stationName2) {
        "use strict";
        var _this=this;
        var station;
        var nextst;
        
        //$LASTPOS=4001479;//user.Search:1479
        station = Tonyu.globals.$stations[stationName1];
        
        //$LASTPOS=4001534;//user.Search:1534
        nextst = station.nexts;
        
        //$LASTPOS=4001572;//user.Search:1572
        _this.f=nextst.filter(Tonyu.bindFunc(_this,_this.isLineOf));
        //$LASTPOS=4001628;//user.Search:1628
        if (_this.f.indexOf(stationName2)>- 1) {
          //$LASTPOS=4001700;//user.Search:1700
          _this.num=_this.f.indexOf(stationName2);
          //$LASTPOS=4001775;//user.Search:1775
          if (_this.num==0) {
            return 1;
            
          } else {
            return 0;
            
          }
          
        }
      },
      fiber$searchDirection :function _trc_Search_f_searchDirection(_thread,stationName1,stationName2) {
        "use strict";
        var _this=this;
        //var _arguments=Tonyu.A(arguments);
        var __pc=0;
        var station;
        var nextst;
        
        //$LASTPOS=4001479;//user.Search:1479
        station = Tonyu.globals.$stations[stationName1];
        
        //$LASTPOS=4001534;//user.Search:1534
        nextst = station.nexts;
        
        //$LASTPOS=4001572;//user.Search:1572
        _this.f=nextst.filter(Tonyu.bindFunc(_this,_this.isLineOf));
        //$LASTPOS=4001628;//user.Search:1628
        if (_this.f.indexOf(stationName2)>- 1) {
          //$LASTPOS=4001700;//user.Search:1700
          _this.num=_this.f.indexOf(stationName2);
          //$LASTPOS=4001775;//user.Search:1775
          if (_this.num==0) {
            _thread.retVal=1;return;
            
            
          } else {
            _thread.retVal=0;return;
            
            
          }
          
        }
        
        _thread.retVal=_this;return;
      },
      isLineOf :function _trc_Search_isLineOf(stationName) {
        "use strict";
        var _this=this;
        var station;
        var line;
        
        //$LASTPOS=4001992;//user.Search:1992
        station = Tonyu.globals.$stations[stationName];
        
        //$LASTPOS=4002046;//user.Search:2046
        line = station.lines;
        
        //$LASTPOS=4002106;//user.Search:2106
        if (line.indexOf(_this.lineName)>- 1) {
          return true;
          
        } else {
          return false;
          
        }
      },
      fiber$isLineOf :function _trc_Search_f_isLineOf(_thread,stationName) {
        "use strict";
        var _this=this;
        //var _arguments=Tonyu.A(arguments);
        var __pc=0;
        var station;
        var line;
        
        //$LASTPOS=4001992;//user.Search:1992
        station = Tonyu.globals.$stations[stationName];
        
        //$LASTPOS=4002046;//user.Search:2046
        line = station.lines;
        
        //$LASTPOS=4002106;//user.Search:2106
        if (line.indexOf(_this.lineName)>- 1) {
          _thread.retVal=true;return;
          
          
        } else {
          _thread.retVal=false;return;
          
          
        }
        
        _thread.retVal=_this;return;
      },
      isTerminal :function _trc_Search_isTerminal(stationName) {
        "use strict";
        var _this=this;
        var station;
        var nextst;
        var ns;
        
        //$LASTPOS=4002264;//user.Search:2264
        station = Tonyu.globals.$stations[stationName];
        
        //$LASTPOS=4002318;//user.Search:2318
        nextst = station.nexts;
        
        //$LASTPOS=4002356;//user.Search:2356
        _this.f=nextst.filter(Tonyu.bindFunc(_this,_this.isLineOf));
        //$LASTPOS=4002412;//user.Search:2412
        if (_this.f.length==1) {
          //$LASTPOS=4002462;//user.Search:2462
          ns = Tonyu.globals.$stations[_this.f[0]];
          
          //$LASTPOS=4002496;//user.Search:2496
          _this.n=ns.nexts;
          //$LASTPOS=4002518;//user.Search:2518
          _this.m=_this.n.filter(Tonyu.bindFunc(_this,_this.isLineOf));
          //$LASTPOS=4002589;//user.Search:2589
          if (stationName==_this.m[0]) {
            return 1;
            
          } else {
            //$LASTPOS=4002656;//user.Search:2656
            if (stationName==_this.m[1]) {
              return 2;
              
            } else {
              
              
            }
          }
          
        } else {
          return 0;
          
        }
      },
      fiber$isTerminal :function _trc_Search_f_isTerminal(_thread,stationName) {
        "use strict";
        var _this=this;
        //var _arguments=Tonyu.A(arguments);
        var __pc=0;
        var station;
        var nextst;
        var ns;
        
        //$LASTPOS=4002264;//user.Search:2264
        station = Tonyu.globals.$stations[stationName];
        
        //$LASTPOS=4002318;//user.Search:2318
        nextst = station.nexts;
        
        //$LASTPOS=4002356;//user.Search:2356
        _this.f=nextst.filter(Tonyu.bindFunc(_this,_this.isLineOf));
        //$LASTPOS=4002412;//user.Search:2412
        if (_this.f.length==1) {
          //$LASTPOS=4002462;//user.Search:2462
          ns = Tonyu.globals.$stations[_this.f[0]];
          
          //$LASTPOS=4002496;//user.Search:2496
          _this.n=ns.nexts;
          //$LASTPOS=4002518;//user.Search:2518
          _this.m=_this.n.filter(Tonyu.bindFunc(_this,_this.isLineOf));
          //$LASTPOS=4002589;//user.Search:2589
          if (stationName==_this.m[0]) {
            _thread.retVal=1;return;
            
            
          } else {
            //$LASTPOS=4002656;//user.Search:2656
            if (stationName==_this.m[1]) {
              _thread.retVal=2;return;
              
              
            } else {
              
              
            }
          }
          
        } else {
          _thread.retVal=0;return;
          
          
        }
        
        _thread.retVal=_this;return;
      },
      searchOwner :function _trc_Search_searchOwner(stationName) {
        "use strict";
        var _this=this;
        var staown;
        var owner;
        
        //$LASTPOS=4002919;//user.Search:2919
        if (Tonyu.globals.$owner[stationName]) {
          //$LASTPOS=4002952;//user.Search:2952
          staown = Tonyu.globals.$owner[stationName];
          
          //$LASTPOS=4002994;//user.Search:2994
          owner = staown.owner;
          
          return owner;
          
        }
      },
      fiber$searchOwner :function _trc_Search_f_searchOwner(_thread,stationName) {
        "use strict";
        var _this=this;
        //var _arguments=Tonyu.A(arguments);
        var __pc=0;
        var staown;
        var owner;
        
        //$LASTPOS=4002919;//user.Search:2919
        if (Tonyu.globals.$owner[stationName]) {
          //$LASTPOS=4002952;//user.Search:2952
          staown = Tonyu.globals.$owner[stationName];
          
          //$LASTPOS=4002994;//user.Search:2994
          owner = staown.owner;
          
          _thread.retVal=owner;return;
          
          
        }
        
        _thread.retVal=_this;return;
      },
      updateOwner :function _trc_Search_updateOwner(stationName,endStation,direction) {
        "use strict";
        var _this=this;
        var i;
        var st;
        var array;
        
        //$LASTPOS=4003151;//user.Search:3151
        //$LASTPOS=4003155;//user.Search:3155
        i = 0;
        for (; i<100 ; i++) {
          Tonyu.checkLoop();
          {
            //$LASTPOS=4003200;//user.Search:3200
            if (st==endStation) {
              //$LASTPOS=4003234;//user.Search:3234
              if (Tonyu.globals.$p!=0&&_this.savest.length!=Tonyu.globals.$point) {
                //$LASTPOS=4003290;//user.Search:3290
                stationName=_this.savest[Tonyu.globals.$p];
                //$LASTPOS=4003332;//user.Search:3332
                Tonyu.globals.$p++;
                continue;
                
                
              }
              break;
              
              
            }
            //$LASTPOS=4003415;//user.Search:3415
            st = (_this.searchNextStation(stationName,direction));
            
            //$LASTPOS=4003485;//user.Search:3485
            array = Array.isArray(st);
            
            //$LASTPOS=4003524;//user.Search:3524
            if (array==false) {
              //$LASTPOS=4003589;//user.Search:3589
              if (! Tonyu.globals.$owner[st]) {
                //$LASTPOS=4003623;//user.Search:3623
                Tonyu.globals.$owner[st]={owner: 0};
                
              }
              //$LASTPOS=4003671;//user.Search:3671
              Tonyu.globals.$owner[st].owner=Tonyu.globals.$turn;
              //$LASTPOS=4003709;//user.Search:3709
              stationName=st;
              
            } else {
              //$LASTPOS=4003754;//user.Search:3754
              _this.savest=st;
              //$LASTPOS=4003795;//user.Search:3795
              if (! Tonyu.globals.$owner[st[Tonyu.globals.$p]]) {
                //$LASTPOS=4003833;//user.Search:3833
                Tonyu.globals.$owner[st[Tonyu.globals.$p]]={owner: 0};
                
              }
              //$LASTPOS=4003885;//user.Search:3885
              Tonyu.globals.$owner[st[Tonyu.globals.$p]].owner=Tonyu.globals.$turn;
              //$LASTPOS=4003927;//user.Search:3927
              stationName=_this.savest[Tonyu.globals.$p];
              //$LASTPOS=4003965;//user.Search:3965
              Tonyu.globals.$p++;
              
            }
          }
        }
      },
      fiber$updateOwner :function _trc_Search_f_updateOwner(_thread,stationName,endStation,direction) {
        "use strict";
        var _this=this;
        //var _arguments=Tonyu.A(arguments);
        var __pc=0;
        var i;
        var st;
        var array;
        
        //$LASTPOS=4003151;//user.Search:3151
        //$LASTPOS=4003155;//user.Search:3155
        i = 0;
        for (; i<100 ; i++) {
          Tonyu.checkLoop();
          {
            //$LASTPOS=4003200;//user.Search:3200
            if (st==endStation) {
              //$LASTPOS=4003234;//user.Search:3234
              if (Tonyu.globals.$p!=0&&_this.savest.length!=Tonyu.globals.$point) {
                //$LASTPOS=4003290;//user.Search:3290
                stationName=_this.savest[Tonyu.globals.$p];
                //$LASTPOS=4003332;//user.Search:3332
                Tonyu.globals.$p++;
                continue;
                
                
              }
              break;
              
              
            }
            //$LASTPOS=4003415;//user.Search:3415
            st = (_this.searchNextStation(stationName,direction));
            
            //$LASTPOS=4003485;//user.Search:3485
            array = Array.isArray(st);
            
            //$LASTPOS=4003524;//user.Search:3524
            if (array==false) {
              //$LASTPOS=4003589;//user.Search:3589
              if (! Tonyu.globals.$owner[st]) {
                //$LASTPOS=4003623;//user.Search:3623
                Tonyu.globals.$owner[st]={owner: 0};
                
              }
              //$LASTPOS=4003671;//user.Search:3671
              Tonyu.globals.$owner[st].owner=Tonyu.globals.$turn;
              //$LASTPOS=4003709;//user.Search:3709
              stationName=st;
              
            } else {
              //$LASTPOS=4003754;//user.Search:3754
              _this.savest=st;
              //$LASTPOS=4003795;//user.Search:3795
              if (! Tonyu.globals.$owner[st[Tonyu.globals.$p]]) {
                //$LASTPOS=4003833;//user.Search:3833
                Tonyu.globals.$owner[st[Tonyu.globals.$p]]={owner: 0};
                
              }
              //$LASTPOS=4003885;//user.Search:3885
              Tonyu.globals.$owner[st[Tonyu.globals.$p]].owner=Tonyu.globals.$turn;
              //$LASTPOS=4003927;//user.Search:3927
              stationName=_this.savest[Tonyu.globals.$p];
              //$LASTPOS=4003965;//user.Search:3965
              Tonyu.globals.$p++;
              
            }
          }
        }
        
        _thread.retVal=_this;return;
      },
      __dummy: false
    };
  },
  decls: {"methods":{"main":{"nowait":false},"searchNextStation":{"nowait":false},"searchDirection":{"nowait":false},"isLineOf":{"nowait":false},"isTerminal":{"nowait":false},"searchOwner":{"nowait":false},"updateOwner":{"nowait":false}},"fields":{"array":{},"s":{},"stationName":{},"so":{},"i":{},"end":{},"savestation":{},"sta":{},"a":{},"o":{},"f":{},"nextDirection":{},"num":{},"lineName":{},"n":{},"m":{},"savest":{}}}
});
Tonyu.klass.define({
  fullName: 'user.StationPlace',
  shortName: 'StationPlace',
  namespace: 'user',
  superclass: Tonyu.classes.kernel.Actor,
  includes: [],
  methods: function (__superClass) {
    return {
      main :function _trc_StationPlace_main() {
        "use strict";
        var _this=this;
        
        //$LASTPOS=5000269;//user.StationPlace:269
        Tonyu.globals.$stationPlace=[{name: "東京",x: 20,y: 300},{name: "新日本橋",x: 60,y: 270},{name: "馬喰町",x: 90,y: 240},{name: "錦糸町",x: 230,y: 210},{name: "亀戸",x: 290,y: 210},{name: "平井",x: 320,y: 180},{name: "新小岩",x: 360,y: 140},{name: "小岩",x: 400,y: 110},{name: "市川",x: 450,y: 120},{name: "本八幡",x: 510,y: 130},{name: "下総中山",x: 580,y: 140},{name: "西船橋",x: 640,y: 150},{name: "船橋",x: 700,y: 160},{name: "両国",x: 20,y: 210},{name: "浅草橋",x: - 40,y: 210},{name: "秋葉原",x: - 110,y: 210},{name: "御茶ノ水",x: - 180,y: 210},{name: "船橋法典",x: 640,y: 80},{name: "市川大野",x: 640,y: 10},{name: "東松戸",x: 640,y: - 60},{name: "新八柱",x: 640,y: - 140}];
      },
      fiber$main :function _trc_StationPlace_f_main(_thread) {
        "use strict";
        var _this=this;
        //var _arguments=Tonyu.A(arguments);
        var __pc=0;
        
        //$LASTPOS=5000269;//user.StationPlace:269
        Tonyu.globals.$stationPlace=[{name: "東京",x: 20,y: 300},{name: "新日本橋",x: 60,y: 270},{name: "馬喰町",x: 90,y: 240},{name: "錦糸町",x: 230,y: 210},{name: "亀戸",x: 290,y: 210},{name: "平井",x: 320,y: 180},{name: "新小岩",x: 360,y: 140},{name: "小岩",x: 400,y: 110},{name: "市川",x: 450,y: 120},{name: "本八幡",x: 510,y: 130},{name: "下総中山",x: 580,y: 140},{name: "西船橋",x: 640,y: 150},{name: "船橋",x: 700,y: 160},{name: "両国",x: 20,y: 210},{name: "浅草橋",x: - 40,y: 210},{name: "秋葉原",x: - 110,y: 210},{name: "御茶ノ水",x: - 180,y: 210},{name: "船橋法典",x: 640,y: 80},{name: "市川大野",x: 640,y: 10},{name: "東松戸",x: 640,y: - 60},{name: "新八柱",x: 640,y: - 140}];
        
        _thread.retVal=_this;return;
      },
      __dummy: false
    };
  },
  decls: {"methods":{"main":{"nowait":false}},"fields":{}}
});

//# sourceMappingURL=concat.js.map