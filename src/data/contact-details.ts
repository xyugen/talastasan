const contactDetails = [
  {
    name: "Ganzon, Queenie Ann L.",
    email: "QueenieAnn0809@gmail.com",
    phoneNumber: "09970877791",
  },
  {
    name: "Maesa, Justine M.",
    email: "justinemaesa0723@gmail.com",
    phoneNumber: "09655496506",
  },
  {
    name: "Ocariza, James Mark O.",
    email: "jamesmarkocariza05232003@gmail.com",
    phoneNumber: ["09701270033", "09567805423"],
  },
  {
    name: "Villanueva, Danica Faye L.",
    email: "danikafey7@gmail.com",
    phoneNumber: ["09751086352", "09667454975"],
  },
  {
    name: "Arias, Jorym Renz M.",
    title: "Web Developer",
    email: "renzyx.dev@gmail.com",
    phoneNumber: "09106054296",
  },
];

export default contactDetails;

export type ContactDetail = (typeof contactDetails)[number];
