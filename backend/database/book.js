const format = {
  name: "",
  category: "",
  categoryBook: "",
  price: "",
  countInStock: "",
  ratting: "",
  pages: "",
  year: "",
  author: "",
  authorImage: "",
  image: "",
  description: "",
};
const product = [
  {
    name: "One Last Stop",
    category: "Book",
    categoryBook: "Children's Books",
    price: "10.48",
    countInStock: "3",
    ratting: "426",
    pages: "432",
    year: "2021",
    author: "Casey McQuiston",
    authorImage:
      "https://images-na.ssl-images-amazon.com/images/I/415HyrQ2SmL.jpg",
    image:
      "https://images-na.ssl-images-amazon.com/images/I/41uORm5aOQS._SX324_BO1,204,203,200_.jpg",
    description: `One Last Stop is an electrifying romance that synapses into the dreamy "Hot Person Summer" kind of story you wish you were a part of. McQuiston is leading the charge for inclusive happy-ever-afters`,
  },
  {
    name:
      "I Love Dad with The Very Hungry Caterpillar (The World of Eric Carle)",
    category: "Book",
    categoryBook: "Children's Books",
    price: "6.62",
    countInStock: "4",
    ratting: "3920",
    pages: "32",
    year: "2021",
    author: "Eric Carle",
    authorImage:
      "https://images-na.ssl-images-amazon.com/images/I/61C74pVGyOL._SY600_.jpg",
    image:
      "https://images-na.ssl-images-amazon.com/images/I/41eLd7LhxdL._SX410_BO1,204,203,200_.jpg",
    description: `This bright and colorful book is the ideal way to tell the person you call "Dad" how much you appreciate him. It's the perfect gift for Father's Day, Dad's birthday, or any day that you want to show Dad just how much you care.`,
  },
  {
    name: "Web Design with HTML, CSS, JavaScript and jQuery Set",
    category: "Book",
    categoryBook: "Computers & Technology",
    price: "26.50",
    countInStock: "10",
    ratting: "3369",
    pages: "1152",
    year: "2014",
    author: "Jon Duckett",
    authorImage:
      "data:image/jpeg;base64,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",
    image:
      "https://images-na.ssl-images-amazon.com/images/I/41X2i47NXUL._SX435_BO1,204,203,200_.jpg",
    description: `This two-book set combines the titles HTML & CSS: Designing and Building Web Sites and JavaScript & jQuery: Interactive Front-End Development. Together these two books form an ideal platform for anyone who wants to master HTML and CSS before stepping up to JavaScript and jQuery.`,
  },
  {
    name:
      "Cracking the Coding Interview: 189 Programming Questions and Solutions",
    category: "Book",
    categoryBook: "Computers & Technology",
    price: "24.49",
    countInStock: "10",
    ratting: "5107",
    pages: "687",
    year: "2015",
    author: "Gayle Laakmann McDowell",
    authorImage:
      "https://blog.hackerrank.com/wp-content/uploads/2015/10/gayle1.jpg",
    image:
      "https://images-na.ssl-images-amazon.com/images/I/41oYsXjLvZL._SX348_BO1,204,203,200_.jpg",
    description: `Cracking the Coding Interview, 6th Edition is here to help you through this process, teaching you what you need to know and enabling you to perform at your very best. I've coached and interviewed hundreds of software engineers. The result is this book. Learn how to uncover the hints and hidden details in a question, discover how to break down a problem into manageable chunks, develop techniques to unstick yourself when stuck, learn (or re-learn) core computer science concepts, and practice on 189 interview questions and solutions.
`,
  },
  {
    name:
      "Atomic Habits: An Easy & Proven Way to Build Good Habits & Break Bad Ones",
    category: "Book",
    categoryBook: "Business & Money",
    price: "9.99",
    countInStock: "10",
    ratting: "44325",
    pages: "400",
    year: "2021",
    author: "James Clear",
    authorImage:
      "https://www.hoogi.com.au/wp-content/uploads/2019/05/IMG_3402-768x1024.jpg",
    image: "https://m.media-amazon.com/images/I/513Y5o-DYtL.jpg",
    description: `No matter your goals, Atomic Habits offers a proven framework for improving - every day. James Clear, one of the world's leading experts on habit formation, reveals practical strategies that will teach you exactly how to form good habits, break bad ones, and master the tiny behaviors that lead to remarkable results`,
  },
  {
    name:
      "Breaking the News: Exposing the Establishment Media's Hidden Deals and Secret Corruption",
    category: "Book",
    categoryBook: "Business & Money",
    price: "14.99",
    countInStock: "10",
    ratting: "1000",
    pages: "368",
    year: "2021",
    author: "Alex Marlow",
    authorImage:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbSD0jNwTwgd725BRcEhbDY-v1ld3KP8BgQg&usqp=CAU",
    image:
      "https://images-na.ssl-images-amazon.com/images/I/410a1B-INCL._SX327_BO1,204,203,200_.jpg",
    description:
      "“Everyone wants to criticize the media, but not many have the goods. Alex Marlow drops fact after fact in this devastating portrait—a must-read.” —Peter Schweizer, New York Times bestselling author of Clinton Cash and Profiles in Corruption",
  },
  {
    name:
      "The Intelligent Investor: The Definitive Book on Value Investing. A Book of Practical Counsel (Revised Edition)",
    category: "Book",
    categoryBook: "Economics",
    price: "14.29",
    countInStock: "10",
    ratting: "2304",
    pages: "640",
    year: "2006",
    author: "Benjamin Graham",
    authorImage:
      "https://247tradingpro.com/wp-content/uploads/2021/01/20210121-benjamin-graham-01.png",
    image:
      "https://images-na.ssl-images-amazon.com/images/I/51fESaIGgVL._SX323_BO1,204,203,200_.jpg",
    description: `The greatest investment advisor of the twentieth century, Benjamin Graham, taught and inspired people worldwide. Graham's philosophy of "value investing" -- which shields investors from substantial error and teaches them to develop long-term strategies -- has made The Intelligent Investor the stock market bible ever since its original publication in 1949.`,
  },
  {
    name: "Maverick: A Biography of Thomas Sowell",
    category: "Book",
    categoryBook: "Economics",
    price: "18.60",
    countInStock: "2",
    ratting: "700",
    pages: "304",
    year: "2021",
    author: "Jason L Riley",
    authorImage:
      "https://www.reed.edu/reed-magazine/assets/images/2018/jason-riley-eliot-chapel.jpg",
    image:
      "https://images-na.ssl-images-amazon.com/images/I/41g2pGvbLGL._SX321_BO1,204,203,200_.jpg",
    description:
      "In the first-ever biography of Sowell, Jason L. Riley gives this iconic thinker his due and responds to the detractors. Maverick showcases Sowell's most significant writings and traces the life events that shaped his ideas and resulted in a Black orphan from the Jim Crow South becoming one of our foremost public intellectuals.",
  },
  {
    name:
      "What Happened to You?: Conversations on Trauma, Resilience, and Healing",
    category: "Book",
    categoryBook: "Health, Fitness & Dieting",
    price: "17.39",
    countInStock: "10",
    ratting: "1302",
    pages: "304",
    year: "2021",
    author: "Oprah Winfrey",
    authorImage:
      "https://saovadoanhnhan.com/wp-content/uploads/2020/04/saovadoanhnhan-Oprah-Winfrey.jpg",
    image:
      "https://images-na.ssl-images-amazon.com/images/I/31LXam5J2IL._SX317_BO1,204,203,200_.jpg",
    description: `This book is going to change the way you see your life. Have you ever wondered "Why did I do that?" or "Why can't I just control my behavior?" Others may judge our reactions and think, "What's wrong with that person?" When questioning our emotions, it's easy to place the blame on ourselves; holding ourselves and those around us to an impossible standard. It's time we started asking a different question.`,
  },
  {
    name: "Publication Manual of the American Psychological Association",
    category: "Book",
    categoryBook: "Health, Fitness & Dieting",
    price: "25.91",
    countInStock: "100",
    ratting: "13102",
    pages: "428",
    year: "2019",
    author: "American Psychological Association",
    authorImage:
      "https://upload.wikimedia.org/wikipedia/en/thumb/2/22/American_Psychological_Association_logo.svg/440px-American_Psychological_Association_logo.svg.png",
    image:
      "https://images-na.ssl-images-amazon.com/images/I/41pbe4-oNpL._SX348_BO1,204,203,200_.jpg",
    description: `A WALL STREET JOURNAL BESTSELLER - The new 2020 copyright release of the Publication Manual of the American Psychological Association, Seventh Edition includes three different formats — spiral and tabbed, paperback, and hardcover, all of which are full-color. It is the official source for APA Style. With millions of copies sold worldwide in multiple languages, it is the style manual of choice for writers, researchers, editors, students, and educators in the social and behavioral sciences, natural sciences, nursing, communications, education, business, engineering, and other fields.`,
  },
];
