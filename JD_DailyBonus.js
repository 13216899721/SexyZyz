/ *
京东每日奖金，多合一脚本
说明：
初次使用时。需要手动登录到https://bean.m.jd.com签入以获取cookie。如果通知获得cookie成功，则可以使用签入脚本。
由于cookie的有效性，如果脚本将来弹出cookie无效的通知，则需要重复上述步骤。
 每日奖金脚本将在每天的0:05 am执行。您可以修改执行时间。
 如果转载，请注明出处。我的TG频道@NobyDa

 更新2020.2。12 1:00 v65 
 有效数字：21
 更新2020.2。13 21:00 v66 
 有效号码：22
 ~~~~~~~~~~~~~~~~
 浪涌4.0：
 [脚本]
 @@ -59,11 +59,11 @@异步函数all（）{//签到模块相互独立，您可以注释该行以替换
   等待 京东妇女（停车）;  //京东女装馆
   等待 JingDongCash （停止）;  //京东现金红包
   等待 京东鞋（停下）;  //京东鞋靴馆
   //等待JingRSeeAds（stop）; //金融看广告
   等待 JingRSeeAds （停止）;  //金融看广告
   等待 JingRongGame （停止）;  //金融游戏大厅
   等待 JingDongLive （停止）;  //京东智能生活馆
   等待 JingDongClean （停止）;  //京东清洁馆
   等待 JDPersonalCare （停止）;  //京东个人护理馆
   等待 JDMagicCube （停止）;  //京东小魔方
   等待 京东奖（停下）;  //京东抽奖
   等待 京东摇（停下）;  //京东摇一摇

 @@ -87,11 +87,11 @@ var merge = {
   JDMakeup：{ 成功：0 ，失败：0 ，bean：0 ，钢：0 ，通知：'' } ，
   JDWomen：{ 成功：0 ，失败：0 ，豆：0 ，钢：0 ，通知：'' } ，
   JDShoes：{ 成功：0 ，失败：0 ，bean：0 ，钢：0 ，通知：'' } ，
   JDCube：   { 成功：0 ，失败：0 ，bean：0 ，钢：0 ，通知：'' } ，
   JRGame：   { 成功：0 ，失败：0 ，bean：0 ，钢：0 ，通知：'' } ，
   JRSeeAds：{ 成功：0 ，失败：0 ，bean：0 ，钢：0 ，通知：'' } ，
   JDLive：   { 成功：0 ，失败：0 ，bean：0 ，钢：0 ，通知：'' } ，
   JDCare：   { 成功：0 ，失败：0 ，bean：0 ，钢：0 ，通知：'' } ，
   JDClean：{ 成功：0 ，失败：0 ，bean：0 ，钢：0 ，通知：'' } ，
   JDPrize：{ 成功：0 ，失败：0 ，bean：0 ，钢铁：0 ，通知：“ ，键：0 } ，
   JRSteel：{ 成功：0 ，失败：0 ，bean：0 ，钢：0 ，通知：“ ，TSteel：0 } ，
   JDCash：   { 成功：0 ，失败：0 ，bean：0 ，钢：0 ，通知：“ ，现金：0 ，TCash：0 } ，
 @@ -970,6 +970,68 @@函数JingDMakeup（s）{
   } ）;
 }

 函数 JingDongClean （s ） {

   返回 新的 Promise （resolve  =>  {  setTimeout （（） =>  {
     const  JDCUUrl  =  {
       网址：“ https://api.m.jd.com/client.action?functionId=userSign” ，
       标头：{
         Cookie：KEY ，
       } ，
       身体：“身体=％7B％22riskParam％22％3A％7B％22eid％22％3A％22O5X6JYMZTXIEX4VBCBWEM5PTIZV6HXH7M3AI75EABM5GBZYVQKRGQJ5A2PPO5PSELSRMI72SYF4KTCB4NIU6AZQ3O6C3J7ZVEP3RVDFEBKVN2RER2GTQ％22％2C％22shshshfpb％22％3A％22v1％5C％2FzMYRjEWKgYe％2BUiNwEvaVlrHBQGVwqLx4CsS9PH1s0s0Vs9AWk％2B7vr9KSHh3BQd5NTukznDTZnd75xHzonHnw％3D％3D％22％2C％ 22pageClickKey％22％3A％22Babel_Sign％22％2C％22childActivityUrl％22％3A％22-1％22％7D％2C％22url％22％3A％22％22％2C％22params％22％3A％22％7B％ 5C％22enActK％5C％22％3A％5C％22HvENi4DscTLaP0AcMuJcj8znpSOv6847H9NkrtycVlIaZs％5C％2Fn4coLNw％3D％3D％5C％22％22C2C％5C％22isFloatLayer％5％ 5C％2200561054_29747880_t1％5C％22％2C％5C％22signId％5C％22％3A％5C％2231CgSud60mEaZs％5C％2Fn4coLNw％3D％3D％5D％5C％22％7D％22％2C％22geo％22％3A％7B％ 22lng％22％3A％220.000000％22％2C％22lat％22％3A％220.000000％22％7D％7D＆client = apple＆clientVersion = 8.5.0＆d_brand = apple＆openudid = 1fce88cd05c42fe2b054e846f11bdf33f016d676＆sign = cb5945883dc459336f107d30e6abc60f＆st = 1581531991265＆sv = 121“
     } ;

     $ nobyda 。发布（JDCUUrl ， 函数（错误， 响应， 数据） {
       尝试 {
         如果 （错误） {
           合并。JDClean 。notify  =  “京东商城-清洁：签到接口请求失败！️！️”
           合并。JDClean 。失败 =  1
         }  其他 {
           const  cc  =  JSON 。解析（数据）
           如果 （数据。匹配（/签到成功/ ）） {
             if  （日志） 控制台。日志（“京东商城-清洁签到成功响应：\ n”  +  数据）
             如果 （数据。匹配（/ （\ “文本\” ：\ “ \ d +京豆\” ） / ）） {
               beanQuantity  =  cc 。awardList [ 0 ] 。文字。匹配（/ \ d + / ）
               合并。JDClean 。notify  =  “京东商城-清洁：成功，明细：”  +  beanQuantity  +  “京豆🐶”
               合并。JDClean 。bean  =  bean 数量
               合并。JDClean 。成功 =  1
             }  其他 {
               合并。JDClean 。notify  =  “京东商城-清洁：成功，明细：无京豆🐶”
               合并。JDClean 。成功 =  1
             }
           }  其他 {
             if  （日志） 控制台。日志（“京东商城-清洁签到失败响应：\ n”  +  数据）
             如果 （数据。匹配（/ （已签到|已领取） / ）） {
               合并。JDClean 。notify  =  “京东商城-清洁：失败，原因：已签过⚠️”
               合并。JDClean 。失败 =  1
             }  其他 {
               如果 （数据。匹配（/ （不存在|已结束|未开始） / ）） {
                 合并。JDClean 。notify  =  “京东商城-清洁：失败，原因：活动已结束⚠️”
                 合并。JDClean 。失败 =  1
               }  其他 {
                 如果 （CC 。代码 ==  3 ） {
                   合并。JDClean 。notify  =  “京东商城-清洁：失败，原因：Cookie失效！️”
                   合并。JDClean 。失败 =  1
                 }  否则 如果 （CC 。代码 ==  “600” ） {
                   合并。JDClean 。notify  =  “京东商城-清洁：失败，原因：认证失败⚠️”
                   合并。JDClean 。失败 =  1
                 }  其他 {
                   合并。JDClean 。notify  =  “京东商城-清洁：失败，原因：未知⚠️”
                   合并。JDClean 。失败 =  1
                 }
               }
             }
           }
         }
         解决（'done' ）
       }  抓 （eor ） {
         $ nobyda 。通知（“京东商城-清洁”  +  EOR 。名称 +  “！️” ， JSON 。字符串化（EOR ）， EOR 。消息）
         解决（'done' ）
       }
     } ）} ， 小号）
   } ）;
 }

 功能 JingDongWomen （小号） {

   返回 新的 Promise （resolve  =>  {  setTimeout （（） =>  {
 @@ -1214,63 +1276,6 @@函数JDPersonalCare {
   } ）;
 }

 函数 JDMagicCube （s ） {

   返回 新的 Promise （resolve  =>  {  setTimeout （（） =>  {
     const  JDMCUrl  =  {
       网址：“ https://api.m.jd.com/client.action?functionId=getNewsInteractionLotteryInfo&appid=smfe” ，
       标头：{
         Cookie：KEY ，
       }
     } ;

     $ nobyda 。get （JDMCUrl ， function （error ， response ， data ） {
       尝试 {
         如果 （错误） {
           合并。JDCube 。notify  =  “京东商城-魔方：签到接口请求失败！️！️”
           合并。JDCube 。失败 =  1
         }  其他 {
           const  cc  =  JSON 。解析（数据）
           if  （数据。匹配（/ （\“名称\”：） / ）） {
             if  （日志） 控制台。日志（“京东商城-魔方签到成功响应：\ n”  +  数据）
             如果 （数据。匹配（/ （\ “名\” ：\ “京豆\” ） / ）） {
               合并。JDCube 。notify  =  “京东商城-魔方：成功，明细：”  +  cc 。结果。lotteryInfo 。数量 +  “京豆🐶”
               合并。JDCube 。bean  =  cc 。结果。lotteryInfo 。数量
               合并。JDCube 。成功 =  1
             }  其他 {
               合并。JDCube 。notify  =  “京东商城-魔方：成功，明细：”  +  cc 。结果。lotteryInfo 。名称 +  ““”
               合并。JDCube 。成功 =  1
             }
           }  其他 {
             if  （日志） 控制台。日志（“京东商城-魔方签到失败响应：\ n”  +  数据）
             如果 （数据。匹配（/ （一闪而过|已签到|已领取） / ）） {
               合并。JDCube 。notify  =  “京东商城-魔方：失败，原因：已签过⚠️”
               合并。JDCube 。失败 =  1
             }  其他 {
               如果 （数据。匹配（/ （不存在|已结束） / ）） {
                 合并。JDCube 。notify  =  “京东商城-魔方：失败，原因：活动已结束⚠️”
                 合并。JDCube 。失败 =  1
               }  其他 {
                 if  （数据。匹配（/ （\“代码\”：3 ） / ）） {
                   合并。JDCube 。notify  =  “京东商城-魔方：失败，原因：Cookie失效！️”
                   合并。JDCube 。失败 =  1
                 }  其他 {
                   合并。JDCube 。notify  =  “京东商城-魔方：失败，原因：未知⚠️”
                   合并。JDCube 。失败 =  1
                 }
               }
             }
           }
         }
         解决（'done' ）
       }  抓 （eor ） {
         $ nobyda 。通知（“京东商城-魔方”  +  EOR 。名称 +  “！️” ， JSON 。字符串化（EOR ）， EOR 。消息）
         解决（'done' ）
       }
     } ）} ， 小号）
   } ）;
 }

 函数 JingRSeeAds （s ） {

   返回 新的 Promise （resolve  =>  {  setTimeout （（） =>  {
