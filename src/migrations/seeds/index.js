
const users = [
  {
    role: 'admin',
    email: 'admin@gmail.com',
    salt: 'b1f24004de87017efbf69cd2416f12c2',
    password: '4725411ec7b9d10dad86421e3d50f26fa70146cd407609397b99b7a8d1cb710afbb1804bb9cb4f06efd9313686c3abdb59d04b59167ecfca2a9b6e54880c4b83',
    first_name: 'Admin',
    last_name: 'Adminovich',
    token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiZW1haWwiOiJqdXJhenViYWNoQGdtYWlsLmNvbSIsImV4cCI6MTU5MjMzODA1NiwiaWF0IjoxNTkxNzMzMjU2fQ.iGm0oFNdySUfxZRka3RRn6DIei5Pbo5RbKM7HHLyIy8',
  },
];

const cities = [
  {
    id: 1,
    title: 'Москва',
    alias: 'Moscow',
    description: 'Москва — столица и крупнейший город России. Москва один из самых популярных туристических направлений.',
  },
];

const hotels = [
  {
    id: 1,
    city_id: 1,
    title: 'Radisson Collection Hotel',
    alias: 'Radisson',
    description: 'Откройте для себя Москву, остановившись в одном из ее наиболее известных архитектурных символов на берегу Москвы-реки. Внутри отеля царят великолепие и роскошь: здесь вас ждут красиво обставленные номера, люксы и апартаменты с обслуживанием, впечатляющие удобства, такие как 19 элегантных ресторанов, инновационные спортивные и оздоровительные центры, а также панорамный бар на 31-м этаже. Вас ждут роскошная обстановка, превосходное местоположение и непревзойденный уровень сервиса.',
    preview_image: 'https://cf.bstatic.com/images/hotel/max1024x768/370/37045918.jpg',
    // images: [
    //   'https://cf.bstatic.com/images/hotel/max1024x768/278/278332092.jpg',
    //   'hhttps://cf.bstatic.com/images/hotel/max1024x768/273/273387160.jpg',
    // ],
    rooms: 1,
    price: 160,
    type: 'Standart',
    // facilities: [
    //   'Air conditioning',
    //   'Fridge',
    //   'Towels',
    //   'Breakfast'],
  },
];

const ratings = [
  {
    id: 1,
    hotel_id: 1,
    user_id: 1,
    rating: 4.9,
  },
];

const comments = [
  {
    id: 1,
    hotel_id: 1,
    user_id: 1,
    text: 'We loved it so much, the hotel, the view, the location just great. Highly recommend!',
  },
];

const favorites = [
  {
    id: 1,
    hotel_id: 1,
    user_id: 1,
  },
];

export default {
  users, cities, hotels, ratings, comments, favorites,
};
