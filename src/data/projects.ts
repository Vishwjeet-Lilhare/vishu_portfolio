import type { Project } from "../types/project";

export const projects: Project[] = [
  {
    title: "Horror Escape Mission",
    slug: "horror-escape-mission",
    category: "SURVIVAL / GAMEPLAY SYSTEMS",
    theme: "horror",
    status: "Personal project",
    technologies: ["UEFN", "Verse"],
    summary:
      "Stay alive. Find the key. Make it out. A horror escape experience driven by creature AI, combat, and event-based objectives.",
    description:
      "A personal horror survival and escape experience that brings exploration, combat, a randomized key objective, interactive doors, an escape timer, and end-game conditions into a connected gameplay loop.",
    goal: "Connect exploration and combat to a clear escape objective, with readable feedback as the game state changes.",
    loop: [
      "Explore the environment",
      "Detect and fight creatures",
      "Find the randomized key",
      "Unlock the escape route",
      "Escape before time runs out",
    ],
    systems: [
      "Creature behavior & proximity activation",
      "Player detection, targeting & navigation",
      "Attack range, damage & cooldowns",
      "Elimination logic & kill tracking",
      "Randomized key objective",
      "Interactive doors & escape timer",
      "End-game conditions & map boundaries",
      "Gameplay instructions & UI feedback",
      "Event-driven changes after key collection",
      "Audio, VFX, cinematics & environmental effects",
    ],
    implementation:
      "UEFN devices are connected with Verse logic to support enemy behavior, combat, objectives, and game-state control. Key collection triggers event-driven changes, while UI, audio, visual effects, and cinematics communicate the experience to the player.",
    developmentNotes: [
      {
        title: "Development challenges · review focus",
        body: "A useful case-study focus is the coordination of enemy state, key collection, and escape conditions. Specific issues and their fixes still need an owner-authored development log.",
      },
      {
        title: "Debugging & iteration · review checklist",
        body: "Document player detection, repeated attacks, damage cooldowns, key collection, door interaction, and timeout outcomes. These are suggested checks, not a claim of completed test coverage.",
      },
      {
        title: "Lessons learned · draft prompt",
        body: "What changed after playtesting the escape sequence? Add a concrete before-and-after example showing how feedback improved the player experience.",
      },
    ],
    statusDetail:
      "Personal game-development project. The systems listed are reported in the supplied profile; no public release, playable link, source repository, or gameplay recording has been provided.",
  },
  {
    title: "Aim Training",
    slug: "aim-training",
    category: "PRECISION / PLAYER FEEDBACK",
    theme: "aim",
    status: "Personal project",
    technologies: ["UEFN", "Verse"],
    summary:
      "A focused target-practice experience. Repeatable interactions, device events, and responsive player feedback.",
    description:
      "An interactive aim-training experience built around repeatable target-practice gameplay and responsive feedback.",
    goal: "Create a clear, repeatable practice loop where target interactions give players useful feedback.",
    loop: [
      "Enter practice",
      "Interact with targets",
      "Receive feedback",
      "Repeat the practice loop",
    ],
    systems: [
      "Target interactions",
      "UEFN device events",
      "Repeatable practice loop",
      "Player feedback",
      "Playtesting & iterative debugging",
    ],
    implementation:
      "Verse and UEFN device events connect target interactions to player feedback and the repeatable practice loop. Exact device bindings and implementation excerpts can be added when source material is available.",
    developmentNotes: [
      {
        title: "Development challenges · review focus",
        body: "Feedback timing and reliable repetition are useful areas to document. No specific bug or performance result is claimed here.",
      },
      {
        title: "Debugging & iteration · review checklist",
        body: "Record how target interactions behave over repeated practice cycles, whether feedback remains clear, and which changes resulted from playtesting.",
      },
      {
        title: "Lessons learned · draft prompt",
        body: "Add an example of a playtest observation and the adjustment made to the practice loop.",
      },
    ],
    statusDetail:
      "Personal game-development project, including playtesting and iterative debugging as described in the supplied profile. No public playable build or media has been provided.",
  },
  {
    title: "Farming Simulator",
    slug: "farming-simulator",
    category: "SIMULATION / INVENTORY & UI",
    theme: "farm",
    status: "In development",
    technologies: ["UEFN", "Verse", "UMG / UI"],
    summary:
      "From planting beds to market crates. An evolving single-player simulation exploring crops, inventory, and customer sales.",
    description:
      "A single-player farming and vegetable-market simulation focused on crop production, inventory, shop management, and customer sales. The design has four difficulty blocks—Easy, Normal, Hard, and Extreme—with eight plots each: 32 plots and 256 planting beds.",
    goal: "Build a consistent farm-to-market loop in which crops, inventory, crate stock, UI, and cash progression stay in sync.",
    loop: [
      "Purchase seeds",
      "Plant and grow crops",
      "Harvest into inventory",
      "Stock vegetable crates",
      "Sell to customers · verification pending",
    ],
    systems: [
      "Seed purchasing",
      "Crop planting & growth",
      "Cutter / unlockable harvesting tool",
      "Bag & inventory UI",
      "Vegetable storage & display crates",
      "Crate stocking & stock management",
      "NPC customers & sales architecture",
      "Cash-based farming progression",
    ],
    implementation:
      "The evolving design connects crop growth and harvest validation to inventory, crate stock transactions, UI updates, and customer-sale architecture. Features have been developed in stages; some have only been reported as compiling. Exact implementation and runtime status require owner verification.",
    developmentNotes: [
      {
        title: "Developed in stages · not independently verified",
        body: "The supplied project context describes work across seed purchasing, planting, harvesting, inventory, stocking, and sales. It does not establish a reliable feature-by-feature completion status.",
      },
      {
        title: "Live testing · still required",
        body: "Validate harvest eligibility, inventory consistency, crate stock transactions, and UI updates in live play. NPC navigation, automated customer purchasing, and the complete sales loop are not confirmed functional.",
      },
      {
        title: "Next work & lessons · draft prompt",
        body: "Confirm which systems work reliably, document reproducible failures, and record the changes made after playtesting. Add lessons only once supported by those observations.",
      },
    ],
    statusDetail:
      "IN DEVELOPMENT. Compilation is not proof of live gameplay behavior. Runtime validation remains outstanding for some features; the complete customer sales loop is not verified.",
  },
];
