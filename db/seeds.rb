
#Events
bill_and_meg_wedding = Event.create(user_id: 2, band_id: 1, event_name: 'Dommel-Story Wedding', date: 20230923 , event_type: 'Wedding')

#Users
meg = User.create(username: 'dommelMeg')


# Vendors
the_dundies = Vendor.create(name: 'The Dundies', genre: 'Rock', website: 'https://www.dundies.band/', price_range: 3)

bachelor_boys_band = Vendor.create(name: 'Bachelor Boys Band', genre: 'Contemporary', website: 'https://www.bachelorboysband.com/', price_range: 3)

sam_hill_bands = Vendor.create(name: 'Sam Hill Bands', genre: 'Country', website: 'https://www.samhillbands.com/', price_range: 2)



#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
