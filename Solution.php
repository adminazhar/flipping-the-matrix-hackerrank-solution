<?php
function solve() {
    $T = intval(readline());
    for ($t = 0; $t < $T; $t++) {
        $n = intval(readline());
        $a = [];
        for ($i = 0; $i < 2 * $n; $i++) {
            $a[] = array_map('intval', explode(' ', readline()));
        }
        $ret = 0;
        for ($i = 0; $i < $n; $i++) {
            for ($j = 0; $j < $n; $j++) {
                $max = max(
                    $a[$i][$j],
                    $a[2 * $n - 1 - $i][$j],
                    $a[2 * $n - 1 - $i][2 * $n - 1 - $j],
                    $a[$i][2 * $n - 1 - $j]
                );
                $ret += $max;
            }
        }
        echo $ret . PHP_EOL;
    }
}

solve();
?>
