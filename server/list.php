<?php
/**
 * Created by PhpStorm.
 * User: Administrator
 * Date: 2017/6/24 0024
 * Time: 下午 2:27
 */
header("Content-type:JSON;charset=utf-8");  //统一输出编码为utf-8
header("Access-Control-Allow-Origin:*");

$conn=new mysqli("127.0.0.1","root","","xw002cnr");

mysqli_query($conn,"set names utf8");

$sql="SELECT * FROM products WHERE prostatus=1";

$result=$conn->query($sql);// 返回结果

$arrlist=array();

if($result->num_rows>0){
    while($row=$result->fetch_assoc()){
        array_push($arrlist,$row);
    }
}
print_r(json_encode($arrlist));