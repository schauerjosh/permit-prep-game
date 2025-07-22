const allQuestions = [
  {
    question: "What does a flashing red traffic light mean? (Q1)",
    choices: ["Yield", "Stop completely, then proceed when safe", "Go with caution", "None of the above"],
    answer: "Stop completely, then proceed when safe",
    reference: "https://dor.mo.gov/forms/Driver%20Guide.pdf#page=38"
  },
  {
    question: "At what BAC are you considered intoxicated in Missouri if under 21? (Q2)",
    choices: ["0.08%", "0.05%", "0.02%", "0.10%"],
    answer: "0.02%",
    reference: "https://dor.mo.gov/forms/Driver%20Guide.pdf#page=75"
  },
  {
    question: "What does a yellow traffic signal mean? (Q3)",
    choices: ["Speed up to beat red", "Stop if safe to do so", "Go", "Turn around"],
    answer: "Stop if safe to do so",
    reference: "https://dor.mo.gov/forms/Driver%20Guide.pdf#page=37"
  },
  {
    question: "When must you use headlights? (Q4)",
    choices: ["Only at night", "From sunset to sunrise or in low visibility", "Only on highways", "Only when raining"],
    answer: "From sunset to sunrise or in low visibility",
    reference: "https://dor.mo.gov/forms/Driver%20Guide.pdf#page=61"
  },
  {
    question: "What should you do for a stopped school bus with flashing red lights? (Q5)",
    choices: ["Pass quickly", "Slow down", "Stop until lights stop flashing", "Honk and go around"],
    answer: "Stop until lights stop flashing",
    reference: "https://dor.mo.gov/forms/Driver%20Guide.pdf#page=44"
  },
  {
    question: "What is the speed limit in a school zone? (Q6)",
    choices: ["15 mph", "25 mph", "30 mph", "20 mph"],
    answer: "20 mph",
    reference: "https://dor.mo.gov/forms/Driver%20Guide.pdf#page=46"
  },
  {
    question: "What does a yield sign mean? (Q7)",
    choices: ["Stop completely", "Proceed without stopping", "Slow and give way if needed", "Go faster"],
    answer: "Slow and give way if needed",
    reference: "https://dor.mo.gov/forms/Driver%20Guide.pdf#page=36"
  },
  {
    question: "How far must you park from a fire hydrant? (Q8)",
    choices: ["10 feet", "15 feet", "20 feet", "5 feet"],
    answer: "15 feet",
    reference: "https://dor.mo.gov/forms/Driver%20Guide.pdf#page=53"
  },
  {
    question: "What is hydroplaning? (Q9)",
    choices: ["Driving through snow", "Sliding on a thin water layer", "Skidding on gravel", "None of the above"],
    answer: "Sliding on a thin water layer",
    reference: "https://dor.mo.gov/forms/Driver%20Guide.pdf#page=65"
  },
  {
    question: "What should you do if your accelerator sticks? (Q10)",
    choices: ["Use emergency brake", "Shift to neutral and brake", "Turn off engine", "Honk continuously"],
    answer: "Shift to neutral and brake",
    reference: "https://dor.mo.gov/forms/Driver%20Guide.pdf#page=67"
  },
  {
    question: "When is passing allowed on a two-lane road? (Q11)",
    choices: ["Anytime", "Only in residential zones", "When broken yellow line is on your side", "When no cars are present"],
    answer: "When broken yellow line is on your side",
    reference: "https://dor.mo.gov/forms/Driver%20Guide.pdf#page=43"
  },
  {
    question: "What shape is a stop sign? (Q12)",
    choices: ["Circle", "Octagon", "Triangle", "Rectangle"],
    answer: "Octagon",
    reference: "https://dor.mo.gov/forms/Driver%20Guide.pdf#page=36"
  },
  {
    question: "What does a green arrow mean? (Q13)",
    choices: ["Stop", "Yield", "Go in direction of arrow", "Slow"],
    answer: "Go in direction of arrow",
    reference: "https://dor.mo.gov/forms/Driver%20Guide.pdf#page=37"
  },
  {
    question: "How many feet before turning should you signal? (Q14)",
    choices: ["25 feet", "50 feet", "100 feet", "200 feet"],
    answer: "100 feet",
    reference: "https://dor.mo.gov/forms/Driver%20Guide.pdf#page=48"
  },
  {
    question: "When can you turn right on red in Missouri? (Q15)",
    choices: ["Never", "Always", "Only after full stop and yielding", "Only when a cop waves you through"],
    answer: "Only after full stop and yielding",
    reference: "https://dor.mo.gov/forms/Driver%20Guide.pdf#page=38"
  },
  {
    question: "What does a flashing red traffic light mean? (Q16)",
    choices: ["Yield", "Stop completely, then proceed when safe", "Go with caution", "None of the above"],
    answer: "Stop completely, then proceed when safe",
    reference: "https://dor.mo.gov/forms/Driver%20Guide.pdf#page=38"
  },
  {
    question: "At what BAC are you considered intoxicated in Missouri if under 21? (Q17)",
    choices: ["0.08%", "0.05%", "0.02%", "0.10%"],
    answer: "0.02%",
    reference: "https://dor.mo.gov/forms/Driver%20Guide.pdf#page=75"
  },
  {
    question: "What does a yellow traffic signal mean? (Q18)",
    choices: ["Speed up to beat red", "Stop if safe to do so", "Go", "Turn around"],
    answer: "Stop if safe to do so",
    reference: "https://dor.mo.gov/forms/Driver%20Guide.pdf#page=37"
  },
  {
    question: "When must you use headlights? (Q19)",
    choices: ["Only at night", "From sunset to sunrise or in low visibility", "Only on highways", "Only when raining"],
    answer: "From sunset to sunrise or in low visibility",
    reference: "https://dor.mo.gov/forms/Driver%20Guide.pdf#page=61"
  },
  {
    question: "What should you do for a stopped school bus with flashing red lights? (Q20)",
    choices: ["Pass quickly", "Slow down", "Stop until lights stop flashing", "Honk and go around"],
    answer: "Stop until lights stop flashing",
    reference: "https://dor.mo.gov/forms/Driver%20Guide.pdf#page=44"
  },
  {
    question: "What is the speed limit in a school zone? (Q21)",
    choices: ["15 mph", "25 mph", "30 mph", "20 mph"],
    answer: "20 mph",
    reference: "https://dor.mo.gov/forms/Driver%20Guide.pdf#page=46"
  },
  {
    question: "What does a yield sign mean? (Q22)",
    choices: ["Stop completely", "Proceed without stopping", "Slow and give way if needed", "Go faster"],
    answer: "Slow and give way if needed",
    reference: "https://dor.mo.gov/forms/Driver%20Guide.pdf#page=36"
  },
  {
    question: "How far must you park from a fire hydrant? (Q23)",
    choices: ["10 feet", "15 feet", "20 feet", "5 feet"],
    answer: "15 feet",
    reference: "https://dor.mo.gov/forms/Driver%20Guide.pdf#page=53"
  },
  {
    question: "What is hydroplaning? (Q24)",
    choices: ["Driving through snow", "Sliding on a thin water layer", "Skidding on gravel", "None of the above"],
    answer: "Sliding on a thin water layer",
    reference: "https://dor.mo.gov/forms/Driver%20Guide.pdf#page=65"
  },
  {
    question: "What should you do if your accelerator sticks? (Q25)",
    choices: ["Use emergency brake", "Shift to neutral and brake", "Turn off engine", "Honk continuously"],
    answer: "Shift to neutral and brake",
    reference: "https://dor.mo.gov/forms/Driver%20Guide.pdf#page=67"
  },
  {
    question: "When is passing allowed on a two-lane road? (Q26)",
    choices: ["Anytime", "Only in residential zones", "When broken yellow line is on your side", "When no cars are present"],
    answer: "When broken yellow line is on your side",
    reference: "https://dor.mo.gov/forms/Driver%20Guide.pdf#page=43"
  },
  {
    question: "What shape is a stop sign? (Q27)",
    choices: ["Circle", "Octagon", "Triangle", "Rectangle"],
    answer: "Octagon",
    reference: "https://dor.mo.gov/forms/Driver%20Guide.pdf#page=36"
  },
  {
    question: "What does a green arrow mean? (Q28)",
    choices: ["Stop", "Yield", "Go in direction of arrow", "Slow"],
    answer: "Go in direction of arrow",
    reference: "https://dor.mo.gov/forms/Driver%20Guide.pdf#page=37"
  },
  {
    question: "How many feet before turning should you signal? (Q29)",
    choices: ["25 feet", "50 feet", "100 feet", "200 feet"],
    answer: "100 feet",
    reference: "https://dor.mo.gov/forms/Driver%20Guide.pdf#page=48"
  },
  {
    question: "When can you turn right on red in Missouri? (Q30)",
    choices: ["Never", "Always", "Only after full stop and yielding", "Only when a cop waves you through"],
    answer: "Only after full stop and yielding",
    reference: "https://dor.mo.gov/forms/Driver%20Guide.pdf#page=38"
  },
  {
    question: "What does a flashing red traffic light mean? (Q31)",
    choices: ["Yield", "Stop completely, then proceed when safe", "Go with caution", "None of the above"],
    answer: "Stop completely, then proceed when safe",
    reference: "https://dor.mo.gov/forms/Driver%20Guide.pdf#page=38"
  },
  {
    question: "At what BAC are you considered intoxicated in Missouri if under 21? (Q32)",
    choices: ["0.08%", "0.05%", "0.02%", "0.10%"],
    answer: "0.02%",
    reference: "https://dor.mo.gov/forms/Driver%20Guide.pdf#page=75"
  },
  {
    question: "What does a yellow traffic signal mean? (Q33)",
    choices: ["Speed up to beat red", "Stop if safe to do so", "Go", "Turn around"],
    answer: "Stop if safe to do so",
    reference: "https://dor.mo.gov/forms/Driver%20Guide.pdf#page=37"
  },
  {
    question: "When must you use headlights? (Q34)",
    choices: ["Only at night", "From sunset to sunrise or in low visibility", "Only on highways", "Only when raining"],
    answer: "From sunset to sunrise or in low visibility",
    reference: "https://dor.mo.gov/forms/Driver%20Guide.pdf#page=61"
  },
  {
    question: "What should you do for a stopped school bus with flashing red lights? (Q35)",
    choices: ["Pass quickly", "Slow down", "Stop until lights stop flashing", "Honk and go around"],
    answer: "Stop until lights stop flashing",
    reference: "https://dor.mo.gov/forms/Driver%20Guide.pdf#page=44"
  },
  {
    question: "What is the speed limit in a school zone? (Q36)",
    choices: ["15 mph", "25 mph", "30 mph", "20 mph"],
    answer: "20 mph",
    reference: "https://dor.mo.gov/forms/Driver%20Guide.pdf#page=46"
  },
  {
    question: "What does a yield sign mean? (Q37)",
    choices: ["Stop completely", "Proceed without stopping", "Slow and give way if needed", "Go faster"],
    answer: "Slow and give way if needed",
    reference: "https://dor.mo.gov/forms/Driver%20Guide.pdf#page=36"
  },
  {
    question: "How far must you park from a fire hydrant? (Q38)",
    choices: ["10 feet", "15 feet", "20 feet", "5 feet"],
    answer: "15 feet",
    reference: "https://dor.mo.gov/forms/Driver%20Guide.pdf#page=53"
  },
  {
    question: "What is hydroplaning? (Q39)",
    choices: ["Driving through snow", "Sliding on a thin water layer", "Skidding on gravel", "None of the above"],
    answer: "Sliding on a thin water layer",
    reference: "https://dor.mo.gov/forms/Driver%20Guide.pdf#page=65"
  },
  {
    question: "What should you do if your accelerator sticks? (Q40)",
    choices: ["Use emergency brake", "Shift to neutral and brake", "Turn off engine", "Honk continuously"],
    answer: "Shift to neutral and brake",
    reference: "https://dor.mo.gov/forms/Driver%20Guide.pdf#page=67"
  },
  {
    question: "When is passing allowed on a two-lane road? (Q41)",
    choices: ["Anytime", "Only in residential zones", "When broken yellow line is on your side", "When no cars are present"],
    answer: "When broken yellow line is on your side",
    reference: "https://dor.mo.gov/forms/Driver%20Guide.pdf#page=43"
  },
  {
    question: "What shape is a stop sign? (Q42)",
    choices: ["Circle", "Octagon", "Triangle", "Rectangle"],
    answer: "Octagon",
    reference: "https://dor.mo.gov/forms/Driver%20Guide.pdf#page=36"
  },
  {
    question: "What does a green arrow mean? (Q43)",
    choices: ["Stop", "Yield", "Go in direction of arrow", "Slow"],
    answer: "Go in direction of arrow",
    reference: "https://dor.mo.gov/forms/Driver%20Guide.pdf#page=37"
  },
  {
    question: "How many feet before turning should you signal? (Q44)",
    choices: ["25 feet", "50 feet", "100 feet", "200 feet"],
    answer: "100 feet",
    reference: "https://dor.mo.gov/forms/Driver%20Guide.pdf#page=48"
  },
  {
    question: "When can you turn right on red in Missouri? (Q45)",
    choices: ["Never", "Always", "Only after full stop and yielding", "Only when a cop waves you through"],
    answer: "Only after full stop and yielding",
    reference: "https://dor.mo.gov/forms/Driver%20Guide.pdf#page=38"
  },
  {
    question: "What does a flashing red traffic light mean? (Q46)",
    choices: ["Yield", "Stop completely, then proceed when safe", "Go with caution", "None of the above"],
    answer: "Stop completely, then proceed when safe",
    reference: "https://dor.mo.gov/forms/Driver%20Guide.pdf#page=38"
  },
  {
    question: "At what BAC are you considered intoxicated in Missouri if under 21? (Q47)",
    choices: ["0.08%", "0.05%", "0.02%", "0.10%"],
    answer: "0.02%",
    reference: "https://dor.mo.gov/forms/Driver%20Guide.pdf#page=75"
  },
  {
    question: "What does a yellow traffic signal mean? (Q48)",
    choices: ["Speed up to beat red", "Stop if safe to do so", "Go", "Turn around"],
    answer: "Stop if safe to do so",
    reference: "https://dor.mo.gov/forms/Driver%20Guide.pdf#page=37"
  },
  {
    question: "When must you use headlights? (Q49)",
    choices: ["Only at night", "From sunset to sunrise or in low visibility", "Only on highways", "Only when raining"],
    answer: "From sunset to sunrise or in low visibility",
    reference: "https://dor.mo.gov/forms/Driver%20Guide.pdf#page=61"
  },
  {
    question: "What should you do for a stopped school bus with flashing red lights? (Q50)",
    choices: ["Pass quickly", "Slow down", "Stop until lights stop flashing", "Honk and go around"],
    answer: "Stop until lights stop flashing",
    reference: "https://dor.mo.gov/forms/Driver%20Guide.pdf#page=44"
  },
  {
    question: "What is the speed limit in a school zone? (Q51)",
    choices: ["15 mph", "25 mph", "30 mph", "20 mph"],
    answer: "20 mph",
    reference: "https://dor.mo.gov/forms/Driver%20Guide.pdf#page=46"
  },
  {
    question: "What does a yield sign mean? (Q52)",
    choices: ["Stop completely", "Proceed without stopping", "Slow and give way if needed", "Go faster"],
    answer: "Slow and give way if needed",
    reference: "https://dor.mo.gov/forms/Driver%20Guide.pdf#page=36"
  },
  {
    question: "How far must you park from a fire hydrant? (Q53)",
    choices: ["10 feet", "15 feet", "20 feet", "5 feet"],
    answer: "15 feet",
    reference: "https://dor.mo.gov/forms/Driver%20Guide.pdf#page=53"
  },
  {
    question: "What is hydroplaning? (Q54)",
    choices: ["Driving through snow", "Sliding on a thin water layer", "Skidding on gravel", "None of the above"],
    answer: "Sliding on a thin water layer",
    reference: "https://dor.mo.gov/forms/Driver%20Guide.pdf#page=65"
  },
  {
    question: "What should you do if your accelerator sticks? (Q55)",
    choices: ["Use emergency brake", "Shift to neutral and brake", "Turn off engine", "Honk continuously"],
    answer: "Shift to neutral and brake",
    reference: "https://dor.mo.gov/forms/Driver%20Guide.pdf#page=67"
  },
  {
    question: "When is passing allowed on a two-lane road? (Q56)",
    choices: ["Anytime", "Only in residential zones", "When broken yellow line is on your side", "When no cars are present"],
    answer: "When broken yellow line is on your side",
    reference: "https://dor.mo.gov/forms/Driver%20Guide.pdf#page=43"
  },
  {
    question: "What shape is a stop sign? (Q57)",
    choices: ["Circle", "Octagon", "Triangle", "Rectangle"],
    answer: "Octagon",
    reference: "https://dor.mo.gov/forms/Driver%20Guide.pdf#page=36"
  },
  {
    question: "What does a green arrow mean? (Q58)",
    choices: ["Stop", "Yield", "Go in direction of arrow", "Slow"],
    answer: "Go in direction of arrow",
    reference: "https://dor.mo.gov/forms/Driver%20Guide.pdf#page=37"
  },
  {
    question: "How many feet before turning should you signal? (Q59)",
    choices: ["25 feet", "50 feet", "100 feet", "200 feet"],
    answer: "100 feet",
    reference: "https://dor.mo.gov/forms/Driver%20Guide.pdf#page=48"
  },
  {
    question: "When can you turn right on red in Missouri? (Q60)",
    choices: ["Never", "Always", "Only after full stop and yielding", "Only when a cop waves you through"],
    answer: "Only after full stop and yielding",
    reference: "https://dor.mo.gov/forms/Driver%20Guide.pdf#page=38"
  },
  {
    question: "What does a flashing red traffic light mean? (Q61)",
    choices: ["Yield", "Stop completely, then proceed when safe", "Go with caution", "None of the above"],
    answer: "Stop completely, then proceed when safe",
    reference: "https://dor.mo.gov/forms/Driver%20Guide.pdf#page=38"
  },
  {
    question: "At what BAC are you considered intoxicated in Missouri if under 21? (Q62)",
    choices: ["0.08%", "0.05%", "0.02%", "0.10%"],
    answer: "0.02%",
    reference: "https://dor.mo.gov/forms/Driver%20Guide.pdf#page=75"
  },
  {
    question: "What does a yellow traffic signal mean? (Q63)",
    choices: ["Speed up to beat red", "Stop if safe to do so", "Go", "Turn around"],
    answer: "Stop if safe to do so",
    reference: "https://dor.mo.gov/forms/Driver%20Guide.pdf#page=37"
  },
  {
    question: "When must you use headlights? (Q64)",
    choices: ["Only at night", "From sunset to sunrise or in low visibility", "Only on highways", "Only when raining"],
    answer: "From sunset to sunrise or in low visibility",
    reference: "https://dor.mo.gov/forms/Driver%20Guide.pdf#page=61"
  },
  {
    question: "What should you do for a stopped school bus with flashing red lights? (Q65)",
    choices: ["Pass quickly", "Slow down", "Stop until lights stop flashing", "Honk and go around"],
    answer: "Stop until lights stop flashing",
    reference: "https://dor.mo.gov/forms/Driver%20Guide.pdf#page=44"
  },
  {
    question: "What is the speed limit in a school zone? (Q66)",
    choices: ["15 mph", "25 mph", "30 mph", "20 mph"],
    answer: "20 mph",
    reference: "https://dor.mo.gov/forms/Driver%20Guide.pdf#page=46"
  },
  {
    question: "What does a yield sign mean? (Q67)",
    choices: ["Stop completely", "Proceed without stopping", "Slow and give way if needed", "Go faster"],
    answer: "Slow and give way if needed",
    reference: "https://dor.mo.gov/forms/Driver%20Guide.pdf#page=36"
  },
  {
    question: "How far must you park from a fire hydrant? (Q68)",
    choices: ["10 feet", "15 feet", "20 feet", "5 feet"],
    answer: "15 feet",
    reference: "https://dor.mo.gov/forms/Driver%20Guide.pdf#page=53"
  },
  {
    question: "What is hydroplaning? (Q69)",
    choices: ["Driving through snow", "Sliding on a thin water layer", "Skidding on gravel", "None of the above"],
    answer: "Sliding on a thin water layer",
    reference: "https://dor.mo.gov/forms/Driver%20Guide.pdf#page=65"
  },
  {
    question: "What should you do if your accelerator sticks? (Q70)",
    choices: ["Use emergency brake", "Shift to neutral and brake", "Turn off engine", "Honk continuously"],
    answer: "Shift to neutral and brake",
    reference: "https://dor.mo.gov/forms/Driver%20Guide.pdf#page=67"
  },
  {
    question: "When is passing allowed on a two-lane road? (Q71)",
    choices: ["Anytime", "Only in residential zones", "When broken yellow line is on your side", "When no cars are present"],
    answer: "When broken yellow line is on your side",
    reference: "https://dor.mo.gov/forms/Driver%20Guide.pdf#page=43"
  },
  {
    question: "What shape is a stop sign? (Q72)",
    choices: ["Circle", "Octagon", "Triangle", "Rectangle"],
    answer: "Octagon",
    reference: "https://dor.mo.gov/forms/Driver%20Guide.pdf#page=36"
  },
  {
    question: "What does a green arrow mean? (Q73)",
    choices: ["Stop", "Yield", "Go in direction of arrow", "Slow"],
    answer: "Go in direction of arrow",
    reference: "https://dor.mo.gov/forms/Driver%20Guide.pdf#page=37"
  },
  {
    question: "How many feet before turning should you signal? (Q74)",
    choices: ["25 feet", "50 feet", "100 feet", "200 feet"],
    answer: "100 feet",
    reference: "https://dor.mo.gov/forms/Driver%20Guide.pdf#page=48"
  },
  {
    question: "When can you turn right on red in Missouri? (Q75)",
    choices: ["Never", "Always", "Only after full stop and yielding", "Only when a cop waves you through"],
    answer: "Only after full stop and yielding",
    reference: "https://dor.mo.gov/forms/Driver%20Guide.pdf#page=38"
  },
  {
    question: "What does a flashing red traffic light mean? (Q76)",
    choices: ["Yield", "Stop completely, then proceed when safe", "Go with caution", "None of the above"],
    answer: "Stop completely, then proceed when safe",
    reference: "https://dor.mo.gov/forms/Driver%20Guide.pdf#page=38"
  },
  {
    question: "At what BAC are you considered intoxicated in Missouri if under 21? (Q77)",
    choices: ["0.08%", "0.05%", "0.02%", "0.10%"],
    answer: "0.02%",
    reference: "https://dor.mo.gov/forms/Driver%20Guide.pdf#page=75"
  },
  {
    question: "What does a yellow traffic signal mean? (Q78)",
    choices: ["Speed up to beat red", "Stop if safe to do so", "Go", "Turn around"],
    answer: "Stop if safe to do so",
    reference: "https://dor.mo.gov/forms/Driver%20Guide.pdf#page=37"
  },
  {
    question: "When must you use headlights? (Q79)",
    choices: ["Only at night", "From sunset to sunrise or in low visibility", "Only on highways", "Only when raining"],
    answer: "From sunset to sunrise or in low visibility",
    reference: "https://dor.mo.gov/forms/Driver%20Guide.pdf#page=61"
  },
  {
    question: "What should you do for a stopped school bus with flashing red lights? (Q80)",
    choices: ["Pass quickly", "Slow down", "Stop until lights stop flashing", "Honk and go around"],
    answer: "Stop until lights stop flashing",
    reference: "https://dor.mo.gov/forms/Driver%20Guide.pdf#page=44"
  },
  {
    question: "What is the speed limit in a school zone? (Q81)",
    choices: ["15 mph", "25 mph", "30 mph", "20 mph"],
    answer: "20 mph",
    reference: "https://dor.mo.gov/forms/Driver%20Guide.pdf#page=46"
  },
  {
    question: "What does a yield sign mean? (Q82)",
    choices: ["Stop completely", "Proceed without stopping", "Slow and give way if needed", "Go faster"],
    answer: "Slow and give way if needed",
    reference: "https://dor.mo.gov/forms/Driver%20Guide.pdf#page=36"
  },
  {
    question: "How far must you park from a fire hydrant? (Q83)",
    choices: ["10 feet", "15 feet", "20 feet", "5 feet"],
    answer: "15 feet",
    reference: "https://dor.mo.gov/forms/Driver%20Guide.pdf#page=53"
  },
  {
    question: "What is hydroplaning? (Q84)",
    choices: ["Driving through snow", "Sliding on a thin water layer", "Skidding on gravel", "None of the above"],
    answer: "Sliding on a thin water layer",
    reference: "https://dor.mo.gov/forms/Driver%20Guide.pdf#page=65"
  },
  {
    question: "What should you do if your accelerator sticks? (Q85)",
    choices: ["Use emergency brake", "Shift to neutral and brake", "Turn off engine", "Honk continuously"],
    answer: "Shift to neutral and brake",
    reference: "https://dor.mo.gov/forms/Driver%20Guide.pdf#page=67"
  },
  {
    question: "When is passing allowed on a two-lane road? (Q86)",
    choices: ["Anytime", "Only in residential zones", "When broken yellow line is on your side", "When no cars are present"],
    answer: "When broken yellow line is on your side",
    reference: "https://dor.mo.gov/forms/Driver%20Guide.pdf#page=43"
  },
  {
    question: "What shape is a stop sign? (Q87)",
    choices: ["Circle", "Octagon", "Triangle", "Rectangle"],
    answer: "Octagon",
    reference: "https://dor.mo.gov/forms/Driver%20Guide.pdf#page=36"
  },
  {
    question: "What does a green arrow mean? (Q88)",
    choices: ["Stop", "Yield", "Go in direction of arrow", "Slow"],
    answer: "Go in direction of arrow",
    reference: "https://dor.mo.gov/forms/Driver%20Guide.pdf#page=37"
  },
  {
    question: "How many feet before turning should you signal? (Q89)",
    choices: ["25 feet", "50 feet", "100 feet", "200 feet"],
    answer: "100 feet",
    reference: "https://dor.mo.gov/forms/Driver%20Guide.pdf#page=48"
  },
  {
    question: "When can you turn right on red in Missouri? (Q90)",
    choices: ["Never", "Always", "Only after full stop and yielding", "Only when a cop waves you through"],
    answer: "Only after full stop and yielding",
    reference: "https://dor.mo.gov/forms/Driver%20Guide.pdf#page=38"
  },
  {
    question: "What does a flashing red traffic light mean? (Q91)",
    choices: ["Yield", "Stop completely, then proceed when safe", "Go with caution", "None of the above"],
    answer: "Stop completely, then proceed when safe",
    reference: "https://dor.mo.gov/forms/Driver%20Guide.pdf#page=38"
  },
  {
    question: "At what BAC are you considered intoxicated in Missouri if under 21? (Q92)",
    choices: ["0.08%", "0.05%", "0.02%", "0.10%"],
    answer: "0.02%",
    reference: "https://dor.mo.gov/forms/Driver%20Guide.pdf#page=75"
  },
  {
    question: "What does a yellow traffic signal mean? (Q93)",
    choices: ["Speed up to beat red", "Stop if safe to do so", "Go", "Turn around"],
    answer: "Stop if safe to do so",
    reference: "https://dor.mo.gov/forms/Driver%20Guide.pdf#page=37"
  },
  {
    question: "When must you use headlights? (Q94)",
    choices: ["Only at night", "From sunset to sunrise or in low visibility", "Only on highways", "Only when raining"],
    answer: "From sunset to sunrise or in low visibility",
    reference: "https://dor.mo.gov/forms/Driver%20Guide.pdf#page=61"
  },
  {
    question: "What should you do for a stopped school bus with flashing red lights? (Q95)",
    choices: ["Pass quickly", "Slow down", "Stop until lights stop flashing", "Honk and go around"],
    answer: "Stop until lights stop flashing",
    reference: "https://dor.mo.gov/forms/Driver%20Guide.pdf#page=44"
  },
  {
    question: "What is the speed limit in a school zone? (Q96)",
    choices: ["15 mph", "25 mph", "30 mph", "20 mph"],
    answer: "20 mph",
    reference: "https://dor.mo.gov/forms/Driver%20Guide.pdf#page=46"
  },
  {
    question: "What does a yield sign mean? (Q97)",
    choices: ["Stop completely", "Proceed without stopping", "Slow and give way if needed", "Go faster"],
    answer: "Slow and give way if needed",
    reference: "https://dor.mo.gov/forms/Driver%20Guide.pdf#page=36"
  },
  {
    question: "How far must you park from a fire hydrant? (Q98)",
    choices: ["10 feet", "15 feet", "20 feet", "5 feet"],
    answer: "15 feet",
    reference: "https://dor.mo.gov/forms/Driver%20Guide.pdf#page=53"
  },
  {
    question: "What is hydroplaning? (Q99)",
    choices: ["Driving through snow", "Sliding on a thin water layer", "Skidding on gravel", "None of the above"],
    answer: "Sliding on a thin water layer",
    reference: "https://dor.mo.gov/forms/Driver%20Guide.pdf#page=65"
  },
  {
    question: "What should you do if your accelerator sticks? (Q100)",
    choices: ["Use emergency brake", "Shift to neutral and brake", "Turn off engine", "Honk continuously"],
    answer: "Shift to neutral and brake",
    reference: "https://dor.mo.gov/forms/Driver%20Guide.pdf#page=67"
  },
  {
    question: "When is passing allowed on a two-lane road? (Q101)",
    choices: ["Anytime", "Only in residential zones", "When broken yellow line is on your side", "When no cars are present"],
    answer: "When broken yellow line is on your side",
    reference: "https://dor.mo.gov/forms/Driver%20Guide.pdf#page=43"
  },
  {
    question: "What shape is a stop sign? (Q102)",
    choices: ["Circle", "Octagon", "Triangle", "Rectangle"],
    answer: "Octagon",
    reference: "https://dor.mo.gov/forms/Driver%20Guide.pdf#page=36"
  },
  {
    question: "What does a green arrow mean? (Q103)",
    choices: ["Stop", "Yield", "Go in direction of arrow", "Slow"],
    answer: "Go in direction of arrow",
    reference: "https://dor.mo.gov/forms/Driver%20Guide.pdf#page=37"
  },
  {
    question: "How many feet before turning should you signal? (Q104)",
    choices: ["25 feet", "50 feet", "100 feet", "200 feet"],
    answer: "100 feet",
    reference: "https://dor.mo.gov/forms/Driver%20Guide.pdf#page=48"
  },
  {
    question: "When can you turn right on red in Missouri? (Q105)",
    choices: ["Never", "Always", "Only after full stop and yielding", "Only when a cop waves you through"],
    answer: "Only after full stop and yielding",
    reference: "https://dor.mo.gov/forms/Driver%20Guide.pdf#page=38"
  },
  {
    question: "What does a flashing red traffic light mean? (Q106)",
    choices: ["Yield", "Stop completely, then proceed when safe", "Go with caution", "None of the above"],
    answer: "Stop completely, then proceed when safe",
    reference: "https://dor.mo.gov/forms/Driver%20Guide.pdf#page=38"
  },
  {
    question: "At what BAC are you considered intoxicated in Missouri if under 21? (Q107)",
    choices: ["0.08%", "0.05%", "0.02%", "0.10%"],
    answer: "0.02%",
    reference: "https://dor.mo.gov/forms/Driver%20Guide.pdf#page=75"
  },
  {
    question: "What does a yellow traffic signal mean? (Q108)",
    choices: ["Speed up to beat red", "Stop if safe to do so", "Go", "Turn around"],
    answer: "Stop if safe to do so",
    reference: "https://dor.mo.gov/forms/Driver%20Guide.pdf#page=37"
  },
  {
    question: "When must you use headlights? (Q109)",
    choices: ["Only at night", "From sunset to sunrise or in low visibility", "Only on highways", "Only when raining"],
    answer: "From sunset to sunrise or in low visibility",
    reference: "https://dor.mo.gov/forms/Driver%20Guide.pdf#page=61"
  },
  {
    question: "What should you do for a stopped school bus with flashing red lights? (Q110)",
    choices: ["Pass quickly", "Slow down", "Stop until lights stop flashing", "Honk and go around"],
    answer: "Stop until lights stop flashing",
    reference: "https://dor.mo.gov/forms/Driver%20Guide.pdf#page=44"
  },
  {
    question: "What is the speed limit in a school zone? (Q111)",
    choices: ["15 mph", "25 mph", "30 mph", "20 mph"],
    answer: "20 mph",
    reference: "https://dor.mo.gov/forms/Driver%20Guide.pdf#page=46"
  },
  {
    question: "What does a yield sign mean? (Q112)",
    choices: ["Stop completely", "Proceed without stopping", "Slow and give way if needed", "Go faster"],
    answer: "Slow and give way if needed",
    reference: "https://dor.mo.gov/forms/Driver%20Guide.pdf#page=36"
  },
  {
    question: "How far must you park from a fire hydrant? (Q113)",
    choices: ["10 feet", "15 feet", "20 feet", "5 feet"],
    answer: "15 feet",
    reference: "https://dor.mo.gov/forms/Driver%20Guide.pdf#page=53"
  },
  {
    question: "What is hydroplaning? (Q114)",
    choices: ["Driving through snow", "Sliding on a thin water layer", "Skidding on gravel", "None of the above"],
    answer: "Sliding on a thin water layer",
    reference: "https://dor.mo.gov/forms/Driver%20Guide.pdf#page=65"
  },
  {
    question: "What should you do if your accelerator sticks? (Q115)",
    choices: ["Use emergency brake", "Shift to neutral and brake", "Turn off engine", "Honk continuously"],
    answer: "Shift to neutral and brake",
    reference: "https://dor.mo.gov/forms/Driver%20Guide.pdf#page=67"
  },
  {
    question: "When is passing allowed on a two-lane road? (Q116)",
    choices: ["Anytime", "Only in residential zones", "When broken yellow line is on your side", "When no cars are present"],
    answer: "When broken yellow line is on your side",
    reference: "https://dor.mo.gov/forms/Driver%20Guide.pdf#page=43"
  },
  {
    question: "What shape is a stop sign? (Q117)",
    choices: ["Circle", "Octagon", "Triangle", "Rectangle"],
    answer: "Octagon",
    reference: "https://dor.mo.gov/forms/Driver%20Guide.pdf#page=36"
  },
  {
    question: "What does a green arrow mean? (Q118)",
    choices: ["Stop", "Yield", "Go in direction of arrow", "Slow"],
    answer: "Go in direction of arrow",
    reference: "https://dor.mo.gov/forms/Driver%20Guide.pdf#page=37"
  },
  {
    question: "How many feet before turning should you signal? (Q119)",
    choices: ["25 feet", "50 feet", "100 feet", "200 feet"],
    answer: "100 feet",
    reference: "https://dor.mo.gov/forms/Driver%20Guide.pdf#page=48"
  },
  {
    question: "When can you turn right on red in Missouri? (Q120)",
    choices: ["Never", "Always", "Only after full stop and yielding", "Only when a cop waves you through"],
    answer: "Only after full stop and yielding",
    reference: "https://dor.mo.gov/forms/Driver%20Guide.pdf#page=38"
  },
  {
    question: "What does a flashing red traffic light mean? (Q121)",
    choices: ["Yield", "Stop completely, then proceed when safe", "Go with caution", "None of the above"],
    answer: "Stop completely, then proceed when safe",
    reference: "https://dor.mo.gov/forms/Driver%20Guide.pdf#page=38"
  },
  {
    question: "At what BAC are you considered intoxicated in Missouri if under 21? (Q122)",
    choices: ["0.08%", "0.05%", "0.02%", "0.10%"],
    answer: "0.02%",
    reference: "https://dor.mo.gov/forms/Driver%20Guide.pdf#page=75"
  },
  {
    question: "What does a yellow traffic signal mean? (Q123)",
    choices: ["Speed up to beat red", "Stop if safe to do so", "Go", "Turn around"],
    answer: "Stop if safe to do so",
    reference: "https://dor.mo.gov/forms/Driver%20Guide.pdf#page=37"
  },
  {
    question: "When must you use headlights? (Q124)",
    choices: ["Only at night", "From sunset to sunrise or in low visibility", "Only on highways", "Only when raining"],
    answer: "From sunset to sunrise or in low visibility",
    reference: "https://dor.mo.gov/forms/Driver%20Guide.pdf#page=61"
  },
  {
    question: "What should you do for a stopped school bus with flashing red lights? (Q125)",
    choices: ["Pass quickly", "Slow down", "Stop until lights stop flashing", "Honk and go around"],
    answer: "Stop until lights stop flashing",
    reference: "https://dor.mo.gov/forms/Driver%20Guide.pdf#page=44"
  },
  {
    question: "What is the speed limit in a school zone? (Q126)",
    choices: ["15 mph", "25 mph", "30 mph", "20 mph"],
    answer: "20 mph",
    reference: "https://dor.mo.gov/forms/Driver%20Guide.pdf#page=46"
  },
  {
    question: "What does a yield sign mean? (Q127)",
    choices: ["Stop completely", "Proceed without stopping", "Slow and give way if needed", "Go faster"],
    answer: "Slow and give way if needed",
    reference: "https://dor.mo.gov/forms/Driver%20Guide.pdf#page=36"
  },
  {
    question: "How far must you park from a fire hydrant? (Q128)",
    choices: ["10 feet", "15 feet", "20 feet", "5 feet"],
    answer: "15 feet",
    reference: "https://dor.mo.gov/forms/Driver%20Guide.pdf#page=53"
  },
  {
    question: "What is hydroplaning? (Q129)",
    choices: ["Driving through snow", "Sliding on a thin water layer", "Skidding on gravel", "None of the above"],
    answer: "Sliding on a thin water layer",
    reference: "https://dor.mo.gov/forms/Driver%20Guide.pdf#page=65"
  },
  {
    question: "What should you do if your accelerator sticks? (Q130)",
    choices: ["Use emergency brake", "Shift to neutral and brake", "Turn off engine", "Honk continuously"],
    answer: "Shift to neutral and brake",
    reference: "https://dor.mo.gov/forms/Driver%20Guide.pdf#page=67"
  },
  {
    question: "When is passing allowed on a two-lane road? (Q131)",
    choices: ["Anytime", "Only in residential zones", "When broken yellow line is on your side", "When no cars are present"],
    answer: "When broken yellow line is on your side",
    reference: "https://dor.mo.gov/forms/Driver%20Guide.pdf#page=43"
  },
  {
    question: "What shape is a stop sign? (Q132)",
    choices: ["Circle", "Octagon", "Triangle", "Rectangle"],
    answer: "Octagon",
    reference: "https://dor.mo.gov/forms/Driver%20Guide.pdf#page=36"
  },
  {
    question: "What does a green arrow mean? (Q133)",
    choices: ["Stop", "Yield", "Go in direction of arrow", "Slow"],
    answer: "Go in direction of arrow",
    reference: "https://dor.mo.gov/forms/Driver%20Guide.pdf#page=37"
  },
  {
    question: "How many feet before turning should you signal? (Q134)",
    choices: ["25 feet", "50 feet", "100 feet", "200 feet"],
    answer: "100 feet",
    reference: "https://dor.mo.gov/forms/Driver%20Guide.pdf#page=48"
  },
  {
    question: "When can you turn right on red in Missouri? (Q135)",
    choices: ["Never", "Always", "Only after full stop and yielding", "Only when a cop waves you through"],
    answer: "Only after full stop and yielding",
    reference: "https://dor.mo.gov/forms/Driver%20Guide.pdf#page=38"
  },
  {
    question: "What does a flashing red traffic light mean? (Q136)",
    choices: ["Yield", "Stop completely, then proceed when safe", "Go with caution", "None of the above"],
    answer: "Stop completely, then proceed when safe",
    reference: "https://dor.mo.gov/forms/Driver%20Guide.pdf#page=38"
  },
  {
    question: "At what BAC are you considered intoxicated in Missouri if under 21? (Q137)",
    choices: ["0.08%", "0.05%", "0.02%", "0.10%"],
    answer: "0.02%",
    reference: "https://dor.mo.gov/forms/Driver%20Guide.pdf#page=75"
  },
  {
    question: "What does a yellow traffic signal mean? (Q138)",
    choices: ["Speed up to beat red", "Stop if safe to do so", "Go", "Turn around"],
    answer: "Stop if safe to do so",
    reference: "https://dor.mo.gov/forms/Driver%20Guide.pdf#page=37"
  },
  {
    question: "When must you use headlights? (Q139)",
    choices: ["Only at night", "From sunset to sunrise or in low visibility", "Only on highways", "Only when raining"],
    answer: "From sunset to sunrise or in low visibility",
    reference: "https://dor.mo.gov/forms/Driver%20Guide.pdf#page=61"
  },
  {
    question: "What should you do for a stopped school bus with flashing red lights? (Q140)",
    choices: ["Pass quickly", "Slow down", "Stop until lights stop flashing", "Honk and go around"],
    answer: "Stop until lights stop flashing",
    reference: "https://dor.mo.gov/forms/Driver%20Guide.pdf#page=44"
  },
  {
    question: "What is the speed limit in a school zone? (Q141)",
    choices: ["15 mph", "25 mph", "30 mph", "20 mph"],
    answer: "20 mph",
    reference: "https://dor.mo.gov/forms/Driver%20Guide.pdf#page=46"
  },
  {
    question: "What does a yield sign mean? (Q142)",
    choices: ["Stop completely", "Proceed without stopping", "Slow and give way if needed", "Go faster"],
    answer: "Slow and give way if needed",
    reference: "https://dor.mo.gov/forms/Driver%20Guide.pdf#page=36"
  },
  {
    question: "How far must you park from a fire hydrant? (Q143)",
    choices: ["10 feet", "15 feet", "20 feet", "5 feet"],
    answer: "15 feet",
    reference: "https://dor.mo.gov/forms/Driver%20Guide.pdf#page=53"
  },
  {
    question: "What is hydroplaning? (Q144)",
    choices: ["Driving through snow", "Sliding on a thin water layer", "Skidding on gravel", "None of the above"],
    answer: "Sliding on a thin water layer",
    reference: "https://dor.mo.gov/forms/Driver%20Guide.pdf#page=65"
  },
  {
    question: "What should you do if your accelerator sticks? (Q145)",
    choices: ["Use emergency brake", "Shift to neutral and brake", "Turn off engine", "Honk continuously"],
    answer: "Shift to neutral and brake",
    reference: "https://dor.mo.gov/forms/Driver%20Guide.pdf#page=67"
  },
  {
    question: "When is passing allowed on a two-lane road? (Q146)",
    choices: ["Anytime", "Only in residential zones", "When broken yellow line is on your side", "When no cars are present"],
    answer: "When broken yellow line is on your side",
    reference: "https://dor.mo.gov/forms/Driver%20Guide.pdf#page=43"
  },
  {
    question: "What shape is a stop sign? (Q147)",
    choices: ["Circle", "Octagon", "Triangle", "Rectangle"],
    answer: "Octagon",
    reference: "https://dor.mo.gov/forms/Driver%20Guide.pdf#page=36"
  },
  {
    question: "What does a green arrow mean? (Q148)",
    choices: ["Stop", "Yield", "Go in direction of arrow", "Slow"],
    answer: "Go in direction of arrow",
    reference: "https://dor.mo.gov/forms/Driver%20Guide.pdf#page=37"
  },
  {
    question: "How many feet before turning should you signal? (Q149)",
    choices: ["25 feet", "50 feet", "100 feet", "200 feet"],
    answer: "100 feet",
    reference: "https://dor.mo.gov/forms/Driver%20Guide.pdf#page=48"
  },
  {
    question: "When can you turn right on red in Missouri? (Q150)",
    choices: ["Never", "Always", "Only after full stop and yielding", "Only when a cop waves you through"],
    answer: "Only after full stop and yielding",
    reference: "https://dor.mo.gov/forms/Driver%20Guide.pdf#page=38"
  },
  {
    question: "What does a flashing red traffic light mean? (Q151)",
    choices: ["Yield", "Stop completely, then proceed when safe", "Go with caution", "None of the above"],
    answer: "Stop completely, then proceed when safe",
    reference: "https://dor.mo.gov/forms/Driver%20Guide.pdf#page=38"
  },
  {
    question: "At what BAC are you considered intoxicated in Missouri if under 21? (Q152)",
    choices: ["0.08%", "0.05%", "0.02%", "0.10%"],
    answer: "0.02%",
    reference: "https://dor.mo.gov/forms/Driver%20Guide.pdf#page=75"
  },
  {
    question: "What does a yellow traffic signal mean? (Q153)",
    choices: ["Speed up to beat red", "Stop if safe to do so", "Go", "Turn around"],
    answer: "Stop if safe to do so",
    reference: "https://dor.mo.gov/forms/Driver%20Guide.pdf#page=37"
  },
  {
    question: "When must you use headlights? (Q154)",
    choices: ["Only at night", "From sunset to sunrise or in low visibility", "Only on highways", "Only when raining"],
    answer: "From sunset to sunrise or in low visibility",
    reference: "https://dor.mo.gov/forms/Driver%20Guide.pdf#page=61"
  },
  {
    question: "What should you do for a stopped school bus with flashing red lights? (Q155)",
    choices: ["Pass quickly", "Slow down", "Stop until lights stop flashing", "Honk and go around"],
    answer: "Stop until lights stop flashing",
    reference: "https://dor.mo.gov/forms/Driver%20Guide.pdf#page=44"
  },
  {
    question: "What is the speed limit in a school zone? (Q156)",
    choices: ["15 mph", "25 mph", "30 mph", "20 mph"],
    answer: "20 mph",
    reference: "https://dor.mo.gov/forms/Driver%20Guide.pdf#page=46"
  },
  {
    question: "What does a yield sign mean? (Q157)",
    choices: ["Stop completely", "Proceed without stopping", "Slow and give way if needed", "Go faster"],
    answer: "Slow and give way if needed",
    reference: "https://dor.mo.gov/forms/Driver%20Guide.pdf#page=36"
  },
  {
    question: "How far must you park from a fire hydrant? (Q158)",
    choices: ["10 feet", "15 feet", "20 feet", "5 feet"],
    answer: "15 feet",
    reference: "https://dor.mo.gov/forms/Driver%20Guide.pdf#page=53"
  },
  {
    question: "What is hydroplaning? (Q159)",
    choices: ["Driving through snow", "Sliding on a thin water layer", "Skidding on gravel", "None of the above"],
    answer: "Sliding on a thin water layer",
    reference: "https://dor.mo.gov/forms/Driver%20Guide.pdf#page=65"
  },
  {
    question: "What should you do if your accelerator sticks? (Q160)",
    choices: ["Use emergency brake", "Shift to neutral and brake", "Turn off engine", "Honk continuously"],
    answer: "Shift to neutral and brake",
    reference: "https://dor.mo.gov/forms/Driver%20Guide.pdf#page=67"
  },
  {
    question: "When is passing allowed on a two-lane road? (Q161)",
    choices: ["Anytime", "Only in residential zones", "When broken yellow line is on your side", "When no cars are present"],
    answer: "When broken yellow line is on your side",
    reference: "https://dor.mo.gov/forms/Driver%20Guide.pdf#page=43"
  },
  {
    question: "What shape is a stop sign? (Q162)",
    choices: ["Circle", "Octagon", "Triangle", "Rectangle"],
    answer: "Octagon",
    reference: "https://dor.mo.gov/forms/Driver%20Guide.pdf#page=36"
  },
  {
    question: "What does a green arrow mean? (Q163)",
    choices: ["Stop", "Yield", "Go in direction of arrow", "Slow"],
    answer: "Go in direction of arrow",
    reference: "https://dor.mo.gov/forms/Driver%20Guide.pdf#page=37"
  },
  {
    question: "How many feet before turning should you signal? (Q164)",
    choices: ["25 feet", "50 feet", "100 feet", "200 feet"],
    answer: "100 feet",
    reference: "https://dor.mo.gov/forms/Driver%20Guide.pdf#page=48"
  },
  {
    question: "When can you turn right on red in Missouri? (Q165)",
    choices: ["Never", "Always", "Only after full stop and yielding", "Only when a cop waves you through"],
    answer: "Only after full stop and yielding",
    reference: "https://dor.mo.gov/forms/Driver%20Guide.pdf#page=38"
  },
  {
    question: "What does a flashing red traffic light mean? (Q166)",
    choices: ["Yield", "Stop completely, then proceed when safe", "Go with caution", "None of the above"],
    answer: "Stop completely, then proceed when safe",
    reference: "https://dor.mo.gov/forms/Driver%20Guide.pdf#page=38"
  },
  {
    question: "At what BAC are you considered intoxicated in Missouri if under 21? (Q167)",
    choices: ["0.08%", "0.05%", "0.02%", "0.10%"],
    answer: "0.02%",
    reference: "https://dor.mo.gov/forms/Driver%20Guide.pdf#page=75"
  },
  {
    question: "What does a yellow traffic signal mean? (Q168)",
    choices: ["Speed up to beat red", "Stop if safe to do so", "Go", "Turn around"],
    answer: "Stop if safe to do so",
    reference: "https://dor.mo.gov/forms/Driver%20Guide.pdf#page=37"
  },
  {
    question: "When must you use headlights? (Q169)",
    choices: ["Only at night", "From sunset to sunrise or in low visibility", "Only on highways", "Only when raining"],
    answer: "From sunset to sunrise or in low visibility",
    reference: "https://dor.mo.gov/forms/Driver%20Guide.pdf#page=61"
  },
  {
    question: "What should you do for a stopped school bus with flashing red lights? (Q170)",
    choices: ["Pass quickly", "Slow down", "Stop until lights stop flashing", "Honk and go around"],
    answer: "Stop until lights stop flashing",
    reference: "https://dor.mo.gov/forms/Driver%20Guide.pdf#page=44"
  },
  {
    question: "What is the speed limit in a school zone? (Q171)",
    choices: ["15 mph", "25 mph", "30 mph", "20 mph"],
    answer: "20 mph",
    reference: "https://dor.mo.gov/forms/Driver%20Guide.pdf#page=46"
  },
  {
    question: "What does a yield sign mean? (Q172)",
    choices: ["Stop completely", "Proceed without stopping", "Slow and give way if needed", "Go faster"],
    answer: "Slow and give way if needed",
    reference: "https://dor.mo.gov/forms/Driver%20Guide.pdf#page=36"
  },
  {
    question: "How far must you park from a fire hydrant? (Q173)",
    choices: ["10 feet", "15 feet", "20 feet", "5 feet"],
    answer: "15 feet",
    reference: "https://dor.mo.gov/forms/Driver%20Guide.pdf#page=53"
  },
  {
    question: "What is hydroplaning? (Q174)",
    choices: ["Driving through snow", "Sliding on a thin water layer", "Skidding on gravel", "None of the above"],
    answer: "Sliding on a thin water layer",
    reference: "https://dor.mo.gov/forms/Driver%20Guide.pdf#page=65"
  },
  {
    question: "What should you do if your accelerator sticks? (Q175)",
    choices: ["Use emergency brake", "Shift to neutral and brake", "Turn off engine", "Honk continuously"],
    answer: "Shift to neutral and brake",
    reference: "https://dor.mo.gov/forms/Driver%20Guide.pdf#page=67"
  },
  {
    question: "When is passing allowed on a two-lane road? (Q176)",
    choices: ["Anytime", "Only in residential zones", "When broken yellow line is on your side", "When no cars are present"],
    answer: "When broken yellow line is on your side",
    reference: "https://dor.mo.gov/forms/Driver%20Guide.pdf#page=43"
  },
  {
    question: "What shape is a stop sign? (Q177)",
    choices: ["Circle", "Octagon", "Triangle", "Rectangle"],
    answer: "Octagon",
    reference: "https://dor.mo.gov/forms/Driver%20Guide.pdf#page=36"
  },
  {
    question: "What does a green arrow mean? (Q178)",
    choices: ["Stop", "Yield", "Go in direction of arrow", "Slow"],
    answer: "Go in direction of arrow",
    reference: "https://dor.mo.gov/forms/Driver%20Guide.pdf#page=37"
  },
  {
    question: "How many feet before turning should you signal? (Q179)",
    choices: ["25 feet", "50 feet", "100 feet", "200 feet"],
    answer: "100 feet",
    reference: "https://dor.mo.gov/forms/Driver%20Guide.pdf#page=48"
  },
  {
    question: "When can you turn right on red in Missouri? (Q180)",
    choices: ["Never", "Always", "Only after full stop and yielding", "Only when a cop waves you through"],
    answer: "Only after full stop and yielding",
    reference: "https://dor.mo.gov/forms/Driver%20Guide.pdf#page=38"
  },
  {
    question: "What does a flashing red traffic light mean? (Q181)",
    choices: ["Yield", "Stop completely, then proceed when safe", "Go with caution", "None of the above"],
    answer: "Stop completely, then proceed when safe",
    reference: "https://dor.mo.gov/forms/Driver%20Guide.pdf#page=38"
  },
  {
    question: "At what BAC are you considered intoxicated in Missouri if under 21? (Q182)",
    choices: ["0.08%", "0.05%", "0.02%", "0.10%"],
    answer: "0.02%",
    reference: "https://dor.mo.gov/forms/Driver%20Guide.pdf#page=75"
  },
  {
    question: "What does a yellow traffic signal mean? (Q183)",
    choices: ["Speed up to beat red", "Stop if safe to do so", "Go", "Turn around"],
    answer: "Stop if safe to do so",
    reference: "https://dor.mo.gov/forms/Driver%20Guide.pdf#page=37"
  },
  {
    question: "When must you use headlights? (Q184)",
    choices: ["Only at night", "From sunset to sunrise or in low visibility", "Only on highways", "Only when raining"],
    answer: "From sunset to sunrise or in low visibility",
    reference: "https://dor.mo.gov/forms/Driver%20Guide.pdf#page=61"
  },
  {
    question: "What should you do for a stopped school bus with flashing red lights? (Q185)",
    choices: ["Pass quickly", "Slow down", "Stop until lights stop flashing", "Honk and go around"],
    answer: "Stop until lights stop flashing",
    reference: "https://dor.mo.gov/forms/Driver%20Guide.pdf#page=44"
  },
  {
    question: "What is the speed limit in a school zone? (Q186)",
    choices: ["15 mph", "25 mph", "30 mph", "20 mph"],
    answer: "20 mph",
    reference: "https://dor.mo.gov/forms/Driver%20Guide.pdf#page=46"
  },
  {
    question: "What does a yield sign mean? (Q187)",
    choices: ["Stop completely", "Proceed without stopping", "Slow and give way if needed", "Go faster"],
    answer: "Slow and give way if needed",
    reference: "https://dor.mo.gov/forms/Driver%20Guide.pdf#page=36"
  },
  {
    question: "How far must you park from a fire hydrant? (Q188)",
    choices: ["10 feet", "15 feet", "20 feet", "5 feet"],
    answer: "15 feet",
    reference: "https://dor.mo.gov/forms/Driver%20Guide.pdf#page=53"
  },
  {
    question: "What is hydroplaning? (Q189)",
    choices: ["Driving through snow", "Sliding on a thin water layer", "Skidding on gravel", "None of the above"],
    answer: "Sliding on a thin water layer",
    reference: "https://dor.mo.gov/forms/Driver%20Guide.pdf#page=65"
  },
  {
    question: "What should you do if your accelerator sticks? (Q190)",
    choices: ["Use emergency brake", "Shift to neutral and brake", "Turn off engine", "Honk continuously"],
    answer: "Shift to neutral and brake",
    reference: "https://dor.mo.gov/forms/Driver%20Guide.pdf#page=67"
  },
  {
    question: "When is passing allowed on a two-lane road? (Q191)",
    choices: ["Anytime", "Only in residential zones", "When broken yellow line is on your side", "When no cars are present"],
    answer: "When broken yellow line is on your side",
    reference: "https://dor.mo.gov/forms/Driver%20Guide.pdf#page=43"
  },
  {
    question: "What shape is a stop sign? (Q192)",
    choices: ["Circle", "Octagon", "Triangle", "Rectangle"],
    answer: "Octagon",
    reference: "https://dor.mo.gov/forms/Driver%20Guide.pdf#page=36"
  },
  {
    question: "What does a green arrow mean? (Q193)",
    choices: ["Stop", "Yield", "Go in direction of arrow", "Slow"],
    answer: "Go in direction of arrow",
    reference: "https://dor.mo.gov/forms/Driver%20Guide.pdf#page=37"
  },
  {
    question: "How many feet before turning should you signal? (Q194)",
    choices: ["25 feet", "50 feet", "100 feet", "200 feet"],
    answer: "100 feet",
    reference: "https://dor.mo.gov/forms/Driver%20Guide.pdf#page=48"
  },
  {
    question: "When can you turn right on red in Missouri? (Q195)",
    choices: ["Never", "Always", "Only after full stop and yielding", "Only when a cop waves you through"],
    answer: "Only after full stop and yielding",
    reference: "https://dor.mo.gov/forms/Driver%20Guide.pdf#page=38"
  },
  {
    question: "What does a flashing red traffic light mean? (Q196)",
    choices: ["Yield", "Stop completely, then proceed when safe", "Go with caution", "None of the above"],
    answer: "Stop completely, then proceed when safe",
    reference: "https://dor.mo.gov/forms/Driver%20Guide.pdf#page=38"
  },
  {
    question: "At what BAC are you considered intoxicated in Missouri if under 21? (Q197)",
    choices: ["0.08%", "0.05%", "0.02%", "0.10%"],
    answer: "0.02%",
    reference: "https://dor.mo.gov/forms/Driver%20Guide.pdf#page=75"
  },
  {
    question: "What does a yellow traffic signal mean? (Q198)",
    choices: ["Speed up to beat red", "Stop if safe to do so", "Go", "Turn around"],
    answer: "Stop if safe to do so",
    reference: "https://dor.mo.gov/forms/Driver%20Guide.pdf#page=37"
  },
  {
    question: "When must you use headlights? (Q199)",
    choices: ["Only at night", "From sunset to sunrise or in low visibility", "Only on highways", "Only when raining"],
    answer: "From sunset to sunrise or in low visibility",
    reference: "https://dor.mo.gov/forms/Driver%20Guide.pdf#page=61"
  },
  {
    question: "What should you do for a stopped school bus with flashing red lights? (Q200)",
    choices: ["Pass quickly", "Slow down", "Stop until lights stop flashing", "Honk and go around"],
    answer: "Stop until lights stop flashing",
    reference: "https://dor.mo.gov/forms/Driver%20Guide.pdf#page=44"
  },
];
