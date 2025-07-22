const allQuestions = [
  {
    question: 'What should you do when you see a stop sign?',
    choices: ['Slow down', 'Yield', 'Come to a complete stop', 'Speed up if no one is around'],
    answer: 'Come to a complete stop',
    reference: 'https://dor.mo.gov/forms/Driver%20Guide.pdf#page=40'
  },
  {
    question: 'When should you use your low-beam headlights?',
    choices: ['Only at night', 'In fog, rain, or snow', 'When parked', 'Never'],
    answer: 'In fog, rain, or snow',
    reference: 'https://dor.mo.gov/forms/Driver%20Guide.pdf#page=61'
  },
  {
    question: 'What should you do when you see a stop sign?',
    choices: ['Slow down', 'Yield', 'Come to a complete stop', 'Speed up if no one is around'],
    answer: 'Come to a complete stop',
    reference: 'https://dor.mo.gov/forms/Driver%20Guide.pdf#page=40'
  },
  {
    question: 'When should you use your low-beam headlights?',
    choices: ['Only at night', 'In fog, rain, or snow', 'When parked', 'Never'],
    answer: 'In fog, rain, or snow',
    reference: 'https://dor.mo.gov/forms/Driver%20Guide.pdf#page=61'
  },
  {
    question: 'What should you do when you see a stop sign?',
    choices: ['Slow down', 'Yield', 'Come to a complete stop', 'Speed up if no one is around'],
    answer: 'Come to a complete stop',
    reference: 'https://dor.mo.gov/forms/Driver%20Guide.pdf#page=40'
  },
  {
    question: 'When should you use your low-beam headlights?',
    choices: ['Only at night', 'In fog, rain, or snow', 'When parked', 'Never'],
    answer: 'In fog, rain, or snow',
    reference: 'https://dor.mo.gov/forms/Driver%20Guide.pdf#page=61'
  },
  {
    question: 'What should you do when you see a stop sign?',
    choices: ['Slow down', 'Yield', 'Come to a complete stop', 'Speed up if no one is around'],
    answer: 'Come to a complete stop',
    reference: 'https://dor.mo.gov/forms/Driver%20Guide.pdf#page=40'
  },
  {
    question: 'When should you use your low-beam headlights?',
    choices: ['Only at night', 'In fog, rain, or snow', 'When parked', 'Never'],
    answer: 'In fog, rain, or snow',
    reference: 'https://dor.mo.gov/forms/Driver%20Guide.pdf#page=61'
  },
  {
    question: 'What should you do when you see a stop sign?',
    choices: ['Slow down', 'Yield', 'Come to a complete stop', 'Speed up if no one is around'],
    answer: 'Come to a complete stop',
    reference: 'https://dor.mo.gov/forms/Driver%20Guide.pdf#page=40'
  },
  {
    question: 'When should you use your low-beam headlights?',
    choices: ['Only at night', 'In fog, rain, or snow', 'When parked', 'Never'],
    answer: 'In fog, rain, or snow',
    reference: 'https://dor.mo.gov/forms/Driver%20Guide.pdf#page=61'
  },
  {
    question: 'What should you do when you see a stop sign?',
    choices: ['Slow down', 'Yield', 'Come to a complete stop', 'Speed up if no one is around'],
    answer: 'Come to a complete stop',
    reference: 'https://dor.mo.gov/forms/Driver%20Guide.pdf#page=40'
  },
  {
    question: 'When should you use your low-beam headlights?',
    choices: ['Only at night', 'In fog, rain, or snow', 'When parked', 'Never'],
    answer: 'In fog, rain, or snow',
    reference: 'https://dor.mo.gov/forms/Driver%20Guide.pdf#page=61'
  },
  {
    question: 'What should you do when you see a stop sign?',
    choices: ['Slow down', 'Yield', 'Come to a complete stop', 'Speed up if no one is around'],
    answer: 'Come to a complete stop',
    reference: 'https://dor.mo.gov/forms/Driver%20Guide.pdf#page=40'
  },
  {
    question: 'When should you use your low-beam headlights?',
    choices: ['Only at night', 'In fog, rain, or snow', 'When parked', 'Never'],
    answer: 'In fog, rain, or snow',
    reference: 'https://dor.mo.gov/forms/Driver%20Guide.pdf#page=61'
  },
  {
    question: 'What should you do when you see a stop sign?',
    choices: ['Slow down', 'Yield', 'Come to a complete stop', 'Speed up if no one is around'],
    answer: 'Come to a complete stop',
    reference: 'https://dor.mo.gov/forms/Driver%20Guide.pdf#page=40'
  },
  {
    question: 'When should you use your low-beam headlights?',
    choices: ['Only at night', 'In fog, rain, or snow', 'When parked', 'Never'],
    answer: 'In fog, rain, or snow',
    reference: 'https://dor.mo.gov/forms/Driver%20Guide.pdf#page=61'
  },
  {
    question: 'What should you do when you see a stop sign?',
    choices: ['Slow down', 'Yield', 'Come to a complete stop', 'Speed up if no one is around'],
    answer: 'Come to a complete stop',
    reference: 'https://dor.mo.gov/forms/Driver%20Guide.pdf#page=40'
  },
  {
    question: 'When should you use your low-beam headlights?',
    choices: ['Only at night', 'In fog, rain, or snow', 'When parked', 'Never'],
    answer: 'In fog, rain, or snow',
    reference: 'https://dor.mo.gov/forms/Driver%20Guide.pdf#page=61'
  },
  {
    question: 'What should you do when you see a stop sign?',
    choices: ['Slow down', 'Yield', 'Come to a complete stop', 'Speed up if no one is around'],
    answer: 'Come to a complete stop',
    reference: 'https://dor.mo.gov/forms/Driver%20Guide.pdf#page=40'
  },
  {
    question: 'When should you use your low-beam headlights?',
    choices: ['Only at night', 'In fog, rain, or snow', 'When parked', 'Never'],
    answer: 'In fog, rain, or snow',
    reference: 'https://dor.mo.gov/forms/Driver%20Guide.pdf#page=61'
  },
  {
    question: 'What should you do when you see a stop sign?',
    choices: ['Slow down', 'Yield', 'Come to a complete stop', 'Speed up if no one is around'],
    answer: 'Come to a complete stop',
    reference: 'https://dor.mo.gov/forms/Driver%20Guide.pdf#page=40'
  },
  {
    question: 'When should you use your low-beam headlights?',
    choices: ['Only at night', 'In fog, rain, or snow', 'When parked', 'Never'],
    answer: 'In fog, rain, or snow',
    reference: 'https://dor.mo.gov/forms/Driver%20Guide.pdf#page=61'
  },
  {
    question: 'What should you do when you see a stop sign?',
    choices: ['Slow down', 'Yield', 'Come to a complete stop', 'Speed up if no one is around'],
    answer: 'Come to a complete stop',
    reference: 'https://dor.mo.gov/forms/Driver%20Guide.pdf#page=40'
  },
  {
    question: 'When should you use your low-beam headlights?',
    choices: ['Only at night', 'In fog, rain, or snow', 'When parked', 'Never'],
    answer: 'In fog, rain, or snow',
    reference: 'https://dor.mo.gov/forms/Driver%20Guide.pdf#page=61'
  },
  {
    question: 'What should you do when you see a stop sign?',
    choices: ['Slow down', 'Yield', 'Come to a complete stop', 'Speed up if no one is around'],
    answer: 'Come to a complete stop',
    reference: 'https://dor.mo.gov/forms/Driver%20Guide.pdf#page=40'
  },
  {
    question: 'When should you use your low-beam headlights?',
    choices: ['Only at night', 'In fog, rain, or snow', 'When parked', 'Never'],
    answer: 'In fog, rain, or snow',
    reference: 'https://dor.mo.gov/forms/Driver%20Guide.pdf#page=61'
  },
  {
    question: 'What should you do when you see a stop sign?',
    choices: ['Slow down', 'Yield', 'Come to a complete stop', 'Speed up if no one is around'],
    answer: 'Come to a complete stop',
    reference: 'https://dor.mo.gov/forms/Driver%20Guide.pdf#page=40'
  },
  {
    question: 'When should you use your low-beam headlights?',
    choices: ['Only at night', 'In fog, rain, or snow', 'When parked', 'Never'],
    answer: 'In fog, rain, or snow',
    reference: 'https://dor.mo.gov/forms/Driver%20Guide.pdf#page=61'
  },
  {
    question: 'What should you do when you see a stop sign?',
    choices: ['Slow down', 'Yield', 'Come to a complete stop', 'Speed up if no one is around'],
    answer: 'Come to a complete stop',
    reference: 'https://dor.mo.gov/forms/Driver%20Guide.pdf#page=40'
  },
  {
    question: 'When should you use your low-beam headlights?',
    choices: ['Only at night', 'In fog, rain, or snow', 'When parked', 'Never'],
    answer: 'In fog, rain, or snow',
    reference: 'https://dor.mo.gov/forms/Driver%20Guide.pdf#page=61'
  },
  {
    question: 'What should you do when you see a stop sign?',
    choices: ['Slow down', 'Yield', 'Come to a complete stop', 'Speed up if no one is around'],
    answer: 'Come to a complete stop',
    reference: 'https://dor.mo.gov/forms/Driver%20Guide.pdf#page=40'
  },
  {
    question: 'When should you use your low-beam headlights?',
    choices: ['Only at night', 'In fog, rain, or snow', 'When parked', 'Never'],
    answer: 'In fog, rain, or snow',
    reference: 'https://dor.mo.gov/forms/Driver%20Guide.pdf#page=61'
  },
  {
    question: 'What should you do when you see a stop sign?',
    choices: ['Slow down', 'Yield', 'Come to a complete stop', 'Speed up if no one is around'],
    answer: 'Come to a complete stop',
    reference: 'https://dor.mo.gov/forms/Driver%20Guide.pdf#page=40'
  },
  {
    question: 'When should you use your low-beam headlights?',
    choices: ['Only at night', 'In fog, rain, or snow', 'When parked', 'Never'],
    answer: 'In fog, rain, or snow',
    reference: 'https://dor.mo.gov/forms/Driver%20Guide.pdf#page=61'
  },
  {
    question: 'What should you do when you see a stop sign?',
    choices: ['Slow down', 'Yield', 'Come to a complete stop', 'Speed up if no one is around'],
    answer: 'Come to a complete stop',
    reference: 'https://dor.mo.gov/forms/Driver%20Guide.pdf#page=40'
  },
  {
    question: 'When should you use your low-beam headlights?',
    choices: ['Only at night', 'In fog, rain, or snow', 'When parked', 'Never'],
    answer: 'In fog, rain, or snow',
    reference: 'https://dor.mo.gov/forms/Driver%20Guide.pdf#page=61'
  },
  {
    question: 'What should you do when you see a stop sign?',
    choices: ['Slow down', 'Yield', 'Come to a complete stop', 'Speed up if no one is around'],
    answer: 'Come to a complete stop',
    reference: 'https://dor.mo.gov/forms/Driver%20Guide.pdf#page=40'
  },
  {
    question: 'When should you use your low-beam headlights?',
    choices: ['Only at night', 'In fog, rain, or snow', 'When parked', 'Never'],
    answer: 'In fog, rain, or snow',
    reference: 'https://dor.mo.gov/forms/Driver%20Guide.pdf#page=61'
  },
  {
    question: 'What should you do when you see a stop sign?',
    choices: ['Slow down', 'Yield', 'Come to a complete stop', 'Speed up if no one is around'],
    answer: 'Come to a complete stop',
    reference: 'https://dor.mo.gov/forms/Driver%20Guide.pdf#page=40'
  },
  {
    question: 'When should you use your low-beam headlights?',
    choices: ['Only at night', 'In fog, rain, or snow', 'When parked', 'Never'],
    answer: 'In fog, rain, or snow',
    reference: 'https://dor.mo.gov/forms/Driver%20Guide.pdf#page=61'
  },
  {
    question: 'What should you do when you see a stop sign?',
    choices: ['Slow down', 'Yield', 'Come to a complete stop', 'Speed up if no one is around'],
    answer: 'Come to a complete stop',
    reference: 'https://dor.mo.gov/forms/Driver%20Guide.pdf#page=40'
  },
  {
    question: 'When should you use your low-beam headlights?',
    choices: ['Only at night', 'In fog, rain, or snow', 'When parked', 'Never'],
    answer: 'In fog, rain, or snow',
    reference: 'https://dor.mo.gov/forms/Driver%20Guide.pdf#page=61'
  },
  {
    question: 'What should you do when you see a stop sign?',
    choices: ['Slow down', 'Yield', 'Come to a complete stop', 'Speed up if no one is around'],
    answer: 'Come to a complete stop',
    reference: 'https://dor.mo.gov/forms/Driver%20Guide.pdf#page=40'
  },
  {
    question: 'When should you use your low-beam headlights?',
    choices: ['Only at night', 'In fog, rain, or snow', 'When parked', 'Never'],
    answer: 'In fog, rain, or snow',
    reference: 'https://dor.mo.gov/forms/Driver%20Guide.pdf#page=61'
  },
  {
    question: 'What should you do when you see a stop sign?',
    choices: ['Slow down', 'Yield', 'Come to a complete stop', 'Speed up if no one is around'],
    answer: 'Come to a complete stop',
    reference: 'https://dor.mo.gov/forms/Driver%20Guide.pdf#page=40'
  },
  {
    question: 'When should you use your low-beam headlights?',
    choices: ['Only at night', 'In fog, rain, or snow', 'When parked', 'Never'],
    answer: 'In fog, rain, or snow',
    reference: 'https://dor.mo.gov/forms/Driver%20Guide.pdf#page=61'
  },
  {
    question: 'What should you do when you see a stop sign?',
    choices: ['Slow down', 'Yield', 'Come to a complete stop', 'Speed up if no one is around'],
    answer: 'Come to a complete stop',
    reference: 'https://dor.mo.gov/forms/Driver%20Guide.pdf#page=40'
  },
  {
    question: 'When should you use your low-beam headlights?',
    choices: ['Only at night', 'In fog, rain, or snow', 'When parked', 'Never'],
    answer: 'In fog, rain, or snow',
    reference: 'https://dor.mo.gov/forms/Driver%20Guide.pdf#page=61'
  },
  {
    question: 'What should you do when you see a stop sign?',
    choices: ['Slow down', 'Yield', 'Come to a complete stop', 'Speed up if no one is around'],
    answer: 'Come to a complete stop',
    reference: 'https://dor.mo.gov/forms/Driver%20Guide.pdf#page=40'
  },
  {
    question: 'When should you use your low-beam headlights?',
    choices: ['Only at night', 'In fog, rain, or snow', 'When parked', 'Never'],
    answer: 'In fog, rain, or snow',
    reference: 'https://dor.mo.gov/forms/Driver%20Guide.pdf#page=61'
  },
  {
    question: 'What should you do when you see a stop sign?',
    choices: ['Slow down', 'Yield', 'Come to a complete stop', 'Speed up if no one is around'],
    answer: 'Come to a complete stop',
    reference: 'https://dor.mo.gov/forms/Driver%20Guide.pdf#page=40'
  },
  {
    question: 'When should you use your low-beam headlights?',
    choices: ['Only at night', 'In fog, rain, or snow', 'When parked', 'Never'],
    answer: 'In fog, rain, or snow',
    reference: 'https://dor.mo.gov/forms/Driver%20Guide.pdf#page=61'
  },
  {
    question: 'What should you do when you see a stop sign?',
    choices: ['Slow down', 'Yield', 'Come to a complete stop', 'Speed up if no one is around'],
    answer: 'Come to a complete stop',
    reference: 'https://dor.mo.gov/forms/Driver%20Guide.pdf#page=40'
  },
  {
    question: 'When should you use your low-beam headlights?',
    choices: ['Only at night', 'In fog, rain, or snow', 'When parked', 'Never'],
    answer: 'In fog, rain, or snow',
    reference: 'https://dor.mo.gov/forms/Driver%20Guide.pdf#page=61'
  },
  {
    question: 'What should you do when you see a stop sign?',
    choices: ['Slow down', 'Yield', 'Come to a complete stop', 'Speed up if no one is around'],
    answer: 'Come to a complete stop',
    reference: 'https://dor.mo.gov/forms/Driver%20Guide.pdf#page=40'
  },
  {
    question: 'When should you use your low-beam headlights?',
    choices: ['Only at night', 'In fog, rain, or snow', 'When parked', 'Never'],
    answer: 'In fog, rain, or snow',
    reference: 'https://dor.mo.gov/forms/Driver%20Guide.pdf#page=61'
  },
  {
    question: 'What should you do when you see a stop sign?',
    choices: ['Slow down', 'Yield', 'Come to a complete stop', 'Speed up if no one is around'],
    answer: 'Come to a complete stop',
    reference: 'https://dor.mo.gov/forms/Driver%20Guide.pdf#page=40'
  },
  {
    question: 'When should you use your low-beam headlights?',
    choices: ['Only at night', 'In fog, rain, or snow', 'When parked', 'Never'],
    answer: 'In fog, rain, or snow',
    reference: 'https://dor.mo.gov/forms/Driver%20Guide.pdf#page=61'
  },
  {
    question: 'What should you do when you see a stop sign?',
    choices: ['Slow down', 'Yield', 'Come to a complete stop', 'Speed up if no one is around'],
    answer: 'Come to a complete stop',
    reference: 'https://dor.mo.gov/forms/Driver%20Guide.pdf#page=40'
  },
  {
    question: 'When should you use your low-beam headlights?',
    choices: ['Only at night', 'In fog, rain, or snow', 'When parked', 'Never'],
    answer: 'In fog, rain, or snow',
    reference: 'https://dor.mo.gov/forms/Driver%20Guide.pdf#page=61'
  },
  {
    question: 'What should you do when you see a stop sign?',
    choices: ['Slow down', 'Yield', 'Come to a complete stop', 'Speed up if no one is around'],
    answer: 'Come to a complete stop',
    reference: 'https://dor.mo.gov/forms/Driver%20Guide.pdf#page=40'
  },
  {
    question: 'When should you use your low-beam headlights?',
    choices: ['Only at night', 'In fog, rain, or snow', 'When parked', 'Never'],
    answer: 'In fog, rain, or snow',
    reference: 'https://dor.mo.gov/forms/Driver%20Guide.pdf#page=61'
  },
  {
    question: 'What should you do when you see a stop sign?',
    choices: ['Slow down', 'Yield', 'Come to a complete stop', 'Speed up if no one is around'],
    answer: 'Come to a complete stop',
    reference: 'https://dor.mo.gov/forms/Driver%20Guide.pdf#page=40'
  },
  {
    question: 'When should you use your low-beam headlights?',
    choices: ['Only at night', 'In fog, rain, or snow', 'When parked', 'Never'],
    answer: 'In fog, rain, or snow',
    reference: 'https://dor.mo.gov/forms/Driver%20Guide.pdf#page=61'
  },
  {
    question: 'What should you do when you see a stop sign?',
    choices: ['Slow down', 'Yield', 'Come to a complete stop', 'Speed up if no one is around'],
    answer: 'Come to a complete stop',
    reference: 'https://dor.mo.gov/forms/Driver%20Guide.pdf#page=40'
  },
  {
    question: 'When should you use your low-beam headlights?',
    choices: ['Only at night', 'In fog, rain, or snow', 'When parked', 'Never'],
    answer: 'In fog, rain, or snow',
    reference: 'https://dor.mo.gov/forms/Driver%20Guide.pdf#page=61'
  },
  {
    question: 'What should you do when you see a stop sign?',
    choices: ['Slow down', 'Yield', 'Come to a complete stop', 'Speed up if no one is around'],
    answer: 'Come to a complete stop',
    reference: 'https://dor.mo.gov/forms/Driver%20Guide.pdf#page=40'
  },
  {
    question: 'When should you use your low-beam headlights?',
    choices: ['Only at night', 'In fog, rain, or snow', 'When parked', 'Never'],
    answer: 'In fog, rain, or snow',
    reference: 'https://dor.mo.gov/forms/Driver%20Guide.pdf#page=61'
  },
  {
    question: 'What should you do when you see a stop sign?',
    choices: ['Slow down', 'Yield', 'Come to a complete stop', 'Speed up if no one is around'],
    answer: 'Come to a complete stop',
    reference: 'https://dor.mo.gov/forms/Driver%20Guide.pdf#page=40'
  },
  {
    question: 'When should you use your low-beam headlights?',
    choices: ['Only at night', 'In fog, rain, or snow', 'When parked', 'Never'],
    answer: 'In fog, rain, or snow',
    reference: 'https://dor.mo.gov/forms/Driver%20Guide.pdf#page=61'
  },
  {
    question: 'What should you do when you see a stop sign?',
    choices: ['Slow down', 'Yield', 'Come to a complete stop', 'Speed up if no one is around'],
    answer: 'Come to a complete stop',
    reference: 'https://dor.mo.gov/forms/Driver%20Guide.pdf#page=40'
  },
  {
    question: 'When should you use your low-beam headlights?',
    choices: ['Only at night', 'In fog, rain, or snow', 'When parked', 'Never'],
    answer: 'In fog, rain, or snow',
    reference: 'https://dor.mo.gov/forms/Driver%20Guide.pdf#page=61'
  },
  {
    question: 'What should you do when you see a stop sign?',
    choices: ['Slow down', 'Yield', 'Come to a complete stop', 'Speed up if no one is around'],
    answer: 'Come to a complete stop',
    reference: 'https://dor.mo.gov/forms/Driver%20Guide.pdf#page=40'
  },
  {
    question: 'When should you use your low-beam headlights?',
    choices: ['Only at night', 'In fog, rain, or snow', 'When parked', 'Never'],
    answer: 'In fog, rain, or snow',
    reference: 'https://dor.mo.gov/forms/Driver%20Guide.pdf#page=61'
  },
  {
    question: 'What should you do when you see a stop sign?',
    choices: ['Slow down', 'Yield', 'Come to a complete stop', 'Speed up if no one is around'],
    answer: 'Come to a complete stop',
    reference: 'https://dor.mo.gov/forms/Driver%20Guide.pdf#page=40'
  },
  {
    question: 'When should you use your low-beam headlights?',
    choices: ['Only at night', 'In fog, rain, or snow', 'When parked', 'Never'],
    answer: 'In fog, rain, or snow',
    reference: 'https://dor.mo.gov/forms/Driver%20Guide.pdf#page=61'
  },
  {
    question: 'What should you do when you see a stop sign?',
    choices: ['Slow down', 'Yield', 'Come to a complete stop', 'Speed up if no one is around'],
    answer: 'Come to a complete stop',
    reference: 'https://dor.mo.gov/forms/Driver%20Guide.pdf#page=40'
  },
  {
    question: 'When should you use your low-beam headlights?',
    choices: ['Only at night', 'In fog, rain, or snow', 'When parked', 'Never'],
    answer: 'In fog, rain, or snow',
    reference: 'https://dor.mo.gov/forms/Driver%20Guide.pdf#page=61'
  },
  {
    question: 'What should you do when you see a stop sign?',
    choices: ['Slow down', 'Yield', 'Come to a complete stop', 'Speed up if no one is around'],
    answer: 'Come to a complete stop',
    reference: 'https://dor.mo.gov/forms/Driver%20Guide.pdf#page=40'
  },
  {
    question: 'When should you use your low-beam headlights?',
    choices: ['Only at night', 'In fog, rain, or snow', 'When parked', 'Never'],
    answer: 'In fog, rain, or snow',
    reference: 'https://dor.mo.gov/forms/Driver%20Guide.pdf#page=61'
  },
  {
    question: 'What should you do when you see a stop sign?',
    choices: ['Slow down', 'Yield', 'Come to a complete stop', 'Speed up if no one is around'],
    answer: 'Come to a complete stop',
    reference: 'https://dor.mo.gov/forms/Driver%20Guide.pdf#page=40'
  },
  {
    question: 'When should you use your low-beam headlights?',
    choices: ['Only at night', 'In fog, rain, or snow', 'When parked', 'Never'],
    answer: 'In fog, rain, or snow',
    reference: 'https://dor.mo.gov/forms/Driver%20Guide.pdf#page=61'
  },
  {
    question: 'What should you do when you see a stop sign?',
    choices: ['Slow down', 'Yield', 'Come to a complete stop', 'Speed up if no one is around'],
    answer: 'Come to a complete stop',
    reference: 'https://dor.mo.gov/forms/Driver%20Guide.pdf#page=40'
  },
  {
    question: 'When should you use your low-beam headlights?',
    choices: ['Only at night', 'In fog, rain, or snow', 'When parked', 'Never'],
    answer: 'In fog, rain, or snow',
    reference: 'https://dor.mo.gov/forms/Driver%20Guide.pdf#page=61'
  },
  {
    question: 'What should you do when you see a stop sign?',
    choices: ['Slow down', 'Yield', 'Come to a complete stop', 'Speed up if no one is around'],
    answer: 'Come to a complete stop',
    reference: 'https://dor.mo.gov/forms/Driver%20Guide.pdf#page=40'
  },
  {
    question: 'When should you use your low-beam headlights?',
    choices: ['Only at night', 'In fog, rain, or snow', 'When parked', 'Never'],
    answer: 'In fog, rain, or snow',
    reference: 'https://dor.mo.gov/forms/Driver%20Guide.pdf#page=61'
  },
  {
    question: 'What should you do when you see a stop sign?',
    choices: ['Slow down', 'Yield', 'Come to a complete stop', 'Speed up if no one is around'],
    answer: 'Come to a complete stop',
    reference: 'https://dor.mo.gov/forms/Driver%20Guide.pdf#page=40'
  },
  {
    question: 'When should you use your low-beam headlights?',
    choices: ['Only at night', 'In fog, rain, or snow', 'When parked', 'Never'],
    answer: 'In fog, rain, or snow',
    reference: 'https://dor.mo.gov/forms/Driver%20Guide.pdf#page=61'
  },
  {
    question: 'What should you do when you see a stop sign?',
    choices: ['Slow down', 'Yield', 'Come to a complete stop', 'Speed up if no one is around'],
    answer: 'Come to a complete stop',
    reference: 'https://dor.mo.gov/forms/Driver%20Guide.pdf#page=40'
  },
  {
    question: 'When should you use your low-beam headlights?',
    choices: ['Only at night', 'In fog, rain, or snow', 'When parked', 'Never'],
    answer: 'In fog, rain, or snow',
    reference: 'https://dor.mo.gov/forms/Driver%20Guide.pdf#page=61'
  },
  {
    question: 'What should you do when you see a stop sign?',
    choices: ['Slow down', 'Yield', 'Come to a complete stop', 'Speed up if no one is around'],
    answer: 'Come to a complete stop',
    reference: 'https://dor.mo.gov/forms/Driver%20Guide.pdf#page=40'
  },
  {
    question: 'When should you use your low-beam headlights?',
    choices: ['Only at night', 'In fog, rain, or snow', 'When parked', 'Never'],
    answer: 'In fog, rain, or snow',
    reference: 'https://dor.mo.gov/forms/Driver%20Guide.pdf#page=61'
  },
  {
    question: 'What should you do when you see a stop sign?',
    choices: ['Slow down', 'Yield', 'Come to a complete stop', 'Speed up if no one is around'],
    answer: 'Come to a complete stop',
    reference: 'https://dor.mo.gov/forms/Driver%20Guide.pdf#page=40'
  },
  {
    question: 'When should you use your low-beam headlights?',
    choices: ['Only at night', 'In fog, rain, or snow', 'When parked', 'Never'],
    answer: 'In fog, rain, or snow',
    reference: 'https://dor.mo.gov/forms/Driver%20Guide.pdf#page=61'
  },
  {
    question: 'What should you do when you see a stop sign?',
    choices: ['Slow down', 'Yield', 'Come to a complete stop', 'Speed up if no one is around'],
    answer: 'Come to a complete stop',
    reference: 'https://dor.mo.gov/forms/Driver%20Guide.pdf#page=40'
  },
  {
    question: 'When should you use your low-beam headlights?',
    choices: ['Only at night', 'In fog, rain, or snow', 'When parked', 'Never'],
    answer: 'In fog, rain, or snow',
    reference: 'https://dor.mo.gov/forms/Driver%20Guide.pdf#page=61'
  },
  {
    question: 'What should you do when you see a stop sign?',
    choices: ['Slow down', 'Yield', 'Come to a complete stop', 'Speed up if no one is around'],
    answer: 'Come to a complete stop',
    reference: 'https://dor.mo.gov/forms/Driver%20Guide.pdf#page=40'
  },
  {
    question: 'When should you use your low-beam headlights?',
    choices: ['Only at night', 'In fog, rain, or snow', 'When parked', 'Never'],
    answer: 'In fog, rain, or snow',
    reference: 'https://dor.mo.gov/forms/Driver%20Guide.pdf#page=61'
  },
  {
    question: 'What should you do when you see a stop sign?',
    choices: ['Slow down', 'Yield', 'Come to a complete stop', 'Speed up if no one is around'],
    answer: 'Come to a complete stop',
    reference: 'https://dor.mo.gov/forms/Driver%20Guide.pdf#page=40'
  },
  {
    question: 'When should you use your low-beam headlights?',
    choices: ['Only at night', 'In fog, rain, or snow', 'When parked', 'Never'],
    answer: 'In fog, rain, or snow',
    reference: 'https://dor.mo.gov/forms/Driver%20Guide.pdf#page=61'
  },
  {
    question: 'What should you do when you see a stop sign?',
    choices: ['Slow down', 'Yield', 'Come to a complete stop', 'Speed up if no one is around'],
    answer: 'Come to a complete stop',
    reference: 'https://dor.mo.gov/forms/Driver%20Guide.pdf#page=40'
  },
  {
    question: 'When should you use your low-beam headlights?',
    choices: ['Only at night', 'In fog, rain, or snow', 'When parked', 'Never'],
    answer: 'In fog, rain, or snow',
    reference: 'https://dor.mo.gov/forms/Driver%20Guide.pdf#page=61'
  },
  {
    question: 'What should you do when you see a stop sign?',
    choices: ['Slow down', 'Yield', 'Come to a complete stop', 'Speed up if no one is around'],
    answer: 'Come to a complete stop',
    reference: 'https://dor.mo.gov/forms/Driver%20Guide.pdf#page=40'
  },
  {
    question: 'When should you use your low-beam headlights?',
    choices: ['Only at night', 'In fog, rain, or snow', 'When parked', 'Never'],
    answer: 'In fog, rain, or snow',
    reference: 'https://dor.mo.gov/forms/Driver%20Guide.pdf#page=61'
  },
  {
    question: 'What should you do when you see a stop sign?',
    choices: ['Slow down', 'Yield', 'Come to a complete stop', 'Speed up if no one is around'],
    answer: 'Come to a complete stop',
    reference: 'https://dor.mo.gov/forms/Driver%20Guide.pdf#page=40'
  },
  {
    question: 'When should you use your low-beam headlights?',
    choices: ['Only at night', 'In fog, rain, or snow', 'When parked', 'Never'],
    answer: 'In fog, rain, or snow',
    reference: 'https://dor.mo.gov/forms/Driver%20Guide.pdf#page=61'
  },
  {
    question: 'What should you do when you see a stop sign?',
    choices: ['Slow down', 'Yield', 'Come to a complete stop', 'Speed up if no one is around'],
    answer: 'Come to a complete stop',
    reference: 'https://dor.mo.gov/forms/Driver%20Guide.pdf#page=40'
  },
  {
    question: 'When should you use your low-beam headlights?',
    choices: ['Only at night', 'In fog, rain, or snow', 'When parked', 'Never'],
    answer: 'In fog, rain, or snow',
    reference: 'https://dor.mo.gov/forms/Driver%20Guide.pdf#page=61'
  },
  {
    question: 'What should you do when you see a stop sign?',
    choices: ['Slow down', 'Yield', 'Come to a complete stop', 'Speed up if no one is around'],
    answer: 'Come to a complete stop',
    reference: 'https://dor.mo.gov/forms/Driver%20Guide.pdf#page=40'
  },
  {
    question: 'When should you use your low-beam headlights?',
    choices: ['Only at night', 'In fog, rain, or snow', 'When parked', 'Never'],
    answer: 'In fog, rain, or snow',
    reference: 'https://dor.mo.gov/forms/Driver%20Guide.pdf#page=61'
  },
  {
    question: 'What should you do when you see a stop sign?',
    choices: ['Slow down', 'Yield', 'Come to a complete stop', 'Speed up if no one is around'],
    answer: 'Come to a complete stop',
    reference: 'https://dor.mo.gov/forms/Driver%20Guide.pdf#page=40'
  },
  {
    question: 'When should you use your low-beam headlights?',
    choices: ['Only at night', 'In fog, rain, or snow', 'When parked', 'Never'],
    answer: 'In fog, rain, or snow',
    reference: 'https://dor.mo.gov/forms/Driver%20Guide.pdf#page=61'
  },
  {
    question: 'What should you do when you see a stop sign?',
    choices: ['Slow down', 'Yield', 'Come to a complete stop', 'Speed up if no one is around'],
    answer: 'Come to a complete stop',
    reference: 'https://dor.mo.gov/forms/Driver%20Guide.pdf#page=40'
  },
  {
    question: 'When should you use your low-beam headlights?',
    choices: ['Only at night', 'In fog, rain, or snow', 'When parked', 'Never'],
    answer: 'In fog, rain, or snow',
    reference: 'https://dor.mo.gov/forms/Driver%20Guide.pdf#page=61'
  },
  {
    question: 'What should you do when you see a stop sign?',
    choices: ['Slow down', 'Yield', 'Come to a complete stop', 'Speed up if no one is around'],
    answer: 'Come to a complete stop',
    reference: 'https://dor.mo.gov/forms/Driver%20Guide.pdf#page=40'
  },
  {
    question: 'When should you use your low-beam headlights?',
    choices: ['Only at night', 'In fog, rain, or snow', 'When parked', 'Never'],
    answer: 'In fog, rain, or snow',
    reference: 'https://dor.mo.gov/forms/Driver%20Guide.pdf#page=61'
  },
  {
    question: 'What should you do when you see a stop sign?',
    choices: ['Slow down', 'Yield', 'Come to a complete stop', 'Speed up if no one is around'],
    answer: 'Come to a complete stop',
    reference: 'https://dor.mo.gov/forms/Driver%20Guide.pdf#page=40'
  },
  {
    question: 'When should you use your low-beam headlights?',
    choices: ['Only at night', 'In fog, rain, or snow', 'When parked', 'Never'],
    answer: 'In fog, rain, or snow',
    reference: 'https://dor.mo.gov/forms/Driver%20Guide.pdf#page=61'
  },
  {
    question: 'What should you do when you see a stop sign?',
    choices: ['Slow down', 'Yield', 'Come to a complete stop', 'Speed up if no one is around'],
    answer: 'Come to a complete stop',
    reference: 'https://dor.mo.gov/forms/Driver%20Guide.pdf#page=40'
  },
  {
    question: 'When should you use your low-beam headlights?',
    choices: ['Only at night', 'In fog, rain, or snow', 'When parked', 'Never'],
    answer: 'In fog, rain, or snow',
    reference: 'https://dor.mo.gov/forms/Driver%20Guide.pdf#page=61'
  },
  {
    question: 'What should you do when you see a stop sign?',
    choices: ['Slow down', 'Yield', 'Come to a complete stop', 'Speed up if no one is around'],
    answer: 'Come to a complete stop',
    reference: 'https://dor.mo.gov/forms/Driver%20Guide.pdf#page=40'
  },
  {
    question: 'When should you use your low-beam headlights?',
    choices: ['Only at night', 'In fog, rain, or snow', 'When parked', 'Never'],
    answer: 'In fog, rain, or snow',
    reference: 'https://dor.mo.gov/forms/Driver%20Guide.pdf#page=61'
  },
  {
    question: 'What should you do when you see a stop sign?',
    choices: ['Slow down', 'Yield', 'Come to a complete stop', 'Speed up if no one is around'],
    answer: 'Come to a complete stop',
    reference: 'https://dor.mo.gov/forms/Driver%20Guide.pdf#page=40'
  },
  {
    question: 'When should you use your low-beam headlights?',
    choices: ['Only at night', 'In fog, rain, or snow', 'When parked', 'Never'],
    answer: 'In fog, rain, or snow',
    reference: 'https://dor.mo.gov/forms/Driver%20Guide.pdf#page=61'
  },
  {
    question: 'What should you do when you see a stop sign?',
    choices: ['Slow down', 'Yield', 'Come to a complete stop', 'Speed up if no one is around'],
    answer: 'Come to a complete stop',
    reference: 'https://dor.mo.gov/forms/Driver%20Guide.pdf#page=40'
  },
  {
    question: 'When should you use your low-beam headlights?',
    choices: ['Only at night', 'In fog, rain, or snow', 'When parked', 'Never'],
    answer: 'In fog, rain, or snow',
    reference: 'https://dor.mo.gov/forms/Driver%20Guide.pdf#page=61'
  },
  {
    question: 'What should you do when you see a stop sign?',
    choices: ['Slow down', 'Yield', 'Come to a complete stop', 'Speed up if no one is around'],
    answer: 'Come to a complete stop',
    reference: 'https://dor.mo.gov/forms/Driver%20Guide.pdf#page=40'
  },
  {
    question: 'When should you use your low-beam headlights?',
    choices: ['Only at night', 'In fog, rain, or snow', 'When parked', 'Never'],
    answer: 'In fog, rain, or snow',
    reference: 'https://dor.mo.gov/forms/Driver%20Guide.pdf#page=61'
  },
  {
    question: 'What should you do when you see a stop sign?',
    choices: ['Slow down', 'Yield', 'Come to a complete stop', 'Speed up if no one is around'],
    answer: 'Come to a complete stop',
    reference: 'https://dor.mo.gov/forms/Driver%20Guide.pdf#page=40'
  },
  {
    question: 'When should you use your low-beam headlights?',
    choices: ['Only at night', 'In fog, rain, or snow', 'When parked', 'Never'],
    answer: 'In fog, rain, or snow',
    reference: 'https://dor.mo.gov/forms/Driver%20Guide.pdf#page=61'
  },
  {
    question: 'What should you do when you see a stop sign?',
    choices: ['Slow down', 'Yield', 'Come to a complete stop', 'Speed up if no one is around'],
    answer: 'Come to a complete stop',
    reference: 'https://dor.mo.gov/forms/Driver%20Guide.pdf#page=40'
  },
  {
    question: 'When should you use your low-beam headlights?',
    choices: ['Only at night', 'In fog, rain, or snow', 'When parked', 'Never'],
    answer: 'In fog, rain, or snow',
    reference: 'https://dor.mo.gov/forms/Driver%20Guide.pdf#page=61'
  },
  {
    question: 'What should you do when you see a stop sign?',
    choices: ['Slow down', 'Yield', 'Come to a complete stop', 'Speed up if no one is around'],
    answer: 'Come to a complete stop',
    reference: 'https://dor.mo.gov/forms/Driver%20Guide.pdf#page=40'
  },
  {
    question: 'When should you use your low-beam headlights?',
    choices: ['Only at night', 'In fog, rain, or snow', 'When parked', 'Never'],
    answer: 'In fog, rain, or snow',
    reference: 'https://dor.mo.gov/forms/Driver%20Guide.pdf#page=61'
  },
  {
    question: 'What should you do when you see a stop sign?',
    choices: ['Slow down', 'Yield', 'Come to a complete stop', 'Speed up if no one is around'],
    answer: 'Come to a complete stop',
    reference: 'https://dor.mo.gov/forms/Driver%20Guide.pdf#page=40'
  },
  {
    question: 'When should you use your low-beam headlights?',
    choices: ['Only at night', 'In fog, rain, or snow', 'When parked', 'Never'],
    answer: 'In fog, rain, or snow',
    reference: 'https://dor.mo.gov/forms/Driver%20Guide.pdf#page=61'
  },
  {
    question: 'What should you do when you see a stop sign?',
    choices: ['Slow down', 'Yield', 'Come to a complete stop', 'Speed up if no one is around'],
    answer: 'Come to a complete stop',
    reference: 'https://dor.mo.gov/forms/Driver%20Guide.pdf#page=40'
  },
  {
    question: 'When should you use your low-beam headlights?',
    choices: ['Only at night', 'In fog, rain, or snow', 'When parked', 'Never'],
    answer: 'In fog, rain, or snow',
    reference: 'https://dor.mo.gov/forms/Driver%20Guide.pdf#page=61'
  },
  {
    question: 'What should you do when you see a stop sign?',
    choices: ['Slow down', 'Yield', 'Come to a complete stop', 'Speed up if no one is around'],
    answer: 'Come to a complete stop',
    reference: 'https://dor.mo.gov/forms/Driver%20Guide.pdf#page=40'
  },
  {
    question: 'When should you use your low-beam headlights?',
    choices: ['Only at night', 'In fog, rain, or snow', 'When parked', 'Never'],
    answer: 'In fog, rain, or snow',
    reference: 'https://dor.mo.gov/forms/Driver%20Guide.pdf#page=61'
  },
  {
    question: 'What should you do when you see a stop sign?',
    choices: ['Slow down', 'Yield', 'Come to a complete stop', 'Speed up if no one is around'],
    answer: 'Come to a complete stop',
    reference: 'https://dor.mo.gov/forms/Driver%20Guide.pdf#page=40'
  },
  {
    question: 'When should you use your low-beam headlights?',
    choices: ['Only at night', 'In fog, rain, or snow', 'When parked', 'Never'],
    answer: 'In fog, rain, or snow',
    reference: 'https://dor.mo.gov/forms/Driver%20Guide.pdf#page=61'
  },
  {
    question: 'What should you do when you see a stop sign?',
    choices: ['Slow down', 'Yield', 'Come to a complete stop', 'Speed up if no one is around'],
    answer: 'Come to a complete stop',
    reference: 'https://dor.mo.gov/forms/Driver%20Guide.pdf#page=40'
  },
  {
    question: 'When should you use your low-beam headlights?',
    choices: ['Only at night', 'In fog, rain, or snow', 'When parked', 'Never'],
    answer: 'In fog, rain, or snow',
    reference: 'https://dor.mo.gov/forms/Driver%20Guide.pdf#page=61'
  },
  {
    question: 'What should you do when you see a stop sign?',
    choices: ['Slow down', 'Yield', 'Come to a complete stop', 'Speed up if no one is around'],
    answer: 'Come to a complete stop',
    reference: 'https://dor.mo.gov/forms/Driver%20Guide.pdf#page=40'
  },
  {
    question: 'When should you use your low-beam headlights?',
    choices: ['Only at night', 'In fog, rain, or snow', 'When parked', 'Never'],
    answer: 'In fog, rain, or snow',
    reference: 'https://dor.mo.gov/forms/Driver%20Guide.pdf#page=61'
  },
  {
    question: 'What should you do when you see a stop sign?',
    choices: ['Slow down', 'Yield', 'Come to a complete stop', 'Speed up if no one is around'],
    answer: 'Come to a complete stop',
    reference: 'https://dor.mo.gov/forms/Driver%20Guide.pdf#page=40'
  },
  {
    question: 'When should you use your low-beam headlights?',
    choices: ['Only at night', 'In fog, rain, or snow', 'When parked', 'Never'],
    answer: 'In fog, rain, or snow',
    reference: 'https://dor.mo.gov/forms/Driver%20Guide.pdf#page=61'
  },
  {
    question: 'What should you do when you see a stop sign?',
    choices: ['Slow down', 'Yield', 'Come to a complete stop', 'Speed up if no one is around'],
    answer: 'Come to a complete stop',
    reference: 'https://dor.mo.gov/forms/Driver%20Guide.pdf#page=40'
  },
  {
    question: 'When should you use your low-beam headlights?',
    choices: ['Only at night', 'In fog, rain, or snow', 'When parked', 'Never'],
    answer: 'In fog, rain, or snow',
    reference: 'https://dor.mo.gov/forms/Driver%20Guide.pdf#page=61'
  },
  {
    question: 'What should you do when you see a stop sign?',
    choices: ['Slow down', 'Yield', 'Come to a complete stop', 'Speed up if no one is around'],
    answer: 'Come to a complete stop',
    reference: 'https://dor.mo.gov/forms/Driver%20Guide.pdf#page=40'
  },
  {
    question: 'When should you use your low-beam headlights?',
    choices: ['Only at night', 'In fog, rain, or snow', 'When parked', 'Never'],
    answer: 'In fog, rain, or snow',
    reference: 'https://dor.mo.gov/forms/Driver%20Guide.pdf#page=61'
  },
  {
    question: 'What should you do when you see a stop sign?',
    choices: ['Slow down', 'Yield', 'Come to a complete stop', 'Speed up if no one is around'],
    answer: 'Come to a complete stop',
    reference: 'https://dor.mo.gov/forms/Driver%20Guide.pdf#page=40'
  },
  {
    question: 'When should you use your low-beam headlights?',
    choices: ['Only at night', 'In fog, rain, or snow', 'When parked', 'Never'],
    answer: 'In fog, rain, or snow',
    reference: 'https://dor.mo.gov/forms/Driver%20Guide.pdf#page=61'
  },
  {
    question: 'What should you do when you see a stop sign?',
    choices: ['Slow down', 'Yield', 'Come to a complete stop', 'Speed up if no one is around'],
    answer: 'Come to a complete stop',
    reference: 'https://dor.mo.gov/forms/Driver%20Guide.pdf#page=40'
  },
  {
    question: 'When should you use your low-beam headlights?',
    choices: ['Only at night', 'In fog, rain, or snow', 'When parked', 'Never'],
    answer: 'In fog, rain, or snow',
    reference: 'https://dor.mo.gov/forms/Driver%20Guide.pdf#page=61'
  },
  {
    question: 'What should you do when you see a stop sign?',
    choices: ['Slow down', 'Yield', 'Come to a complete stop', 'Speed up if no one is around'],
    answer: 'Come to a complete stop',
    reference: 'https://dor.mo.gov/forms/Driver%20Guide.pdf#page=40'
  },
  {
    question: 'When should you use your low-beam headlights?',
    choices: ['Only at night', 'In fog, rain, or snow', 'When parked', 'Never'],
    answer: 'In fog, rain, or snow',
    reference: 'https://dor.mo.gov/forms/Driver%20Guide.pdf#page=61'
  },
  {
    question: 'What should you do when you see a stop sign?',
    choices: ['Slow down', 'Yield', 'Come to a complete stop', 'Speed up if no one is around'],
    answer: 'Come to a complete stop',
    reference: 'https://dor.mo.gov/forms/Driver%20Guide.pdf#page=40'
  },
  {
    question: 'When should you use your low-beam headlights?',
    choices: ['Only at night', 'In fog, rain, or snow', 'When parked', 'Never'],
    answer: 'In fog, rain, or snow',
    reference: 'https://dor.mo.gov/forms/Driver%20Guide.pdf#page=61'
  },
  {
    question: 'What should you do when you see a stop sign?',
    choices: ['Slow down', 'Yield', 'Come to a complete stop', 'Speed up if no one is around'],
    answer: 'Come to a complete stop',
    reference: 'https://dor.mo.gov/forms/Driver%20Guide.pdf#page=40'
  },
  {
    question: 'When should you use your low-beam headlights?',
    choices: ['Only at night', 'In fog, rain, or snow', 'When parked', 'Never'],
    answer: 'In fog, rain, or snow',
    reference: 'https://dor.mo.gov/forms/Driver%20Guide.pdf#page=61'
  },
  {
    question: 'What should you do when you see a stop sign?',
    choices: ['Slow down', 'Yield', 'Come to a complete stop', 'Speed up if no one is around'],
    answer: 'Come to a complete stop',
    reference: 'https://dor.mo.gov/forms/Driver%20Guide.pdf#page=40'
  },
  {
    question: 'When should you use your low-beam headlights?',
    choices: ['Only at night', 'In fog, rain, or snow', 'When parked', 'Never'],
    answer: 'In fog, rain, or snow',
    reference: 'https://dor.mo.gov/forms/Driver%20Guide.pdf#page=61'
  },
  {
    question: 'What should you do when you see a stop sign?',
    choices: ['Slow down', 'Yield', 'Come to a complete stop', 'Speed up if no one is around'],
    answer: 'Come to a complete stop',
    reference: 'https://dor.mo.gov/forms/Driver%20Guide.pdf#page=40'
  },
  {
    question: 'When should you use your low-beam headlights?',
    choices: ['Only at night', 'In fog, rain, or snow', 'When parked', 'Never'],
    answer: 'In fog, rain, or snow',
    reference: 'https://dor.mo.gov/forms/Driver%20Guide.pdf#page=61'
  },
  {
    question: 'What should you do when you see a stop sign?',
    choices: ['Slow down', 'Yield', 'Come to a complete stop', 'Speed up if no one is around'],
    answer: 'Come to a complete stop',
    reference: 'https://dor.mo.gov/forms/Driver%20Guide.pdf#page=40'
  },
  {
    question: 'When should you use your low-beam headlights?',
    choices: ['Only at night', 'In fog, rain, or snow', 'When parked', 'Never'],
    answer: 'In fog, rain, or snow',
    reference: 'https://dor.mo.gov/forms/Driver%20Guide.pdf#page=61'
  },
  {
    question: 'What should you do when you see a stop sign?',
    choices: ['Slow down', 'Yield', 'Come to a complete stop', 'Speed up if no one is around'],
    answer: 'Come to a complete stop',
    reference: 'https://dor.mo.gov/forms/Driver%20Guide.pdf#page=40'
  },
  {
    question: 'When should you use your low-beam headlights?',
    choices: ['Only at night', 'In fog, rain, or snow', 'When parked', 'Never'],
    answer: 'In fog, rain, or snow',
    reference: 'https://dor.mo.gov/forms/Driver%20Guide.pdf#page=61'
  },
  {
    question: 'What should you do when you see a stop sign?',
    choices: ['Slow down', 'Yield', 'Come to a complete stop', 'Speed up if no one is around'],
    answer: 'Come to a complete stop',
    reference: 'https://dor.mo.gov/forms/Driver%20Guide.pdf#page=40'
  },
  {
    question: 'When should you use your low-beam headlights?',
    choices: ['Only at night', 'In fog, rain, or snow', 'When parked', 'Never'],
    answer: 'In fog, rain, or snow',
    reference: 'https://dor.mo.gov/forms/Driver%20Guide.pdf#page=61'
  },
  {
    question: 'What should you do when you see a stop sign?',
    choices: ['Slow down', 'Yield', 'Come to a complete stop', 'Speed up if no one is around'],
    answer: 'Come to a complete stop',
    reference: 'https://dor.mo.gov/forms/Driver%20Guide.pdf#page=40'
  },
  {
    question: 'When should you use your low-beam headlights?',
    choices: ['Only at night', 'In fog, rain, or snow', 'When parked', 'Never'],
    answer: 'In fog, rain, or snow',
    reference: 'https://dor.mo.gov/forms/Driver%20Guide.pdf#page=61'
  },
  {
    question: 'What should you do when you see a stop sign?',
    choices: ['Slow down', 'Yield', 'Come to a complete stop', 'Speed up if no one is around'],
    answer: 'Come to a complete stop',
    reference: 'https://dor.mo.gov/forms/Driver%20Guide.pdf#page=40'
  },
  {
    question: 'When should you use your low-beam headlights?',
    choices: ['Only at night', 'In fog, rain, or snow', 'When parked', 'Never'],
    answer: 'In fog, rain, or snow',
    reference: 'https://dor.mo.gov/forms/Driver%20Guide.pdf#page=61'
  },
  {
    question: 'What should you do when you see a stop sign?',
    choices: ['Slow down', 'Yield', 'Come to a complete stop', 'Speed up if no one is around'],
    answer: 'Come to a complete stop',
    reference: 'https://dor.mo.gov/forms/Driver%20Guide.pdf#page=40'
  },
  {
    question: 'When should you use your low-beam headlights?',
    choices: ['Only at night', 'In fog, rain, or snow', 'When parked', 'Never'],
    answer: 'In fog, rain, or snow',
    reference: 'https://dor.mo.gov/forms/Driver%20Guide.pdf#page=61'
  },
  {
    question: 'What should you do when you see a stop sign?',
    choices: ['Slow down', 'Yield', 'Come to a complete stop', 'Speed up if no one is around'],
    answer: 'Come to a complete stop',
    reference: 'https://dor.mo.gov/forms/Driver%20Guide.pdf#page=40'
  },
  {
    question: 'When should you use your low-beam headlights?',
    choices: ['Only at night', 'In fog, rain, or snow', 'When parked', 'Never'],
    answer: 'In fog, rain, or snow',
    reference: 'https://dor.mo.gov/forms/Driver%20Guide.pdf#page=61'
  },
  {
    question: 'What should you do when you see a stop sign?',
    choices: ['Slow down', 'Yield', 'Come to a complete stop', 'Speed up if no one is around'],
    answer: 'Come to a complete stop',
    reference: 'https://dor.mo.gov/forms/Driver%20Guide.pdf#page=40'
  },
  {
    question: 'When should you use your low-beam headlights?',
    choices: ['Only at night', 'In fog, rain, or snow', 'When parked', 'Never'],
    answer: 'In fog, rain, or snow',
    reference: 'https://dor.mo.gov/forms/Driver%20Guide.pdf#page=61'
  },
  {
    question: 'What should you do when you see a stop sign?',
    choices: ['Slow down', 'Yield', 'Come to a complete stop', 'Speed up if no one is around'],
    answer: 'Come to a complete stop',
    reference: 'https://dor.mo.gov/forms/Driver%20Guide.pdf#page=40'
  },
  {
    question: 'When should you use your low-beam headlights?',
    choices: ['Only at night', 'In fog, rain, or snow', 'When parked', 'Never'],
    answer: 'In fog, rain, or snow',
    reference: 'https://dor.mo.gov/forms/Driver%20Guide.pdf#page=61'
  },
  {
    question: 'What should you do when you see a stop sign?',
    choices: ['Slow down', 'Yield', 'Come to a complete stop', 'Speed up if no one is around'],
    answer: 'Come to a complete stop',
    reference: 'https://dor.mo.gov/forms/Driver%20Guide.pdf#page=40'
  },
  {
    question: 'When should you use your low-beam headlights?',
    choices: ['Only at night', 'In fog, rain, or snow', 'When parked', 'Never'],
    answer: 'In fog, rain, or snow',
    reference: 'https://dor.mo.gov/forms/Driver%20Guide.pdf#page=61'
  },
  {
    question: 'What should you do when you see a stop sign?',
    choices: ['Slow down', 'Yield', 'Come to a complete stop', 'Speed up if no one is around'],
    answer: 'Come to a complete stop',
    reference: 'https://dor.mo.gov/forms/Driver%20Guide.pdf#page=40'
  },
  {
    question: 'When should you use your low-beam headlights?',
    choices: ['Only at night', 'In fog, rain, or snow', 'When parked', 'Never'],
    answer: 'In fog, rain, or snow',
    reference: 'https://dor.mo.gov/forms/Driver%20Guide.pdf#page=61'
  },
  {
    question: 'What should you do when you see a stop sign?',
    choices: ['Slow down', 'Yield', 'Come to a complete stop', 'Speed up if no one is around'],
    answer: 'Come to a complete stop',
    reference: 'https://dor.mo.gov/forms/Driver%20Guide.pdf#page=40'
  },
  {
    question: 'When should you use your low-beam headlights?',
    choices: ['Only at night', 'In fog, rain, or snow', 'When parked', 'Never'],
    answer: 'In fog, rain, or snow',
    reference: 'https://dor.mo.gov/forms/Driver%20Guide.pdf#page=61'
  },
  {
    question: 'What should you do when you see a stop sign?',
    choices: ['Slow down', 'Yield', 'Come to a complete stop', 'Speed up if no one is around'],
    answer: 'Come to a complete stop',
    reference: 'https://dor.mo.gov/forms/Driver%20Guide.pdf#page=40'
  },
  {
    question: 'When should you use your low-beam headlights?',
    choices: ['Only at night', 'In fog, rain, or snow', 'When parked', 'Never'],
    answer: 'In fog, rain, or snow',
    reference: 'https://dor.mo.gov/forms/Driver%20Guide.pdf#page=61'
  },
  {
    question: 'What should you do when you see a stop sign?',
    choices: ['Slow down', 'Yield', 'Come to a complete stop', 'Speed up if no one is around'],
    answer: 'Come to a complete stop',
    reference: 'https://dor.mo.gov/forms/Driver%20Guide.pdf#page=40'
  },
  {
    question: 'When should you use your low-beam headlights?',
    choices: ['Only at night', 'In fog, rain, or snow', 'When parked', 'Never'],
    answer: 'In fog, rain, or snow',
    reference: 'https://dor.mo.gov/forms/Driver%20Guide.pdf#page=61'
  },
  {
    question: 'What should you do when you see a stop sign?',
    choices: ['Slow down', 'Yield', 'Come to a complete stop', 'Speed up if no one is around'],
    answer: 'Come to a complete stop',
    reference: 'https://dor.mo.gov/forms/Driver%20Guide.pdf#page=40'
  },
  {
    question: 'When should you use your low-beam headlights?',
    choices: ['Only at night', 'In fog, rain, or snow', 'When parked', 'Never'],
    answer: 'In fog, rain, or snow',
    reference: 'https://dor.mo.gov/forms/Driver%20Guide.pdf#page=61'
  },
  {
    question: 'What should you do when you see a stop sign?',
    choices: ['Slow down', 'Yield', 'Come to a complete stop', 'Speed up if no one is around'],
    answer: 'Come to a complete stop',
    reference: 'https://dor.mo.gov/forms/Driver%20Guide.pdf#page=40'
  },
  {
    question: 'When should you use your low-beam headlights?',
    choices: ['Only at night', 'In fog, rain, or snow', 'When parked', 'Never'],
    answer: 'In fog, rain, or snow',
    reference: 'https://dor.mo.gov/forms/Driver%20Guide.pdf#page=61'
  },
  {
    question: 'What should you do when you see a stop sign?',
    choices: ['Slow down', 'Yield', 'Come to a complete stop', 'Speed up if no one is around'],
    answer: 'Come to a complete stop',
    reference: 'https://dor.mo.gov/forms/Driver%20Guide.pdf#page=40'
  },
  {
    question: 'When should you use your low-beam headlights?',
    choices: ['Only at night', 'In fog, rain, or snow', 'When parked', 'Never'],
    answer: 'In fog, rain, or snow',
    reference: 'https://dor.mo.gov/forms/Driver%20Guide.pdf#page=61'
  },
];
