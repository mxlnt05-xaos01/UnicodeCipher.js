<?php
    # Put this PHP file into the action attribute of a form or a button in a html document.
    $FeedInput = $_POST["input"];
    $KeywordInput = $_POST["keywords"];

    $InputSplit = str_split($FeedInput);
    $KeywordSplit = str_split($KeywordInput);

    $inPutLength = GetArrayLengthInput($InputSplit);
    $keyWordLength = GetArrayLengthKeywords($KeywordSplit);

    $FinalVers = CharsToDecimal($InputSplit, $KeywordSplit);

    $InPass = DecimalToChars($FinalVers);

    echo $InPass;

    function GetArrayLengthInput($requestInput) {
        $length = count($requestInput);
        return $length;
    }
    function GetArrayLengthKeywords($requestInput) {
        $length = count($requestInput);
        return $length;
    }
    function CharsToDecimal($Feedback, $Keys) {
        $UpFinalization = $Feedback;
        for($s = 0; $s < $keyWordLength; $s++) {
            $Keys[s] = IntlChar::ord($Keys[s]);
        }
        for($i = 0; $i < $inPutLength; $i++) {
            $Feedback[i] = IntlChar::ord($Feedback[i]);
        }
        for($in = 0, $key = 0; $in < $inPutLength; $in++) {
            if($key < $keyWordLength) {
                $UpFinalization[$in] = Calculation($Feedback[$in], $Keys[$key]);
                $key++;
            }
            else {
                $key = 0;
                $UpFinalization[$in] = Calculation($Feedback[$in], $Keys[$key]);
            }
        }
    }
    function Calculation($a, $b) {
        if($a - $b < 0) {
            $frst = $a + $b;
            $fin = $frst - 32;
            return $fin;
        }
        else {
            $frst = $a - $b;
            $fin = $frst + 32;
            return $fin;
        }
    }
    function DecimalToChars($finalInput) {
        for($i = 0; $i < $inPutLength; $i++) {
            $finalInput[$i] = IntlChar::chr($finalInput[$i]);
        }
        return $finalInput;
    }
?>