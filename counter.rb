numbers = (1..100).to_a

numbers.each do |num|
  if num % 5 == 0 && num % 3 == 0
    puts "Pizza"
  elsif num % 5 == 0
    puts "Pineapple"
  elsif num % 3 == 0
    puts "Hawaii"
  else
    puts num
  end
end
