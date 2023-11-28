
let currentStory = null;
let currentQuestionIndex = 0;

const stories = [
    {
        story_name: "The Big Software Deal",
        topic: "business",
        vocabulary: ["software", "sales", "negotiation", "consultants", "strategy", "presentation", "client", "competition", "proposal", "deadline", "stakeholders", "market", "profit", "technology", "teamwork", "communication", "challenges", "solution", "innovation", "performance", "data", "analysis", "collaboration", "deal", "objectives", "persuasion", "confidence", "business acumen", "leadership", "contract", "perspective", "critical thinking", "negotiating skills"],
        tenses_in_the_story: [
        {"Past Simple": "Bob and Alice worked together on a major project."},
        {"Past Continuous": "They were preparing a presentation for an important client."},
        {"Past Perfect": "Before the meeting, they had analyzed all the necessary data."},
        {"Past Perfect Continuous": "They had been working tirelessly for weeks to prepare."},
        {"Present Simple": "Negotiating big deals is a crucial part of their job."},
        {"Present Continuous": "They are currently strategizing their approach to win the client."},
        {"Present Perfect": "They have developed a strong proposal that addresses the client's needs."},
        {"Present Perfect Continuous": "Bob and Alice have been collaborating effectively for several years now."},
        {"Future Simple Tense": "They will present their proposal to the client tomorrow."},
        {"Future Continuous Tense": "By this time next week, they will be working on the contract details."},
        {"Future perfect": "By the end of the month, they will have closed the deal."},
        {"Future Perfect Continuous": "In a few months, they will have been working together on various projects for over a year."}
        ],
        characters: {
        character1: "Bob",
        character2: "Alice"
        },
        story: "Bob and Alice, seasoned sales consultants at a software company, faced a significant challenge: they had to negotiate a big deal with a new client. Their teamwork and communication were key as they developed a strategy. They prepared a persuasive presentation, backed by thorough market analysis and innovative solutions tailored to the client's needs. The competition was tough, but their combined experience and negotiation skills gave them confidence. After weeks of preparation, they presented their proposal. The client was impressed with their understanding of the technology and business acumen. Eventually, Bob and Alice successfully closed the deal, demonstrating their leadership and critical thinking abilities.",
        questions: [
        {
        question: "What was the main objective of Bob and Alice in the story?",
        answers: ["To go on a vacation", "To negotiate a big deal with a new client", "To develop a new software"]
        },

{
    question: "What role does critical thinking play in a consultant's analysis of market data?",
    answers: ["It is not necessary", "It enhances the accuracy and effectiveness of the analysis", "It slows down the process"]
   },

   {
    question: "How does strategy play a vital role in enhancing a company's market performance?",
    answers: ["It distracts from day-to-day operations", "It guides long-term goals and competitive positioning", "It has no significant impact"]
},
{
    question: "In what ways does technology integration impact a business's efficiency and profit margins?",
    answers: ["Negatively, by complicating processes", "Positively, by streamlining operations and increasing productivity", "It has no noticeable effect"]
},
{
    question: "How critical are presentation skills in persuading stakeholders during a proposal pitch?",
    answers: ["Not critical at all", "Extremely important for effectively conveying ideas and winning support", "Only marginally useful"]
},
{
    question: "What is the impact of teamwork and collaboration on meeting project deadlines under pressure?",
    answers: ["Causes delays and confusion", "Significantly improves the ability to meet deadlines effectively", "Has no real impact"]
},
{
    question: "How do client perspectives influence the development of innovative solutions in a consultancy?",
    answers: ["They restrict creativity", "They provide valuable insights for tailored, effective solutions", "They are irrelevant to innovation"]
},
{
    question: "What role does confidence play in a salesperson's ability to close deals and build client relationships?",
    answers: ["It intimidates clients", "It builds trust and credibility, essential for successful sales", "It is less important than product knowledge"]
},
{
    question: "How does effective communication facilitate better collaboration in a business environment?",
    answers: ["It leads to information overload", "It ensures clarity, reduces misunderstandings, and fosters teamwork", "It is not as important as individual effort"]
},
{
    question: "What is the importance of data in shaping business strategies and decision-making?",
    answers: ["Data complicates decisions", "It provides a factual basis for informed strategies and decisions", "It is often misleading and should be ignored"]
},

 {
    question: "How important is business acumen for achieving sales objectives in a competitive market?",
    answers: ["Not important at all", "Essential for understanding and leveraging market dynamics", "Only useful for internal meetings"]
   },

 {
    question: "In what way does effective collaboration and communication impact a team's performance on a project with a tight deadline?",
    answers: ["Negatively impacts the performance", "Ensures that all stakeholders are aligned and objectives are met efficiently", "Has no impact on the deadline"]
   },

{
    question: "How do negotiating skills contribute to the success of a business deal or contract?",
    answers: ["They lead to misunderstandings", "They enable better terms and foster positive client relationships", "They are irrelevant in modern business"]
   },

{
    question: "What is the importance of innovation in maintaining a competitive edge in technology and software markets?",
    answers: ["Innovation is not necessary", "It's critical for staying ahead and offering unique solutions to clients", "It only increases costs"]
   },

 {
    question: "How does leadership influence the outcome of a critical business negotiation?",
    answers: ["It has no influence", "Strong leadership can provide direction and confidence to the negotiating team", "It makes the team overconfident"]
   },

 {
    question: "What is the role of perspective and persuasion in creating an impactful business proposal or presentation?",
    answers: ["It confuses the stakeholders", "It helps in effectively communicating the value and objectives of the proposal", "It is not as important as the profit margin"]
   },

{
    question: "How does understanding client challenges contribute to providing effective solutions and services?",
    answers: ["It leads to overcomplicating the solution", "It ensures that the solutions are tailored to client needs and are more likely to be successful", "It has no real impact on the quality of service"]
   },
        {
        question: "Which skills were crucial for Bob and Alice to succeed?",
        answers: ["Cooking skills", "Negotiating and communication skills", "Athletic skills"]
        },
        {
        question: "What was the outcome of their presentation to the client?",
        answers: ["The client was unimpressed", "They faced technical issues", "The client was impressed and they closed the deal"]
        }
        ]
        },
        {
        story_name: "A Day in the Life of Pharmacy Heroes",
        topic: "everyday life",
        vocabulary: ["pharmacy", "dispensary","prescriptions", "customers", "surge","medicine", "healthcare", "responsibility", "teamwork", "busy", "consultation", "accuracy", "patience", "compassion", "stress", "challenge", "solution", "professionalism", "dedication", "community", "knowledge", "service", "efficiency", "pharmacist", "workday", "interaction", "advice", "safety", "attention to detail", "customer care", "empathy", "workload"],
        tenses_in_the_story: [
        {"Past Simple": "Elena filled a complex prescription."},
        {"Past Continuous": "Sergio was consulting with a customer about medication side effects."},
        {"Past Perfect": "Before the day began, they had prepared the pharmacy."},
        {"Past Perfect Continuous": "They had been working tirelessly for several hours."},
        {"Present Simple": "Their main responsibility is to ensure the safety and health of their customers."},
        {"Present Continuous": "They are currently helping a confused elderly man."},
        {"Present Perfect": "Elena has double-checked the dosage of a critical medication."},
        {"Present Perfect Continuous": "Sergio has been offering advice to patients all morning."},
        {"Future Simple Tense": "They will restock the shelves before the day ends."},
        {"Future Continuous Tense": "By afternoon, they will be managing a surge of customers."},
        {"Future perfect": "By the time the pharmacy closes, they will have served hundreds of people."},
        {"Future Perfect Continuous": "At the end of the day, they will have been working non-stop for over ten hours."}
        ],
        characters: {
        character1: "Elena",
        character2: "Sergio"
        },
        story: "Elena and Sergio, dedicated pharmacists, navigate a busy day at their community pharmacy. Their day is filled with filling prescriptions, consulting with customers, and managing a constant workload. They handle each task with precision and care, emphasizing the importance of accuracy and safety in their profession. Despite the stress and challenges, their teamwork and compassion shine through. They make time for every customer, offering expert advice and empathy. Their dedication to healthcare and community service is evident in every interaction, making them unsung heroes in their field.",
        questions: [
        {
        question: "What profession do Elena and Sergio have?",
        answers: ["Teachers", "Pharmacists", "Doctors"]
        },
        {
        question: "What is a key responsibility of Elena and Sergio's job?",
        answers: ["Entertaining customers", "Ensuring safety and health through proper medication", "Selling groceries"]
        },
        {
            question: "What is a crucial aspect of a pharmacist's role in healthcare?",
            answers: ["Prescribing medicine", "Ensuring safety and health through accurate prescriptions", "Offering financial advice"]
            },
            
            {
            question: "How does teamwork contribute to a pharmacist's workday?",
            answers: ["By increasing the workload", "Through efficient customer service", "Enhancing the quality of consultation and advice"]
            },
            
            {
            question: "In a busy pharmacy, what quality is essential for managing stress and challenges?",
            answers: ["Patience", "Aggressiveness", "Indifference"]
            },
            
            {
            question: "What is a key responsibility when interacting with customers in a pharmacy?",
            answers: ["Entertaining customers", "Providing compassionate customer care and accurate advice", "Selling groceries"]
            },
            
            {
            question: "How does attention to detail impact the safety and health of customers in a pharmacy?",
            answers: ["There is no significant impact", "It leads to more efficient billing", "It ensures the accuracy and appropriateness of medicine dispensed"]
            },
            
            {
            question: "What role does empathy play in a pharmacist's interaction with customers?",
            answers: ["It is not important", "It aids in providing better customer care and understanding their healthcare needs", "It speeds up the service"]
            },
            
            {
            question: "How do dedication and professionalism influence a pharmacist's contribution to the community?",
            answers: ["They have no influence", "They ensure high-quality service and trusted healthcare solutions", "They help in marketing the pharmacy"]
            },
            
            {
            question: "What is the importance of efficiency in managing a pharmacist's workload?",
            answers: ["It is not important", "It reduces the quality of service", "It helps in handling more customers accurately and with care"]
            },
        {
        question: "How do Elena and Sergio handle stressful situations at work?",
        answers: ["With impatience", "By ignoring customers", "With professionalism and compassion"]
        }
        ]
        }
    ,
    {
        story_name: "The Bittersweet Breakfast",
        topic: "family",
        vocabulary: ["pancakes", "maple syrup", "fruit", "whipped cream", "fridge", "apologetic look", "treat", "bad news", "breakfast", "special occasion", "mother and son", "anticipation", "worry", "surprise", "family dynamics", "comfort food", "sweetness", "conversation", "emotions", "preparation", "kitchen", "home", "bonding", "routine", "unexpected", "domestic life", "concern", "nurturing", "care", "love", "tension", "comfort", "coping mechanism"],
        tenses_in_the_story: [
            {"Past Simple": "Mom took out the whipped cream from the fridge."},
            {"Past Continuous": "The pancakes were looking perfect as they sat on the plate."},
            {"Past Perfect": "Before she brought out the whipped cream, mom had seemed a bit uneasy."},
            {"Past Perfect Continuous": "She had been acting differently throughout the morning."},
            {"Present Simple": "Whipped cream is a special treat in their household."},
            {"Present Continuous": "Mom is giving Adam an apologetic look as she serves the breakfast."},
            {"Present Perfect": "Adam has learned that whipped cream usually means bad news."},
            {"Present Perfect Continuous": "Mom has been preparing this special breakfast with a heavy heart."},
            {"Future Simple Tense": "She will soon tell Adam the reason behind this special treat."},
            {"Future Continuous Tense": "Adam will be listening carefully to his mom's news."},
            {"Future perfect": "By the end of the breakfast, they will have shared an important conversation."},
            {"Future Perfect Continuous": "In a few minutes, mom will have been explaining the situation."}
        ],
        characters: {
            character1: "Eve (Mother)",
            character2: "Adam (Son)"
        },
        story: "Eve prepared a special breakfast of perfect, golden pancakes for her son Adam, a rare treat in their household. As she slathered them in maple syrup and fruit, the appearance of whipped cream signaled something more than just a lavish meal. The whipped cream, a rare addition, was Eve's way of bracing Adam for bad news. The apologetic look she gave him as she took it out of the fridge filled him with a mix of anticipation and worry. Despite the sweetness of the meal, the atmosphere was tinged with tension. Eve, nurturing and caring as always, was preparing to share something important, using this comforting setup to ease into a difficult conversation. The breakfast, a symbol of her love and concern, set the stage for a significant moment between mother and son.",
        questions: [
            {
                question: "What does the whipped cream symbolize in the story?",
                answers: ["Just a treat", "A sign of celebration", "A prelude to bad news"]
            },
            {
                question: "How does Adam feel when he sees the whipped cream?",
                answers: ["Excited", "Confused", "Worried"]
            },
            {
                question: "What is the main theme of this breakfast?",
                answers: ["A regular family routine", "A festive celebration", "A comforting setting for difficult news"]
            }
        ]
    },
    {
        story_name: "A New Beginning",
        topic: "adventure",
        vocabulary: ["train", "message", "embarked","sister", "Vancouver", "Canada", "new start", "adventure", "excitement", "uncertainty", "bold move", "leap of faith", "change", "independence", "travel", "goodbye", "exploration", "freedom", "decisions", "determination", "courage", "hope", "new life", "journey", "challenge", "opportunity", "expectation", "dreams", "aspiration", "distance", "farewell", "future", "starting over", "adapting"],
        tenses_in_the_story: [
            {"Past Simple": "Elena sold everything and boarded the train."},
            {"Past Continuous": "As the train was leaving, she began to write a message."},
            {"Past Perfect": "Before this moment, Elena had only dreamed of such a bold move."},
            {"Past Perfect Continuous": "She had been planning this change for months."},
            {"Present Simple": "Traveling to a new country is a significant life change."},
            {"Present Continuous": "Elena is feeling a mix of excitement and uncertainty."},
            {"Present Perfect": "She has said her goodbyes and is ready for a new start."},
            {"Present Perfect Continuous": "Elena has been looking forward to this journey for a long time."},
            {"Future Simple Tense": "She will start a new life in Vancouver."},
            {"Future Continuous Tense": "Elena will be exploring her new surroundings soon."},
            {"Future perfect": "By the end of the year, she will have adapted to her new environment."},
            {"Future Perfect Continuous": "In a few months, she will have been living a completely different life."}
        ],
        characters: {
            character1: "Elena",
            character2: "Bella"
        },
        story: "Elena embarked on a life-changing journey as she boarded a train to Vancouver, Canada. After selling everything, she was filled with a mix of excitement and uncertainty about her new life. The message to her sister, Bella, marked the start of this adventure. Elena's decision to move represented a bold leap of faith, fueled by her dreams and aspirations. As she traveled, she reflected on the independence and freedom she was embracing. Despite the challenges of adapting to a new environment, Elena's determination and courage shone through. Her journey symbolized a new beginning, full of opportunities and the promise of fulfilling her dreams.",
        questions: [
            {
                question: "What major decision did Elena make?",
                answers: ["She decided to move to a new country", "She chose to change her career", "She planned to start a family"]
            },
            {
                question: "How does Elena feel about her journey?",
                answers: ["Uncertain and afraid", "Excited and hopeful", "Regretful and doubtful"]
            },
            {
                question: "What is the significance of Elena's journey?",
                answers: ["It is a vacation", "It marks a new chapter in her life", "It is a business trip"]
            }
        ]
    }
    ,
    {
        story_name: "A Hometown Reunion in the Metro",
        topic: "slice of life",
        vocabulary: ["metro", "hometown", "Anna", "George", "children", "conversation", "memories", "catch-up", "nostalgia", "family", "urban life", "surprise", "recognition", "past", "present", "reminiscence", "connection", "childhood", "adult life", "changes", "parenthood", "shared experiences", "busy life", "reunion", "updates", "personal growth", "transformation", "old friends", "life stories", "unexpected encounter", "continuity", "growth", "community"],
        tenses_in_the_story: [
        {"Past Simple": "Anna met George from her hometown in the metro."},
        {"Past Continuous": "They were talking about George's children and their recent activities."},
        {"Past Perfect": "Before meeting George, Anna had often thought about her old friends."},
        {"Past Perfect Continuous": "George had been describing the challenges and joys of parenthood."},
        {"Present Simple": "Meeting an old friend in such a place brings a sense of continuity."},
        {"Present Continuous": "They are sharing updates about their lives."},
        {"Present Perfect": "Anna has always wondered how her childhood friends are doing."},
        {"Present Perfect Continuous": "George has been raising his children in the city for several years."},
        {"Future Simple Tense": "Anna will likely meet George and his family in the future."},
        {"Future Continuous Tense": "Anna will be thinking about her own life choices after this conversation."},
        {"Future perfect": "By the end of their journey, they will have planned a get-together."},
        {"Future Perfect Continuous": "In the coming months, they will have been reconnecting and sharing more updates."}
        ],
        characters: {
        character1: "Anna",
        character2: "George"
        },
        story: "On a routine metro ride, Anna encountered an unexpected yet pleasant surprise: George, an old friend from her hometown. Their chance meeting turned into a heartfelt catch-up session. As the train clattered through the city, George shared stories about his children, detailing their lives and his experiences as a parent. This conversation sparked a sense of nostalgia in Anna, as she reflected on the passage of time and the changes in their lives. They exchanged stories, with Anna sharing her own journey. The meeting ended with a promise to keep in touch and plans for a future reunion, leaving Anna with a renewed sense of connection to her past.",
        questions: [
        {
        question: "Who does Anna meet on the metro?",
        answers: ["A colleague from work", "A childhood friend named George", "A stranger who looks familiar"]
        },
        {
        question: "What is the main topic of their conversation?",
        answers: ["George's work life", "George's children", "Anna's travel experiences"]
        },
        {
        question: "How does the story portray the theme of growth and change?",
        answers: ["Through the urban setting of the metro", "By showing the differences in Anna's and George's lives", "Through the discussion of George's children and their upbringing"]
        }
        ]
        },
    {
        story_name: "Lost in the Snow",
        topic: "adventure",
        vocabulary: ["snowstorm", "lost keys", "darkness", "search", "cold", "panic", "desperation", "flashlight", "hope", "relief", "perseverance", "night", "challenge", "resilience", "winter", "struggle", "survival", "determination", "anxiety", "unexpected", "car", "outdoors", "adventure", "solution", "problem-solving", "awareness", "focus", "cold weather", "bravery", "fortitude", "resourcefulness"],
        tenses_in_the_story: [
            {"Past Simple": "Jack lost his car keys during a heavy snowstorm."},
            {"Past Continuous": "As the snow was falling, he was walking back to his car."},
            {"Past Perfect": "Before realizing his loss, Jack had enjoyed a peaceful evening."},
            {"Past Perfect Continuous": "He had been feeling calm and relaxed before the panic set in."},
            {"Present Simple": "Losing keys in such conditions poses a significant challenge."},
            {"Present Continuous": "He is searching frantically for them in the dark, cold night."},
            {"Present Perfect": "He has retraced his steps multiple times, hoping to find the keys."},
            {"Present Perfect Continuous": "Jack has been battling the cold and wind for over an hour now."},
            {"Future Simple Tense": "He will need to find shelter if he cannot locate his keys soon."},
            {"Future Continuous Tense": "If the snow continues, Jack will be searching for hours."},
            {"Future perfect": "By dawn, he will have exhausted all his options."},
            {"Future Perfect Continuous": "In a few hours, he will have been struggling through the storm."}
        ],
        characters: {
            character1: "Jack"
        },
        story: "Jack faced a daunting challenge when he lost his car keys in a snowstorm. The darkness and cold added to his anxiety as he struggled to find them. His flashlight was his only source of hope as he persevered through the night. Despite the panic and desperation, Jack remained determined and resourceful. He retraced his steps, focusing on where he might have dropped the keys. His resilience and fortitude kept him going, despite the harsh winter conditions. Eventually, his efforts paid off, and he found his keys, feeling immense relief and gratitude.",
        questions: [
            {
                question: "What main challenge does Jack face in the story?",
                answers: ["Finding his way home", "Losing his car keys in a snowstorm", "Meeting a friend on time"]
            },
            {
                question: "Which character trait does Jack predominantly display?",
                answers: ["Panic", "Resilience", "Impatience"]
            },
            {
                question: "What is the setting of the story?",
                answers: ["In a forest during summer", "In a city during a snowstorm", "At a beach on a sunny day"]
            }
        ]
    }
    ,
    {
        story_name: "Chore Balance",
        topic: "relationships",
        vocabulary: ["sharing", "responsibility", "chores", "communication", "teamwork", "home", "cleaning", "cooking", "laundry", "organizing", "relationship", "equality", "partnership", "schedule", "compromise", "understanding", "routine", "household", "division of labor", "collaboration", "harmony", "domestic tasks", "support", "cooperation", "dialogue", "fairness", "respect", "time management", "mutual effort"],
        tenses_in_the_story: [
            {"Past Simple": "John and Emma were divided on how to share their household chores."},
            {"Past Continuous": "John was cooking dinner while Emma was doing the laundry."},
            {"Past Perfect": "By the time they moved in together, they had agreed on a system."},
            {"Past Perfect Continuous": "They had been struggling with household tasks before they started planning."},
            {"Present Simple": "Effective communication is crucial in their relationship."},
            {"Present Perfect Continuous": "They have been working as a team for over a year now."},
            {"Present Perfect": "They have found a balanced way to share responsibilities."},
            {"Present Continuous": "They are discussing their weekly cleaning schedule."},
            {"Future Simple Tense": "They will rotate their chores every month."},
            {"Future Continuous Tense": "They will be re-evaluating their chores arrangement periodically."},
            {"Future perfect": "By next year, they will have established a seamless routine."},
            {"Future Perfect Continuous": "In a few years, they will have been living harmoniously with shared responsibilities."}
        ],
        characters: {
            character1: "John",
            character2: "Emma"
        },
        story: "John and Emma learned the importance of sharing chores and responsibilities in their home. Through open communication and respect for each other's time and efforts, they created a balanced system that worked well for both. They realized that cooperation and teamwork were key to a happy and efficient household. As they adapted and adjusted their routines, they found more time for each other and for their personal interests. Their mutual effort in maintaining their home brought them closer together, strengthening their relationship.",
        questions: [
            {
                question: "What is the main theme of the story?",
                answers: ["Sharing household responsibilities", "Financial management", "Parenting techniques"]
            },
            {
                question: "How does Emma contribute to the story?",
                answers: ["By creating a chore schedule", "By cooking all the meals", "By hiring a housekeeper", "doing the laundry"]
            },
            {
                question: "What challenges did John and Emma face?",
                answers: ["Allocating chores fairly", "Finding time for personal interests", "Decorating their home"]
            }
        ]
    }
    ,
    {
        story_name: "The Revision Request",
        topic: "Workplace Challenge",
        vocabulary: ["client", "advertisement", "revision", "creative process", "feedback", "marketing", "brand image", "design", "communication", "strategy", "teamwork", "deadline", "compromise", "satisfaction", "agency", "presentation", "negotiation", "creativity", "patience", "understanding", "target audience", "brand message", "modification", "consensus", "approach", "solution", "challenge", "outcome", "adjustment", "collaboration", "perspective", "story", "character", "complication", "resolution"],
        tenses_in_the_story: [
            {"Past Simple": "The client requested changes to the advertisement."},
            {"Past Perfect": "They had believed the advertisement was ready."},
            {"Past Continuous": "They were finalizing the original design."},
            {"Past Perfect Continuous": "They had been working on the project for weeks."},
            {"Present Simple": "Feedback plays a crucial role in their work."},
            {"Present Perfect": "They have incorporated some of the client's suggestions."},
            {"Present Continuous": "The team is discussing the revisions."},
            {"Present Perfect Continuous": "They have been striving for client satisfaction."},
            {"Future Continuous Tense": "They will be working late tonight."},
            {"Future Simple Tense": "They will present the new version tomorrow."},
            {"Future perfect": "By next week, they will have resolved all issues."},
            {"Future Perfect Continuous": "By the end of the project, they will have been collaborating closely with the client."}
        ],
        characters: {
            character1: "Jordan",
            character2: "Alex"
        },
        story: "Jordan and Alex, part of an advertising agency, faced a challenge when their client requested several revisions to an advertisement they thought was finalized. Understanding the importance of client satisfaction, they gathered their team to discuss and incorporate the feedback. They balanced creativity with the client's vision, working tirelessly to adjust the design while maintaining the brand message. Their teamwork and effective communication led to a revised advertisement that resonated well with the target audience. This experience taught them the value of flexibility and collaboration in the creative process.",
        questions: [
            {
                question: "What is the main theme of the story?",
                answers: ["Client relations in advertising", "Graphic design", "Sales strategies"]
            },
            {
                question: "How does Jordan contribute to the story?",
                answers: ["By leading the design team", "By negotiating with the client", "By creating the original advertisement"]
            },
            {
                question: "What challenge do Jordan and Alex face?",
                answers: ["Meeting the client's expectations", "Working within a tight budget", "Finding a new advertising strategy"]
            }
        ]
    }
    ,
    {
        story_name: "Winter's Approach",
        topic: "Preparing for Winter",
        vocabulary: ["winter", "preparation", "stockpiling", "firewood", "insulation", "clothing", "weather", "cold", "warmth", "home", "maintenance", "food storage", "heating", "energy efficiency", "seasons", "survival", "planning", "resource management", "comfort", "safety", "security", "forecast", "snow", "freeze", "temperature", "blankets", "coats", "story", "character", "challenge", "solution", "action", "strategy", "reflection", "readiness", "adaptation", "necessities", "essentials"],
        tenses_in_the_story: [
        {"Past Simple": "Ella and Liam prepared their home for winter."},
        {"Past Continuous": "They were checking their heating system."},
        {"Present Perfect": "They have sealed all the windows."},
        {"Past Perfect Continuous": "They had been collecting supplies for weeks."},
        {"Present Simple": "Insulation keeps their home warm."},
        {"Past Perfect": "They had stocked up on essential foods."},
        {"Present Continuous": "They are gathering firewood."},
        {"Present Perfect Continuous": "They have been wearing warmer clothes."},
        {"Future Simple Tense": "They will buy extra blankets."},
        {"Future Continuous Tense": "They will be installing storm windows next week."},
        {"Future perfect": "By December, they will have prepared everything."},
        {"Future Perfect Continuous": "By the end of winter, they will have been living comfortably in their well-prepared home."}
        ],
        characters: {
        character1: "Ella",
        character2: "Liam"
        },
        story: "As winter approached, Ella and Liam knew they had to prepare their home for the cold months ahead. They focused on stockpiling essentials like food and firewood and ensuring their home was properly insulated. They also checked their heating system and planned to buy extra warm clothing and blankets. Their preparation was thorough, as they had been collecting supplies for weeks, making sure every detail was covered. Their proactive approach ensured they would be warm, safe, and comfortable throughout the winter. Their efforts were a perfect example of effective planning and adaptation to the changing seasons.",
        questions: [
        {
        question: "What is the main theme of the story?",
        answers: ["Preparing for winter", "Gardening", "Traveling"]
        },
        {
        question: "How does Liam contribute to the story?",
        answers: ["By building a snowman", "By gathering firewood", "By cooking winter meals"]
        },
        {
        question: "What challenge do Ella and Liam face?",
        answers: ["Keeping their home warm", "Finding a new home", "Hosting a winter party"]
        }
        ]
        }
        ,
        
        {
        story_name: "Healthy Life, Happy Life",
        topic: "health",
        vocabulary: ["health", "medicine", "exercise", "yoga", "diet", "nutrition", "vegetables", "fruits", "balanced diet", "workout", "routine", "benefits", "food", "recipes", "methods", "research", "practice", "yoga", "exercises", "lifestyle", "story", "character", "theme", "insight", "challenge", "time", "technique", "insight", "journey", "role", "role model", "role models", "role-model"],
        tenses_in_the_story: [
            {"Past Simple": "Bob and Alice embarked on a journey."},
            {"Past Perfect": "They had researched the benefits of various foods."},
            {"Past Continuous": "They were exploring different workout methods and she was cooking healthy meals."},
            {"Past Perfect Continuous": "They had been experimenting with diets for months."},
            {"Present Simple": "Exercise plays a key role in their routine but it can be challenging."},
            {"Present Perfect": "They have found that vegetables are essential."},
            {"Present Continuous": "They are learning about balanced diets."},
            {"Present Perfect Continuous": "They have been practicing yoga regularly."},
            {"Future Simple Tense": "They will implement these methods in their daily lives."},
            {"Future Continuous Tense": "They will be trying new recipes next week."},
            {"Future perfect": "By the end of the month, they will have mastered five new exercises."},
            {"Future Perfect Continuous": "In a year, they will have been leading a healthy lifestyle for a significant time."}
        ],
        characters: {
            character1: "Bob",
            character2: "Alice"
        },
        story: "Through this journey, Bob and Alice realized the importance of a balanced diet and regular exercise. They understood that health is a lifelong commitment, and they were determined to maintain this new, healthier lifestyle. Their exploration into the world of health and fitness not only improved their physical well-being but also their mental and emotional health. They were happier and more energetic than ever before. They were also more productive at work and more engaged in their social lives. They were role models for their friends and family, and they inspired many others to embark on their own health journeys.",
        questions: [
            {
                question: "What is the main theme of the story?",
                answers: ["Health and well-being", "Travel", "Technology"]
            },
            {
                question: "How does Alice contribute to the story?",
                answers: ["By providing medical insights", "By cooking healthy meals", "By teaching exercise routines"]
            },
            {
                question: "What challenges did Bob and Alice face?",
                answers: ["Finding time for exercise", "Balancing diet and exercise", "Learning new exercise techniques"]
            }
        ]
    }
    // Additional stories can be added here in the same format
];

