<?php
/**
 * Created by PhpStorm.
 * User: Administrator
 * Date: 2017/6/27 0027
 * Time: 下午 2:28
 */
//跨域
header("Content-type:text/html;charset=utf-8");
header("Access-Control-Allow-OriGIN:*");
if(!empty($_POST)&&$_POST["username"]!=""&&$_POST["pwd"]!=""){
    //判断是否链接成功
//    print_r($conn->connect_error);
    $loginname=$_POST["username"];
    $pwd=$_POST["pwd"];
//1.配置连接参数
//数据库的ip地址
    $dbserver="127.0.0.1";
    $dbuser="root";
    $dbpwd="";
    $database="xw002cnr";//库名称
//2创建连接对象
    $conn=new mysqli($dbserver,$dbuser,$dbpwd,$database);
// php 里的 .  是编辑字符串
//3 设置连接字符集
    mysqli_query($conn,"set names utf8");
//4判断一下连接是否成功
//print_r($conn->connect_error);
//6编写sql指令
    $sql="INSERT INTO userinfo(ulogin,upwd)VALUES('".$loginname."','".$pwd."')";
// 7 执行sqlm并返回结果$resut01
    $resut01=$conn->query($sql);
//8 获取结果
    $arr=array();
    array_push($arr,"{status:".$resut01."}");
    print_r(json_encode($arr));
//5 关闭链接
    $conn->close();
//1.链接数据 2执行sql语句 3 返回结果 4关闭链接
}else{
    print_r(json_encode("{status:\"你在逗我玩吗？连用户密码都不给\"}"));
}