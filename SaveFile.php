
<?php
echo("working");
//$myfile = fopen("newfile.txt", "w") or die("Unable to open file!");
//$txt = "John Doe\n";
//fwrite($myfile, $txt);
$texte = $_POST['postobj'];
//echo($texte);
//fwrite($myfile, $texte);
//fclose($myfile);

$fh = fopen("data_out.json", 'w') or die("Error opening output file");
fwrite($fh, json_encode($texte,JSON_UNESCAPED_UNICODE));
fclose($fh);

?> 