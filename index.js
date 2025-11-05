const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

const apologyPayload = {
  name: "Shedrack Tabansi",
  slack_handle: "Sheedy-390",
  apology:
    "I want to sincerely apologise to the mentors, my fellow interns, and especially Mr Phonixe for my behaviour during today’s review call. I joined the session unsettled—my laptop was lagging badly, my mobile data ran out while I was presenting, and Telex intermittently failed to respond. I had been having a very difficult day and when people started calling me directly during my presentation I panicked and feared I might be eliminated from the programme. Because I was not able to explain myself clearly and I repeatedly interrupted others while trying to get myself sorted, my actions created confusion and gave the impression that I did not understand my work. That was not my intention, and I am deeply sorry for the disruption I caused.\n\nMy behaviour was wrong because it showed a lack of respect for the mentors’ and interns’ time and for the established presentation queue. Interrupting mentors and refusing to allow others to go ahead prevented constructive feedback and disrupted the flow of the session. I accept full responsibility: stress and technical problems do not justify taking attention away from others or disrupting a learning environment.\n\nTo make sure this does not happen again, I will take concrete steps. I will test my devices and connection before every call, keep a charged backup device or power source available, and ensure I have sufficient mobile data or a reliable network. I will rehearse and time my presentation so I can speak clearly even if there are hiccups. I will mute notifications and disable incoming direct calls during presentations. If I begin to feel overwhelmed or technically compromised, I will politely ask to pause or request the next available slot rather than interrupt. I will apologise directly to anyone I interrupted after the call and seek feedback privately so I can improve.\n\nLesson learned: Respectful preparation, calm communication, and consideration for others’ time are essential; technical problems are understandable, but professionalism is my responsibility.",
  lesson_learned:
    "Respectful preparation, calm communication, and consideration for others’ time are essential; technical problems are understandable, but professionalism is my responsibility.",
  word_count: 325,
};

app.get("/", (req, res) => {
  res.send("Apology API is running. Visit /apology to view the apology JSON.");
});

app.get("/apology", (req, res) => {
  res.json(apologyPayload);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Apology API running on port ${PORT}`);
});
