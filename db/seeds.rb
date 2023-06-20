Vendor.destroy_all

# Vendors
the_dundies = Vendor.create(name: 'The Dundies', genre: 'Rock', price_range: 3)
bachelor_boys_band = Vendor.create(name: 'Bachelor Boys Band', genre: 'Contemporary', price_range: 3)
sam_hill_bands = Vendor.create(name: 'Sam Hill Bands', genre: 'Country', price_range: 2)
munchkinlanders = Vendor.create(name: 'Munchkinlanders', genre: 'Folk', price_range: 1)
scrantonicity = Vendor.create(name: 'Scrantonicity', genre: 'Wedding Band', price_range: 1)
here_comes_treble = Vendor.create(name: 'Here Comes Treble', genre: 'Acapella', price_range: 4)

# Events
##User1
tornado = Event.create(user_id: 1, vendor_id: 4, event_name: 'House Moving Party', date: 2022-03-03, rating: 5, review: 'The band played right through the tornado, it was a sight to see!')
##User2
bach = Event.create(user_id: 2, vendor_id: 2, event_name: 'Bachelorette Party', date: 2023-05-05, rating: 5, review: 'We danced all night, great band!')
##User3
andyAngelaWedding = Event.create(user_id: 3, vendor_id: 6, event_name: 'Andy and Angela Wedding', date: 2023-11-11, rating: 2, review: 'The lead singer Kevin kept using less words...')
grandOpening = Event.create(user_id: 3, vendor_id: 5, event_name: 'Michael Scott Paper Company', date: 2024-02-02, rating: 5, review: 'They had perfect pitch')