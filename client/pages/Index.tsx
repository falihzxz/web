import { useState } from "react";

export default function Index() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const cars = [
    {
      id: 1,
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/209e1d81c66e94183d9936656b62a42489d2fde1?width=590",
      title: "Nissan March Sport Version",
      year: "2014",
      mileage: "86,000 Km",
      price: "Rp 99,000,000",
    },
    {
      id: 2,
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/1eb46c02c9621603b82179b94d3e7860423b61dc?width=590",
      title: "Nissan March Sport Version",
      year: "2014",
      mileage: "86,000 Km",
      price: "Rp 99,000,000",
    },
    {
      id: 3,
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/8b66830a90c6372f8c00d7cdb8578143fdafcca3?width=590",
      title: "Nissan March Sport Version",
      year: "2014",
      mileage: "86,000 Km",
      price: "Rp 99,000,000",
    },
    {
      id: 4,
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/c5136ec206f09f1ed876013322fcb264b7bcb606?width=590",
      title: "Nissan March Sport Version",
      year: "2014",
      mileage: "86,000 Km",
      price: "Rp 99,000,000",
    },
  ];

  const benefits = [
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/b5a898e848e215dcd2101c3d45d93a424e1fdce7?width=80",
      text: "Kami isi bensin full unit setelah transaksi",
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/73d47a8309616c8e0612373bcb21bcbafc8ff491?width=80",
      text: "Unit dijamin bebas banjir dan tabrakan",
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/3f6441f47a1d21d3bdfd13798940f219d22977f3?width=80",
      text: "Proses kredit mudah dan cepat",
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/ea338cddfeba6d8221f286c6134f4d9e8c101c90?width=80",
      text: "Harga bisa dinegosiasi sampai jadi",
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/4ff2adc42425e3f223633fa284b65302df6c21a2?width=80",
      text: "Surat-surat kendaraan terjamin keabsahannya",
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/0ce3d61c1204b251567248a53ce29877fcd5b733?width=80",
      text: "Bonus free service & ganti oli",
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % cars.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + cars.length) % cars.length);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header Section */}
      <header className="relative w-full h-[815px] md:h-[900px] lg:h-[815px] overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/c0ff1ae0a0ca558cd9c2aaa9213eb7e3460fbc81?width=2880"
            alt="Car showroom background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/30"></div>
        </div>

        {/* Header Content */}
        <div className="relative z-10 container mx-auto px-4 lg:px-[100px] h-full flex flex-col">
          {/* Top Navigation */}
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between pt-[43px] gap-4">
            {/* Logo */}
            <div className="flex-shrink-0">
              <img
                src="C:\Users\Asus\Downloads\logoRAF.jpg"
                alt="RAF Auto Gallery Logo"
                className="w-[190px] h-[71px] rounded-[5px]"
              />
            </div>

            {/* Company Name */}
            <div className="lg:flex-1 lg:text-center">
              <h1 className="text-white font-poppins text-2xl lg:text-[50px] font-bold leading-normal">
                RAF AUTO GALLERY
              </h1>
            </div>
          </div>

          {/* Hero Content */}
          <div className="flex-1 flex flex-col justify-center lg:justify-start lg:pt-[163px]">
            <h2 className="text-white font-poppins text-3xl lg:text-[50px] font-bold leading-normal mb-4 lg:mb-8 max-w-[259px]">
              RAF Auto Gallery
            </h2>
            <p className="text-white font-poppins text-lg lg:text-2xl font-bold leading-normal max-w-[295px] mb-8">
              Tersedia lebih dari 100 unit mobil bekas
            </p>
          </div>
        </div>
      </header>

      {/* Product Section */}
      <section className="w-full py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-[100px]">
          {/* Section Title */}
          <h2 className="text-black text-center font-poppins text-2xl lg:text-4xl font-bold mb-12 lg:mb-16">
            Koleksi Mobil Terbaru
          </h2>

          {/* Car Grid - Desktop */}
          <div className="hidden lg:grid lg:grid-cols-4 gap-6 mb-8">
            {cars.map((car) => (
              <div
                key={car.id}
                className="bg-white rounded-[5px] shadow-lg overflow-hidden"
              >
                <img
                  src={car.image}
                  alt={car.title}
                  className="w-full h-[189px] object-cover"
                />
                <div className="p-4">
                  <h3 className="font-inter text-xl text-black mb-1">
                    {car.title}
                  </h3>
                  <p className="font-inter text-sm text-black mb-1">
                    {car.year} {car.mileage}
                  </p>
                  <p className="font-inter text-xl font-bold text-black">
                    {car.price}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Car Slider - Mobile/Tablet */}
          <div className="lg:hidden">
            <div className="relative">
              <div className="overflow-hidden">
                <div
                  className="flex transition-transform duration-300 ease-in-out"
                  style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                >
                  {cars.map((car) => (
                    <div key={car.id} className="w-full flex-shrink-0 px-2">
                      <div className="bg-white rounded-[5px] shadow-lg overflow-hidden max-w-[295px] mx-auto">
                        <img
                          src={car.image}
                          alt={car.title}
                          className="w-full h-[189px] object-cover"
                        />
                        <div className="p-4">
                          <h3 className="font-inter text-xl text-black mb-1">
                            {car.title}
                          </h3>
                          <p className="font-inter text-sm text-black mb-1">
                            {car.year} {car.mileage}
                          </p>
                          <p className="font-inter text-xl font-bold text-black">
                            {car.price}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Arrows */}
          <div className="flex items-center gap-3 mt-8 lg:justify-start justify-center">
            <button
              onClick={prevSlide}
              className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center hover:bg-gray-400 transition-colors"
            >
              <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                <ellipse
                  cx="20"
                  cy="19.5"
                  rx="20"
                  ry="19.5"
                  transform="rotate(180 20 19.5)"
                  fill="#D9D9D9"
                />
                <path
                  d="M23.3333 30L25.6833 27.65L18.05 20L25.6833 12.35L23.3333 10L13.3333 20L23.3333 30Z"
                  fill="black"
                />
              </svg>
            </button>
            <button
              onClick={nextSlide}
              className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center hover:bg-gray-400 transition-colors"
            >
              <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                <ellipse cx="20" cy="20.5" rx="20" ry="19.5" fill="#D9D9D9" />
                <path
                  d="M16.6667 10L14.3167 12.35L21.95 20L14.3167 27.65L16.6667 30L26.6667 20L16.6667 10Z"
                  fill="black"
                />
              </svg>
            </button>
          </div>

          {/* WhatsApp Button */}
          <div className="flex justify-center mt-8">
            <a
              href="https://api.whatsapp.com/send/?phone=6285179706994&text=Hallo%2C+saya+tertarik+dengan+unit+yang+ada+di+RAF+Auto+Gallery%2C+bisakah+dijelaskan+lebih+lanjut%3F&type=phone_number&app_absent=0"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-transparent border-2 border-whatsapp rounded-[2px] px-4 py-3 hover:bg-whatsapp/10 transition-colors"
            >
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/212da1193e120e3870643862d89124b856ac3cbd?width=60"
                alt="WhatsApp"
                className="w-[30px] h-[30px]"
              />
              <span className="text-whatsapp font-poppins text-base font-bold">
                WhatsApp
              </span>
            </a>
          </div>

          {/* Horizontal Divider */}
          <div className="w-full h-px bg-gray-300 mt-12"></div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="w-full py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-[99px] max-w-[1340px]">
          {/* Section Title */}
          <h2 className="text-black text-center font-poppins text-2xl lg:text-4xl font-bold mb-12 lg:mb-16">
            Kenapa Pilih Kami?
          </h2>

          {/* Benefits Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center gap-4">
                <img
                  src={benefit.icon}
                  alt=""
                  className="w-10 h-10 flex-shrink-0"
                />
                <p className="font-poppins text-lg lg:text-2xl font-medium text-black text-center md:text-left">
                  {benefit.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full bg-[#0A2634] text-white py-12 lg:py-16">
        <div className="container mx-auto px-4 lg:px-[99px]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
            {/* Location Info */}
            <div>
              <div className="flex items-center gap-4 mb-4">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/02ed7b3a6128ac7a27f093a04746432121e82c13?width=80"
                  alt="Location"
                  className="w-10 h-10"
                />
                <h3 className="font-poppins text-base font-bold">
                  Lokasi Showroom
                </h3>
              </div>
              <p className="font-poppins text-base font-normal leading-normal ml-14">
                Jln. Masjid Baitul Ula No.52, Kel. Cirendeu, Kec. Ciputat Timur,
                Kota Tangerang Selatan
              </p>
            </div>

            {/* Contact Info */}
            <div className="text-center lg:text-right">
              <p className="font-poppins text-xl mb-2">
                rafautogallery@gmail.com
              </p>
              <p className="font-poppins text-xl">RAF Auto Gallery</p>
            </div>
          </div>

          {/* Divider */}
          <div className="w-full h-px bg-gray-300 my-8"></div>

          {/* Bottom Row */}
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
            {/* Copyright */}
            <p className="font-poppins text-xl text-center lg:text-left">
              © 2025 RAF Auto Gallery | All Rights Reserved.
            </p>

            {/* Social Media Icons */}
            <div className="flex items-center justify-center lg:justify-end gap-4">
              <a href="https://api.whatsapp.com/send/?phone=6285179706994&text=Hallo%2C+saya+tertarik+dengan+unit+yang+ada+di+RAF+Auto+Gallery%2C+bisakah+dijelaskan+lebih+lanjut%3F&type=phone_number&app_absent=0">
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                  <path
                    d="M31.75 8.1831C30.2218 6.63994 28.4017 5.41637 26.3959 4.5837C24.39 3.75103 22.2385 3.3259 20.0667 3.3331C10.9667 3.3331 3.55002 10.7498 3.55002 19.8498C3.55002 22.7664 4.31669 25.5998 5.75002 28.0998L3.41669 36.6664L12.1667 34.3664C14.5834 35.6831 17.3 36.3831 20.0667 36.3831C29.1667 36.3831 36.5834 28.9664 36.5834 19.8664C36.5834 15.4498 34.8667 11.2998 31.75 8.1831ZM20.0667 33.5831C17.6 33.5831 15.1834 32.9164 13.0667 31.6664L12.5667 31.3664L7.36669 32.7331L8.75002 27.6664L8.41669 27.1498C7.04593 24.9615 6.31823 22.4319 6.31669 19.8498C6.31669 12.2831 12.4834 6.11643 20.05 6.11643C23.7167 6.11643 27.1667 7.54976 29.75 10.1498C31.0294 11.4229 32.0432 12.9373 32.7327 14.6053C33.4222 16.2733 33.7737 18.0616 33.7667 19.8664C33.8 27.4331 27.6334 33.5831 20.0667 33.5831ZM27.6 23.3164C27.1834 23.1164 25.15 22.1164 24.7834 21.9664C24.4 21.8331 24.1334 21.7664 23.85 22.1664C23.5667 22.5831 22.7834 23.5164 22.55 23.7831C22.3167 24.0664 22.0667 24.0998 21.65 23.8831C21.2334 23.6831 19.9 23.2331 18.3334 21.8331C17.1 20.7331 16.2834 19.3831 16.0334 18.9664C15.8 18.5498 16 18.3331 16.2167 18.1164C16.4 17.9331 16.6334 17.6331 16.8334 17.3998C17.0334 17.1664 17.1167 16.9831 17.25 16.7164C17.3834 16.4331 17.3167 16.1998 17.2167 15.9998C17.1167 15.7998 16.2834 13.7664 15.95 12.9331C15.6167 12.1331 15.2667 12.2331 15.0167 12.2164H14.2167C13.9334 12.2164 13.5 12.3164 13.1167 12.7331C12.75 13.1498 11.6834 14.1498 11.6834 16.1831C11.6834 18.2164 13.1667 20.1831 13.3667 20.4498C13.5667 20.7331 16.2834 24.8998 20.4167 26.6831C21.4 27.1164 22.1667 27.3664 22.7667 27.5498C23.75 27.8664 24.65 27.8164 25.3667 27.7164C26.1667 27.5998 27.8167 26.7164 28.15 25.7498C28.5 24.7831 28.5 23.9664 28.3834 23.7831C28.2667 23.5998 28.0167 23.5164 27.6 23.3164Z"
                    fill="white"
                  />
                </svg>
              </a>
              <a href="https://www.tiktok.com/@rafauto.official?_t=ZS-8wCqIH5kyOG&_r=1">
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                  <path
                    d="M27.6667 9.7C26.5277 8.39921 25.8998 6.729 25.9 5H20.75V25.6667C20.7111 26.7853 20.2392 27.8451 19.4339 28.6225C18.6285 29.3999 17.5527 29.834 16.4333 29.8333C14.0667 29.8333 12.1 27.9 12.1 25.5C12.1 22.6333 14.8667 20.4833 17.7167 21.3667V16.1C11.9667 15.3333 6.93335 19.8 6.93335 25.5C6.93335 31.05 11.5334 35 16.4167 35C21.65 35 25.9 30.75 25.9 25.5V15.0167C27.9883 16.5164 30.4956 17.3211 33.0667 17.3167V12.1667C33.0667 12.1667 29.9333 12.3167 27.6667 9.7Z"
                    fill="white"
                  />
                </svg>
              </a>
              <a href="https://www.instagram.com/rafauto.official/?igsh=MTZpOXZhYWVqNXI0dw%3D%3D#">
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                  <path
                    d="M13 3.3335H27C32.3333 3.3335 36.6666 7.66683 36.6666 13.0002V27.0002C36.6666 29.5639 35.6482 32.0227 33.8353 33.8355C32.0225 35.6484 29.5637 36.6668 27 36.6668H13C7.66665 36.6668 3.33331 32.3335 3.33331 27.0002V13.0002C3.33331 10.4364 4.35176 7.97765 6.16461 6.1648C7.97747 4.35195 10.4362 3.3335 13 3.3335ZM12.6666 6.66683C11.0753 6.66683 9.54922 7.29897 8.42401 8.42419C7.29879 9.54941 6.66665 11.0755 6.66665 12.6668V27.3335C6.66665 30.6502 9.34998 33.3335 12.6666 33.3335H27.3333C28.9246 33.3335 30.4507 32.7014 31.576 31.5761C32.7012 30.4509 33.3333 28.9248 33.3333 27.3335V12.6668C33.3333 9.35016 30.65 6.66683 27.3333 6.66683H12.6666ZM28.75 9.16683C29.3025 9.16683 29.8324 9.38632 30.2231 9.77702C30.6138 10.1677 30.8333 10.6976 30.8333 11.2502C30.8333 11.8027 30.6138 12.3326 30.2231 12.7233C29.8324 13.114 29.3025 13.3335 28.75 13.3335C28.1974 13.3335 27.6675 13.114 27.2768 12.7233C26.8861 12.3326 26.6666 11.8027 26.6666 11.2502C26.6666 10.6976 26.8861 10.1677 27.2768 9.77702C27.6675 9.38632 28.1974 9.16683 28.75 9.16683ZM20 11.6668C22.2101 11.6668 24.3297 12.5448 25.8925 14.1076C27.4553 15.6704 28.3333 17.79 28.3333 20.0002C28.3333 22.2103 27.4553 24.3299 25.8925 25.8927C24.3297 27.4555 22.2101 28.3335 20 28.3335C17.7898 28.3335 15.6702 27.4555 14.1074 25.8927C12.5446 24.3299 11.6666 22.2103 11.6666 20.0002C11.6666 17.79 12.5446 15.6704 14.1074 14.1076C15.6702 12.5448 17.7898 11.6668 20 11.6668ZM20 15.0002C18.6739 15.0002 17.4021 15.5269 16.4644 16.4646C15.5268 17.4023 15 18.6741 15 20.0002C15 21.3262 15.5268 22.598 16.4644 23.5357C17.4021 24.4734 18.6739 25.0002 20 25.0002C21.3261 25.0002 22.5978 24.4734 23.5355 23.5357C24.4732 22.598 25 21.3262 25 20.0002C25 18.6741 24.4732 17.4023 23.5355 16.4646C22.5978 15.5269 21.3261 15.0002 20 15.0002Z"
                    fill="white"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
