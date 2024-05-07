import { Link } from "components/documentation";

const QAS = [
  {
    question:
      "Q1. What is a resume builder? Why resume builder is better than resume template doc?",
    answer: (
      <>
        <p>
          There are two ways to create a resume today. One option is to use a
          resume template, such as an office/google doc, and customize it
          according to your needs. The other option is to use a resume builder,
          an online tool that allows you to input your information and
          automatically generates a resume for you.
        </p>
        <p>
          Using a resume template requires manual formatting work, like copying
          and pasting text sections and adjusting spacing, which can be
          time-consuming and error-prone. It is easy to run into formatting
          issues, such as using different bullet points or font styles after
          copying and pasting. On the other hand, a resume builder like ResuMint
          saves time and prevents formatting mistakes by automatically
          formatting the resume. It also offers the convenience of easily
          changing font types or sizes with a simple click. In summary, a resume
          builder is easier to use compared to a resume template.
        </p>
      </>
    ),
  },
  {
    question:
      "Q2. What uniquely sets ResuMint apart from other resume builders and templates?",
    answer: (
      <>
        <p>
          Other than ResuMint, there are some great free resume builders out
          there, e.g. <Link href="https://rxresu.me/">Reactive Resume</Link>,{" "}
          <Link href="https://flowcv.com/">FlowCV</Link>. However, ResuMint
          stands out with 2 distinctive features:
        </p>{" "}
        <p>
          <span className="font-semibold">
            1. ResuMint is designed specifically for the India's job market and
            best practices.
          </span>
          <br />
          Unlike other resume builders that target a global audience and offer
          many customization options, ResuMint intentionally only offers options
          that are aligned with India's best practices. For example, it excludes
          the option to add a profile picture to avoid bias and discrimination.
          It offers only the core sections, e.g. profile, work experience,
          education, and skills, while omitting unnecessary sections like
          references. Additionally, ResuMint only offers a top down single
          column resume design as opposed to two column design, because single
          column design works best for AST. <br />{" "}
        </p>
        <p>
          <span className="font-semibold">
            2. ResuMint is super privacy focus.
          </span>{" "}
          <br />
          While other resume builders may require email sign up and store user
          data in their databases, ResuMint believes that resume data should
          remain private and accessible only on user’s local machine. Therefore,
          ResuMint doesn’t require sign up to use the app, and all inputted data
          is stored in user’s browser that only user has access to.
        </p>
      </>
    ),
  },
  {
    question: "Q3. Who created ResuMint and why?",
    answer: (
      <p>
        ResuMint was created and designed by Vishal J bind as a final year Sem 6
        project. As a fresher, we make many mistakes when creating our first
        resumes and applying for internships and jobs. It took us a long while
        to learn some of the best practices. While mentoring first generation
        students and reviewing their resumes, we noticed students were making
        the same mistakes that we had made before. This led us to think about
        how we can be of help with the knowledge and skills we have gained. We
        started chatting and working over the weekends that led to ResuMint,
        where we integrated best practices and our knowledge into this resume
        builder. Our hope is that ResuMint can help anyone to easily create a
        modern professional resume that follows best practices and enable anyone
        to apply for jobs with confidence.
      </p>
    ),
  },
];

export const QuestionsAndAnswers = () => {
  return (
    <section className="mx-auto max-w-3xl divide-y divide-gray-300 lg:mt-4 lg:px-2">
      <h2 className="text-center text-3xl font-bold">Questions & Answers</h2>
      <div className="mt-6 divide-y divide-gray-300">
        {QAS.map(({ question, answer }) => (
          <div key={question} className="py-6">
            <h3 className="font-semibold leading-7">{question}</h3>
            <div className="mt-3 grid gap-2 leading-7 text-gray-600">
              {answer}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
