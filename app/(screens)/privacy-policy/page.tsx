import { NextPage } from 'next';
import Head from 'next/head';

const PrivacyPolicy: NextPage = () => {
  return (
    <>
      <Head>
        <title>Privacy Policy | Techno Billion AI</title>
        <meta name="description" content="Privacy Policy of Techno Billion AI - India's 1st Generative AI Education Platform" />
      </Head>
      <div className="min-h-screen  text-gray-800 px-6 py-12">
        <div className="max-w-5xl mx-auto bg-white  rounded-3xl p-10 md:p-16 space-y-10">
          <header className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-blue-700">Privacy Policy</h1>
            <p className="text-sm text-gray-500 mt-2">Last updated: April 21, 2025</p>
          </header>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-blue-600">1. Introduction</h2>
            <p>
              Welcome to <strong>Techno Billion AI</strong>, India&apos;s 1st Generative AI education platform. We are committed
              to safeguarding your privacy. This policy explains how we handle your personal information.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-blue-600">2. Information We Collect</h2>
            <p>We collect the following information directly from users:</p>
            <ul className="list-disc list-inside ml-4 space-y-1">
              <li>Full Name and Contact Details</li>
              <li>Email Address</li>
              <li>Educational Background and Preferences</li>
              <li>Usage Data and Platform Interactions</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-blue-600">3. How We Use Your Data</h2>
            <ul className="list-disc list-inside ml-4 space-y-1">
              <li>To provide personalized learning experiences</li>
              <li>To communicate updates, offers, and insights</li>
              <li>To improve platform functionality and content</li>
              <li>To comply with legal obligations</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-blue-600">4. Data Sharing</h2>
            <p>
              We do not sell your personal information. Your data may be shared with trusted service providers solely for
              operational and educational purposes, under strict confidentiality agreements.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-blue-600">5. Data Security</h2>
            <p>
              We use industry-standard encryption and secure protocols to protect your data. While we strive for full
              protection, no method is 100% secure.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-blue-600">6. Your Rights</h2>
            <p>
              You have the right to access, update, or delete your data. To do so, please contact us at
              <a href="mailto:support@technobillion.ai" className="text-blue-600 font-medium ml-1">support@technobillion.ai</a>.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-blue-600">7. Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy as needed. Please revisit this page periodically to stay informed of any
              changes.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-blue-600">8. Contact Us</h2>
            <p>
              If you have questions about this Privacy Policy, feel free to contact us at:
              <br />
              <span className="block mt-2">📧 <a href="mailto:support@technobillion.ai" className="text-blue-600 font-medium">support@technobillion.ai</a></span>
            </p>
          </section>
        </div>
      </div>
    </>
  );
};

export default PrivacyPolicy;