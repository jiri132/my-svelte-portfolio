import type { Project } from "./project";

const asset_path = "/assets"

export const projectList :string[] = [
    "EntitledEngine",
    "EntitledEngine2",
    "EntitledEngine3",
    "SpotifySoundcloud",
    "LogicGatesSimulation",
    "ChessApp"
]

export const projects : { [key: string]: Project } = {
  EntitledEngine: {
    github: true,

    owner: {
        name: "jiri132",
        url: "https://github.com/jiri132"
    },
    name: "Entitled Engine",
    desc: "A simple game engine created with C# and Windows Forms",
    banner: "",
    tags: ["Engine", "Game Engine"],

    created: new Date("Mar 6, 2022").toJSON(),
    updated: new Date("Sep 9, 2022").toJSON(),

    languages: { "C#": 1 },

    urls: {
        repo: "https://github.com/jiri132/EntitledEngine"
    }
  },
  EntitledEngine2: {
    github: true,
    enchanted: true,

    owner: {
        name: "jiri132",
        url: "https://www.github.com/jiri132"
    },
    name: "Entitled Engine 2",
    desc: "A follow up from the old Engine to a new one, capable of more things then its predecessor",
    banner: "/assets/banners/entitledengine2.png",
    tags: ["Engine", "Game Engine", "Physics"],

    created: new Date("Jun 12, 2022").toJSON(),
    updated: new Date("Sep 6, 2022").toJSON(),

    languages: { "C#": 1 },
    stargazers_count: 2,

    urls: {
        repo: "https://github.com/jiri132/EntitledEngine2"
    }
  },
  EntitledEngine3: {
    github: false,
    enchanted: true,

    owner: {
        name: "jiri132",
        url: "https://github.com/jiri132"
    },
    name: "Entitled Engine 3",
    desc: "An even beter Engine then Entitled 1 AND Entitled 2!!! Being capable of using Sprites, Animations and much more! still a big Work In Progress",
    banner: "",
    tags: ["Engine", "Game Engine", "Physics"],

    created: new Date("Mar 2, 2023").toJSON(),
    updated: "Now",//new Date("Sep 9, 2022").toJSON(),

    languages: { "C#": 1, "C++": 2 },

    urls: {

    }
  },
  
  SpotifySoundcloud: {
    github: true,

    owner: {
        name: "jiri132",
        url: "https://github.com/jiri132"
    },
    name: "Spotify-Soundcloud",
    desc: "The music of Spotify and Soundcloud in 1 application",
    banner: "",
    tags: ["Tauri"],

    created: new Date("Mar 6, 2022").toJSON(),
    updated: "On hold",//new Date("Sep 9, 2022").toJSON(),

    languages: { Svelte: 1, TypeScript: 2, Rust: 3, Tauri: 4 },

    urls: {
        repo: "https://github.com/jiri132/Spotify-Soundcloud"
    }
  },
  LogicGatesSimulation: {
    github: true,

    owner: {
        name: "jiri132",
        url: "https://github.com/jiri132"
    },
    name: "Logic Simulation",
    desc: "Logic gate inspired application from Ben Eater computer",
    banner: "",
    tags: ["Simulation", "Unity"],

    created: new Date("Nov 2, 2022").toJSON(),
    updated: new Date("Feb 14, 2023").toJSON(),

    languages: { "C#": 1, Unity: 2 },

    urls: {
        repo: "https://github.com/jiri132/Logic-gates-v2"
    }
  },
  ChessApp: {
    github: true,

    owner: {
        name: "jiri132",
        url: "https://github.com/jiri132"
    },
    name: "Chess App",
    desc: "A bare bones Chess application playable on the web",
    banner: "",
    tags: ["Web application", "web game"],

    created: new Date("Jun 28, 2022").toJSON(),
    updated: new Date("Sep 9, 2022").toJSON(),

    languages: { TypeScript: 1, HTML : 2 },

    urls: {
        repo: "https://github.com/jiri132/Chess-App"
    }
  }

}

// export default projects;