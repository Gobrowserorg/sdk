import { runBrowser } from "./browser/launch";

export function startServer() {
  console.log("Gobrowser server started");

  runBrowser("https://example.com");
}
