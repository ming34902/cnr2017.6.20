<?php
/**
 * Created by PhpStorm.
 * User: Administrator
 * Date: 2017/6/27 0027
 * Time: 下午 2:45
 */
header("Content-type:text/html;charset=utf-8");
header("Access-Control-Allow-OriGIN:*");
//前提判断 有没有值传送过来
$loginname=$_POST["u_name"];
$pwd=$_POST["u_pwd"];
if(!empty($_POST)&&$loginname&&$pwd)
//  if($loginname=="" || $pwd==""){
//         $su="";
//  }else{
//         $su="success";//给su赋值“success”;
//  }
//1 建立连接
    //服务器地址
    $dbserver="127.0.0.1";
$dbuser="root";
$dbpwd="";
$database="xw002cnr";//库名称
$connection=new mysqli($dbserver,$dbuser,$dbpwd,$database);
// 配置一个连接 字符集
mysqli_query($connection,"set names utf8");
//2 准备 sql语句
//在 用户表userinfo  查找*任何 用户名=$loginname 密码=$pwd 的数据列
$sql="select * from userinfo  where ulogin='".$loginname."' and upwd='".$pwd."' ";
//3执行sql 返回结果
$result=$connection->query($sql);
//mysql_num_rows() 返回结果集中行的数目
//num_rows==1  意思即：数据库用户表中，用户和密码此只有一组 ；为1 即为 true
if($result->num_rows==1)  {
    // 验证成功
    $arr=array("status"=>1,"msg"=>"登录成功");
    print_r("{ status:1,msg:'登录成功'}");
}else{
    print_r("{ status:0,msg:'登录失败，用户名或密码错误！'}");
}
//4 关闭联机
$connection->close();