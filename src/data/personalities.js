const personalityDescriptions = {
  'firefighter': {
    label: 'The Firefighter 🚒',
    description: [
      "Thrives under pressure, ready for action at a moment’s notice, whether it’s a 3 AM alert or a sudden outage.",
      "Juggles multiple crises with ease, bringing calm to chaos.",
      "Cool-headed during incidents, shining when things go sideways.",
      "As the first responder, your steady presence is the team’s reassurance in turbulent times."
    ],
  },
  'detective': {
    label: 'The Detective 🔍',
    description: [
      "Loves unraveling puzzles and tracking down elusive bugs.",
      "The team’s go-to for troubleshooting, with endless patience and razor-sharp focus.",
      "Reads logs like a story, spotting hidden clues where others see noise.",
      "Digs deep, finding and fixing corner cases others wouldn’t think to check."
    ]
  },
  'guardian': {
    label: 'The Guardian 🛡️',
    description: [
      "Defender of security and compliance, ensuring every access level is airtight and every SOC2 requirement is met.",
      "An RBAC master, meticulously managing permissions so each team member has just the right access—no more, no less.",
      "The overseer of cloud resources, balancing configurations and cost with precision.",
      "Tuning and tweaking are second nature, from CPU cycles to cloud bills, keeping systems lean and costs under control."
    ]
  },
  cleanupCommander: {
    label: 'The Cleanup Commander 🧹',
    description: [
      "Keeps the environment clean and organized, sweeping away technical debt and messy code.",
      "Quietly handles the gruntwork, making the workspace better for everyone.",
      "Finds joy in tackling the overlooked – from old scripts to unused resources, nothing escapes your tidy-up radar.",
      "Always on the lookout for clutter, you keep systems lean and efficient, removing what’s no longer needed."
    ]
  },
  flash: {
    label: 'The Flash ⚡',
    description: [
      "All about speed—quick builds, fast deployments, and zero-downtime updates are your lifeblood.",
      "A true advocate for feature flags, rolling out features fast and safely, toggling them on and off with ease.",
      "Relentlessly streamlines delivery through automation, CI/CD pipelines, and clever progressive releases.",
      "Juggles workloads with finesse, balancing resources to handle unexpected surges without breaking a sweat.",
      "Unfazed by the chaos of release week, herds features, fixes, and updates into smooth, well-coordinated rollouts."
    ]
  },
  explorer: {
    label: 'The Explorer 🧭',
    description: [
      "Curious and inventive, you can’t resist diving into new tools and settings just to see what’s possible.",
      "Whether it’s testing the latest Kubernetes feature or tweaking infrastructure settings, you love exploring the “what ifs.",
      "The team’s mad scientist, always experimenting to see how each feature or configuration can make life better.",
      "Experimental and forward-thinking, constantly testing new ideas, environments, and configurations for progress.",
      "Adaptable and adventurous, you eagerly try new tools and configurations, always pushing for innovation.",
      "We’d love for you to tinker with Kapstan!"
    ]
  },
  automator: {
    label: 'The Automator 🤖',
    description: [
      "Turning manual tasks into seamless automation is your victory dance, making scripts your best friends.",
      "A Terraform wizard, you build self-deploying infrastructure, ensuring every change is versioned, consistent, and repeatable.",
      "Kubernetes is your sidekick, scaling apps effortlessly as pods spin up or down without lifting a finger.",
      "CI/CD pipelines are finely tuned for speed and reliability, shaving seconds off builds and ensuring smooth releases.",
      "Config quirks and Terraform or Kubernetes mishaps are no match for your troubleshooting skills—whether it’s a tricky kubectl apply or a Terraform plan full of surprises, you handle it with grace."
    ]
  }
};

export default personalityDescriptions;