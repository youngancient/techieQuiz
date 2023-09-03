import { IDropdownItem } from "../Components/main";

export interface IQuestion {
  id: number;
  question: string;
  img?: string;
  options: IOption[];
  answer: number;
  attemptQuestion?: boolean;
}

export interface IOption {
  id: number;
  text: string;
}

export const Questions: IQuestion[] = [
  {
    id: 1,
    question: "Which of these founded the most popular tech community for Genzs?",
    options: [
      { id: 1, text: "John Oseni" },
      { id: 2, text: "Hanif Olayiwola" },
      { id: 3, text: "Eniola Osabiya" },
      { id: 4, text: "Clinton Imaro" },
    ],
    answer: 3,
  },
  {
    id: 2,
    question: "Who said 'Slow down on the coding diet'?",
    options: [
      { id: 1, text: "Layi Waysabi" },
      { id: 2, text: "Hacksultan" },
      { id: 3, text: "Idan" },
      { id: 4, text: "Layi Wasabi" },
    ],
    answer: 4,
  },
  {
    id: 3,
    question: "You are either a Tech bro or a ",
    options: [
      { id: 1, text: "Broke keed" },
      { id: 2, text: "Bro in technical difficulties" },
      { id: 3, text: "Yahoo Yahoo" },
      { id: 4, text: "Hushpuppy" },
    ],
    answer: 2,
  },
  {
    id: 4,
    question: "This flag  belongs to?",
    img : "/morocco.svg",
    options: [
      { id: 1, text: "Benin republic" },
      { id: 2, text: "Malaysia" },
      { id: 3, text: "Morocco" },
      { id: 4, text: "Cameroon" },
    ],
    answer: 3,
  },
  {
    id: 5,
    question: "Sapa is a good",
    options: [
      { id: 1, text: "Destroyer" },
      { id: 2, text: "Mentor" },
      { id: 3, text: "Friend" },
      { id: 4, text: "Motivator" },
    ],
    answer: 4,
  },
  {
    id: 6,
    question: "It takes 15 mins to boil 4 eggs, how long will 6eggs take?",
    options: [
      { id: 1, text: "25mins" },
      { id: 2, text: "20mins" },
      { id: 3, text: "15mins" },
      { id: 4, text: "You cannot test me" },
    ],
    answer: 3,
  },
  {
    id: 7,
    question: "Discord is to community building as Twitter is to",
    options: [
      { id: 1, text: "Madness" },
      { id: 2, text: "Ment" },
      { id: 3, text: "Stupidity" },
      { id: 4, text: "Vawolence" },
    ],
    answer: 4,
  },
  {
    id: 8,
    question: "To grow as a techie, which social media is most needed?",
    options: [
      { id: 1, text: "Threads" },
      { id: 2, text: "Twitter" },
      { id: 3, text: "Linkedin" },
      { id: 4, text: "Instagram" },
    ],
    answer: 2,
  },
  {
    id: 9,
    question: "Pick the under 20 CEO and Founder:",
    options: [
      { id: 1, text: "Sultan Akintunde" },
      { id: 2, text: "Njoku Emmanuel" },
      { id: 3, text: "Njoku Steve" },
      { id: 4, text: "Olugbenga Agboola" },
    ],
    answer: 2,
  },
  {
    id: 10,
    question: "Who is the most followed African Tech Figure?",
    options: [
      { id: 1, text: "Big Nenz" },
      { id: 2, text: "Layi Wasabi" },
      { id: 3, text: "Hacksultan" },
      { id: 4, text: "Agba Akin" },
    ],
    answer: 3,
  },
  {
    id: 11,
    question: "Pick the odd one out",
    options: [
      { id: 1, text: "Big Nenz" },
      { id: 2, text: "Daniel Regha" },
      { id: 3, text: "Hacksultan" },
      { id: 4, text: "Agba Akin" },
    ],
    answer: 2,
  },
  {
    id: 12,
    question: "Pick the oldest cat",
    options: [
      { id: 1, text: "Flutterwave" },
      { id: 2, text: "Opay" },
      { id: 3, text: "Palmpay" },
      { id: 4, text: "Interswitch" },
    ],
    answer: 4,
  },
  {
    id: 13,
    question: "How many people founded AltSchool?",
    options: [
      { id: 1, text: "1" },
      { id: 2, text: "3" },
      { id: 3, text: "2" },
      { id: 4, text: "Dem plenty jorh" },
    ],
    answer: 2,
  },
  {
    id: 14,
    question: "Which programming language is mostly called 'dead' but still feeds people?",
    options: [
      { id: 1, text: "PHP" },
      { id: 2, text: "Python" },
      { id: 3, text: "Javascript" },
      { id: 4, text: "Pascal" },
    ],
    answer: 1,
  },
  {
    id: 15,
    question: "What is the most eaten food by techies?",
    options: [
      { id: 1, text: "Garri and cold water" },
      { id: 2, text: "Fried rice and chicken" },
      { id: 3, text: "Cornflakes" },
      { id: 4, text: "Groceries and berries" },
    ],
    answer: 4,
  },
  {
    id: 16,
    question: "When techies show off on twitter, what do they post the most?",
    options: [
      { id: 1, text: "Their Partners" },
      { id: 2, text: "Workspaces and MacBooks" },
      { id: 3, text: "Their github accounts" },
      { id: 4, text: "Job offer letters" },
    ],
    answer: 2,
  },
  {
    id: 17,
    img : "idan.jpg",
    question: "Identify this user by his twitter handle",
    options: [
      { id: 1, text: "@Olasoft" },
      { id: 2, text: "@Olatechsoft" },
      { id: 3, text: "@Olanetsoft" },
      { id: 4, text: "@olasoftlife" },
    ],
    answer: 3,
  },
  {
    id: 18,
    question: "Who is the founder of Edustipend?",
    options: [
      { id: 1, text: "Tech Daddy" },
      { id: 2, text: "Tech Idan" },
      { id: 3, text: "Tech Pappi" },
      { id: 4, text: "Tech Zaddy" },
    ],
    answer: 4,
  },
  {
    id: 19,
    question: "Who began the #100kinterns initiative?",
    options: [
      { id: 1, text: "Sultan of Lagos" },
      { id: 2, text: "Hackmamba" },
      { id: 3, text: "Hacksultan" },
      { id: 4, text: "Idan wey dey hack" },
    ],
    answer: 3,
  },
  {
    id: 20,
    question: "___ and ___ hosted oscafest 2023",
    options: [
      { id: 1, text: "Chioma Jesus and Adora Iniedo" },
      { id: 2, text: "Odumodu and Adora Nwuno" },
      { id: 3, text: "Kate Tomlin and Adora Phelps" },
      { id: 4, text: "Karen Amarii and Adora Nwodo" },
    ],
    answer: 4,
  },
  {
    id: 21,
    question: "___ is the most popular tech event center in Lagos",
    options: [
      { id: 1, text: "Mushin park" },
      { id: 2, text: "Ikeja park" },
      { id: 3, text: "Unilag main auditorium" },
      { id: 4, text: "Landmark event centre" },
    ],
    answer: 4,
  },
  {
    id: 22,
    question: "What's the best tech event for Genzs happening in August,2023?",
    options: [
      { id: 1, text: "Genz Marriage" },
      { id: 2, text: "GenzTechies reunion" },
      { id: 3, text: "GenzHackfest" },
      { id: 4, text: "GenzGarrifest" },
    ],
    answer: 3,
  },
  {
    id: 23,
    question: "SSD stands for ___",
    options: [
      { id: 1, text: "solid state disk" },
      { id: 2, text: "Solid State Disk" },
      { id: 3, text: "standard state drive" },
      { id: 4, text: "Solid State Drive" },
    ],
    answer: 4,
  },
  {
    id: 24,
    question: "Charging your smartphone overnight will harm the battery",
    options: [
      { id: 1, text: "True" },
      { id: 2, text: "False" },
      { id: 3, text: "Dont test me" },
      { id: 4, text: "Maybe, not sure" },
    ],
    answer: 1,
  },
  {
    id: 25,
    question: "Who is the Goat?",
    options: [
      { id: 1, text: "Ronaldo" },
      { id: 2, text: "Messi" },
      { id: 3, text: "Ankara messi" },
      { id: 4, text: "Penaldo" },
    ],
    answer: 2,
  },
  {
    id: 26,
    question: "Identify her by her code name",
    img : "/techie.jpg",
    options: [
      { id: 1, text: "Kolocodes" },
      { id: 2, text: "Big Nenz" },
      { id: 3, text: "TechQueen" },
      { id: 4, text: "Didicodes" },
    ],
    answer: 4,
  },
  {
    id: 27,
    question: "What's Didicodes real name?",
    options: [
      { id: 1, text: "Edidiong Nfong" },
      { id: 2, text: "Idorenyi Asikpo" },
      { id: 3, text: "Edidiong Nsisong" },
      { id: 4, text: "Edidiong Asikpo" },
    ],
    answer: 4,
  },
];

export const DropdownList: IDropdownItem[] = [
  { value: 5, $isSelected: true, id: 1 },
  { value: 10, $isSelected: false, id: 2 },
  { value: 20, $isSelected: false, id: 3 },
];

export interface IEmoji{
  id : number;
  isSelected : boolean;
  color: string;
  supcolor: string;
}
// "#8B0000"
export const EmojiList:IEmoji[] =[
  {id : 0, isSelected : true, color : "#575a89", supcolor : "rgba(96, 102, 208, 0.7)"},
  {id : 1, isSelected : false, color : "#8B0000", supcolor : "hsla(0, 90%, 35%,0.7)"},
  {id : 2, isSelected : false, color : "#4B0082", supcolor : "hsla(275, 90%, 35%, 0.7)"},
  {id : 3, isSelected : false, color : "#00008b", supcolor : "hsla(240, 100%, 50%,0.7)"},
]

// export const AudioSounds