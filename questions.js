const allQuestions = [
  {
    "question": "At what age can you apply for an instruction permit in Missouri? (Chapter 1)",
    "choices": ["14 years old", "15 years old", "16 years old", "18 years old"],
    "answer": "15 years old",
    "reference": "https://dor.mo.gov/driver-license/guide/#chapter1"
  },
  {
    "question": "How long do new Missouri residents have to obtain a Missouri driver license? (Chapter 1)",
    "choices": ["15 days", "30 days", "60 days", "90 days"],
    "answer": "30 days",
    "reference": "https://dor.mo.gov/driver-license/guide/#chapter1"
  },
  {
    "question": "Which of the following is NOT required to apply for a Missouri driver license? (Chapter 1)",
    "choices": ["Proof of identity", "Social Security number", "Proof of Missouri residency", "Proof of vehicle ownership"],
    "answer": "Proof of vehicle ownership",
    "reference": "https://dor.mo.gov/driver-license/guide/#chapter1"
  },
  {
    "question": "What type of license is issued to drivers under 18 with restricted privileges? (Chapter 1)",
    "choices": ["Instruction Permit", "Intermediate License", "Full Driver License", "Commercial License"],
    "answer": "Intermediate License",
    "reference": "https://dor.mo.gov/driver-license/guide/#chapter1"
  },
  {
    "question": "What is the minimum age to apply for a motorcycle instruction permit in Missouri? (Chapter 1)",
    "choices": ["14 years old", "15½ years old", "16 years old", "18 years old"],
    "answer": "15½ years old",
    "reference": "https://dor.mo.gov/driver-license/guide/#chapter1"
  },
  {
    "question": "How long before expiration can you renew your Missouri driver license? (Chapter 1)",
    "choices": ["1 month", "3 months", "6 months", "12 months"],
    "answer": "6 months",
    "reference": "https://dor.mo.gov/driver-license/guide/#chapter1"
  },
  {
    "question": "What happens if your Missouri driver license has been expired for more than six months? (Chapter 1)",
    "choices": ["You can renew it online", "You must retake all tests", "You pay a late fee only", "You get a temporary license"],
    "answer": "You must retake all tests",
    "reference": "https://dor.mo.gov/driver-license/guide/#chapter1"
  },
  {
    "question": "Which of the following is a valid reason for exemption from needing a Missouri driver license? (Chapter 1)",
    "choices": ["Full-time student with out-of-state license", "Tourist visiting Missouri", "Anyone under 16 years old", "Residents with a learner's permit"],
    "answer": "Full-time student with out-of-state license",
    "reference": "https://dor.mo.gov/driver-license/guide/#chapter1"
  },
  {
    "question": "What is the purpose of the 'DHH' notation on a Missouri driver license? (Chapter 1)",
    "choices": ["Designates a commercial driver", "Indicates a deaf or hard of hearing driver", "Shows a driver with a medical condition", "Marks a driver under 18"],
    "answer": "Indicates a deaf or hard of hearing driver",
    "reference": "https://dor.mo.gov/driver-license/guide/#chapter1"
  },
  {
    "question": "What is required to obtain a For-Hire License (Class E) in Missouri? (Chapter 1)",
    "choices": ["Be at least 18 years old", "Pass a written test only", "Have a commercial driver license", "Transport passengers or goods for pay"],
    "answer": "Transport passengers or goods for pay",
    "reference": "https://dor.mo.gov/driver-license/guide/#chapter1"
  },
  {
    "question": "How many questions are on the Missouri written driver exam? (Chapter 2)",
    "choices": ["20", "25", "30", "35"],
    "answer": "25",
    "reference": "https://dor.mo.gov/driver-license/guide/#chapter2"
  },
  {
    "question": "What is the minimum passing score for the written driver exam in Missouri? (Chapter 2)",
    "choices": ["15 correct", "18 correct", "20 correct", "22 correct"],
    "answer": "20 correct",
    "reference": "https://dor.mo.gov/driver-license/guide/#chapter2"
  },
  {
    "question": "What is the minimum vision acuity required to pass the Missouri vision test? (Chapter 2)",
    "choices": ["20/20", "20/30", "20/40", "20/50"],
    "answer": "20/40",
    "reference": "https://dor.mo.gov/driver-license/guide/#chapter2"
  },
  {
    "question": "Which test requires identifying traffic signs by shape, color, or symbol? (Chapter 2)",
    "choices": ["Written test", "Vision test", "Road sign test", "Driving skills test"],
    "answer": "Road sign test",
    "reference": "https://dor.mo.gov/driver-license/guide/#chapter2"
  },
  {
    "question": "What does the driving skills test evaluate? (Chapter 2)",
    "choices": ["Knowledge of traffic laws", "Ability to identify signs", "Control, observation, and adherence to traffic laws", "Vision acuity"],
    "answer": "Control, observation, and adherence to traffic laws",
    "reference": "https://dor.mo.gov/driver-license/guide/#chapter2"
  },
  {
    "question": "Which of the following is a common reason for failing the Missouri driving test? (Chapter 2)",
    "choices": ["Failing to yield", "Not knowing traffic signs", "Poor vision", "Not wearing a seatbelt"],
    "answer": "Failing to yield",
    "reference": "https://dor.mo.gov/driver-license/guide/#chapter2"
  },
  {
    "question": "How many times can you take the written test before needing to wait 7 days? (Chapter 2)",
    "choices": ["2 times", "3 times", "4 times", "5 times"],
    "answer": "3 times",
    "reference": "https://dor.mo.gov/driver-license/guide/#chapter2"
  },
  {
    "question": "What should you do if you fail the driving skills test? (Chapter 2)",
    "choices": ["Retake immediately", "Wait 7 days before retaking", "Wait 30 days before retaking", "You cannot retake"],
    "answer": "Wait 7 days before retaking",
    "reference": "https://dor.mo.gov/driver-license/guide/#chapter2"
  },
  {
    "question": "Is the road sign test required for all driver license applicants? (Chapter 2)",
    "choices": ["Yes", "No", "Only for commercial licenses", "Only for motorcycle licenses"],
    "answer": "Yes",
    "reference": "https://dor.mo.gov/driver-license/guide/#chapter2"
  },
  {
    "question": "What is the purpose of the vision test during the driver examination? (Chapter 2)",
    "choices": ["To check color blindness", "To ensure minimum visual acuity", "To test peripheral vision", "To test night vision"],
    "answer": "To ensure minimum visual acuity",
    "reference": "https://dor.mo.gov/driver-license/guide/#chapter2"
  },
  {
    "question": "Who must you always yield the right-of-way to at intersections? (Chapter 3)",
    "choices": ["Vehicles on your left", "Pedestrians in crosswalks", "Vehicles behind you", "Vehicles turning right"],
    "answer": "Pedestrians in crosswalks",
    "reference": "https://dor.mo.gov/driver-license/guide/#chapter3"
  },
  {
    "question": "What should you do when an emergency vehicle with flashing lights approaches? (Chapter 3)",
    "choices": ["Speed up to clear the way", "Stop immediately in your lane", "Pull over and stop", "Ignore and continue driving"],
    "answer": "Pull over and stop",
    "reference": "https://dor.mo.gov/driver-license/guide/#chapter3"
  },
  {
    "question": "What is the typical speed limit in urban areas unless otherwise posted? (Chapter 3)",
    "choices": ["15-20 mph", "25-35 mph", "40-50 mph", "55-65 mph"],
    "answer": "25-35 mph",
    "reference": "https://dor.mo.gov/driver-license/guide/#chapter3"
  },
  {
    "question": "What does a flashing red traffic light mean? (Chapter 3)",
    "choices": ["Stop completely, then proceed when safe", "Slow down and proceed with caution", "Stop only if other vehicles are present", "Traffic light is malfunctioning"],
    "answer": "Stop completely, then proceed when safe",
    "reference": "https://dor.mo.gov/driver-license/guide/#chapter3"
  },
  {
    "question": "When is it legal to pass another vehicle on the right? (Chapter 3)",
    "choices": ["On a one-way street", "When the vehicle ahead is turning left", "On a two-lane road", "Never"],
    "answer": "When the vehicle ahead is turning left",
    "reference": "https://dor.mo.gov/driver-license/guide/#chapter3"
  },
  {
    "question": "How close can you park to a fire hydrant? (Chapter 3)",
    "choices": ["5 feet", "10 feet", "15 feet", "20 feet"],
    "answer": "15 feet",
    "reference": "https://dor.mo.gov/driver-license/guide/#chapter3"
  },
  {
    "question": "What is the minimum distance you must signal before making a turn? (Chapter 3)",
    "choices": ["50 feet", "100 feet", "150 feet", "200 feet"],
    "answer": "100 feet",
    "reference": "https://dor.mo.gov/driver-license/guide/#chapter3"
  },
  {
    "question": "When must you use your headlights in Missouri? (Chapter 3)",
    "choices": ["From sunset to sunrise", "Only in fog", "Only on highways", "When visibility is less than 500 feet"],
    "answer": "From sunset to sunrise",
    "reference": "https://dor.mo.gov/driver-license/guide/#chapter3"
  },
  {
    "question": "What should you do if you miss your exit on a highway? (Chapter 3)",
    "choices": ["Back up carefully", "Make a U-turn", "Go to the next exit", "Stop and ask for directions"],
    "answer": "Go to the next exit",
    "reference": "https://dor.mo.gov/driver-license/guide/#chapter3"
  },
  {
    "question": "What is the legal blood alcohol concentration (BAC) limit for drivers over 21 in Missouri? (Chapter 3)",
    "choices": ["0.02%", "0.05%", "0.08%", "0.10%"],
    "answer": "0.08%",
    "reference": "https://dor.mo.gov/driver-license/guide/#chapter3"
  },
  {
    "question": "How close must you pass a bicyclist on the road? (Chapter 4)",
    "choices": ["1 foot", "3 feet", "5 feet", "10 feet"],
    "answer": "3 feet",
    "reference": "https://dor.mo.gov/driver-license/guide/#chapter4"
  },
  {
    "question": "Where should bicyclists ride on the road? (Chapter 4)",
    "choices": ["In the middle of the lane", "As close to the right side as possible", "On the sidewalk", "Anywhere on the road"],
    "answer": "As close to the right side as possible",
    "reference": "https://dor.mo.gov/driver-license/guide/#chapter4"
  },
  {
    "question": "Are motorcycles allowed to share lanes with other vehicles? (Chapter 4)",
    "choices": ["Yes", "No", "Only in traffic jams", "Only on highways"],
    "answer": "No",
    "reference": "https://dor.mo.gov/driver-license/guide/#chapter4"
  },
  {
    "question": "What must you do when a school bus has flashing red lights and an extended stop arm? (Chapter 4)",
    "choices": ["Slow down and pass carefully", "Stop regardless of your direction", "Stop only if you are behind the bus", "Ignore and continue driving"],
    "answer": "Stop regardless of your direction",
    "reference": "https://dor.mo.gov/driver-license/guide/#chapter4"
  },
  {
    "question": "When must you yield to pedestrians? (Chapter 4)",
    "choices": ["Only at marked crosswalks", "Only at traffic signals", "At all crosswalks, marked or unmarked", "Only when they are in your lane"],
    "answer": "At all crosswalks, marked or unmarked",
    "reference": "https://dor.mo.gov/driver-license/guide/#chapter4"
  },
  {
    "question": "What is the penalty for passing a stopped school bus with flashing red lights? (Chapter 4)",
    "choices": ["Fine and points on license", "Warning only", "No penalty", "License suspension"],
    "answer": "Fine and points on license",
    "reference": "https://dor.mo.gov/driver-license/guide/#chapter4"
  },
  {
    "question": "What should you do when approaching a pedestrian with a white cane or guide dog? (Chapter 4)",
    "choices": ["Stop and yield the right-of-way", "Honk to alert them", "Speed up to pass quickly", "Ignore and continue driving"],
    "answer": "Stop and yield the right-of-way",
    "reference": "https://dor.mo.gov/driver-license/guide/#chapter4"
  },
  {
    "question": "Are drivers required to share the road with motorcycles? (Chapter 4)",
    "choices": ["Yes, motorcycles are entitled to a full lane", "No, motorcycles must share lanes", "Only on highways", "Only in urban areas"],
    "answer": "Yes, motorcycles are entitled to a full lane",
    "reference": "https://dor.mo.gov/driver-license/guide/#chapter4"
  },
  {
    "question": "What is the recommended action when driving near large trucks? (Chapter 4)",
    "choices": ["Stay close to their rear", "Avoid their blind spots", "Pass on the right only", "Honk to alert them"],
    "answer": "Avoid their blind spots",
    "reference": "https://dor.mo.gov/driver-license/guide/#chapter4"
  },
  {
    "question": "What should you do when entering a crosswalk with pedestrians present? (Chapter 4)",
    "choices": ["Stop and wait for them to cross", "Speed up to pass quickly", "Honk to warn them", "Drive around them"],
    "answer": "Stop and wait for them to cross",
    "reference": "https://dor.mo.gov/driver-license/guide/#chapter4"
  },
  {
    "question": "How close can you legally park to a fire hydrant in Missouri? (Chapter 5)",
    "choices": ["5 feet", "10 feet", "15 feet", "20 feet"],
    "answer": "15 feet",
    "reference": "https://dor.mo.gov/driver-license/guide/#chapter5"
  },
  {
    "question": "Where is parking prohibited? (Chapter 5)",
    "choices": ["Within 20 feet of a crosswalk", "On bridges and overpasses", "In front of driveways", "All of the above"],
    "answer": "All of the above",
    "reference": "https://dor.mo.gov/driver-license/guide/#chapter5"
  },
  {
    "question": "When parallel parking, how close should your vehicle be to the curb? (Chapter 5)",
    "choices": ["Within 6 inches", "Within 12 inches", "Within 18 inches", "Within 24 inches"],
    "answer": "Within 12 inches",
    "reference": "https://dor.mo.gov/driver-license/guide/#chapter5"
  },
  {
    "question": "Who is allowed to park in handicapped parking spaces? (Chapter 5)",
    "choices": ["Anyone with a valid driver license", "Only vehicles with a valid disabled placard or plate", "Only government vehicles", "Only residents of the building"],
    "answer": "Only vehicles with a valid disabled placard or plate",
    "reference": "https://dor.mo.gov/driver-license/guide/#chapter5"
  },
  {
    "question": "Is it legal to park on a sidewalk? (Chapter 5)",
    "choices": ["Yes, if no obstruction", "No", "Only for loading/unloading", "Only during certain hours"],
    "answer": "No",
    "reference": "https://dor.mo.gov/driver-license/guide/#chapter5"
  },
  {
    "question": "How far must you park from a crosswalk at an intersection? (Chapter 5)",
    "choices": ["10 feet", "15 feet", "20 feet", "25 feet"],
    "answer": "20 feet",
    "reference": "https://dor.mo.gov/driver-license/guide/#chapter5"
  },
  {
    "question": "Is parking allowed on a bridge or overpass? (Chapter 5)",
    "choices": ["Yes, if no traffic", "No", "Only for emergencies", "Only during daylight"],
    "answer": "No",
    "reference": "https://dor.mo.gov/driver-license/guide/#chapter5"
  },
  {
    "question": "What should you do before opening your car door when parked? (Chapter 5)",
    "choices": ["Check for traffic and bicyclists", "Open door immediately", "Honk to alert others", "Open door on the traffic side"],
    "answer": "Check for traffic and bicyclists",
    "reference": "https://dor.mo.gov/driver-license/guide/#chapter5"
  },
  {
    "question": "Is it legal to park in front of a private driveway? (Chapter 5)",
    "choices": ["Yes, if owner permits", "No", "Only for short periods", "Only on weekends"],
    "answer": "No",
    "reference": "https://dor.mo.gov/driver-license/guide/#chapter5"
  },
  {
    "question": "What is the penalty for illegal parking in a handicapped space? (Chapter 5)",
    "choices": ["Fine and possible towing", "Warning only", "No penalty", "License suspension"],
    "answer": "Fine and possible towing",
    "reference": "https://dor.mo.gov/driver-license/guide/#chapter5"
  },
  {
    "question": "What should you do when entering a highway? (Chapter 6)",
    "choices": ["Stop at the end of the acceleration lane", "Use the acceleration lane to match the speed of traffic", "Enter at any speed", "Yield to vehicles on the shoulder"],
    "answer": "Use the acceleration lane to match the speed of traffic",
    "reference": "https://dor.mo.gov/driver-license/guide/#chapter6"
  },
  {
    "question": "When exiting a highway, when should you signal your intention? (Chapter 6)",
    "choices": ["Just before the exit", "At least 100 feet before the exit", "After entering the deceleration lane", "Only if other vehicles are nearby"],
    "answer": "At least 100 feet before the exit",
    "reference": "https://dor.mo.gov/driver-license/guide/#chapter6"
  },
  {
    "question": "What is the recommended minimum following distance on highways under normal conditions? (Chapter 6)",
    "choices": ["1 second", "2 seconds", "3 seconds", "5 seconds"],
    "answer": "3 seconds",
    "reference": "https://dor.mo.gov/driver-license/guide/#chapter6"
  },
  {
    "question": "When is it safe to return to the right lane after passing another vehicle on the highway? (Chapter 6)",
    "choices": ["Immediately after passing", "When you can see the vehicle in your rearview mirror", "After 100 feet", "After signaling for 3 seconds"],
    "answer": "When you can see the vehicle in your rearview mirror",
    "reference": "https://dor.mo.gov/driver-license/guide/#chapter6"
  },
  {
    "question": "What should you do if your vehicle breaks down on the highway? (Chapter 6)",
    "choices": ["Stop in the travel lane", "Move to the shoulder and turn on hazard lights", "Exit the vehicle immediately", "Call for help and wait in the lane"],
    "answer": "Move to the shoulder and turn on hazard lights",
    "reference": "https://dor.mo.gov/driver-license/guide/#chapter6"
  },
  {
    "question": "What is the purpose of a deceleration lane on a highway? (Chapter 6)",
    "choices": ["To speed up before merging", "To slow down before exiting", "To park temporarily", "To pass slower vehicles"],
    "answer": "To slow down before exiting",
    "reference": "https://dor.mo.gov/driver-license/guide/#chapter6"
  },
  {
    "question": "When driving on a highway, what lane should slower vehicles use? (Chapter 6)",
    "choices": ["Left lane", "Center lane", "Right lane", "Any lane"],
    "answer": "Right lane",
    "reference": "https://dor.mo.gov/driver-license/guide/#chapter6"
  },
  {
    "question": "What should you do if you see a 'Merge' sign on the highway? (Chapter 6)",
    "choices": ["Speed up to pass", "Yield to merging traffic", "Stop immediately", "Change lanes quickly"],
    "answer": "Yield to merging traffic",
    "reference": "https://dor.mo.gov/driver-license/guide/#chapter6"
  },
  {
    "question": "Is it legal to pass on the right on a highway? (Chapter 6)",
    "choices": ["Yes, if the vehicle ahead is turning left", "No, never", "Only on two-lane roads", "Only in emergencies"],
    "answer": "Yes, if the vehicle ahead is turning left",
    "reference": "https://dor.mo.gov/driver-license/guide/#chapter6"
  },
  {
    "question": "What is the recommended action when driving in heavy traffic on a highway? (Chapter 6)",
    "choices": ["Tailgate to keep up", "Maintain a safe following distance", "Change lanes frequently", "Use the shoulder to pass"],
    "answer": "Maintain a safe following distance",
    "reference": "https://dor.mo.gov/driver-license/guide/#chapter6"
  },
  {
    "question": "What does a solid yellow line on the road indicate? (Chapter 7)",
    "choices": ["Passing is allowed", "No passing allowed", "Lane separation for same direction", "Stop line"],
    "answer": "No passing allowed",
    "reference": "https://dor.mo.gov/driver-license/guide/#chapter7"
  },
  {
    "question": "What do white dashed lines on the road mean? (Chapter 7)",
    "choices": ["No lane changes", "Lane changes allowed", "Stop line", "Pedestrian crossing"],
    "answer": "Lane changes allowed",
    "reference": "https://dor.mo.gov/driver-license/guide/#chapter7"
  },
  {
    "question": "What should you do when you see a stop line painted on the road? (Chapter 7)",
    "choices": ["Stop before the line", "Stop after the line", "Slow down and proceed", "Ignore the line"],
    "answer": "Stop before the line",
    "reference": "https://dor.mo.gov/driver-license/guide/#chapter7"
  },
  {
    "question": "What color are warning signs typically? (Chapter 7)",
    "choices": ["Red", "Yellow", "Green", "Blue"],
    "answer": "Yellow",
    "reference": "https://dor.mo.gov/driver-license/guide/#chapter7"
  },
  {
    "question": "What does a flashing yellow traffic light mean? (Chapter 7)",
    "choices": ["Stop completely", "Proceed with caution", "Traffic light malfunction", "Speed up"],
    "answer": "Proceed with caution",
    "reference": "https://dor.mo.gov/driver-license/guide/#chapter7"
  },
  {
    "question": "What shape is a railroad crossing sign? (Chapter 7)",
    "choices": ["Octagon", "Circle", "Triangle", "Rectangle"],
    "answer": "Circle",
    "reference": "https://dor.mo.gov/driver-license/guide/#chapter7"
  },
  {
    "question": "What does a green traffic signal mean? (Chapter 7)",
    "choices": ["Stop", "Prepare to stop", "Go if intersection is clear", "Yield"],
    "answer": "Go if intersection is clear",
    "reference": "https://dor.mo.gov/driver-license/guide/#chapter7"
  },
  {
    "question": "What is the meaning of a red arrow traffic signal? (Chapter 7)",
    "choices": ["Stop and do not turn", "Proceed with caution", "Yield to pedestrians", "Turn only if clear"],
    "answer": "Stop and do not turn",
    "reference": "https://dor.mo.gov/driver-license/guide/#chapter7"
  },
  {
    "question": "What color are guide signs that provide directional information? (Chapter 7)",
    "choices": ["Blue", "Green", "Yellow", "Red"],
    "answer": "Green",
    "reference": "https://dor.mo.gov/driver-license/guide/#chapter7"
  },
  {
    "question": "What should you do when you see an orange construction sign? (Chapter 7)",
    "choices": ["Speed up", "Slow down and be cautious", "Ignore it", "Stop immediately"],
    "answer": "Slow down and be cautious",
    "reference": "https://dor.mo.gov/driver-license/guide/#chapter7"
  },
  {
    "question": "What is the minimum following distance recommended under normal driving conditions? (Chapter 8)",
    "choices": ["1 second", "2 seconds", "3 seconds", "5 seconds"],
    "answer": "3 seconds",
    "reference": "https://dor.mo.gov/driver-license/guide/#chapter8"
  },
  {
    "question": "Who is required by Missouri law to wear seat belts? (Chapter 8)",
    "choices": ["Only drivers", "Only front-seat passengers", "All drivers and passengers", "Only passengers under 18"],
    "answer": "All drivers and passengers",
    "reference": "https://dor.mo.gov/driver-license/guide/#chapter8"
  },
  {
    "question": "Children under what age or weight must be secured in a child safety seat or booster? (Chapter 8)",
    "choices": ["Under 6 years or 60 pounds", "Under 8 years or 80 pounds", "Under 10 years or 100 pounds", "Under 12 years or 120 pounds"],
    "answer": "Under 8 years or 80 pounds",
    "reference": "https://dor.mo.gov/driver-license/guide/#chapter8"
  },
  {
    "question": "What should you do before changing lanes? (Chapter 8)",
    "choices": ["Check mirrors only", "Check blind spots by looking over your shoulder", "Signal only", "Honk to alert others"],
    "answer": "Check blind spots by looking over your shoulder",
    "reference": "https://dor.mo.gov/driver-license/guide/#chapter8"
  },
  {
    "question": "When should you adjust your speed below the posted limit? (Chapter 8)",
    "choices": ["Never", "Only in school zones", "During poor weather or heavy traffic", "Only at night"],
    "answer": "During poor weather or heavy traffic",
    "reference": "https://dor.mo.gov/driver-license/guide/#chapter8"
  },
  {
    "question": "What is the best way to avoid distractions while driving? (Chapter 8)",
    "choices": ["Use hands-free devices", "Avoid using electronic devices", "Drive slower", "Use cruise control"],
    "answer": "Avoid using electronic devices",
    "reference": "https://dor.mo.gov/driver-license/guide/#chapter8"
  },
  {
    "question": "What is the proper hand position on the steering wheel? (Chapter 8)",
    "choices": ["10 and 2 o’clock", "9 and 3 o’clock", "12 and 6 o’clock", "8 and 4 o’clock"],
    "answer": "9 and 3 o’clock",
    "reference": "https://dor.mo.gov/driver-license/guide/#chapter8"
  },
  {
    "question": "When should you use your horn? (Chapter 8)",
    "choices": ["To greet friends", "To warn others of danger", "To express frustration", "To signal a turn"],
    "answer": "To warn others of danger",
    "reference": "https://dor.mo.gov/driver-license/guide/#chapter8"
  },
  {
    "question": "What should you do if you feel drowsy while driving? (Chapter 8)",
    "choices": ["Open the window", "Turn on loud music", "Stop and rest", "Drink coffee and continue"],
    "answer": "Stop and rest",
    "reference": "https://dor.mo.gov/driver-license/guide/#chapter8"
  },
  {
    "question": "What is the safest way to handle aggressive drivers? (Chapter 8)",
    "choices": ["Confront them", "Ignore and avoid eye contact", "Speed up to pass", "Honk repeatedly"],
    "answer": "Ignore and avoid eye contact",
    "reference": "https://dor.mo.gov/driver-license/guide/#chapter8"
  },

  // Chapter 9: Safe Driving Tips for Special Driving Conditions
  {
    "question": "When driving at night, when should you use your high beams? (Chapter 9)",
    "choices": ["Always", "Only in rural areas with no oncoming traffic", "In fog", "When following another vehicle"],
    "answer": "Only in rural areas with no oncoming traffic",
    "reference": "https://dor.mo.gov/driver-license/guide/#chapter9"
  },
  {
    "question": "What should you do if your vehicle starts to hydroplane? (Chapter 9)",
    "choices": ["Brake hard", "Steer sharply", "Ease off the accelerator and steer straight", "Speed up"],
    "answer": "Ease off the accelerator and steer straight",
    "reference": "https://dor.mo.gov/driver-license/guide/#chapter9"
  },
  {
    "question": "What is the best way to avoid skidding on icy roads? (Chapter 9)",
    "choices": ["Accelerate quickly", "Brake gently and accelerate slowly", "Turn sharply", "Use cruise control"],
    "answer": "Brake gently and accelerate slowly",
    "reference": "https://dor.mo.gov/driver-license/guide/#chapter9"
  },
  {
    "question": "What type of headlights should you use in fog? (Chapter 9)",
    "choices": ["High beams", "Low beams", "Parking lights", "Hazard lights"],
    "answer": "Low beams",
    "reference": "https://dor.mo.gov/driver-license/guide/#chapter9"
  },
  {
    "question": "If your vehicle breaks down on a highway, what should you do? (Chapter 9)",
    "choices": ["Stop in the travel lane", "Pull off the road and turn on hazard lights", "Exit the vehicle immediately", "Call for help and wait in the lane"],
    "answer": "Pull off the road and turn on hazard lights",
    "reference": "https://dor.mo.gov/driver-license/guide/#chapter9"
  },
  {
    "question": "What should you do when driving in heavy rain? (Chapter 9)",
    "choices": ["Drive at posted speed limit", "Reduce speed to avoid hydroplaning", "Use high beams", "Follow closely behind other vehicles"],
    "answer": "Reduce speed to avoid hydroplaning",
    "reference": "https://dor.mo.gov/driver-license/guide/#chapter9"
  },
  {
    "question": "What is the safest way to drive on mountain roads? (Chapter 9)",
    "choices": ["Use low gear and control speed", "Use high gear", "Brake continuously", "Drive faster downhill"],
    "answer": "Use low gear and control speed",
    "reference": "https://dor.mo.gov/driver-license/guide/#chapter9"
  },
  {
    "question": "When should you increase your following distance? (Chapter 9)",
    "choices": ["In good weather", "In poor weather or on slippery roads", "Only at night", "Only on highways"],
    "answer": "In poor weather or on slippery roads",
    "reference": "https://dor.mo.gov/driver-license/guide/#chapter9"
  },
  {
    "question": "What should you do if your brakes fail while driving? (Chapter 9)",
    "choices": ["Pump the brake pedal", "Turn off the engine", "Use the parking brake immediately", "Shift to neutral"],
    "answer": "Pump the brake pedal",
    "reference": "https://dor.mo.gov/driver-license/guide/#chapter9"
  },
  {
    "question": "What is the best way to handle a tire blowout? (Chapter 9)",
    "choices": ["Brake hard immediately", "Hold the steering wheel firmly and slow down gradually", "Turn sharply off the road", "Accelerate to regain control"],
    "answer": "Hold the steering wheel firmly and slow down gradually",
    "reference": "https://dor.mo.gov/driver-license/guide/#chapter9"
  },

  // Chapter 10: Alcohol, Drugs, and Driving
  {
    "question": "What is the legal BAC limit for drivers over 21 in Missouri? (Chapter 10)",
    "choices": ["0.02%", "0.05%", "0.08%", "0.10%"],
    "answer": "0.08%",
    "reference": "https://dor.mo.gov/driver-license/guide/#chapter10"
  },
  {
    "question": "What is the BAC limit for drivers under 21 in Missouri? (Chapter 10)",
    "choices": ["0.00%", "0.02%", "0.05%", "0.08%"],
    "answer": "0.02%",
    "reference": "https://dor.mo.gov/driver-license/guide/#chapter10"
  },
  {
    "question": "What does Missouri’s Implied Consent Law require? (Chapter 10)",
    "choices": ["Drivers must submit to chemical testing if suspected of DUI", "Drivers must carry insurance", "Drivers must wear seat belts", "Drivers must obey speed limits"],
    "answer": "Drivers must submit to chemical testing if suspected of DUI",
    "reference": "https://dor.mo.gov/driver-license/guide/#chapter10"
  },
  {
    "question": "What is the penalty for a first DUI offense in Missouri? (Chapter 10)",
    "choices": ["No penalty", "90-day license suspension", "1-year jail time", "Permanent license revocation"],
    "answer": "90-day license suspension",
    "reference": "https://dor.mo.gov/driver-license/guide/#chapter10"
  },
  {
    "question": "Is it illegal to drive under the influence of prescription drugs that impair driving? (Chapter 10)",
    "choices": ["Yes", "No", "Only if combined with alcohol", "Only if over the legal limit"],
    "answer": "Yes",
    "reference": "https://dor.mo.gov/driver-license/guide/#chapter10"
  },
  {
    "question": "What is the effect of alcohol on driving skills? (Chapter 10)",
    "choices": ["Improves reaction time", "Impairs judgment and coordination", "No effect", "Improves vision"],
    "answer": "Impairs judgment and coordination",
    "reference": "https://dor.mo.gov/driver-license/guide/#chapter10"
  },
  {
    "question": "What happens if you refuse a chemical test under Missouri’s Implied Consent Law? (Chapter 10)",
    "choices": ["No consequences", "License suspension", "Fine only", "Jail time"],
    "answer": "License suspension",
    "reference": "https://dor.mo.gov/driver-license/guide/#chapter10"
  },
  {
    "question": "Can a driver be charged with DUI if under the influence of drugs? (Chapter 10)",
    "choices": ["Yes", "No", "Only if combined with alcohol", "Only if prescription drugs"],
    "answer": "Yes",
    "reference": "https://dor.mo.gov/driver-license/guide/#chapter10"
  },
  {
    "question": "What is the minimum age for a driver to be charged with DUI in Missouri? (Chapter 10)",
    "choices": ["16", "18", "21", "No minimum age"],
    "answer": "16",
    "reference": "https://dor.mo.gov/driver-license/guide/#chapter10"
  },
  {
    "question": "What is the purpose of Missouri’s zero tolerance law? (Chapter 10)",
    "choices": ["To prevent underage drinking and driving", "To allow some alcohol consumption", "To regulate alcohol sales", "To set speed limits"],
    "answer": "To prevent underage drinking and driving",
    "reference": "https://dor.mo.gov/driver-license/guide/#chapter10"
  },

  // Chapter 11: The Point System
  {
    "question": "How many points are added to your driving record for a DUI conviction? (Chapter 11)",
    "choices": ["3 points", "5 points", "8 points", "10 points"],
    "answer": "8 points",
    "reference": "https://dor.mo.gov/driver-license/guide/#chapter11"
  },
  {
    "question": "What happens if you accumulate 8 points within 18 months? (Chapter 11)",
    "choices": ["No penalty", "30-day license suspension", "License revocation", "Fine only"],
    "answer": "30-day license suspension",
    "reference": "https://dor.mo.gov/driver-license/guide/#chapter11"
  },
  {
    "question": "How are points reduced over time in Missouri? (Chapter 11)",
    "choices": ["Points never reduce", "Reduced by one-third after 1 year", "Reduced by half after 1 year", "Removed after 6 months"],
    "answer": "Reduced by one-third after 1 year",
    "reference": "https://dor.mo.gov/driver-license/guide/#chapter11"
  },
  {
    "question": "How many points are added for speeding? (Chapter 11)",
    "choices": ["1 point", "3 points", "5 points", "7 points"],
    "answer": "3 points",
    "reference": "https://dor.mo.gov/driver-license/guide/#chapter11"
  },
  {
    "question": "What is the consequence of accumulating too many points? (Chapter 11)",
    "choices": ["License suspension or revocation", "Fine only", "Warning letter", "No consequence"],
    "answer": "License suspension or revocation",
    "reference": "https://dor.mo.gov/driver-license/guide/#chapter11"
  },
  {
    "question": "How long does it take for points to be removed from your record? (Chapter 11)",
    "choices": ["6 months", "1 year", "3 years", "5 years"],
    "answer": "3 years",
    "reference": "https://dor.mo.gov/driver-license/guide/#chapter11"
  },
  {
    "question": "Can points be added for failure to yield? (Chapter 11)",
    "choices": ["Yes", "No", "Only for DUI", "Only for speeding"],
    "answer": "Yes",
    "reference": "https://dor.mo.gov/driver-license/guide/#chapter11"
  },
  {
    "question": "What is the purpose of the point system? (Chapter 11)",
    "choices": ["To track traffic violations and enforce penalties", "To reward good drivers", "To calculate insurance rates", "To issue fines"],
    "answer": "To track traffic violations and enforce penalties",
    "reference": "https://dor.mo.gov/driver-license/guide/#chapter11"
  },
  {
    "question": "Are points added for parking violations? (Chapter 11)",
    "choices": ["No", "Yes", "Only for handicapped parking", "Only for illegal parking"],
    "answer": "No",
    "reference": "https://dor.mo.gov/driver-license/guide/#chapter11"
  },
  {
    "question": "What should you do if you receive a notice about points on your license? (Chapter 11)",
    "choices": ["Ignore it", "Contact the DMV", "Attend a driving improvement course", "Pay a fine"],
    "answer": "Attend a driving improvement course",
    "reference": "https://dor.mo.gov/driver-license/guide/#chapter11"
  },

  // Chapter 12: Vehicle Titling and Registration
  {
    "question": "How soon must new Missouri residents apply for vehicle title and registration? (Chapter 12)",
    "choices": ["15 days", "30 days", "60 days", "90 days"],
    "answer": "30 days",
    "reference": "https://dor.mo.gov/driver-license/guide/#chapter12"
  },
  {
    "question": "How often must most vehicles be registered in Missouri? (Chapter 12)",
    "choices": ["Annually", "Every 2 years", "Every 5 years", "Only once"],
    "answer": "Annually",
    "reference": "https://dor.mo.gov/driver-license/guide/#chapter12"
  },
  {
    "question": "What is required before registering a vehicle in certain Missouri counties? (Chapter 12)",
    "choices": ["Safety inspection", "Emissions testing", "Proof of insurance", "All of the above"],
    "answer": "All of the above",
    "reference": "https://dor.mo.gov/driver-license/guide/#chapter12"
  },
  {
    "question": "What document proves ownership of a vehicle? (Chapter 12)",
    "choices": ["Registration", "Title", "Insurance card", "Driver license"],
    "answer": "Title",
    "reference": "https://dor.mo.gov/driver-license/guide/#chapter12"
  },
  {
    "question": "Can you drive a vehicle without registration in Missouri? (Chapter 12)",
    "choices": ["Yes", "No", "Only on private property", "Only for short distances"],
    "answer": "No",
    "reference": "https://dor.mo.gov/driver-license/guide/#chapter12"
  },
  {
    "question": "What must you do if you sell your vehicle? (Chapter 12)",
    "choices": ["Notify the DMV", "Transfer the title", "Remove license plates", "All of the above"],
    "answer": "All of the above",
    "reference": "https://dor.mo.gov/driver-license/guide/#chapter12"
  },
  {
    "question": "What is the penalty for driving an unregistered vehicle? (Chapter 12)",
    "choices": ["Fine", "Vehicle impoundment", "License suspension", "All of the above"],
    "answer": "All of the above",
    "reference": "https://dor.mo.gov/driver-license/guide/#chapter12"
  },
  {
    "question": "What is the purpose of emissions testing? (Chapter 12)",
    "choices": ["Reduce air pollution", "Check vehicle safety", "Verify ownership", "Calculate taxes"],
    "answer": "Reduce air pollution",
    "reference": "https://dor.mo.gov/driver-license/guide/#chapter12"
  },
  {
    "question": "Where must you display your vehicle registration sticker? (Chapter 12)",
    "choices": ["On the windshield", "On the license plate", "Inside the glove box", "On the dashboard"],
    "answer": "On the license plate",
    "reference": "https://dor.mo.gov/driver-license/guide/#chapter12"
  },
  {
    "question": "What is required to register a vehicle in Missouri? (Chapter 12)",
    "choices": ["Proof of ownership", "Proof of insurance", "Payment of fees", "All of the above"],
    "answer": "All of the above",
    "reference": "https://dor.mo.gov/driver-license/guide/#chapter12"
  },

  // Chapter 13: Mandatory Insurance
  {
    "question": "What is the minimum liability insurance coverage required in Missouri? (Chapter 13)",
    "choices": ["$10,000 per person", "$25,000 per person", "$50,000 per accident", "$100,000 per accident"],
    "answer": "$25,000 per person",
    "reference": "https://dor.mo.gov/driver-license/guide/#chapter13"
  },
  {
    "question": "What must drivers carry to prove insurance? (Chapter 13)",
    "choices": ["Insurance card", "Driver license", "Vehicle registration", "Title"],
    "answer": "Insurance card",
    "reference": "https://dor.mo.gov/driver-license/guide/#chapter13"
  },
  {
    "question": "What are the penalties for driving without insurance in Missouri? (Chapter 13)",
    "choices": ["Fines", "License suspension", "Reinstatement fees", "All of the above"],
    "answer": "All of the above",
    "reference": "https://dor.mo.gov/driver-license/guide/#chapter13"
  },
  {
    "question": "Is uninsured motorist coverage required in Missouri? (Chapter 13)",
    "choices": ["Yes", "No", "Only for commercial vehicles", "Only for new drivers"],
    "answer": "Yes",
    "reference": "https://dor.mo.gov/driver-license/guide/#chapter13"
  },
  {
    "question": "What is the purpose of liability insurance? (Chapter 13)",
    "choices": ["Cover damages to others in an accident", "Cover your own vehicle", "Pay for traffic tickets", "Cover medical bills only"],
    "answer": "Cover damages to others in an accident",
    "reference": "https://dor.mo.gov/driver-license/guide/#chapter13"
  },
  {
    "question": "What should you do if you are involved in an accident? (Chapter 13)",
    "choices": ["Exchange insurance information", "Leave the scene", "Call your insurance company", "Both A and C"],
    "answer": "Both A and C",
    "reference": "https://dor.mo.gov/driver-license/guide/#chapter13"
  },
  {
    "question": "Can you drive without insurance if you pay a fee? (Chapter 13)",
    "choices": ["No", "Yes", "Only with a permit", "Only for short distances"],
    "answer": "No",
    "reference": "https://dor.mo.gov/driver-license/guide/#chapter13"
  },
  {
    "question": "What is the minimum property damage coverage required in Missouri? (Chapter 13)",
    "choices": ["$5,000", "$10,000", "$15,000", "$20,000"],
    "answer": "$10,000",
    "reference": "https://dor.mo.gov/driver-license/guide/#chapter13"
  },
  {
    "question": "What happens if you fail to provide proof of insurance when requested by law enforcement? (Chapter 13)",
    "choices": ["Fine", "License suspension", "Both A and B", "No penalty"],
    "answer": "Both A and B",
    "reference": "https://dor.mo.gov/driver-license/guide/#chapter13"
  },
  {
    "question": "Is insurance required for all vehicles operated on Missouri roads? (Chapter 13)",
    "choices": ["Yes", "No", "Only for commercial vehicles", "Only for vehicles over 10 years old"],
    "answer": "Yes",
    "reference": "https://dor.mo.gov/driver-license/guide/#chapter13"
  },

  // Chapter 14: Safety and Emissions Inspections
  {
    "question": "How often must most vehicles pass a safety inspection in Missouri? (Chapter 14)",
    "choices": ["Every year", "Every 2 years", "Every 5 years", "Only when sold"],
    "answer": "Every 2 years",
    "reference": "https://dor.mo.gov/driver-license/guide/#chapter14"
  },
  {
    "question": "Are new vehicles exempt from safety inspections? (Chapter 14)",
    "choices": ["Yes, for 5 years", "No", "Only for electric vehicles", "Only for commercial vehicles"],
    "answer": "Yes, for 5 years",
    "reference": "https://dor.mo.gov/driver-license/guide/#chapter14"
  },
  {
    "question": "What is the purpose of emissions testing? (Chapter 14)",
    "choices": ["Reduce air pollution", "Check vehicle safety", "Verify ownership", "Calculate taxes"],
    "answer": "Reduce air pollution",
    "reference": "https://dor.mo.gov/driver-license/guide/#chapter14"
  },
  {
    "question": "Where must the inspection sticker be displayed? (Chapter 14)",
    "choices": ["On the windshield", "On the license plate", "Inside the glove box", "On the dashboard"],
    "answer": "On the windshield",
    "reference": "https://dor.mo.gov/driver-license/guide/#chapter14"
  },
  {
    "question": "What happens if your vehicle fails the safety inspection? (Chapter 14)",
    "choices": ["You must repair and re-inspect", "You can drive without repairs", "You get a fine", "You lose your license"],
    "answer": "You must repair and re-inspect",
    "reference": "https://dor.mo.gov/driver-license/guide/#chapter14"
  },
  {
    "question": "Are emissions tests required in all Missouri counties? (Chapter 14)",
    "choices": ["No, only in certain counties", "Yes", "Only for diesel vehicles", "Only for commercial vehicles"],
    "answer": "No, only in certain counties",
    "reference": "https://dor.mo.gov/driver-license/guide/#chapter14"
  },
  {
    "question": "What equipment is checked during a safety inspection? (Chapter 14)",
    "choices": ["Brakes, lights, tires", "Engine oil", "Fuel efficiency", "Driver license"],
    "answer": "Brakes, lights, tires",
    "reference": "https://dor.mo.gov/driver-license/guide/#chapter14"
  },
  {
    "question": "Can you drive a vehicle without a valid inspection sticker? (Chapter 14)",
    "choices": ["No", "Yes", "Only on private property", "Only for short distances"],
    "answer": "No",
    "reference": "https://dor.mo.gov/driver-license/guide/#chapter14"
  },
  {
    "question": "What is the penalty for driving without a valid inspection sticker? (Chapter 14)",
    "choices": ["Fine", "Vehicle impoundment", "License suspension", "All of the above"],
    "answer": "Fine",
    "reference": "https://dor.mo.gov/driver-license/guide/#chapter14"
  },
  {
    "question": "Who performs vehicle safety inspections in Missouri? (Chapter 14)",
    "choices": ["Authorized inspection stations", "Police officers", "Insurance agents", "DMV clerks"],
    "answer": "Authorized inspection stations",
    "reference": "https://dor.mo.gov/driver-license/guide/#chapter14"
  },

  // Chapter 15: Commercial Vehicles
  {
    "question": "What is the minimum weight of a vehicle that requires a Commercial Driver License (CDL)? (Chapter 15)",
    "choices": ["10,000 pounds", "15,000 pounds", "26,000 pounds", "30,000 pounds"],
    "answer": "26,000 pounds",
    "reference": "https://dor.mo.gov/driver-license/guide/#chapter15"
  },
  {
    "question": "What endorsement is required to drive a school bus? (Chapter 15)",
    "choices": ["Passenger endorsement", "School bus endorsement", "Hazardous materials endorsement", "Tank vehicle endorsement"],
    "answer": "School bus endorsement",
    "reference": "https://dor.mo.gov/driver-license/guide/#chapter15"
  },
  {
    "question": "What are the federal hours-of-service regulations designed to prevent? (Chapter 15)",
    "choices": ["Fatigue", "Speeding", "Distracted driving", "Vehicle breakdowns"],
    "answer": "Fatigue",
    "reference": "https://dor.mo.gov/driver-license/guide/#chapter15"
  },
  {
    "question": "What is required to obtain a CDL in Missouri? (Chapter 15)",
    "choices": ["Pass written and skills tests", "Only a written test", "Only a skills test", "No test required"],
    "answer": "Pass written and skills tests",
    "reference": "https://dor.mo.gov/driver-license/guide/#chapter15"
  },
  {
    "question": "Can a CDL driver operate a vehicle without the proper endorsement? (Chapter 15)",
    "choices": ["No", "Yes", "Only with permission", "Only for short distances"],
    "answer": "No",
    "reference": "https://dor.mo.gov/driver-license/guide/#chapter15"
  },
  {
    "question": "What is the minimum age to obtain a CDL in Missouri? (Chapter 15)",
    "choices": ["16", "18", "21", "25"],
    "answer": "18",
    "reference": "https://dor.mo.gov/driver-license/guide/#chapter15"
  },
  {
    "question": "What is the penalty for violating hours-of-service regulations? (Chapter 15)",
    "choices": ["Fines and suspension", "Warning", "No penalty", "License revocation"],
    "answer": "Fines and suspension",
    "reference": "https://dor.mo.gov/driver-license/guide/#chapter15"
  },
  {
    "question": "What type of vehicle requires a tank vehicle endorsement? (Chapter 15)",
    "choices": ["Vehicles carrying liquids in tanks", "Vehicles carrying passengers", "Vehicles carrying hazardous materials", "Vehicles over 10,000 pounds"],
    "answer": "Vehicles carrying liquids in tanks",
    "reference": "https://dor.mo.gov/driver-license/guide/#chapter15"
  },
  {
    "question": "What is the purpose of the passenger endorsement? (Chapter 15)",
    "choices": ["To transport passengers legally", "To carry hazardous materials", "To drive tank vehicles", "To operate motorcycles"],
    "answer": "To transport passengers legally",
    "reference": "https://dor.mo.gov/driver-license/guide/#chapter15"
  },
  {
    "question": "Are CDL holders required to follow all traffic laws? (Chapter 15)",
    "choices": ["Yes", "No", "Only on highways", "Only in Missouri"],
    "answer": "Yes",
    "reference": "https://dor.mo.gov/driver-license/guide/#chapter15"
  },

  // Chapter 16: Distracted Driving and Electronic Communication Devices
  {
    "question": "Is texting while driving prohibited for all drivers under 21 in Missouri? (Chapter 16)",
    "choices": ["Yes", "No", "Only for commercial drivers", "Only in school zones"],
    "answer": "Yes",
    "reference": "https://dor.mo.gov/driver-license/guide/#chapter16"
  },
  {
    "question": "Are hands-free devices recommended for drivers over 21? (Chapter 16)",
    "choices": ["Yes", "No", "Only for commercial drivers", "Only in emergencies"],
    "answer": "Yes",
    "reference": "https://dor.mo.gov/driver-license/guide/#chapter16"
  },
  {
    "question": "What is the penalty for texting while driving for drivers under 21? (Chapter 16)",
    "choices": ["Fine and points on license", "Warning only", "No penalty", "License suspension"],
    "answer": "Fine and points on license",
    "reference": "https://dor.mo.gov/driver-license/guide/#chapter16"
  },
  {
    "question": "Can drivers over 21 use handheld devices while driving? (Chapter 16)",
    "choices": ["Yes, but discouraged", "No", "Only in emergencies", "Only on highways"],
    "answer": "Yes, but discouraged",
    "reference": "https://dor.mo.gov/driver-license/guide/#chapter16"
  },
  {
    "question": "What is the safest practice regarding electronic devices while driving? (Chapter 16)",
    "choices": ["Avoid use while driving", "Use hands-free devices", "Text only at stoplights", "Use only for navigation"],
    "answer": "Avoid use while driving",
    "reference": "https://dor.mo.gov/driver-license/guide/#chapter16"
  },
  {
    "question": "Are drivers allowed to watch videos on electronic devices while driving? (Chapter 16)",
    "choices": ["No", "Yes", "Only passengers", "Only on highways"],
    "answer": "No",
    "reference": "https://dor.mo.gov/driver-license/guide/#chapter16"
  },
  {
    "question": "What should you do if you need to use your phone while driving? (Chapter 16)",
    "choices": ["Pull over safely", "Use hands-free device", "Text quickly", "Ignore calls"],
    "answer": "Pull over safely",
    "reference": "https://dor.mo.gov/driver-license/guide/#chapter16"
  },
  {
    "question": "Is it legal to use a handheld phone while driving in Missouri? (Chapter 16)",
    "choices": ["Yes, for drivers over 21", "No", "Only for emergencies", "Only in rural areas"],
    "answer": "Yes, for drivers over 21",
    "reference": "https://dor.mo.gov/driver-license/guide/#chapter16"
  },
  {
    "question": "What is the main danger of distracted driving? (Chapter 16)",
    "choices": ["Increased risk of accidents", "Traffic tickets", "Vehicle damage", "Higher insurance rates"],
    "answer": "Increased risk of accidents",
    "reference": "https://dor.mo.gov/driver-license/guide/#chapter16"
  },
  {
    "question": "What is the best way to stay focused while driving? (Chapter 16)",
    "choices": ["Avoid distractions", "Use cruise control", "Drive slower", "Listen to loud music"],
    "answer": "Avoid distractions",
    "reference": "https://dor.mo.gov/driver-license/guide/#chapter16"
  },
  {
    "question": "What is the minimum age to obtain a full, unrestricted Missouri driver license? (Bonus)",
    "choices": ["16 years old", "17 years old", "18 years old", "21 years old"],
    "answer": "18 years old",
    "reference": "https://dor.mo.gov/driver-license/guide/#chapter1"
  },
  {
    "question": "How long must a driver hold an instruction permit before applying for an intermediate license? (Bonus)",
    "choices": ["3 months", "6 months", "9 months", "12 months"],
    "answer": "6 months",
    "reference": "https://dor.mo.gov/driver-license/guide/#chapter1"
  },
  {
    "question": "What is the maximum speed limit on rural interstates in Missouri unless otherwise posted? (Bonus)",
    "choices": ["55 mph", "60 mph", "65 mph", "70 mph"],
    "answer": "70 mph",
    "reference": "https://dor.mo.gov/driver-license/guide/#chapter3"
  },
  {
    "question": "When must headlights be turned on in Missouri? (Bonus)",
    "choices": ["From sunset to sunrise", "Only in fog", "Only on highways", "When visibility is less than 500 feet"],
    "answer": "From sunset to sunrise",
    "reference": "https://dor.mo.gov/driver-license/guide/#chapter3"
  },
  {
    "question": "What is the penalty for failing to stop for a school bus with flashing red lights? (Bonus)",
    "choices": ["Fine and points on license", "Warning", "No penalty", "License suspension"],
    "answer": "Fine and points on license",
    "reference": "https://dor.mo.gov/driver-license/guide/#chapter4"
  },
  {
    "question": "How far must you stop from a railroad crossing when a train is approaching? (Bonus)",
    "choices": ["10 feet", "15 feet", "20 feet", "50 feet"],
    "answer": "15 feet",
    "reference": "https://dor.mo.gov/driver-license/guide/#chapter7"
  },
  {
    "question": "What does a double solid yellow line mean on a two-lane road? (Bonus)",
    "choices": ["Passing allowed both ways", "Passing allowed one way", "No passing in either direction", "Passing allowed during daylight"],
    "answer": "No passing in either direction",
    "reference": "https://dor.mo.gov/driver-license/guide/#chapter7"
  },
  {
    "question": "What is the proper hand signal for a left turn? (Bonus)",
    "choices": ["Left arm straight out", "Left arm bent upward", "Left arm bent downward", "Right arm straight out"],
    "answer": "Left arm straight out",
    "reference": "https://dor.mo.gov/driver-license/guide/#chapter3"
  },
  {
    "question": "What should you do if you approach a traffic signal that is not working? (Bonus)",
    "choices": ["Stop and proceed when safe", "Treat it as a stop sign", "Ignore and continue", "Call the police"],
    "answer": "Treat it as a stop sign",
    "reference": "https://dor.mo.gov/driver-license/guide/#chapter3"
  },
  {
    "question": "What is the minimum distance you must signal before making a turn on a highway? (Bonus)",
    "choices": ["50 feet", "100 feet", "150 feet", "200 feet"],
    "answer": "100 feet",
    "reference": "https://dor.mo.gov/driver-license/guide/#chapter3"
  },
  {
    "question": "What is the maximum blood alcohol concentration (BAC) allowed for commercial drivers? (Bonus)",
    "choices": ["0.02%", "0.04%", "0.08%", "0.10%"],
    "answer": "0.04%",
    "reference": "https://dor.mo.gov/driver-license/guide/#chapter10"
  },
  {
    "question": "What is the penalty for refusing to submit to a chemical test when suspected of DUI? (Bonus)",
    "choices": ["License suspension", "Fine only", "No penalty", "Jail time"],
    "answer": "License suspension",
    "reference": "https://dor.mo.gov/driver-license/guide/#chapter10"
  },
  {
    "question": "How long is a Missouri driver license valid before renewal is required? (Bonus)",
    "choices": ["4 years", "5 years", "6 years", "8 years"],
    "answer": "6 years",
    "reference": "https://dor.mo.gov/driver-license/guide/#chapter1"
  },
  {
    "question": "What is the minimum liability coverage required for property damage in Missouri? (Bonus)",
    "choices": ["$5,000", "$10,000", "$15,000", "$20,000"],
    "answer": "$10,000",
    "reference": "https://dor.mo.gov/driver-license/guide/#chapter13"
  },
  {
    "question": "What is the purpose of the Missouri point system? (Bonus)",
    "choices": ["Track traffic violations and enforce penalties", "Calculate insurance rates", "Reward safe drivers", "Issue fines"],
    "answer": "Track traffic violations and enforce penalties",
    "reference": "https://dor.mo.gov/driver-license/guide/#chapter11"
  },
  {
    "question": "How many points are added for speeding 10 mph over the limit? (Bonus)",
    "choices": ["1 point", "3 points", "5 points", "7 points"],
    "answer": "3 points",
    "reference": "https://dor.mo.gov/driver-license/guide/#chapter11"
  },
  {
    "question": "What is the minimum age to obtain a Commercial Driver License (CDL) in Missouri? (Bonus)",
    "choices": ["16", "18", "21", "25"],
    "answer": "18",
    "reference": "https://dor.mo.gov/driver-license/guide/#chapter15"
  },
  {
    "question": "What endorsement is required to transport hazardous materials? (Bonus)",
    "choices": ["Passenger endorsement", "Hazardous materials endorsement", "Tank vehicle endorsement", "School bus endorsement"],
    "answer": "Hazardous materials endorsement",
    "reference": "https://dor.mo.gov/driver-license/guide/#chapter15"
  },
  {
    "question": "What is the recommended action if your vehicle starts to skid? (Bonus)",
    "choices": ["Brake hard", "Turn in the direction of the skid", "Turn opposite the skid", "Accelerate"],
    "answer": "Turn in the direction of the skid",
    "reference": "https://dor.mo.gov/driver-license/guide/#chapter9"
  },
  {
    "question": "What is the penalty for illegal parking in a handicapped space? (Bonus)",
    "choices": ["Fine and possible towing", "Warning only", "No penalty", "License suspension"],
    "answer": "Fine and possible towing",
    "reference": "https://dor.mo.gov/driver-license/guide/#chapter5"
  },
  {
    "question": "What is the minimum distance you must park from a crosswalk at an intersection? (Bonus)",
    "choices": ["10 feet", "15 feet", "20 feet", "25 feet"],
    "answer": "20 feet",
    "reference": "https://dor.mo.gov/driver-license/guide/#chapter5"
  },
  {
    "question": "What should you do if you miss your exit on a highway? (Bonus)",
    "choices": ["Back up carefully", "Make a U-turn", "Go to the next exit", "Stop and ask for directions"],
    "answer": "Go to the next exit",
    "reference": "https://dor.mo.gov/driver-license/guide/#chapter6"
  },
  {
    "question": "What is the proper way to use an acceleration lane when entering a highway? (Bonus)",
    "choices": ["Stop and wait for a gap", "Speed up to match traffic speed", "Enter at any speed", "Yield to vehicles on the shoulder"],
    "answer": "Speed up to match traffic speed",
    "reference": "https://dor.mo.gov/driver-license/guide/#chapter6"
  },
  {
    "question": "What is the meaning of a flashing red traffic light? (Bonus)",
    "choices": ["Stop completely, then proceed when safe", "Slow down and proceed with caution", "Traffic light malfunction", "Speed up"],
    "answer": "Stop completely, then proceed when safe",
    "reference": "https://dor.mo.gov/driver-license/guide/#chapter7"
  },
  {
    "question": "What is the shape of a stop sign? (Bonus)",
    "choices": ["Octagon", "Circle", "Triangle", "Rectangle"],
    "answer": "Octagon",
    "reference": "https://dor.mo.gov/driver-license/guide/#chapter7"
  },
  {
    "question": "What should you do when approaching a pedestrian with a white cane or guide dog? (Bonus)",
    "choices": ["Stop and yield the right-of-way", "Honk to alert them", "Speed up to pass quickly", "Ignore and continue driving"],
    "answer": "Stop and yield the right-of-way",
    "reference": "https://dor.mo.gov/driver-license/guide/#chapter4"
  },
  {
    "question": "What is the penalty for texting while driving for drivers under 21? (Bonus)",
    "choices": ["Fine and points on license", "Warning only", "No penalty", "License suspension"],
    "answer": "Fine and points on license",
    "reference": "https://dor.mo.gov/driver-license/guide/#chapter16"
  },
  {
    "question": "What is the safest way to handle aggressive drivers? (Bonus)",
    "choices": ["Ignore and avoid eye contact", "Confront them", "Speed up to pass", "Honk repeatedly"],
    "answer": "Ignore and avoid eye contact",
    "reference": "https://dor.mo.gov/driver-license/guide/#chapter8"
  },
  {
    "question": "What is the proper hand position on the steering wheel? (Bonus)",
    "choices": ["9 and 3 o’clock", "10 and 2 o’clock", "12 and 6 o’clock", "8 and 4 o’clock"],
    "answer": "9 and 3 o’clock",
    "reference": "https://dor.mo.gov/driver-license/guide/#chapter8"
  },
  {
    "question": "What should you do if your brakes fail while driving? (Bonus)",
    "choices": ["Pump the brake pedal", "Turn off the engine", "Use the parking brake immediately", "Shift to neutral"],
    "answer": "Pump the brake pedal",
    "reference": "https://dor.mo.gov/driver-license/guide/#chapter9"
  },
  {
    "question": "What is the penalty for driving without insurance in Missouri? (Bonus)",
    "choices": ["Fines, license suspension, and reinstatement fees", "Warning only", "No penalty", "Community service"],
    "answer": "Fines, license suspension, and reinstatement fees",
    "reference": "https://dor.mo.gov/driver-license/guide/#chapter13"
  },
  {
    "question": "What is the minimum liability coverage required per accident in Missouri? (Bonus)",
    "choices": ["$25,000", "$50,000", "$75,000", "$100,000"],
    "answer": "$50,000",
    "reference": "https://dor.mo.gov/driver-license/guide/#chapter13"
  },
  {
    "question": "What is the purpose of emissions testing? (Bonus)",
    "choices": ["Reduce air pollution", "Check vehicle safety", "Verify ownership", "Calculate taxes"],
    "answer": "Reduce air pollution",
    "reference": "https://dor.mo.gov/driver-license/guide/#chapter14"
  },
  {
    "question": "What is the minimum following distance recommended in poor weather? (Bonus)",
    "choices": ["3 seconds", "4 seconds", "5 seconds", "6 seconds"],
    "answer": "5 seconds",
    "reference": "https://dor.mo.gov/driver-license/guide/#chapter8"
  },
  {
    "question": "What should you do if you see a 'Merge' sign on the highway? (Bonus)",
    "choices": ["Yield to merging traffic", "Speed up to pass", "Stop immediately", "Change lanes quickly"],
    "answer": "Yield to merging traffic",
    "reference": "https://dor.mo.gov/driver-license/guide/#chapter6"
  },
  {
    "question": "What is the penalty for accumulating 8 points on your license within 18 months? (Bonus)",
    "choices": ["30-day license suspension", "Fine only", "No penalty", "License revocation"],
    "answer": "30-day license suspension",
    "reference": "https://dor.mo.gov/driver-license/guide/#chapter11"
  },
  {
    "question": "What is the minimum distance you must signal before changing lanes? (Bonus)",
    "choices": ["50 feet", "100 feet", "150 feet", "200 feet"],
    "answer": "100 feet",
    "reference": "https://dor.mo.gov/driver-license/guide/#chapter3"
  },
  {
    "question": "What is the penalty for refusing a chemical test under Missouri’s Implied Consent Law? (Bonus)",
    "choices": ["License suspension", "Fine only", "No penalty", "Jail time"],
    "answer": "License suspension",
    "reference": "https://dor.mo.gov/driver-license/guide/#chapter10"
  },
  {
    "question": "What is the minimum age to apply for a motorcycle instruction permit in Missouri? (Bonus)",
    "choices": ["15 years old", "15½ years old", "16 years old", "18 years old"],
    "answer": "15½ years old",
    "reference": "https://dor.mo.gov/driver-license/guide/#chapter1"
  },
  {
    "question": "What is the penalty for illegal parking in a handicapped space? (Bonus)",
    "choices": ["Fine and possible towing", "Warning only", "No penalty", "License suspension"],
    "answer": "Fine and possible towing",
    "reference": "https://dor.mo.gov/driver-license/guide/#chapter5"
  }
];
