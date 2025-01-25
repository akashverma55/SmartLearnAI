import Groq from "groq-sdk";

// Initialize Groq with the API key from environment variables
const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });

// Function to get part of the lesson plan (objective, material, activity, etc.)
async function getLessonPlanPart(part, subject, classInfo, learningStyle) {
  // Create a prompt for the specific part of the lesson plan
  const prompts = {
    objectives: `
      Generate the objectives for a lesson plan for the subject "${subject}" for class "${classInfo}" with learning style "${learningStyle}". 
      Provide the objectives in a point-wise format, such as:
      1. Objective 1
      2. Objective 2
      ...
    `,
    materials: `
      Generate the materials needed for a lesson plan for the subject "${subject}" for class "${classInfo}" with learning style "${learningStyle}". 
      Provide the materials in a point-wise format, such as:
      1. Material 1
      2. Material 2
      ...
    `,
    activities: `
      Generate the activities for a lesson plan for the subject "${subject}" for class "${classInfo}" with learning style "${learningStyle}". 
      Provide the activities in a point-wise format, such as:
      1. Activity 1 - Description
      2. Activity 2 - Description
      ...
    `,
    assessment: `
      Generate the assessment methods for a lesson plan for the subject "${subject}" for class "${classInfo}" with learning style "${learningStyle}". 
      Provide the assessment methods in a point-wise format, such as:
      1. Assessment method 1
      2. Assessment method 2
      ...
    `,
    resources: `
      Generate the resources needed for a lesson plan for the subject "${subject}" for class "${classInfo}" with learning style "${learningStyle}". 
      Provide the resources in a point-wise format, such as:
      1. Resource 1
      2. Resource 2
      ...
    `,
  };

  try {
    // Call the Groq API for the specific part of the lesson plan
    const chatCompletion = await groq.chat.completions.create({
      messages: [
        {
          role: "user",
          content: prompts[part],
        },
      ],
      model: "llama-3.3-70b-versatile", // Adjust this as needed
    });

    // Return the content as plain text
    return chatCompletion.choices[0]?.message?.content || "";
  } catch (error) {
    console.error(`Error fetching ${part}:`, error);
    return "";
  }
}

// Function to get complete lesson plan by making multiple API calls
export async function getCompleteLessonPlan(subject, classInfo, learningStyle) {
  const objectives = await getLessonPlanPart("objectives", subject, classInfo, learningStyle);
  const materials = await getLessonPlanPart("materials", subject, classInfo, learningStyle);
  const activities = await getLessonPlanPart("activities", subject, classInfo, learningStyle);
  const assessment = await getLessonPlanPart("assessment", subject, classInfo, learningStyle);
  const resources = await getLessonPlanPart("resources", subject, classInfo, learningStyle);

  // Combine the parts into one complete lesson plan
  return {
    objectives,
    materials,
    activities,
    assessment,
    resources,
  };
}
