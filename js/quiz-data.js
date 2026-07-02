/* Wedding Career Profiler — question bank, scoring weights, archetype content.
   Pure data, no logic. See js/quiz.js for the engine that consumes this. */

var QUIZ_ARCHETYPES = {
  planner: {
    name: 'Luxury Wedding Planner',
    headline: "You're a Natural Leader",
    description: "You thrive on taking charge — coordinating people, timelines, and vision into one seamless celebration. Clients trust you to hold the whole picture in your head while staying warm under pressure.",
    skills: ['Advanced client consultation', 'Vendor contract negotiation', 'Budget architecture for luxury weddings'],
    path: "IIWM's Luxury Wedding Planning & Management track"
  },
  designer: {
    name: 'Wedding Designer',
    headline: "You're a Visionary Creator",
    description: "You see weddings as immersive design stories — colour, texture, and atmosphere are your language. You'd rather sketch a concept than follow a template.",
    skills: ['Concept boarding & styling', 'Colour theory for events', 'Set & décor production'],
    path: "IIWM's Wedding Design & Styling specialization"
  },
  florist: {
    name: 'Floral Designer',
    headline: "You're an Artist of Nature",
    description: "Flowers are your medium. You have an instinct for colour, texture and composition, and you find focus in detailed, hands-on creative work.",
    skills: ['Floral composition & structure', 'Seasonal sourcing', 'Large-scale installation design'],
    path: "IIWM's Floral & Décor Artistry module"
  },
  destination: {
    name: 'Destination Wedding Specialist',
    headline: "You're Made for the World Stage",
    description: "You light up at the idea of producing celebrations in new places — juggling logistics across cities, cultures and time zones excites rather than exhausts you.",
    skills: ['Cross-border vendor logistics', 'Travel & hospitality coordination', 'Multi-day event production'],
    path: "IIWM's Destination Wedding Operations track"
  },
  production: {
    name: 'Wedding Production Manager',
    headline: "You're the Calm in the Storm",
    description: "When everything is happening at once, you're at your best. You think on your feet, manage crises quietly, and keep an event running exactly on time.",
    skills: ['Run-of-show & timeline mastery', 'On-site crisis management', 'Team & crew coordination'],
    path: "IIWM's Event Production & Operations track"
  },
  guest: {
    name: 'Guest Experience Manager',
    headline: "You're a Natural Host",
    description: "You read a room instinctively and care deeply about how people feel. Hospitality isn't a task for you — it's an instinct.",
    skills: ['Guest journey design', 'Hospitality service standards', 'On-ground guest management'],
    path: "IIWM's Hospitality & Guest Experience specialization"
  },
  vendor: {
    name: 'Vendor Relationship Manager',
    headline: "You're a Master Connector",
    description: "You build trust fast and negotiate fair. Vendors and partners remember you — and that network becomes your biggest asset.",
    skills: ['Vendor sourcing & vetting', 'Contract negotiation', 'Long-term partnership management'],
    path: "IIWM's Vendor & Partnership Management module"
  },
  entertainment: {
    name: 'Entertainment Curator',
    headline: 'You Set the Energy',
    description: "You understand pacing, mood and performance. You know exactly when a room needs the music to swell — or quiet down.",
    skills: ['Entertainment programming', 'Talent sourcing & booking', 'Live show coordination'],
    path: "IIWM's Entertainment & Experience Design module"
  },
  logistics: {
    name: 'Wedding Logistics Manager',
    headline: "You're the Master Planner",
    description: "Spreadsheets, timelines, checklists — you find calm in structure, and you're the reason nothing falls through the cracks.",
    skills: ['Timeline & critical-path planning', 'Resource & inventory management', 'Process systems for events'],
    path: "IIWM's Wedding Logistics & Planning Systems track"
  },
  branding: {
    name: 'Invitation & Wedding Branding Designer',
    headline: "You're a Storyteller in Detail",
    description: "You think in visual identity — fonts, palettes, papers, and motifs that turn a wedding into a cohesive brand experience.",
    skills: ['Wedding branding & identity design', 'Print & digital invitation design', 'Social-media visual storytelling'],
    path: "IIWM's Wedding Branding & Visual Design module"
  },
  operations: {
    name: 'Operations Manager',
    headline: "You're the Architect Behind the Scenes",
    description: "Budgets, contracts, systems — you build the invisible structure that lets everyone else's creativity actually happen.",
    skills: ['Budget architecture & forecasting', 'Operational systems design', 'Vendor contract management'],
    path: "IIWM's Wedding Business Operations track"
  },
  consultant: {
    name: 'Wedding Consultant',
    headline: "You're a Trusted Confidant",
    description: "Couples come to you overwhelmed and leave reassured. You listen first, and your calm, empathetic guidance shapes the entire experience.",
    skills: ['Client psychology & consultation', 'Empathetic communication', 'Advisory-led planning'],
    path: "IIWM's Wedding Consultancy & Client Relations module"
  }
};

