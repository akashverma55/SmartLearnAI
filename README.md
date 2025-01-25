# AI-powered Lesson Plan Generator

An AI-powered web application built with Next.js and Tailwind CSS to generate personalized lesson plans tailored to students' diverse learning styles (visual, auditory, kinesthetic). The goal is to help teachers create more engaging and inclusive lesson plans that cater to different types of learners.

## Features

- **Personalized Content:** Generate lesson plans based on subject, grade level, and learning style.
- **Diverse Learning Styles:** Supports multiple learning styles including visual, auditory, and kinesthetic.
- **Responsive UI:** Built using Tailwind CSS for a modern and responsive design.
- **AI Integration:** The AI model will analyze input data and generate a suitable lesson plan using Groq or HuggingFace APIs (future integration).

## Tech Stack

**Frontend:**
- Next.js (React-based framework)
- Tailwind CSS (Utility-first CSS framework)

**Backend:**
- AI model APIs (Groq)

**Hosting:**
- Vercel (for deploying the Next.js app)

## Setup Instructions

### 1. Clone the Repository

First, clone this repository to your local machine:

```bash
git clone https://github.com/your-username/lesson-plan-generator.git
cd lesson-plan-generator
```

### 2. Install Dependencies

Make sure you have Node.js and npm installed. Then, install the required dependencies:

```bash
npm install
```

### 3. Configure Tailwind CSS

Ensure Tailwind CSS is installed by following the steps in the official Tailwind setup guide for Next.js.
Ensure your `postcss.config.js` is properly configured:
```bash
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init

```
```js
module.exports = {
  plugins: [
    require('tailwindcss'),
    require('autoprefixer'),
  ],
};
```

### 4. Add AI Model Integration (Optional for Now)

You can integrate AI models like Groq or HuggingFace to generate lesson plans.
At the moment, the project is set up to show a placeholder lesson plan, but you can replace that with real API calls in the future.

### 5. Run the Development Server

Run the app locally for development:

```bash
npm run dev
```

This will start the app at `http://localhost:3000`.

## Usage

1. **Landing Page:** Users will see a simple landing page with a description and a "Generate Lesson Plan" button.
2. **Lesson Plan Generator:** Teachers will input the subject, grade level, and preferred learning style. They can choose from:
   - Visual
   - Auditory
   - Kinesthetic
3. **Generate Plan:** After submitting the form, the app will generate a personalized lesson plan based on the input.
4. **Display the Plan:** The generated lesson plan will be displayed on the page, ready to be used in class.

## Folder Structure

```
/lib
  └── groq.js                 # Prompt File
/pages
  ├── api
        └── lesson-plan.js    # Back-End File
  ├── _app.js                
  ├── _document.js            
  └── index.js                # Front-End File
/styles
      └── globals.css         # Global Tailwind CSS styles
```

## Contributing

We welcome contributions! If you'd like to contribute, follow these steps:

1. Fork the repository.
2. Create a new branch: `git checkout -b feature-branch`
3. Commit your changes: `git commit -m 'Add feature'`
4. Push to your branch: `git push origin feature-branch`
5. Open a pull request.

## Issues

If you find any bugs or issues, please report them by opening an issue in the repository. We’ll address them as soon as possible.



