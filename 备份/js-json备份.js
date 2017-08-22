/**
 * Created by Administrator on 2017/6/22 0022.
 */
//完整的 js 动态创建  （无图片板块）
$.getJSON("json/nav.json",function (data) {
    var arr1 = data["nav-l"];
    //console.log(arr1);
    var lis='';
    var lis01="";
    var lis02="";
    var arr2=data["nav-l-box-right-p"];
    //console.log(arr2);
    var arr3=data["sub-class-right"];
    //左边10次遍历
    for(var i=0; i<arr1.length; i++){
        var as1="";
        for (var o in arr1[i] ){
            //console.log(arr1[i][o]);
            //["食品","酒类","饮料"]
            for(var k in arr1[i][o]){
                //console.log(arr1[i][o][k])
                as1=as1+"<a href='javascript:void(0)' >"+arr1[i][o][k]+"</a>&nbsp;"+"<em>/</em>&nbsp;";
            }
        }
        lis="<li>"
            +"<div class='nav-l-box-left'>"
            +"<div class='nav-l-box2'>"+as1+"</div>"
            +"</div>"
            +"</li>";
        $("#myul").append(lis);
        // 此循环是 取 as3 对应的插入 li
    }

    // 右边三级菜单-文本部分 10次遍历 *左边10次遍历
    for(var i=0; i<arr1.length; i++){
        // 此循环是 取 as3 对应的插入 li
        var cc = 0;
        for(var j in arr2[i]){
            //console.log(arr2[c][j]);
            var as3="";
            for(var n in arr2[i][j]){
                var as2="";
                for(var q in arr2[i][j][n]){
                    //console.log(q);
                    //console.log(arr2[j][n][q]);
                    as2+="<a href='javascript:void(0);'>"+arr2[i][j][n][q]+"</a>"
                    //重点是 json 每分小数组尾处 直接 数组里加上 br 换行
                    //console.log(as2);
                    //console.log(as3);
                }
                //as3 是  所有的dl 集合
                as3+="<dl><dd class='goods-class'>"+as2+"</dd></dl>"
            }
            //console.log(as3);
            lis01="<div class='nav-l-box-right sub-class'>"
                +"<div class='sub-class-content'>"+as3+"</div>"
                +"</div>"
            $('#myul>li').each(function () {
                $('#myul>li').eq(cc).find("div").eq(0).after(lis01);
                console.log($('#myul>li').length)
            })

            cc++;


        }
        // lis+="<li>"
        // +"<div class='nav-l-box-left'>"
        // +"<div class='nav-l-box2'>"+as1+"</div>"+lis02;
        //   +"</div>"
        // +"<div class='nav-l-box-right sub-class'>"
        // +"<div class='sub-class-content'>"+as3+"</div>"
        //         +"<div class="sub-class-right">"
        //         <div class="adv-promotions">
        //         <a href="javascript:void(0)" target="_blank">
        //         <img src="https://pic.cnrmall.com/image/ba/f6/baf6018758306619798e00e3b6e3e2b2.jpg" title="">
        //         </a>
        //         <a href="javascript:void(0)" target="_blank">
        //         <img src="https://pic.cnrmall.com/image/3d/31/3d31b4e0313bde61b1d028ec29b38dc8.jpg" title="">
        //         </a>
        //         <a href="javascript:void(0)" target="_blank">
        //         <img src="https://pic.cnrmall.com/image/2c/aa/2caa1b77b636a4382f8389090517827d.jpg" title="">
        //         </a>
        //         </div>
        //         </div>
        // +"</div>"
        // +"</li>"
    }
    // 右边三级菜单-图片部分 10次遍历 *左边10次遍历
    for(var i=0; i<arr1.length; i++){

    }
})




