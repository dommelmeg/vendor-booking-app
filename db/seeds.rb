Vendor.destroy_all
Event.destroy_all

# Vendors
the_dundies = Vendor.create(name: 'The Dundies', genre: 'Punk')
bachelor_boys_band = Vendor.create(name: 'Bachelor Boys Band', genre: 'Pop')
sam_hill_bands = Vendor.create(name: 'Sam Hill Bands', genre: 'Country')
munchkinlanders = Vendor.create(name: 'Munchkinlanders', genre: 'Folk')
scrantonicity = Vendor.create(name: 'Scrantonicity', genre: 'Rock')
here_comes_treble = Vendor.create(name: 'Here Comes Treble', genre: 'Acapella')

# Events
##User1
tornado = Event.create(user_id: 1, vendor_id: 4, event_name: 'House Moving Party', date: 'August 25, 1939', rating: 5, review: 'The band played right through the tornado, it was a sight to see!', image_url: 'https://images.squarespace-cdn.com/content/v1/56530521e4b0c307d59bbe97/1472129043027-X71SRB6AMNE3EMB90TWY/image-asset.jpeg')


ball = Event.create(user_id: 1, vendor_id: 3, event_name: 'Emerald City Ball', date: 'November 4, 2023', image_url: 'https://cdn.mos.cms.futurecdn.net/MUFfedzbgLjsW5t2NoVcCK-1200-80.jpg')

##User2
bach = Event.create(user_id: 2, vendor_id: 2, event_name: 'Bachelorette Party', date: 'May 5, 2023', rating: 5, review: 'We danced all night, great band!', image_url: 'https://cdn0.weddingwire.com/article/1222/3_2/960/jpg/12221-bachelorette-alexes-lauren-photography.jpeg')

wedding = Event.create(user_id: 2, vendor_id: 1, event_name: 'Wedding', date: 'September 23, 2023', image_url: 'https://hips.hearstapps.com/hmg-prod/images/wedding-quotes-index-1621485694.jpg?crop=0.936xw:0.702xh;0.0561xw,0.106xh&resize=640:*')

##User3
jpWedding = Event.create(user_id: 3, vendor_id: 5, event_name: 'Jim and Pam Wedding', date: 'October 8, 2009', rating: 2, review: 'The lead singer Kevin kept using less words...', image_url: 'https://i0.wp.com/marvelousgeeksmedia.com/wp-content/uploads/2022/01/image.jpeg?w=1000&ssl=1')

grand_opening = Event.create(user_id: 3, vendor_id: 6, event_name: 'Michael Scott Paper Company Ribbon Cutting', date: 'April 9, 2009', rating: 5, review: 'They had perfect pitch', image_url: 'https://imageservice.disco.peacocktv.com/uuid/b3dfab67-7166-3f4e-bbca-771564927edf/LAND_16_9?language=eng&territory=US&proposition=NBCUOTT&version=556d8283-22ac-322b-abac-a223fefbe048')

baby_shower = Event.create(user_id: 3, vendor_id: 6, event_name: 'Erins Baby Shower', date: 'October 21, 2023', image_url: 'https://people.com/thmb/1faIoyGDxT-veh8XZN4orW5P-gY=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():focal(511x0:513x2)/gettyimages-167858680-1-58a356f981574c98812d3aa02222dbbd.jpg')

bbb = Event.create(user_id: 3, vendor_id: 5, event_name: 'Beets, Bears, Battlestar Galactica Conference', date: 'August 26, 2023', image_url: 'https://helios-i.mashable.com/imagery/articles/07tLMMc9MKuNkVQmSxMylNZ/hero-image.fill.size_1200x900.v1614276120.jpg', rating: 3, review: 'Average at best. -Dwight K. Schrute')