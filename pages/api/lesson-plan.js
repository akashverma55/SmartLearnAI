import { getCompleteLessonPlan } from "../../lib/groq";

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { learningStyle, subject, classInfo } = req.body;

    try {
      // Get the full lesson plan from Groq by making multiple API calls
      const lessonPlan = await getCompleteLessonPlan(subject, classInfo, learningStyle);

      // Send the lesson plan back to the frontend
      res.status(200).json({ lessonPlan });
    } catch (error) {
      console.error("Error generating lesson plan:", error);
      res.status(500).json({ error: 'Failed to generate lesson plan.' });
    }
  } else {
    res.status(405).json({ error: 'Method Not Allowed' });
  }
}
