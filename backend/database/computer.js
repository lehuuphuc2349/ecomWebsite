const format = {
  name: "",
  image: "",
  category: "Computer",
  price: "",
  ratting: "",
  Options: {
    CPU: "",
    capacity: "",
    style: "",
    operatingSystem: "",
    hardwareInterface: "",
    screenSize: "",
    brand: "",
    chipsetBrand: "",
  },
  description: "",
};
const computer = [
  {
    name: "HP 14 Laptop",
    image:
      "https://images-na.ssl-images-amazon.com/images/I/81BnABO7qiS._AC_SL1500_.jpg",
    category: "Computer",
    price: "630.00",
    ratting: "299",
    Options: {
      CPU: "AMD Ryzen 5 5500U",
      capacity: "8 GB RAM, 256 GB SSD Storage",
      style: "AMD Ryzen 5 5500U",
      operatingSystem: "Windows 10 Home",
      hardwareInterface: "USB, HDMI, Headphone, 802.11 ac/b/g/n, Bluetooth 5",
      screenSize: "14 Inches",
      brand: "HP",
      chipsetBrand: "AMD",
    },
    description: `POWER THROUGH FROM ANYWHERE – Designed to keep you productive and entertained from anywhere, the HP 14-inch Laptop combines long-lasting battery life with a thin and portable design
FULL HD DISPLAY – Enjoy your favorite content in 1080p for crystal-clear visuals and vibrant image quality (1). Beyond pixel count, your display lets you see more from anywhere thanks to the micro-edge bezel and anti-glare screen
INFINITE POSSIBILITIES – Whether you are creating, working, or being entertained, do it all with the supreme performance of the AMD Ryzen 5 5500U Mobile Processor and AMD Radeon Graphics (2) (3)
MEMORY AND STORAGE – Boost your performance with higher bandwidth, courtesy of 8 GB of RAM. Plus, with 256 GB PCIe NVMe M.2 SSD storage, save all of your photos, videos, and documents while getting up to 15x faster performance than a traditional hard drive (4) (5)
STAY CONNECTED – Have convenient power all day with up to 9 hours and 45 minutes of battery life (6); your HP laptop also recharges quickly as HP Fast Charge Technology takes your device from 0 to 50% charge in approximately 45 minutes (7)
WINDOWS 10 AND WARRANTY – Work confidently with both the familiar feel of the Windows 10 Home operating system and the guaranteed coverage of an HP 1-year limited hardware warranty (8)
EFFORTLESSLY CONNECTED – Get a smoother wireless experience with up to 3x faster file transfer speeds than Wi-Fi 5, thanks to the Wi-Fi 6 (2x2) and Bluetooth 5.0 combo (9) (10) (11)`,
  },
  {
    name: "Acer Aspire 5 A515-55-56VK",
    image:
      "https://m.media-amazon.com/images/I/71AmKW4yuMS._AC_UY436_FMwebp_QL65_.jpg",
    category: "Computer",
    price: "549.99",
    ratting: "1397",
    Options: {
      CPU: "Intel Core i5 10th Gen",
      capacity: "8GB DDR4, 256GB NVMe SSD",
      style: "Notebook Only",
      operatingSystem: "Windows 10 Home",
      hardwareInterface: "USB, HDMI, USB 2.0",
      screenSize: "15.6 Inches",
      brand: "Acer",
      chipsetBrand: "Intel",
    },
    description: `10th Generation Intel Core i5-1035G1 Processor (Up to 3.6GHz)| 8GB DDR4 Memory | 256GB NVMe SSD
15.6" Full HD (1920 x 1080) widescreen LED backlit IPS Display | Intel UHD Graphics
Intel Wireless Wi-Fi 6 AX201 802.11ax | Backlit Keyboard | Fingerprint Reader | HD Webcam | Up to 8 Hours Battery Life
1 - USB 3.1 (Type-C) Gen 1 port (up to 5 Gbps), 2 - USB 3.1 Gen 1 Port (one with Power-off Charging), 1 - USB 2.0 Port & 1 - HDMI Port with HDCP Support`,
  },
  {
    name: "Lenovo Flex 5 14",
    image:
      "https://m.media-amazon.com/images/I/81AbJXWCxXL._AC_UY436_FMwebp_QL65_.jpg",
    category: "Computer",
    price: "699.99",
    ratting: "4103",
    Options: {
      CPU: "AMD Ryzen 5-4500U",
      capacity: "16GB DDR4, 256GB SSD",
      style: "Notebook only",
      operatingSystem: "Windows 10",
      hardwareInterface: "Bluetooth, USB, USB Type C, HDMI",
      screenSize: "14 Inches",
      brand: "Lenovo",
      chipsetBrand: "AMD",
    },
    description: `Thin, light, and stylish – This 2-in-1 laptop weighs just 3.64 pounds and is only 0.82" thick. It's soft and comfortable to the touch, with a durable paint that creates a better user experience. Digital pen included
The 10-point, 14-inch FHD (1920 x 1080) IPS touchscreen allows the Lenovo Flex 5 14" 2-in-1 laptop to be comfortable, fun, and easy to use. It's also great to look at, with 4-side narrow bezels
The 360⁰ hinge lets you use your 2-in-1 touchscreen laptop in whatever mode works best for you; Use it in 'Laptop' mode for everyday computing, 'Tent' mode for sharing things, 'Stand' mode for binge-watching, or 'Tablet' mode for more intuitive interaction
Enjoy up to 10 hours of battery life, plus quick charge to 80% in just 1 hour
Powered by the AMD Ryzen 5 4500U mobile processor with Radeon graphics, you have the performance to do more, from anywhere. With more cores, you'll experience responsiveness that leaps into action for productivity, gaming, and content creation`,
  },
  {
    name: "Newest HP Pavilion",
    image:
      "https://images-na.ssl-images-amazon.com/images/I/717ywJDnAHL._AC_SL1500_.jpg",
    category: "Computer",
    price: "338.19",
    ratting: "1397",
    Options: {
      CPU: "Intel Pentium Silver N5000",
      capacity: "4GB RAM 128GB SSD",
      style: "Laptop Red",
      operatingSystem: "Windows 10 S",
      hardwareInterface: "Solid State Drive, USB, HDMI",
      screenSize: "15.6 Inches",
      brand: "HP",
      chipsetBrand: "Intel",
    },
    description: `Designed to keep you productive and entertained from anywhere, the HP Laptop 15-dw0083wm combines a sleek and portable design and up to 10 hours and 45 minutes of battery life—plus, when you run low, you can go from 0 to 50% charge in approximately 45 minutes with HP Fast Charge. Featuring a 15.6-inch diagonal micro-bezel HD Brightview display (with screen-to-body ratio of 81%), Intel Pentium Silver processor and UHD graphics, 4 GB SDRAM and 128 GB solid state drive, this notebook PC is powerful enough for your busiest days. The HP TrueVision HD Camera with integrated dual-array digital microphones, plus tuned stereo speakers, enable video chatting with vibrant clarity, even in low light. Weighing under four pounds, this thin, light, scarlet red laptop is easy to take from your family room to your home office or on the road.`,
  },
  {
    name: "ASUS VivoBook 15 Thin and Light Laptop",
    image:
      "https://m.media-amazon.com/images/I/81fstJkUlaL._AC_UY436_FMwebp_QL65_.jpg",
    category: "Computer",
    price: "459.99",
    ratting: "3900",
    Options: {
      CPU: "Intel i3-1005G1 CPU",
      capacity: "8GB RAM, 128GB SSD",
      style: "Thin and Light Laptop",
      operatingSystem: "Windows 10 S",
      hardwareInterface: "USB, HDMI, USB 3.0, USB 2.0",
      screenSize: "15.6 Inches",
      brand: "ASUS",
      chipsetBrand: "Intel",
    },
    description: `15.6 inch Full HD (1920x1080) 4-way NanoEdge bezel display with a stunning 88% screen-to-body ratio
Compatible with Google Classroom; run Google Classroom on Microsoft Edge or Internet Explorer 11
Latest 10th Gen Intel Core i3-1005G1 CPU (4M Cache, up to 3.4 GHz)
8 GB DDR4 RAM and 128 GB PCIe NVMe M.2 SSD
Ergonomic backlit keyboard with fingerprint sensor activated via Windows Hello
Exclusive Ergolift design for an improved typing position
Comprehensive connections including USB 3.2 Type-C, USB 3.2 Type-A, USB 2.0, and HDMI; Gigabit Wi-Fi 5 (802.11ac) (USB Transfer speed may vary. Learn more at ASUS website)
Windows 10 in S mode exclusively runs apps from the Microsoft Store. To install an app that isn't available in the Microsoft Store, simply switch out of S mode in three easy steps. There's no charge to switch out of S mode`,
  },
  {
    name: "2021 HP Laptop 15.6",
    image:
      "https://m.media-amazon.com/images/I/51kPzoz7C1S._AC_UY436_FMwebp_QL65_.jpg",
    category: "Computer",
    price: "699.99",
    ratting: "1200",
    Options: {
      CPU: "Beat i7-1065G7",
      capacity: "12GB RAM, 256GB SSD + 1TB HDD",
      style: "",
      operatingSystem: "Windows 10 Home",
      hardwareInterface:
        "Bluetooth, Solid State Drive, USB, HDMI, Headphone, Media Card",
      screenSize: "15.6 Inches",
      brand: "HP",
      chipsetBrand: "Intel",
    },
    description: `Powerful CPU&GPU】Intel Core i5-1135G7 (up to 4.2 GHz with Intel Turbo Boost Technology, 8 MB L3 cache, 4 cores), Intel Iris Xe Graphics provide everyday image quality for Internet use, basic photo editing and casual gaming.
【Memory&Hard Drive】Ram is upgraded up to 32GB DDR4 Memory for fast processing and advanced multitasking , Hard Drive is upgraded up to 2TB SSD + 2TB HDD. SSD(Solid State Drive) has faster data access speed, better performance and greater reliability, HDD provide larger storage so you could store more data and files on it. Please refer to item tile for your configuration`,
  },
  {
    name: "ASUS Laptop L510 Ultra Thin Laptop",
    image:
      "https://m.media-amazon.com/images/I/71ehzrGUO7L._AC_UY436_FMwebp_QL65_.jpg",
    category: "Computer",
    price: "340.00",
    ratting: "231",
    Options: {
      CPU: "Intel Celeron N4020 Processor",
      capacity: "4GB RAM, 128GB Storage",
      style: "Ultra Thin Laptop",
      operatingSystem: "Windows 10 Home",
      hardwareInterface: "USB",
      screenSize: "15.6 Inches",
      brand: "ASUS",
      chipsetBrand: "Intel",
    },
    description: `Efficient Intel Celeron N4020 Processor (4M Cache, up to 2.8 GHz)
15.6” FHD (1920x1080) Display
128GB eMMC Flash Storage and 4GB DDR4 RAM
Windows 10 Home in S mode
Slim and Portable: 0.72” thin and weighs only 3.59 lbs (battery included)`,
  },
  {
    name: "2020 Apple MacBook Air",
    image:
      "https://m.media-amazon.com/images/I/71jG+e7roXL._AC_UY436_FMwebp_QL65_.jpg",
    category: "Computer",
    price: "919.99",
    ratting: "13000",
    Options: {
      CPU: "Apple M1",
      capacity: "256GB or 512GB SSD",
      style: "Previos Model",
      operatingSystem: "Mac OS",
      hardwareInterface:
        "USB 3.1 Type C, 3.5mm Audio, Thunderbolt, Bluetooth 5",
      screenSize: "13.3 Inches",
      brand: "Apple",
      chipsetBrand: "Apple",
    },
    description: `Apple-designed M1 chip for a giant leap in CPU, GPU, and machine learning performance
Go longer than ever with up to 18 hours of battery life
8-core CPU delivers up to 3.5x faster performance to tackle projects faster than ever
Up to eight GPU cores with up to 5x faster graphics for graphics-intensive apps and games
16-core Neural Engine for advanced machine learning
8GB of unified memory so everything you do is fast and fluid
Superfast SSD storage launches apps and opens files in an instant`,
  },
  {
    name: "2020 Apple MacBook Pro",
    image:
      "https://m.media-amazon.com/images/I/71bElkQQ7LL._AC_UY436_FMwebp_QL65_.jpg",
    category: "Computer",
    price: "700",
    ratting: "23000",
    Options: {
      CPU: "Intel Core i7",
      capacity: "256 GB RAM",
      style: "Gray",
      operatingSystem: "Mac OS",
      hardwareInterface: "USB 3.1 Type C, Thunderbolt, Headphone, Bluetooth 5",
      screenSize: "13.3 Inches",
      brand: "Apple",
      chipsetBrand: "Intel",
    },
    description: `Tenth-generation quad-core Intel Core i5 processor
Brilliant Retina display with True Tone technology
Backlit Magic Keyboard
Touch Bar and Touch ID
Intel Iris Plus Graphics
`,
  },
  {
    name: "Apple MacBook Air 13.3",
    image:
      "https://m.media-amazon.com/images/I/61P14Ym5J2L._AC_UY436_FMwebp_QL65_.jpg",
    category: "Computer",
    price: "700",
    ratting: "11000",
    Options: {
      CPU: "Intel Core i7",
      capacity: "16GB Memory, 256GB SSD",
      style: "GOLD",
      operatingSystem: "Mac OS",
      hardwareInterface: "",
      screenSize: "13.3 Inches",
      brand: "Apple",
      chipsetBrand: "Apple",
    },
    description: `MacBook Air 13.3 " with Retina Display (Gold) - 30W USB Type-C Power Adapter - USB Type-C Charging Cable (6.56' / 2m) - Apple 1 Year Limited Warranty
Retina display with True Tone
1.2GHz quad-core 10th-generation Intel Core i7 processor, Turbo½ Boost up to 3.8GHz
16GB 3733MHz LPDDR4X memory
256GB SSD storage`,
  },
];

module.exports = computer;
