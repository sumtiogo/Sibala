# 「十八啦」(Sibala)

1. 有四顆骰子，骰子的點數為 1~6 
2. 牌型有下列幾種（大小順序由上而下）：
   1. all of a kind (一色): 四顆骰子點數一樣，如 2 2 2 2，如 6 6 6 6
       - 兩個 all of a kind 大小順序比較：1 > 4 > 6 > 5 > 3 > 2 
   2. normal point: 2個點數一樣的骰子成對，另外2顆點數和即為 sum，例如 5 3 5 4 為 7 點， 6 6 2 3 為 5 點。
       - 兩個 normal point 比較大小：若 2 顆骰子點數的和(sum) 一樣，則比較用來加總點數較大的那顆骰子點數，例如 5 5 3 4 為 4+3 等於 7 點，而 2 2 6 1 為 6+1 等於 7 點，則 2 2 6 1 > 5 5 3 4，因為 6 > 4。
   3. no point: 4 顆骰子點數都不一樣，或是 有 3 顆骰子點數一樣。
       - 兩個 no point 一樣大，平手。
3. test cases 舉例
   1. 範例1:
       - Black: 5 3 5 4  White: 2 6 2 3
       - White win. - with normal point: 6 over 3
   2. 範例2:
       - Black: 5 5 5 5  White: 2 6 2 3
       - Black win. - with all of a kind: 5
   3. 範例3:
       - Black: 3 5 5 5  White: 4 1 4 2
       - White win. - with normal point: 3
   4. 範例4:
       - Black: 3 4 5 5  White: 4 1 4 6
       - White win. - with normal point: 6 over 1
   5. 範例5:
       - Black: 3 5 5 5  White: 4 1 3 6
       - Tie.
   6. 範例6:
       - Black: 3 6 5 5  White: 4 4 3 6
       - Tie.