// Now define your functions

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]]; // Swap elements
    }
}



function populateStorySelector() {
    const storySelect = document.getElementById('storySelect');

    // Sort stories alphabetically by story_name
    const sortedStories = stories.sort((a, b) => a.story_name.localeCompare(b.story_name));

    sortedStories.forEach((story, index) => {
        let option = document.createElement('option');
        option.value = index;
        option.textContent = story.story_name;
        storySelect.appendChild(option);
    });
}


function loadStory() {
    const selectedStoryIndex = document.getElementById('storySelect').value;
    currentStory = stories[selectedStoryIndex];

     // Shuffle the questions for the current story
     shuffleArray(currentStory.questions);

     // Reset the question index and display the first question
     currentQuestionIndex = 0;
     displayQuestion();

    // Reset the question index and display the first question
    currentQuestionIndex = 0;
    displayQuestion();

    // Update story details
    document.getElementById('storyDetails').textContent = currentStory.story;

    // Update tenses in the story
    displayTenses();

    // Update vocabulary
    displayVocabulary();
}

function displayTenses() {
    let tensesDiv = document.getElementById('tensesInTheStory');
    tensesDiv.innerHTML = '';

    currentStory.tenses_in_the_story.forEach(tenseObj => {
        for (let tense in tenseObj) {
            // Create a container for each tense
            let container = document.createElement('div');

            // Create and append the span for the tense key
            let keySpan = document.createElement('span');
            keySpan.className = 'tense-key';
            keySpan.textContent = `${tense}: `;
            container.appendChild(keySpan);

            // Create and append the span for the tense value
            let valueSpan = document.createElement('span');
            valueSpan.className = 'tense-value';
            valueSpan.textContent = tenseObj[tense];
            container.appendChild(valueSpan);

            // Append the container to the tensesDiv
            tensesDiv.appendChild(container);
        }
    });
}

