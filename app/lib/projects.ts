export const projects: Record<string, string> = {
    "AlgoAssist": "A web-based platform that simulates real technical interviews",
    "Tarix": "A web application designed to help consumers, businesses, and policymakers make more informed decisions about tariffs",
    "ClearCosmetics": "A web application designed to bring transparency to shopping for makeup products"
  };

export const pages = ['/', ...Object.keys(projects).map((key) => `/${key}`)];