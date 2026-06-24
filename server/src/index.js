import { existsSync, mkdirSync } from "fs";
import { join } from "path";

const sourceDir = join(__dirname, "output", "sourceBin");
const organizedFiles = join(__dirname, "output", "organizedBin");

const categories = {
  images: [".jpg", ".jpeg", ".png", ".gif", ".bmp", ".svg"],
  documents: [".pdf", ".doc", ".docx", ".txt", ".rtf"],
  videos: [".mp4", ".avi", ".mkv", ".mov", ".wmv"],
  audio: [".mp3", ".wav", ".flac", ".aac", ".ogg"],
  code: [".js", ".py", ".java", ".cpp", ".html", ".css"],
  archives: [".zip", ".rar", ".tar", ".gz", ".7z"],
  spreadsheets: [".xls", ".xlsx", ".csv"],
  others: [],
};
const testFiles = [
  "vacation.jpg",
  "report.pdf",
  "presentation.pptx",
  "music.mp3",
  "video.mp4",
  "script.js",
  "data.csv",
  "archive.zip",
  "photo.png",
  "notes.txt",
  "app.py",
  "movie.avi",
  "song.wav",
  "backup.tar.gz",
  "random.xyz",
  "nodejs.zip",
];

function initializeOrganizer() {
  if (!existsSync(sourceDir)) {
    mkdirSync(sourceDir, { recursive: true });

    // testFiles.forEach((file) => {
    //   writeFileSync(join(sourceDir), file);
    // });
  }
}
