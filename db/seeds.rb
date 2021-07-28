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
@dc = Category.create(name: 'DC Universe')
@video = Category.create(name: 'Video Games')
@got = Category.create(name: 'Game of Thrones')

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
  choice2: "Talon", 
  choice3: "Harry",
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
  question: "Who is the god of Mischief?",
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

@dc1 = Prompt.create!(
  question: "What is Batman's real name?",
  answer: "Bruce",
  choice1: "Wayne", 
  choice2: "Donald", 
  choice3: "Bruno",
  user: @admin,
  category: @dc)
@dc2 = Prompt.create!(
  question: "What is the name of Batman's butler",
  answer: "Alfred",
  choice1: "Alvin", 
  choice2: "Robin", 
  choice3: "Arya",
  user: @admin,
  category: @dc)
@dc3 = Prompt.create!(
  question: "Who was the first to star as Batman in a live action film?",
  answer: "Adam West",
  choice1: "Michael Keaton", 
  choice2: "Val Kilmer", 
  choice3: "Michael Adam",
  user: @admin,
  category: @dc)
@dc4 = Prompt.create!(
  question: "Who was Superman's first love?",
  answer: "Lana Lang",
  choice1: "Lois Lane", 
  choice2: "Lana Lane", 
  choice3: "Lois Lang",
  user: @admin,
  category: @dc)
@dc5 = Prompt.create!(
  question: "What is the name of Superman's human mom?",
  answer: "Martha",
  choice1: "Lois", 
  choice2: "Lara", 
  choice3: "Jor-El",
  user: @admin,
  category: @dc)
@dc6 = Prompt.create!(
  question: "What is Aquaman's real name?",
  answer: "Arthur",
  choice1: "Jason", 
  choice2: "Aquaman", 
  choice3: "Otis",
  user: @admin,
  category: @dc)
@dc7 = Prompt.create!(
  question: "Where is Wonder Woman from?",
  answer: "Paradise Island",
  choice1: "Amazonia", 
  choice2: "Mount Olympus", 
  choice3: "Hippolyta",
  user: @admin,
  category: @dc)
@dc8 = Prompt.create!(
  question: "What does DC stand for?",
  answer: "Detective Comics",
  choice1: "Daily Comics", 
  choice2: "Daily Crime", 
  choice3: "District of Columbia",
  user: @admin,
  category: @dc)
@dc9 = Prompt.create!(
  question: "What is Carter Hall's secret identity?",
  answer: "Hawkman",
  choice1: "Cyborg", 
  choice2: "Flash", 
  choice3: "Green Arrow",
  user: @admin,
  category: @dc)
@dc10 = Prompt.create!(
  question: "What superhero team is Robin on?",
  answer: "Teen Titans",
  choice1: "Justice League", 
  choice2: "Suicide Squad", 
  choice3: "The X-Men",
  user: @admin,
  category: @dc)
=begin
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
