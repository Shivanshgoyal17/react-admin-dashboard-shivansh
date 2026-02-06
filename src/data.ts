export const menu = [
    {
        id: 1,
        title: "main",
        listItems: [
            {
                id: 1,
                title: "Homepage",
                url: "/",
                icon: "home.svg"
            },
            {
                id: 2,
                title: "Profile",
                url: "/users/1",
                icon: "user.svg"
            }
        ]
    },
    {
        id: 2,
        title: "lists",
        listItems: [
            {
                id: 1,
                title: "Users",
                url: "/users",
                icon: "user.svg"
            },
            {
                id: 2,
                title: "Products",
                url: "/products",
                icon: "product.svg"
            },
            {
                id: 3,
                title: "Orders",
                url: "/orders",
                icon: "order.svg"
            },
            {
                id: 4,
                title: "Posts",
                url: "/posts",
                icon: "post2.svg"
            }
        ]
    },
    {
        id: 3,
        title: "general",
        listItems: [
            {
                id: 1,
                title: "Elements",
                url: "/",
                icon: "element.svg"
            },
            {
                id: 2,
                title: "Notes",
                url: "/",
                icon: "note.svg"
            },
            {
                id: 3,
                title: "Forms",
                url: "/",
                icon: "form.svg"
            },
            {
                id: 4,
                title: "Calender",
                url: "/",
                icon: "calendar.svg"
            }
        ]
    },
    {
        id: 4,
        title: "Maintenance",
        listItems: [
            {
                id: 1,
                title: "Settings",
                url: "/",
                icon: "setting.svg"
            },
            {
                id: 2,
                title: "Backups",
                url: "/",
                icon: "backup.svg"
            }
        ]
    },
    {
        id: 5,
        title: "analytics",
        listItems: [
            {
                id: 1,
                title: "Charts",
                url: "/",
                icon: "chart.svg"
            },
            {
                id: 2,
                title: "Logs",
                url: "/",
                icon: "log.svg"
            }
        ]
    },
]

export const topDealUsers = [
    {
        id: 1,
        img: "/user1.jpg",
        username: "Tony Stark",
        email: "tony@gmail.com",
        amount: "3.668"
    },
    {
        id: 2,
        img: "/user2.jpg",
        username: "Steve Rogers",
        email: "steve@gmail.com",
        amount: "4.668"
    },
    {
        id: 3,
        img: "/user3.jpg",
        username: "Superman",
        email: "superman@gmail.com",
        amount: "5.368"
    },
    {
        id: 4,
        img: "/user4.jpg",
        username: "Bruce Wayne",
        email: "bruce@gmail.com",
        amount: "8.675"
    },
    {
        id: 5,
        img: "/user5.jpg",
        username: "Tom Holland",
        email: "tom@gmail.com",
        amount: "3.668"
    },
    {
        id: 6,
        img: "/user6.jpg",
        username: "Peter Parker",
        email: "peter@gmail.com",
        amount: "2.668"
    },
    {
        id: 7,
        img: "/user7.jpg",
        username: "Natasha Romanoff",
        email: "natasha@gmail.com",
        amount: "8.381"
    },
    
]

export const chartBoxUser = {
  color: "#8884d8",
  icon: "/userIcon.svg",
  title: "Total Users",
  dataKey: "users",
  number: "11.234",
  percentage: 45,
  chartData: [
    { name: "Sun", users: 400 },
    { name: "Mon", users: 600 },
    { name: "Tue", users: 500 },
    { name: "Wed", users: 700 },
    { name: "Thu", users: 400 },
    { name: "Fri", users: 500 },
    { name: "Sat", users: 450 },
  ]
}

export const chartBoxProduct = {
  color: "skyblue",
  icon: "/productIcon.svg",
  title: "Total Products",
  dataKey: "products",
  number: "239",
  percentage: 21,
  chartData: [
    { name: "Sun", products: 400 },
    { name: "Mon", products: 600 },
    { name: "Tue", products: 500 },
    { name: "Wed", products: 700 },
    { name: "Thu", products: 400 },
    { name: "Fri", products: 500 },
    { name: "Sat", products: 450 },
  ]
}

