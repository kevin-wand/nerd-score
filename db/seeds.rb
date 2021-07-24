# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Prompt.destroy_all
Category.destroy_all
User.destroy_all

@admin = User.create!(username: 'kwand', email: 'test@test.com', password: '123456')

puts "#{User.count} user(s) created"

@hp = Category.create(name: 'Harry Potter')
@marvel = Category.create(name: 'Marvel Universe')
# @dc = Category.create(name: 'DC Universe')
# @video = Category.create(name: 'Video Games')
# @got = Category.create(name: 'Game of Thrones')

puts "#{Category.count} category(ies) created"

@hp1 = Prompt.create!(
  question: "What is Dumbledore's first name?", 
  answer: "Albus", 
  choice1: "Albert", 
  choice2: "Aldous", 
  choice3: "Alldux", 
  user: @admin, 
  category: @hp)
@hp2 = Prompt.create!(
  question: "What is the Voldemort's original name? (first name)", 
  answer: "Tom", 
  choice1: "Tim", 
  choice2: "Timothy", 
  choice3: "Thomas",
  user: @admin,
  category: @hp)
@hp3 = Prompt.create!(
  question: "What is the name of the wizarding sport with broomsticks?",
  answer: "Quidditch",
  choice1: "Quizball", 
  choice2: "Quixotic", 
  choice3: "Cricket",
  user: @admin,
  category: @hp)
@marvel1 = Prompt.create!(
  question: "Whos is the god of Mischief?",
  answer: "Loki",
  choice1: "Thor", 
  choice2: "Asmodan", 
  choice3: "Odin",
  user: @admin,
  category: @marvel)
@marvel2 = Prompt.create!(
  question: "Where did Spider-Man grow up?",
  answer: "Queens",
  choice1: "Brooklyn", 
  choice2: "Bronx", 
  choice3: "Manhattan",
  user: @admin,
  category: @marvel)
@marvel3 = Prompt.create!(
  question: "What year was Captain America born?",
  answer: "1918",
  choice1: "1938", 
  choice2: "1988", 
  choice3: "1898",
  user: @admin,
  category: @marvel)
=begin
@dc1 = Prompt.create!(
  question: ,
  answer: ,
  choice1:, 
  choice2:, 
  choice3:)
@dc2 = Prompt.create!(
  question: ,
  answer: ,
  choice1:, 
  choice2:, 
  choice3:)
@dc3 = Prompt.create!(
  question: ,
  answer: ,
  choice1:, 
  choice2:, 
  choice3:)
@video1 = Prompt.create!(
  question: ,
  answer: ,
  choice1:, 
  choice2:, 
  choice3:)
@video2 = Prompt.create!(
  question: ,
  answer: ,
  choice1:, 
  choice2:, 
  choice3:)
@video3 = Prompt.create!(
  question: ,
  answer: ,
  choice1:, 
  choice2:, 
  choice3:)
@got1 = Prompt.create!(
  question: ,
  answer: ,
  choice1:, 
  choice2:, 
  choice3:)
@got2 = Prompt.create!(
  question: ,
  answer: ,
  choice1:, 
  choice2:, 
  choice3:)
@got3 = Prompt.create!(
  question: ,
  answer: ,
  choice1:, 
  choice2:, 
  choice3:)
=end

puts "#{Prompt.count} prompt(s) created"
