class Stack {
    
    function checkBalance($array){
        $d = [];
        $status = true;
        foreach($array as $a){
            switch ($a) {
                    case '{':
                        array_push($d, '}');
                        break;
                    case '[':
                        array_push($d, ']');
                        break;
                    case '(':
                        array_push($d, ')');
                        break;
                default:
                    if($a != end($d)){
                        $status = false;
                    }
                    array_pop($d);
                    break;
            }
            if(!$status) {
                break;
            }
        }
        if(!$status || count($d) > 0){
            return 'failed';
        }
        return 'success';
    }

}

$stack = new Stack;


$test_1 = ['{','(','{','}',')','}'];
$test_2 = ['{','(',')','[','}',')',']','}'];
$test_3 = ['(',')','{','}','[',']'];

print_r($stack->checkBalance($test_1));
print_r($stack->checkBalance($test_2));
print_r($stack->checkBalance($test_3));

//expected output successfailedsuccess