export const chartBoxRevenue = {
  color: "teal",
  icon: "/revenueIcon.svg",
  title: "Total Revenue",
  dataKey: "revenue",
  number: "$ 76.163",
  percentage: -12,
  chartData: [
    { name: "Sun", revenue: 400 },
    { name: "Mon", revenue: 600 },
    { name: "Tue", revenue: 500 },
    { name: "Wed", revenue: 700 },
    { name: "Thu", revenue: 400 },
    { name: "Fri", revenue: 500 },
    { name: "Sat", revenue: 450 },
  ]
}

export const chartBoxConversion = {
  color: "gold",
  icon: "/conversionIcon.svg",
  title: "Total Ratio",
  dataKey: "ratio",
  number: "2.6",
  percentage: 12,
  chartData: [
    { name: "Sun", ratio: 400 },
    { name: "Mon", ratio: 600 },
    { name: "Tue", ratio: 500 },
    { name: "Wed", ratio: 700 },
    { name: "Thu", ratio: 400 },
    { name: "Fri", ratio: 500 },
    { name: "Sat", ratio: 450 },
  ]
}

export const barChartBoxRevenue = {
    title: "Profit Earned",
    color: "#8884d8",
    dataKey: "profit",
    chartData: [
        {
            name: "Sun",
            profit: 4000
        },
        {
            name: "Mon",
            profit: 3000
        },
        {
            name: "Tue",
            profit: 2000
        },
        {
            name: "Wed",
            profit: 2780
        },
        {
            name: "Thu",
            profit: 4000
        },
        {
            name: "Fri",
            profit: 4000
        },
        {
            name: "Sat",
            profit: 4000
        }
    ]
}

export const barChartBoxVisit = {
    title: "Total Visit",
    color: "#FF8042",
    dataKey: "visit",
    chartData: [
        {
            name: "Sun",
            visit: 4000
        },
        {
            name: "Mon",
            visit: 3000
        },
        {
            name: "Tue",
            visit: 2000
        },
        {
            name: "Wed",
            visit: 2780
        },
        {
            name: "Thu",
            visit: 4000
        },
        {
            name: "Fri",
            visit: 4000
        },
        {
            name: "Sat",
            visit: 4000
        }
    ]
}

export const userRows = [
    {
        id: 1,
        img: "/user1.jpg",
        firstName: "Harry",
        lastName: "Potter",
        email: "harry@hogwarts.com",
        phone: "123 456 7890",
        createdAt: "01.02.2025",
        verified: true
    },
    {
        id: 2,
        img: "/user2.jpg",
        firstName: "Hermione",
        lastName: "Granger",
        email: "hermione@hogwarts.com",
        phone: "123 456 7890",
        createdAt: "01.02.2025",
        verified: true
    },
    {
        id: 3,
        img: "/user3.jpg",
        firstName: "Draco",
        lastName: "Malfoy",
        email: "draco@hogwarts.com",
        phone: "123 456 7890",
        createdAt: "01.02.2025",
        verified: true
    },
    {
        id: 4,
        img: "/user4.jpg",
        firstName: "Albus",
        lastName: "Dumbledore",
        email: "dumbledore@hogwarts.com",
        phone: "123 456 7890",
        createdAt: "01.02.2025",
        verified: true
    },
    {
        id: 5,
        img: "/user5.jpg",
        firstName: "Lord",
        lastName: "Voldemort",
        email: "voldemort@hogwarts.com",
        phone: "123 456 7890",
        createdAt: "01.02.2025",
        verified: true
    },
    {
        id: 6,
        img: "/user6.jpg",
        firstName: "Severus",
        lastName: "Snape",
        email: "snape@hogwarts.com",
        phone: "123 456 7890",
        createdAt: "01.02.2025",
        verified: true
    },
    {
        id: 7,
        img: "/user7.jpg",
        firstName: "Rubeus",
        lastName: "Hagrid",
        email: "hagrid@hogwarts.com",
        phone: "123 456 7890",
        createdAt: "01.02.2025",
        verified: true
    },
    {
        id: 8,
        img: "/user8.jpg",
        firstName: "Bellatrix",
        lastName: "Lestrange",
        email: "lestrange@hogwarts.com",
        phone: "123 456 7890",
        createdAt: "01.02.2025",
        verified: true
    },
    {
        id: 9,
        img: "/user9.jpg",
        firstName: "Sirius",
        lastName: "Black",
        email: "sirius@hogwarts.com",
        phone: "123 456 7890",
        createdAt: "01.02.2025",
        verified: true
    },
    {
        id: 10,
        img: "/user10.jpg",
        firstName: "Luna",
        lastName: "Lovegood",
        email: "lovegood@hogwarts.com",
        phone: "123 456 7890",
        createdAt: "01.02.2025",
        verified: true
    },
    {
        id: 11,
        img: "/user11.jpg",
        firstName: "Ron",
        lastName: "Weasley",
        email: "ron@hogwarts.com",
        phone: "123 456 7890",
        createdAt: "01.02.2025",
        verified: true
    },
    {
        id: 12,
        img: "/user12.jpg",
        firstName: "Minerva",
        lastName: "McGonagall",
        email: "mcGonagall@hogwarts.com",
        phone: "123 456 7890",
        createdAt: "01.02.2025",
        verified: true
    },
    {
    id: 13,
    img: "/user1.jpg",
    lastName: "Cruz",
    firstName: "Charlotte",
    email: "ceuc@gmail.com",
    phone: "123 456 789",
    createdAt: "01.02.2023",
  },
  {
    id: 14,
    img: "/user1.jpg",
    lastName: "Harper",
    firstName: "Sara",
    email: "bafuv@hotmail.com",
    phone: "123 456 789",
    createdAt: "01.02.2023",
  },
  {
    id: 15,
    img: "/user1.jpg",
    lastName: "Griffin",
    firstName: "Eric",
    email: "ubi@gmail.com",
    phone: "123 456 789",
    createdAt: "01.02.2023",
  },

]

