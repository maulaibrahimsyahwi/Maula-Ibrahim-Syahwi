// {
//   // Status yang tersedia:
// - "active": Link berfungsi normal, akan muncul tombol "Lihat" berwarna violet
// - "expired": Link sudah kadaluarsa, tombol merah dengan text "Link Expired"
// - "maintenance": Sedang maintenance, tombol kuning dengan text "Under Maintenance"
// - "inactive": Project tidak aktif, tombol abu-abu dengan text "Not Available"
// - "coming_soon": Project belum selesai, tombol abu-abu dengan text "Coming Soon"
// }

// data.js

// Import semua gambar
import HeroImage from "/assets/Foto Formall.jpg";
import Tools1 from "/assets/tools/vscode.png";
import Tools2 from "/assets/tools/reactjs.png";
import Tools3 from "/assets/tools/nextjs.png";
import Tools4 from "/assets/tools/tailwind.png";
import Tools5 from "/assets/tools/bootstrap.png";
import Tools6 from "/assets/tools/js.png";
import Tools7 from "/assets/tools/nodejs.png";
import Tools8 from "/assets/tools/github.png";
import Tools9 from "/assets/tools/ai.png";
import Tools10 from "/assets/tools/canva.png";
import Tools11 from "/assets/tools/figma.png";
// Import semua Project
import Project1 from "/assets/proyek/proyek1.webp";
import Project2 from "/assets/proyek/proyek2.webp";
import Project3 from "/assets/proyek/proyek3.webp";
import Project4 from "/assets/proyek/proyek4.webp";
import Project5 from "/assets/proyek/proyek5.webp";
import Project6 from "/assets/proyek/proyek6.webp";
// Data Image
import ImageMusic1 from "../public/assets/music/img/TooLate-Moavii.jpeg";
import ImageMusic2 from "../public/assets/music/img/cloud.jpg";
import ImageMusic3 from "../public/assets/music/img/dream potion.jpeg";

const DataImage = {
  HeroImage,
};
export default DataImage;

// Data Tools
export const listTools = [
  {
    id: 1,
    gambar: Tools1,
    nama: "Visual Studio Code",
    ket: "Code Editor",
    dad: "100",
  },
  { id: 2, gambar: Tools2, nama: "React JS", ket: "Framework", dad: "200" },
  { id: 3, gambar: Tools3, nama: "Next JS", ket: "Framework", dad: "300" },
  {
    id: 4,
    gambar: Tools4,
    nama: "Tailwind CSS",
    ket: "Framework",
    dad: "400",
  },
  { id: 5, gambar: Tools5, nama: "Bootstrap", ket: "Framework", dad: "500" },
  { id: 6, gambar: Tools6, nama: "Javascript", ket: "Language", dad: "600" },
  {
    id: 7,
    gambar: Tools7,
    nama: "Node JS",
    ket: "Javascript Runtime",
    dad: "700",
  },
  { id: 8, gambar: Tools8, nama: "Github", ket: "Repository", dad: "800" },
  {
    id: 9,
    gambar: Tools9,
    nama: "Adobe Illustrator",
    ket: "Design App",
    dad: "900",
  },
  { id: 10, gambar: Tools10, nama: "Canva", ket: "Design App", dad: "1000" },
  { id: 11, gambar: Tools11, nama: "Figma", ket: "Design App", dad: "1100" },
];

// Data Proyek
export const listProject = [
  {
    id: 1,
    gambar: Project1,
    nama: "AI Chat Interface",
    desk: "Modern AI Chat Application Based on React & Tailwind, Integrated GroQ AI (Llama 4). Features: Chat Real-Time, Conversation History, Context Memory, Responsive Design, and Modern UI/UX.",
    tools: [
      "Javascript",
      "Tailwind",
      "React",
      "Groq AI",
      "Vite",
      "AI",
      "Llama 4",
      "Lucide React",
    ],
    dad: "200",
    link: "https://chat-assistant-ai.vercel.app/",
    status: "active",
  },
  {
    id: 2,
    gambar: Project2,
    nama: "Kanban Board | Project Management Tool",
    desk: "Manage projects and tasks with Kanban Board. It's a modern, responsive Kanban board, built with Next.js, Tailwind CSS, and drag-and-drop features.",
    tools: [
      "TypeScript",
      "Tailwind",
      "Next.js",
      "React",
      "UUID",
      "Drag and Drop",
      "Shadcn UI",
      "kanban board",
    ],
    dad: "300",
    link: "https://kanban-board-alpha-peach.vercel.app/",
    status: "active",
  },
  {
    id: 3,
    gambar: Project3,
    nama: "Prototype UI/UX",
    desk: "Canteen UNJ Prototype for Mobile Dwaves for the UNJ Canteen Application to order food via a cellphone with a simple appearance.",
    tools: ["Figma", "Canva"],
    dad: "400",
    link: "https://www.figma.com/proto/kVJ1ZDlueY4bfOOuP4dIMu/IMK-Mobile-Application-UNJ-Canteen-by-Kelompok-7?node-id=8-3&t=akhdX51BMCcjCdNK-1",
    status: "active",
  },
  {
    id: 5,
    gambar: Project5,
    nama: "Responsive Movie Database",
    desk: "The film database application was built with react using API. Find movies, make a list of watches, and film ranking.",
    tools: ["HTML", "TailwindCSS", "Javascript", "React", "API", "Vite"],
    dad: "600",
    link: "https://movie-finder-watchlist-manager.vercel.app/",
    status: "active",
  },
  {
    id: 4,
    gambar: Project4,
    nama: "Simple Pokémon Website",
    desk: `Simple website based on React that displays Pokémon data from local JSON files, requires a "skilvul"/"admin" login, and using CSS.`,
    tools: ["Vite", "ReactJS", "CSS"],
    dad: "500",
    link: "https://simple-pokemon-theta.vercel.app/",
    status: "active",
  },

  {
    id: 6,
    gambar: Project6,
    nama: "Simple Portfolio",
    desk: "This portfolio website is made purely using Tailwind CSS, displays profiles, projects, and contacts with responsive design and modern styles without additional framework.",
    tools: ["HTML", "CSS", "Javascript", "Tailwind"],
    dad: "700",
    link: "https://maulaibrahimsyahwi.github.io/Web-Portofolio-TailwindCSS/",
    status: "active",
  },
];

// data music
// data music
export const listMusic = [
  {
    id: 1,
    title: "Too Late",
    artist: "Moavii",
    cover: ImageMusic1,
    audio:
      "https://res.cloudinary.com/dzcm7ddky/video/upload/v1755847743/Too_Late_-_Moavii_Chill_Beat_Vlog_New_Release_wkhnsy.mp3",
  },
  {
    id: 2,
    title: "Cloud",
    artist: "Lukrembo",
    cover: ImageMusic2,
    audio:
      "https://res.cloudinary.com/dzcm7ddky/video/upload/v1755847741/Cloud_emu0qq.mp3", // **Ganti dengan URL Cloudinary untuk lagu 'Cloud'**
  },
  {
    id: 3,
    title: "Dream Potion",
    artist: "tubebackr",
    cover: ImageMusic3,
    audio:
      "https://res.cloudinary.com/dzcm7ddky/video/upload/v1755847687/Dream_Potion_wxcgip.mp3",
  },
];
