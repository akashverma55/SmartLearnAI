import { useState } from 'react';
import { FaLinkedin, FaGithub, FaEnvelope, FaInstagram } from 'react-icons/fa';

export default function Home() {
  const [learningStyle, setLearningStyle] = useState('');
  const [subject, setSubject] = useState('');
  const [classInfo, setClassInfo] = useState('');
  const [lessonPlan, setLessonPlan] = useState('');
  const [loading, setLoading] = useState(false);

  const generateLessonPlan = async () => {
    setLoading(true);
    const response = await fetch('/api/lesson-plan', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ learningStyle, subject, classInfo }),
    });

    const data = await response.json();
    setLessonPlan(data.lessonPlan);
    setLoading(false);
  };

  return (
    <div
      className="flex flex-col items-center justify-center h-screen bg-cover bg-center"
      style={{ backgroundImage: 'url(/images/bg_image.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }}
    >
      {/* Header Section */}
      <header className="w-full p-4 bg-gray-800 text-white flex justify-between items-center fixed top-0 left-0 right-0 rounded-xl shadow-lg z-10">
        <h1 className="text-3xl font-semibold text-white pl-4">SmartLessonAI</h1>

        <div className="flex space-x-4 pr-4">
          {/* LinkedIn Icon */}
          <a href="https://www.linkedin.com/in/akashkuverma/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="text-2xl hover:text-blue-500" />
          </a>

          {/* GitHub Icon */}
          <a href="https://www.github.com/akashverma55" target="_blank" rel="noopener noreferrer">
            <FaGithub className="text-2xl hover:text-gray-500" />
          </a>

          {/* Email Icon */}
          <a href="mailto:akvakv150@gmail.com" target="_blank" rel="noopener noreferrer">
            <FaEnvelope className="text-2xl hover:text-red-500" />
          </a>

          {/* Instagram Icon */}
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="text-2xl hover:text-pink-500" />
          </a>
        </div>
      </header>

      {/* Content Section */}
      <div className="pt-32 w-full flex flex-col items-center justify-center space-y-4 text-center">
        <h1 className="text-4xl font-semibold text-blue leading-tight">
          AI-powered Lesson Plan Generator
        </h1>

        {/* Description */}
        <p className="text-lg text mt-4 max-w-2xl mx-auto">
          Create customized lesson plans for any subject, class, and learning style.
          Simply provide the subject, class info, and your preferred learning style
          to get a detailed lesson plan to enhance your teaching experience.
        </p>

        {/* Subject Input */}
        <input
          type="text"
          placeholder="Enter Subject (e.g., Math)"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          className="p-2 border border-gray-300 rounded-md w-64 mt-6"
        />

        {/* Class Info Input */}
        <input
          type="text"
          placeholder="Enter Class Info (e.g., Grade 10)"
          value={classInfo}
          onChange={(e) => setClassInfo(e.target.value)}
          className="p-2 border border-gray-300 rounded-md w-64 mt-4"
        />

        {/* Learning Style Dropdown */}
        <select
          value={learningStyle}
          onChange={(e) => setLearningStyle(e.target.value)}
          className="p-2 border border-gray-300 rounded-md w-64 mt-4"
        >
          <option value="">Select Learning Style</option>
          <option value="visual">Visual</option>
          <option value="auditory">Auditory</option>
          <option value="kinesthetic">Kinesthetic</option>
        </select>

        {/* Generate Lesson Plan Button */}
        <button
          onClick={generateLessonPlan}
          className="bg-blue-500 text-white p-2 rounded-md w-64 mt-6"
          disabled={loading}
        >
          {loading ? 'Generating...' : 'Generate Lesson Plan'}
        </button>

        {/* Display Generated Lesson Plan */}
        {lessonPlan && (
          <div className="mt-4 p-6 border border-gray-200 rounded-md w-full max-w-4xl h-auto max-h-96 overflow-auto bg-white shadow-md">
            <h2 className="font-semibold mb-4">Generated Lesson Plan</h2>

            {/* Objectives */}
            <div>
              <h3 className="font-semibold">Objectives</h3>
              <ul>
                {lessonPlan.objectives.split('\n').map((objective, index) => (
                  <li key={index}>{objective}</li>
                ))}
              </ul>
            </div>

            {/* Materials */}
            <div>
              <h3 className="font-semibold">Materials</h3>
              <ul>
                {lessonPlan.materials.split('\n').map((material, index) => (
                  <li key={index}>{material}</li>
                ))}
              </ul>
            </div>

            {/* Activities */}
            <div>
              <h3 className="font-semibold">Activities</h3>
              {lessonPlan.activities.split('\n').map((activity, index) => (
                <div key={index}>
                  <p>{activity}</p>
                </div>
              ))}
            </div>

            {/* Assessment */}
            <div>
              <h3 className="font-semibold">Assessment</h3>
              <ul>
                {lessonPlan.assessment.split('\n').map((assessment, index) => (
                  <li key={index}>{assessment}</li>
                ))}
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h3 className="font-semibold">Resources</h3>
              <ul>
                {lessonPlan.resources.split('\n').map((resource, index) => (
                  <li key={index}>{resource}</li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
