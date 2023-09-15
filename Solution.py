# Problem: https://www.hackerrank.com/challenges/flipping-the-matrix
# Python 3
q = int(input())
while q > 0:
    q -= 1
    
    n = int(input())
    A = []
    for i in range(2 * n):
        A += [list(map(int, input().split()))]
    
    ans = 0
    for i in range(n):
        for j in range(n):
            ans += max(A[i][j], A[2 * n - 1 - i][j], A[i][2 * n - 1 - j], A[2 * n - 1 - i][2 * n - 1 - j])
    
    print(ans)