function displayVocabulary() {
    let vocabDiv = document.getElementById('storyVocabulary');
    vocabDiv.innerHTML = '';  // Clear existing content

    // Sort the vocabulary array alphabetically
    let sortedVocabulary = currentStory.vocabulary.sort((a, b) => a.localeCompare(b));

    let table = document.createElement('table');
    let row;

    sortedVocabulary.forEach((word, index) => {
        if (index % 6 === 0) { // Start a new row for every 6 words
            row = table.insertRow();
        }

        let cell = row.insertCell();
        cell.textContent = word;
    });

    vocabDiv.appendChild(table);
}



function displayQuestion() {
    if (!currentStory || currentQuestionIndex < 0 || currentQuestionIndex >= currentStory.questions.length) {
        // Handle invalid index or no story selected
        return;
    }

    const question = currentStory.questions[currentQuestionIndex];
    
    const questionText = document.getElementById('questionText');
    questionText.textContent = question.question;
    
    const answerList = document.getElementById('answerList');
    answerList.innerHTML = '';
    
    question.answers.forEach(answer => {
        const listItem = document.createElement('li');
        listItem.textContent = answer;
        answerList.appendChild(listItem);
    });
}



function nextQuestion() {
    if (!currentStory) {
        // Handle no story selected
        return;
    }

    currentQuestionIndex++;
    if (currentQuestionIndex >= currentStory.questions.length) {
        // Loop back to the first question
        currentQuestionIndex = 0;
    }

    displayQuestion();
}

function previousQuestion() {
    if (!currentStory) {
        // Handle no story selected
        return;
    }

    currentQuestionIndex--;
    if (currentQuestionIndex < 0) {
        // Loop back to the last question
        currentQuestionIndex = currentStory.questions.length - 1;
    }

    displayQuestion();
}

window.onload = function() {
    populateStorySelector();
    loadStory();
};