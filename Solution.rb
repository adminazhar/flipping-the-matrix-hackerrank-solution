def solve
  t = gets.to_i
  t.times do
    n = gets.to_i
    a = Array.new(2 * n) { gets.split.map(&:to_i) }
    ret = 0
    n.times do |i|
      n.times do |j|
        max_val = [
          a[i][j],
          a[2 * n - 1 - i][j],
          a[2 * n - 1 - i][2 * n - 1 - j],
          a[i][2 * n - 1 - j]
        ].max
        ret += max_val
      end
    end
    puts ret
  end
end

solve