export const products = [
  {
    id: 1,
    img: "https://store.sony.com.au/on/demandware.static/-/Sites-sony-master-catalog/default/dw1b537bbb/images/PLAYSTATION5W/PLAYSTATION5W.png",
    title: "Playstation 5 Digital Edition",
    color: "white",
    producer: "Sony",
    price: "$250.99",
    createdAt: "01.02.2023",
    inStock: true,
  },
  {
    id: 2,
    img: "https://www.pngmart.com/files/6/Dell-Laptop-PNG-Image.png",
    title: "Dell Laptop KR211822",
    color: "black",
    producer: "Dell",
    price: "$499.99",
    createdAt: "01.02.2023",
    inStock: true,
  },
  {
    id: 3,
    img: "http://images.samsung.com/is/image/samsung/uk-led-tv-hg40ed670ck-hg40ed670ckxxu-001-front",
    title: "Samsung TV 4K SmartTV",
    color: "gray",
    producer: "Samsung",
    price: "$999.49",
    createdAt: "01.02.2023",
    inStock: true,
  },
  {
    id: 4,
    img: "https://raylo.imgix.net/iphone-14-blue.png",
    title: "Apple Iphone 14 Pro Max",
    color: "white",
    producer: "Apple",
    price: "$799.49",
    createdAt: "01.02.2023",
    inStock: true,
  },
  {
    id: 5,
    img: "https://www.signify.com/b-dam/signify/en-aa/about/news/2020/20200903-movie-night-essentials-popcorn-ice-cream-and-the-new-philips-hue-play-gradient-lightstrip/packaging-lighstrip.png",
    title: "Philips Hue Play Gradient",
    color: "rainbow",
    producer: "Philips",
    price: "$39.99",
    createdAt: "01.02.2023",
  },
  {
    id: 6,
    img: "https://www.smartworld.it/wp-content/uploads/2019/09/High_Resolution_PNG-MX-Master-3-LEFT-GRAPHITE.png",
    title: "Logitech MX Master 3",
    color: "black",
    producer: "Logitech",
    price: "$59.49",
    createdAt: "01.02.2023",
    inStock: true,
  },
  {
    id: 7,
    img: "https://www.pngarts.com/files/7/Podcast-Mic-PNG-Picture.png",
    title: "Rode Podcast Microphone",
    color: "gray",
    producer: "Rode",
    price: "$119.49",
    createdAt: "01.02.2023",
  },
  {
    id: 8,
    img: "https://5.imimg.com/data5/SW/VM/MY-5774620/toshiba-split-ac-2-ton-3-star-rated-ras-24s3ks-500x500.png",
    title: "Toshiba Split AC 2",
    color: "white",
    producer: "Toshiba",
    price: "$899.99",
    createdAt: "01.02.2023",
    inStock: true,
  },
  {
    id: 9,
    img: "https://raylo.imgix.net/iphone-14-blue.png",
    title: "Sony Bravia KDL-47W805A",
    color: "black",
    producer: "Sony",
    price: "$970.49",
    createdAt: "01.02.2023",
  },
  {
    id: 10,
    img: "https://raylo.imgix.net/iphone-14-blue.png",
    title: "Acer Laptop 16 KL-4804",
    color: "black",
    producer: "Acer",
    price: "$599.99",
    createdAt: "01.02.2023",
    inStock: true,
  },
];

