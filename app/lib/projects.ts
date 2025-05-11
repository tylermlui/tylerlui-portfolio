export const projects: Record<string, string> = {
    "AlgoAssist": "AlgoAssist is a web-based platform that simulates real technical interviews...",
    "Project2": "Description for Project2",
    "Project3": "Description for Project3"
  };

export const pages = ['/', ...Object.keys(projects).map((key) => `/${key}`)];