# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Movie.delete_all
Category.delete_all
User.delete_all

action_id = Category.create(name: "Action").id
drama_id = Category.create(name: "Drama").id
crime_id = Category.create(name: "Crime").id
animation_id = Category.create(name: "Animation").id

Movie.create(title:"The Godfather", description:"The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.", category_id: drama_id)
Movie.create(title:"The Dark Knight", description:"When the menace known as the Joker emerges from his mysterious past, he wreaks havoc and chaos on the people of Gotham.", category_id: action_id)
Movie.create(title:"Schindler's List", description:"In German-occupied Poland during World War II, Oskar Schindler gradually becomes concerned for his Jewish workforce after witnessing their persecution by the Nazi Germans.", category_id: drama_id)
Movie.create(title:"Pulp Fiction", description:"The lives of two mob hitmen, a boxer, a gangster's wife, and a pair of diner bandits intertwine in four tales of violence and redemption.", category_id: crime_id)
Movie.create(title:"Inception", description:"A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a CEO.", category_id: action_id)
Movie.create(title:"The Matrix", description:"A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers.", category_id: action_id)
Movie.create(title:"The City of God", description:"Brazil, 1960s, City of God. The Tender Trio robs motels and gas trucks.", category_id: drama_id)
Movie.create(title:"Spirited Away", description:"During her family's move to the suburbs, a sullen 10-year-old girl wanders into a world ruled by gods, witches, and spirits, and where humans are changed into beasts.", category_id: animation_id)
Movie.create(title:"Interstellar", description:"A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.", category_id: drama_id)
Movie.create(title:"The Pianist", description:"A Polish Jewish musician struggles to survive the destruction of the Warsaw ghetto of World War II.", category_id: drama_id)
Movie.create(title:"Terminator 2", description:"A cyborg, identical to the one who failed to kill Sarah Connor, must now protect her teenage son, John Connor, from a more advanced and powerful cyborg.", category_id: action_id)

user1 = User.new
user1.email = 'user1@moviedb.com'
user1.password = 'ZAnK}VLd7)U9AweB'
user1.password_confirmation = 'ZAnK}VLd7)U9AweB'
user1.save

guest = User.new
guest.email = 'guest@moviedb.com'
guest.password = '{z4nYbT{2@Ha~:LS'
guest.password_confirmation = '{z4nYbT{2@Ha~:LS'
if guest.save
    puts 'success'
else
    puts guest.errors.details
end