/* Question types:
   - "single": pick exactly one option. Each option carries archetypeWeights.
   - "slider": 1–5 rating. archetypeWeights are the weight AT value 5 (contribution scales linearly).
   - "multi":  pick exactly `pick` options. Each option carries archetypeWeights.
*/
var QUIZ_QUESTIONS = [
  // ---- A. Personality ----
  { id: 'a1', section: 'Personality', type: 'single',
    text: 'Do you enjoy leading and directing people?',
    options: [
      { label: 'Yes', why: 'Natural Leadership', archetypeWeights: { planner: 4, production: 3, operations: 2 } },
      { label: 'Somewhat', why: 'Situational Leadership', archetypeWeights: { planner: 2, production: 1, consultant: 1 } },
      { label: 'Not really', why: 'Supportive Role Preference', archetypeWeights: { florist: 2, branding: 2, consultant: 1 } }
    ] },
  { id: 'a2', section: 'Personality', type: 'single',
    text: 'Do you prefer following a structured plan or creating something new?',
    options: [
      { label: 'Follow a structured plan', why: 'Structured Thinking', archetypeWeights: { logistics: 4, operations: 3, production: 2 } },
      { label: 'Create something new', why: 'Creative Thinking', archetypeWeights: { designer: 4, florist: 3, branding: 3 } },
      { label: 'A bit of both', why: 'Balanced Approach', archetypeWeights: { planner: 3, production: 2, consultant: 1 } }
    ] },
  { id: 'a3', section: 'Personality', type: 'single',
    text: 'How do you handle pressure?',
    options: [
      { label: 'Stay calm', why: 'Composure Under Pressure', archetypeWeights: { consultant: 3, guest: 3, florist: 1 } },
      { label: 'Get focused and driven', why: 'Drive Under Pressure', archetypeWeights: { production: 4, planner: 3, logistics: 2 } },
      { label: 'Get overwhelmed', why: 'Sensitivity to Pressure', archetypeWeights: { branding: 2, florist: 2 } }
    ] },
  { id: 'a4', section: 'Personality', type: 'single',
    text: 'Do you enjoy meeting and talking to new people daily?',
    options: [
      { label: 'Love it', why: 'Social Energy', archetypeWeights: { guest: 4, vendor: 3, planner: 2 } },
      { label: "It's fine", why: 'Social Comfort', archetypeWeights: { consultant: 2, planner: 1, vendor: 1 } },
      { label: 'Prefer smaller groups', why: 'Focused, Low-Key Work', archetypeWeights: { florist: 3, branding: 3, logistics: 1 } }
    ] },
  { id: 'a5', section: 'Personality', type: 'single',
    text: 'Are you naturally detail-oriented?',
    options: [
      { label: 'Very', why: 'Detail Orientation', archetypeWeights: { logistics: 4, operations: 4, production: 2 } },
      { label: 'Somewhat', why: 'Balanced Focus', archetypeWeights: { planner: 2, vendor: 1, consultant: 1 } },
      { label: 'Big-picture person', why: 'Big-Picture Thinking', archetypeWeights: { planner: 3, designer: 3, destination: 2 } }
    ] },

  // ---- B. Interests (sliders) ----
  { id: 'b_flowers', section: 'Interests', type: 'slider', label: 'Flowers', text: 'How much do you enjoy working with flowers?', archetypeWeights: { florist: 4, designer: 2 } },
  { id: 'b_fashion', section: 'Interests', type: 'slider', label: 'Fashion', text: 'How much do you enjoy fashion?', archetypeWeights: { designer: 3, branding: 2 } },
  { id: 'b_travel', section: 'Interests', type: 'slider', label: 'Travel', text: 'How much do you enjoy traveling?', archetypeWeights: { destination: 4 } },
  { id: 'b_luxury', section: 'Interests', type: 'slider', label: 'Luxury', text: 'How drawn are you to luxury experiences?', archetypeWeights: { destination: 3, planner: 2, guest: 2 } },
  { id: 'b_design', section: 'Interests', type: 'slider', label: 'Design', text: 'How much do you enjoy design and aesthetics?', archetypeWeights: { designer: 4, branding: 3, florist: 2 } },
  { id: 'b_business', section: 'Interests', type: 'slider', label: 'Business', text: 'How much do you enjoy business and strategy?', archetypeWeights: { operations: 4, vendor: 3 } },
  { id: 'b_hospitality', section: 'Interests', type: 'slider', label: 'Hospitality', text: 'How much do you enjoy hospitality?', archetypeWeights: { guest: 4, consultant: 2 } },
  { id: 'b_events', section: 'Interests', type: 'slider', label: 'Events', text: 'How much do you enjoy events and celebrations?', archetypeWeights: { planner: 3, production: 3 } },
  { id: 'b_entertainment', section: 'Interests', type: 'slider', label: 'Entertainment', text: 'How much do you enjoy entertainment and performance?', archetypeWeights: { entertainment: 4 } },
  { id: 'b_food', section: 'Interests', type: 'slider', label: 'Food', text: 'How much do you enjoy food and culinary experiences?', archetypeWeights: { guest: 3, vendor: 2 } },
  { id: 'b_photography', section: 'Interests', type: 'slider', label: 'Photography', text: 'How much do you enjoy photography and visual storytelling?', archetypeWeights: { branding: 3, designer: 2 } },
  { id: 'b_socialmedia', section: 'Interests', type: 'slider', label: 'Social Media', text: 'How much do you enjoy social media and content creation?', archetypeWeights: { branding: 3, entertainment: 2 } },

  // ---- C. Natural Skills (sliders) ----
  { id: 'c_communication', section: 'Skills', type: 'slider', label: 'Communication', text: 'Rate your natural ability: Communication', archetypeWeights: { consultant: 3, guest: 3, planner: 2 } },
  { id: 'c_negotiation', section: 'Skills', type: 'slider', label: 'Negotiation', text: 'Rate your natural ability: Negotiation', archetypeWeights: { vendor: 4, operations: 2 } },
  { id: 'c_creativity', section: 'Skills', type: 'slider', label: 'Creativity', text: 'Rate your natural ability: Creativity', archetypeWeights: { designer: 4, florist: 3, branding: 2 } },
  { id: 'c_leadership', section: 'Skills', type: 'slider', label: 'Leadership', text: 'Rate your natural ability: Leadership', archetypeWeights: { planner: 4, production: 3 } },
  { id: 'c_organization', section: 'Skills', type: 'slider', label: 'Organization', text: 'Rate your natural ability: Organization', archetypeWeights: { logistics: 4, operations: 3, planner: 2 } },
  { id: 'c_budgeting', section: 'Skills', type: 'slider', label: 'Budgeting', text: 'Rate your natural ability: Budgeting', archetypeWeights: { operations: 4, vendor: 1 } },
  { id: 'c_planning', section: 'Skills', type: 'slider', label: 'Planning', text: 'Rate your natural ability: Planning', archetypeWeights: { logistics: 4, production: 3 } },
  { id: 'c_aesthetics', section: 'Skills', type: 'slider', label: 'Visual Aesthetics', text: 'Rate your natural ability: Visual Aesthetics', archetypeWeights: { designer: 4, florist: 3, branding: 3 } },
  { id: 'c_relationship', section: 'Skills', type: 'slider', label: 'Relationship Building', text: 'Rate your natural ability: Relationship Building', archetypeWeights: { vendor: 4, guest: 3, consultant: 3, destination: 1 } },
  { id: 'c_time', section: 'Skills', type: 'slider', label: 'Time Management', text: 'Rate your natural ability: Time Management', archetypeWeights: { logistics: 4, operations: 3 } },

  // ---- D. Preferred Work Environment (pick 2) ----
  { id: 'd_environment', section: 'Work Environment', type: 'multi', pick: 2,
    text: 'Which environments do you thrive in? Pick your top 2.',
    options: [
      { label: 'In meetings', why: 'Strategic Meetings', archetypeWeights: { operations: 3, vendor: 3 } },
      { label: 'On-site', why: 'On-Site Execution', archetypeWeights: { production: 4, logistics: 2 } },
      { label: 'Traveling', why: 'Love of Travel', archetypeWeights: { destination: 4 } },
      { label: 'Behind the scenes', why: 'Behind-the-Scenes Craft', archetypeWeights: { florist: 3, branding: 3, designer: 2 } },
      { label: 'With clients', why: 'Client-Facing Work', archetypeWeights: { consultant: 3, planner: 3, guest: 2 } },
      { label: 'With vendors', why: 'Vendor Relationships', archetypeWeights: { vendor: 4 } },
      { label: 'Designing', why: 'Design-Led Work', archetypeWeights: { designer: 4, branding: 3, florist: 2 } },
      { label: 'Managing teams', why: 'Team Leadership', archetypeWeights: { planner: 3, production: 3, operations: 2 } }
    ] },

  // ---- E. Decision-Making Style ----
  { id: 'e_decision', section: 'Decision-Making', type: 'single',
    text: 'When facing a problem, do you:',
    options: [
      { label: 'Take charge and decide', why: 'Decisiveness', archetypeWeights: { planner: 4, production: 3 } },
      { label: 'Brainstorm creative options', why: 'Creative Problem-Solving', archetypeWeights: { designer: 4, florist: 2, branding: 2 } },
      { label: 'Analyze data first', why: 'Analytical Thinking', archetypeWeights: { operations: 4, logistics: 3 } },
      { label: 'Get organized and plan', why: 'Structured Planning', archetypeWeights: { logistics: 4, operations: 3 } },
      { label: 'Support and defer to others', why: 'Supportive Guidance', archetypeWeights: { consultant: 4, guest: 2 } }
    ] },

  // ---- F. Stress Tolerance (sliders) ----
  { id: 'f_lastminute', section: 'Stress Tolerance', type: 'slider', label: 'Last-minute changes', text: 'How well do you handle last-minute changes?', archetypeWeights: { production: 4, logistics: 2 } },
  { id: 'f_longhours', section: 'Stress Tolerance', type: 'slider', label: 'Long hours', text: 'How well do you handle long hours?', archetypeWeights: { production: 3, planner: 2 } },
  { id: 'f_difficultclients', section: 'Stress Tolerance', type: 'slider', label: 'Difficult clients', text: 'How well do you handle difficult clients?', archetypeWeights: { consultant: 4, guest: 2 } },
  { id: 'f_deadlines', section: 'Stress Tolerance', type: 'slider', label: 'Tight deadlines', text: 'How well do you handle tight deadlines?', archetypeWeights: { logistics: 3, operations: 3 } },
  { id: 'f_crisis', section: 'Stress Tolerance', type: 'slider', label: 'Crisis situations', text: 'How well do you handle crisis situations?', archetypeWeights: { production: 4 } },

  // ---- G. Lifestyle Preference ----
  { id: 'g_location', section: 'Lifestyle', type: 'single',
    text: 'Fixed location or frequent travel?',
    options: [
      { label: 'Fixed location', why: 'Rootedness', archetypeWeights: { florist: 2, branding: 2, operations: 2 } },
      { label: 'Frequent travel', why: 'Love of Travel', archetypeWeights: { destination: 4 } },
      { label: 'A mix of both', why: 'Flexibility', archetypeWeights: { planner: 1, production: 1 } }
    ] },
  { id: 'g_hours', section: 'Lifestyle', type: 'single',
    text: 'Fixed hours or flexible/weekend work?',
    options: [
      { label: 'Fixed hours', why: 'Structured Schedule', archetypeWeights: { branding: 2, operations: 2 } },
      { label: 'Flexible / weekend work', why: 'Schedule Flexibility', archetypeWeights: { production: 3, planner: 2, logistics: 2 } },
      { label: 'A mix of both', why: 'Adaptability', archetypeWeights: { consultant: 1, vendor: 1 } }
    ] },
  { id: 'g_energy', section: 'Lifestyle', type: 'single',
    text: 'Do you prefer calm or high-energy environments?',
    options: [
      { label: 'Calm environments', why: 'Calm, Focused Work', archetypeWeights: { florist: 3, branding: 3 } },
      { label: 'High-energy environments', why: 'High-Energy Settings', archetypeWeights: { production: 3, guest: 2, entertainment: 2 } },
      { label: 'A mix of both', why: 'Balanced Pace', archetypeWeights: { planner: 1, consultant: 1 } }
    ] },

  // ---- H. Career Goals (pick 3) ----
  { id: 'h_goals', section: 'Career Goals', type: 'multi', pick: 3,
    text: 'What matters most to you in a career? Pick your top 3.',
    options: [
      { label: 'High income', why: 'Financial Ambition', archetypeWeights: { planner: 3, operations: 2, vendor: 2 } },
      { label: 'Creativity', why: 'Creative Drive', archetypeWeights: { designer: 3, florist: 2, branding: 2 } },
      { label: 'Entrepreneurship', why: 'Entrepreneurial Spirit', archetypeWeights: { planner: 2, operations: 2 } },
      { label: 'International travel', why: 'Love of Travel', archetypeWeights: { destination: 4 } },
      { label: 'Luxury clientele', why: 'Affinity for Luxury', archetypeWeights: { planner: 3, destination: 2, guest: 2 } },
      { label: 'Stability', why: 'Preference for Stability', archetypeWeights: { operations: 3, logistics: 2 } },
      { label: 'Recognition', why: 'Drive for Recognition', archetypeWeights: { designer: 2, entertainment: 2, planner: 2 } }
    ] }
];
