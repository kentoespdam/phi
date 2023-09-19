<?php
$get=$_GET;

function hitung($a, $b){
    $bagi=intval($a/$b);
    $sisa=$a%$b;
    $hasil=["bagi"=>$bagi, "sisa"=> $sisa];
    // echo json_encode($hasil);
    return $hasil;
}

$hitung=hitung($get["a"], $get['b']);

echo json_encode($hitung);