//两部分拼接
$.getJSON("json/nav.json",function (data) {
    var arr1 = data["nav-l"];
    //console.log(arr1);
    var lis='';
    var lis01="";
    var lis02="";
    var arr2=data["nav-l-box-right-p"]
    //console.log(arr2);
    for(var i=0; i<arr1.length; i++){
        var as1="";
        for (var o in arr1[i] ){
            //console.log(arr1[i][o]);
            //["食品","酒类","饮料"]
            for(var k in arr1[i][o]){
                //console.log(arr1[i][o][k])
                as1=as1+"<a href='javascript:void(0)' >"+arr1[i][o][k]+"</a>&nbsp;"+"<em>/</em>&nbsp;";



            }
            lis01+="<li>"
                +"<div class='nav-l-box-left'>"
                +"<div class='nav-l-box2'>"+as1+"</div>"
                +"</div>"

        }
    }
    for(var i=0; i<arr1.length; i++){
        var as1="";
        for (var o in arr1[i] ){
            //console.log(arr1[i][o]);
            //["食品","酒类","饮料"]
            for(var j in arr2[i]){
                var ps=""
                //console.log(arr2[c][j]);
                var as3="";
                for(var n in arr2[i][j]){
                    var as2="";
                    for(var q in arr2[i][j][n]){
                        //console.log(q);
                        //console.log(arr2[j][n][q]);
                        as2+="<a href='javascript:void(0);'>"+arr2[i][j][n][q]+"</a>"
                        //重点是 json 每分小数组尾处 直接 数组里加上 br 换行
                        //console.log(as2);
                        //console.log(as3);
                    }
                    //as3 是  所有的dl 集合
                    as3+="<dl><dd class='goods-class'>"+as2+"</dd></dl>"
                    //ps+=as3
                    console.log(as3);
                }
                // console.log(as3);
                lis02+=
                    +"<div class='nav-l-box-right sub-class'>"
                    +"<div class='sub-class-content'>"+as3+"</div>"
                    +"</div>"
                    +"</li>"


            }

        }
    }

    // console.log(lis02);
    //
    lis=lis01+lis02;
    $("#myul").append(lis);
})




$.getJSON("json/nav.json",function (data) {
    var arr1 = data["nav-l"];
    //console.log(arr1);
    var lis='';
    var lis01="";
    var lis02="";
    var arr2=data["nav-l-box-right-p"]
    //console.log(arr2);
    for(var i=0; i<arr1.length; i++){
        var as1="";
        for (var o in arr1[i] ){
            //console.log(arr1[i][o]);
            //["食品","酒类","饮料"]
            for(var k in arr1[i][o]){
                console.log(arr1[i][o][k])
                as1=as1+"<a href='javascript:void(0)' >"+arr1[i][o][k]+"</a>&nbsp;"+"<em>/</em>&nbsp;";
            }
            // for(var k3 in arr2[i][k3]){
            //     console.log(arr2[i][k3])
            //     ps2+="<a target='_blank' href='javascript:void(0)'>"+arr2[i][k2][k3]+"</a>"
            // }
            lis+="<li>"
                +"<div class='nav-l-box-left'>"
                +"<div class='nav-l-box2'>"+as1+"</div>"
                +"</div>"
                +"<div class='nav-l-box-right sub-class'>"
                +"<div class='sub-class-content'></div>"
                +"</div>"
                +"</li>"
        }


    }

    // console.log(lis02);
    //
    // lis=lis01+lis02;
    $("#myul").append(lis);
})


