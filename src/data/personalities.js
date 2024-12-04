import automator from '../assets/personas/automator.png';
import cleaner from '../assets/personas/cleaner.png';
import detective from '../assets/personas/detective.png';
import explorer from '../assets/personas/explorer.png';
import firefighter from '../assets/personas/firefighter.png';
import flash from '../assets/personas/flash.png';
import guardian from '../assets/personas/guardian.png';

const commonShareText = `
What's your DevOps personality?
#DevOpsPersonality #EngineeringLife #DevOpsBingo`;

export const personalityDescriptions = {
  'firefighter': {
    name: 'Firefighter',
    label: 'The Firefighter 🚒',
    resultName: 'a Firefighter',
    description: [
      "I thrive under pressure, turning 3 AM alerts into calm, one outage at a time. Chaos? Challenge accepted!",
    ],
    shareLink: 'firefighter',
    shareText: `🔥 I'm a Firefighter! The first responder, always ready to tackle production fires and keep systems running smoothly.${commonShareText}`,
  },
  'detective': {
    name: 'Detective',
    label: 'The Detective 🔍',
    resultName: 'a Detective',
    description: [
      "Bugs beware! I unravel mysteries, find hidden clues in logs, and fix issues others miss.",
    ],
    shareLink: 'detective',
    shareText: `🕵️‍♀️ My #DevOpsPersonality is Detective! Piecing together logs, solving mysteries, and uncovering root causes—it's all in a day's work.${commonShareText}`
  },
  'guardian': {
    name: 'Guardian',
    label: 'The Guardian 🛡️',
    resultName: 'a Guardian',
    description: [
      "Protector of security, master of RBAC, and the gatekeeper of cost and compliance. Systems run safe with me!",
    ],
    shareLink: 'guardian',
    shareText: `🛡️ Turns out, I'm a Guardian! I safeguard stability, security, and smooth workflows, ensuring the team can rely on a steady foundation.${commonShareText}`
  },
  cleanupCommander: {
    name: 'Cleanup Commander',
    label: 'The Cleanup Commander 🧹',
    resultName: 'a Cleanup Commander',
    description: [
      "Technical debt? Old scripts? Messy code? I clear the clutter, keeping systems lean and efficient.",
    ],
    shareLink: 'cleaner',
    shareText: `🧹 I'm a Cleaner! I tidy up messy pipelines, remove chaos, and keep workflows running like clockwork.${commonShareText}`
  },
  flash: {
    name: 'Flash',
    label: 'The Flash ⚡',
    resultName: 'the Flash',
    description: [
      "Speed is my game: fast builds, zero-downtime updates, and smooth releases—all in a day's work.",
    ],
    shareLink: 'flash',
    shareText: `⚡ Speed is my superpower! As Flash, I'm quick to respond, swift to act, and always ahead of the game.${commonShareText}`
  },
  explorer: {
    name: 'Explorer',
    label: 'The Explorer 🧭',
    resultName: 'an Explorer',
    description: [
      "I test limits, tinker with new tools, and explore the unknown. Progress starts with a curious mind.",
    ],
    shareLink: 'explorer',
    shareText: `🧭 I'm an Explorer! I chart new territories in DevOps, navigating unknowns and finding solutions to tough challenges.${commonShareText}`
  },
  automator: {
    name: 'Automator',
    label: 'The Automator 🤖',
    resultName: 'an Automator',
    description: [
      "Manual tasks? Not on my watch. I automate workflows and build self-deploying infrastructure like magic.",
    ],
    shareLink: 'automator',
    shareText: `🤖 I'm an Automator! Streamlining processes, creating efficiencies, and letting scripts handle the heavy lifting is my forte.`
  }
};

export const personalityImages = {
  [personalityDescriptions.firefighter.name]: firefighter,
  [personalityDescriptions.detective.name]: detective,
  [personalityDescriptions.guardian.name]: guardian,
  [personalityDescriptions.cleanupCommander.name]: cleaner,
  [personalityDescriptions.flash.name]: flash,
  [personalityDescriptions.explorer.name]: explorer,
  [personalityDescriptions.automator.name]: automator,
};
