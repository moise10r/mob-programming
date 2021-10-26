def counting_valleys(steps, path)
  # Write your code here
  altitude = 0
  valley = 0
  
  path.each_char do |char|
     if char == 'U'
          altitude += 1
          if altitude == 0
              valley += 1
          end
      else
          altitude -= 1
      end
  end
  return valley
end