$.getJSON("json/nav.json",function (data) {
    var arr1 = data["nav-l"];
    //console.log(arr1);
    var lis='';
    var lis01="";
    var lis02="";
    var arr2=data["nav-l-box-right-p"]
    //console.log(arr2);
    for(var i=0; i<arr1.length; i++){
        var as1="";
        for (var o in arr1[i] ){
            //console.log(arr1[i][o]);
            //["食品","酒类","饮料"]
            for(var k in arr1[i][o]){
                //console.log(arr1[i][o][k])
                as1=as1+"<a href='javascript:void(0)' >"+arr1[i][o][k]+"</a>&nbsp;"+"<em>/</em>&nbsp;";
            }
            for(var j in arr2[i]){
                // console.log(arr2[j][j]);
                var mydiv2="";
                var ps="";
                for(var n in arr2[j]){

                    var as3="";
                    var as2=""
                    for(var q in arr2[j][n]){
                        //console.log(q);
                        for(var q2 in arr2[j][n][q]){
                            // console.log(q2);
                            //console.log(arr2[j][n][q]);
                            // 重点 尾处加 \n
                            as2=as2+"<a href='javascript:void(0);'>"+arr2[j][n][q][q2]+"</a>"
                            //console.log(as2);
                        }
                        //重点是 json 每分小数组尾处 直接 数组里加上 br 换行
                    }
                    ps+="<dl><dd class='goods-class'>"+as2+"</dd></dl>"
                }
            }
            lis+="<li>"
                +"<div class='nav-l-box-left'>"
                +"<div class='nav-l-box2'>"+as1+"</div>"
                +"</div>"
                +"<div class='nav-l-box-right sub-class'>"
                +"<div class='sub-class-content'>"+ps+" </div>"
                +"</div>"
                +"</li>"
        }


    }

    // console.log(lis02);
    //
    // lis=lis01+lis02;
    //console.log(lis);
    $("#myul").append(lis);
})
$.getJSON("json/nav.json",function (data) {
    var arr1 = data["nav-l"];
    //console.log(arr1);
    var lis='';
    var lis01="";
    var lis02="";
    var arr2=data["nav-l-box-right-p"]
    //console.log(arr2);
    for(var i=0; i<arr1.length; i++){
        var as1="";
        for (var o in arr1[i] ){
            //console.log(arr1[i][o]);
            //["食品","酒类","饮料"]
            for(var k in arr1[i][o]){
                //console.log(arr1[i][o][k])
                as1=as1+"<a href='javascript:void(0)' >"+arr1[i][o][k]+"</a>&nbsp;"+"<em>/</em>&nbsp;";
            }
            for (var c in arr2[i]){
                var ps1="";
                var ps2="";
                //console.log(arr2);
                //console.log(arr2[i][c]);
                //console.log(arr2[i][c]);
                for(var c2 in arr2[i][c]){
                    //console.log(arr2[i][c]);
                    //console.log(arr2[i][c][c2]);
                    var head=arr2[i][c][c2].head
                    var text=arr2[i][c][c2].text
                    // console.log(head);
                    //console.log(arr2[i][c].text);
                    //console.log(head[i]);
                    //console.log(arr2[i][c]);

                    //console.log(head[i]);
                    ps1="<a href='javascript:void(0)' >"+head[i]+"</a>"
                    console.log(ps1);
                    for(var b in text[i]){
                        ps2+="<a href='javascript:void(0)' >"+text[i]+"</a>"

                    }

                }
            }
            // for(var k3 in arr2[i][k3]){
            //     console.log(arr2[i][k3])
            //     ps2+="<a target='_blank' href='javascript:void(0)'>"+arr2[i][k2][k3]+"</a>"
            // }
            lis+="<li>"
                +"<div class='nav-l-box-left'>"
                +"<div class='nav-l-box2'>"+as1+"</div>"
                +"</div>"
                +"<div class='nav-l-box-right sub-class'>"
                +"<div class='sub-class-content'>"
                +"<dl>"
                +"<dt>"
                +"<h3>"+ps1+"</h3>"
                +"</dt>"
                +"<dd class='goods-class'></dd>"
                //<a target="_blank" href="javascript:void(0)">米面杂粮</a>
                +" </dl>"
                +" </div>"
                +"</div>"
                +"</li>"
        }


    }

    // console.log(lis02);
    //
    // lis=lis01+lis02;
    console.log(lis);
    $("#myul").append(lis);
})