export const singleUser = {
  id: 1,
  title: "John Doe",
  img: "/user7.jpg",
  info: {
    username: "Johndoe99",
    fullname: "John Doe",
    email: "johndoe@gmail.com",
    phone: "123 456 789",
    status: "verified",
  },
  chart: {
    dataKeys: [
      { name: "visits", color: "#82ca9d" },
      { name: "clicks", color: "#8884d8" },
    ],
    data: [
      {
        name: "Sun",
        visits: 4000,
        clicks: 2400,
      },
      {
        name: "Mon",
        visits: 3000,
        clicks: 1398,
      },
      {
        name: "Tue",
        visits: 2000,
        clicks: 3800,
      },
      {
        name: "Wed",
        visits: 2780,
        clicks: 3908,
      },
      {
        name: "Thu",
        visits: 1890,
        clicks: 4800,
      },
      {
        name: "Fri",
        visits: 2390,
        clicks: 3800,
      },
      {
        name: "Sat",
        visits: 3490,
        clicks: 4300,
      },
    ],
  },
  activities: [
    {
      text: "John Doe purchased Playstation 5 Digital Edition",
      time: "3 day ago",
    },
    {
      text: "John Doe added 3 items into their wishlist",
      time: "1 week ago",
    },
    {
      text: "John Doe purchased Sony Bravia KD-32w800",
      time: "2 weeks ago",
    },
    {
      text: "John Doe reviewed a product",
      time: "1 month ago",
    },
    {
      text: "John Doe added 1 items into their wishlist",
      time: "1 month ago",
    },
    {
      text: "John Doe reviewed a product",
      time: "2 months ago",
    },
  ],
};


export const singleProduct = {
  id: 1,
  title: "Playstation 5 Digital Edition",
  img: "https://store.sony.com.au/on/demandware.static/-/Sites-sony-master-catalog/default/dw1b537bbb/images/PLAYSTATION5W/PLAYSTATION5W.png",
  info: {
    productId: "Ps5SDF1156d",
    color: "white",
    price: "$250.99",
    producer: "Sony",
    export: "Japan",
  },
  chart: {
    dataKeys: [
      { name: "visits", color: "#82ca9d" },
      { name: "orders", color: "#8884d8" },
    ],
    data: [
      {
        name: "Sun",
        visits: 4000,
        orders: 2400,
      },
      {
        name: "Mon",
        visits: 3000,
        orders: 1398,
      },
      {
        name: "Tue",
        visits: 2000,
        orders: 3800,
      },
      {
        name: "Wed",
        visits: 2780,
        orders: 3908,
      },
      {
        name: "Thu",
        visits: 1890,
        orders: 4800,
      },
      {
        name: "Fri",
        visits: 2390,
        orders: 3800,
      },
      {
        name: "Sat",
        visits: 3490,
        orders: 4300,
      },
    ],
  },
  activities: [
    {
      text: "John Doe purchased Playstation 5 Digital Edition",
      time: "3 day ago",
    },
    {
      text: "Jane Doe added Playstation 5 Digital Edition into their wishlist",
      time: "1 week ago",
    },
    {
      text: "Mike Doe purchased Playstation 5 Digital Edition",
      time: "2 weeks ago",
    },
    {
      text: "Anna Doe reviewed the product",
      time: "1 month ago",
    },
    {
      text: "Michael Doe added Playstation 5 Digital Edition into their wishlist",
      time: "1 month ago",
    },
    {
      text: "Helen Doe reviewed the product",
      time: "2 months ago",
    },
  ],
};

